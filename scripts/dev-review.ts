import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, openSync, writeFileSync } from "node:fs";
import { get } from "node:http";
import { createServer } from "node:net";
import { basename, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export interface DevReviewOptions {
  cleanStale: boolean;
  host: string;
  path: string;
  port: number;
}

export interface ReviewUrlOptions {
  host: string;
  path: string;
  port: number;
}

export interface ViteArgOptions {
  host: string;
  port: number;
}

interface ProcessInfo {
  commandLine: string;
  name: string;
  parentProcessId: number;
  processId: number;
}

interface PortOwner {
  commandLine?: string;
  name?: string;
  processId: number;
}

const defaultPath = "/db/recipes/recipe-armor-boots-t01-bone";
const defaultHost = "127.0.0.1";
const defaultPort = 5173;

function readValue(argv: string[], index: number, flag: string): string {
  const value = argv[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`${flag} requires a value.`);
  }

  return value;
}

function normalizePath(value: string): string {
  return value.startsWith("/") ? value : `/${value}`;
}

function parsePort(value: string): number {
  const port = Number(value);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid port '${value}'. Expected an integer from 1 to 65535.`);
  }

  return port;
}

export function parseDevReviewArgs(argv: string[]): DevReviewOptions {
  const options: DevReviewOptions = {
    cleanStale: false,
    host: defaultHost,
    path: defaultPath,
    port: defaultPort
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--clean-stale") {
      options.cleanStale = true;
      continue;
    }

    if (arg === "--path") {
      options.path = normalizePath(readValue(argv, index, arg));
      index += 1;
      continue;
    }

    if (arg.startsWith("--path=")) {
      options.path = normalizePath(arg.slice("--path=".length));
      continue;
    }

    if (arg === "--host") {
      options.host = readValue(argv, index, arg);
      index += 1;
      continue;
    }

    if (arg.startsWith("--host=")) {
      options.host = arg.slice("--host=".length);
      continue;
    }

    if (arg === "--port") {
      options.port = parsePort(readValue(argv, index, arg));
      index += 1;
      continue;
    }

    if (arg.startsWith("--port=")) {
      options.port = parsePort(arg.slice("--port=".length));
      continue;
    }

    throw new Error(`Unknown option '${arg}'.`);
  }

  return options;
}

export function buildReviewUrl(options: ReviewUrlOptions): string {
  return new URL(options.path, `http://${options.host}:${options.port}`).toString().replace(/\/$/, "");
}

export function buildViteArgs(options: ViteArgOptions): string[] {
  return ["--host", options.host, "--port", String(options.port), "--strictPort"];
}

function normalizeForMatch(value: string): string {
  return value.replace(/\\/g, "/").toLowerCase();
}

export function isRepoLocalDevServerCommand(commandLine: string, repoRoot: string): boolean {
  const normalizedCommand = normalizeForMatch(commandLine);
  const normalizedRoot = normalizeForMatch(repoRoot);
  return normalizedCommand.includes(normalizedRoot) && normalizedCommand.includes("vite") && normalizedCommand.includes("--port");
}

function isCurrentWindows(): boolean {
  return process.platform === "win32";
}

function listWindowsProcesses(): ProcessInfo[] {
  const command = "Get-CimInstance Win32_Process | Select-Object ProcessId,ParentProcessId,Name,CommandLine | ConvertTo-Json -Compress";
  const result = spawnSync("powershell.exe", ["-NoProfile", "-Command", command], { encoding: "utf8" });
  if (result.status !== 0 || !result.stdout.trim()) {
    return [];
  }

  const parsed = JSON.parse(result.stdout) as unknown;
  const entries = Array.isArray(parsed) ? parsed : [parsed];
  return entries.flatMap((entry) => {
    if (!entry || typeof entry !== "object") {
      return [];
    }

    const record = entry as Record<string, unknown>;
    const processId = Number(record.ProcessId);
    const parentProcessId = Number(record.ParentProcessId);
    const name = typeof record.Name === "string" ? record.Name : "";
    const commandLine = typeof record.CommandLine === "string" ? record.CommandLine : "";
    return Number.isInteger(processId) ? [{ commandLine, name, parentProcessId, processId }] : [];
  });
}

function getRepoLocalDevServers(repoRoot: string): ProcessInfo[] {
  if (!isCurrentWindows()) {
    return [];
  }

  return listWindowsProcesses().filter((entry) => isRepoLocalDevServerCommand(entry.commandLine, repoRoot));
}

function getWindowsPortOwners(port: number): PortOwner[] {
  const command = `Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue | Select-Object OwningProcess | Sort-Object OwningProcess -Unique | ConvertTo-Json -Compress`;
  const result = spawnSync("powershell.exe", ["-NoProfile", "-Command", command], { encoding: "utf8" });
  if (result.status !== 0 || !result.stdout.trim()) {
    return [];
  }

  const parsed = JSON.parse(result.stdout) as unknown;
  const entries = Array.isArray(parsed) ? parsed : [parsed];
  const ids = entries.flatMap((entry) => {
    if (!entry || typeof entry !== "object") {
      return [];
    }

    const processId = Number((entry as Record<string, unknown>).OwningProcess);
    return Number.isInteger(processId) ? [processId] : [];
  });
  const processes = listWindowsProcesses();

  return ids.map((processId) => {
    const process = processes.find((entry) => entry.processId === processId);
    return {
      commandLine: process?.commandLine,
      name: process?.name,
      processId
    };
  });
}

function getPortOwners(port: number): PortOwner[] {
  return isCurrentWindows() ? getWindowsPortOwners(port) : [];
}

function stopProcesses(processes: ProcessInfo[]): void {
  const ids = [...new Set(processes.map((entry) => entry.processId))];
  if (ids.length === 0) {
    return;
  }

  spawnSync("powershell.exe", ["-NoProfile", "-Command", `Stop-Process -Id ${ids.join(",")} -Force -ErrorAction SilentlyContinue`], {
    encoding: "utf8"
  });
}

async function isPortAvailable(host: string, port: number): Promise<boolean> {
  return await new Promise((resolveAvailable) => {
    const server = createServer();
    server.once("error", () => resolveAvailable(false));
    server.once("listening", () => {
      server.close(() => resolveAvailable(true));
    });
    server.listen(port, host);
  });
}

async function waitForHttpOk(url: string, timeoutMs = 20000): Promise<void> {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    const ok = await new Promise<boolean>((resolveOk) => {
      const request = get(url, (response) => {
        response.resume();
        resolveOk(Boolean(response.statusCode && response.statusCode >= 200 && response.statusCode < 500));
      });
      request.setTimeout(1000, () => {
        request.destroy();
        resolveOk(false);
      });
      request.on("error", () => resolveOk(false));
    });

    if (ok) {
      return;
    }

    await new Promise((resolveWait) => setTimeout(resolveWait, 250));
  }

  throw new Error(`Timed out waiting for ${url} to respond.`);
}

function writeHandoffFile(repoRoot: string, payload: Record<string, unknown>): string {
  const outputDir = join(repoRoot, ".codex-tmp", "dev-review");
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "latest.json");
  writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  return outputPath;
}

async function main(): Promise<void> {
  const repoRoot = resolve(".");
  const options = parseDevReviewArgs(process.argv.slice(2));
  const url = buildReviewUrl(options);

  if (options.cleanStale) {
    const staleServers = getRepoLocalDevServers(repoRoot);
    if (staleServers.length > 0) {
      console.log(`Stopping ${staleServers.length} repo-local Vite dev server process${staleServers.length === 1 ? "" : "es"}...`);
      stopProcesses(staleServers);
    }
  }

  if (!(await isPortAvailable(options.host, options.port))) {
    const repoServers = getRepoLocalDevServers(repoRoot);
    const matching = repoServers.map((entry) => `- ${entry.processId} ${entry.name}: ${entry.commandLine}`).join("\n");
    const owners = getPortOwners(options.port).map((entry) => `- ${entry.processId} ${entry.name ?? "unknown"}: ${entry.commandLine ?? "command line unavailable"}`).join("\n");
    console.error(`Port ${options.port} is already in use on ${options.host}.`);
    if (owners) {
      console.error("Port owner candidates:");
      console.error(owners);
    }
    if (matching) {
      console.error("Repo-local Vite dev server process candidates:");
      console.error(matching);
      console.error("Retry with: npm run dev:review -- --clean-stale");
    } else {
      console.error("No repo-local Vite dev server owner was identified. Not stopping an unknown process.");
    }
    process.exitCode = 1;
    return;
  }

  const logDir = join(repoRoot, ".codex-tmp", "dev-review");
  mkdirSync(logDir, { recursive: true });
  const stdoutPath = join(logDir, "vite.out.log");
  const stderrPath = join(logDir, "vite.err.log");
  const out = openSync(stdoutPath, "a");
  const err = openSync(stderrPath, "a");
  const viteArgs = ["vite", ...buildViteArgs(options)];
  const command = process.platform === "win32" ? "cmd.exe" : "npx";
  const args = process.platform === "win32" ? ["/d", "/s", "/c", "npx", ...viteArgs] : viteArgs;
  const child = spawn(command, args, {
    cwd: repoRoot,
    detached: true,
    stdio: ["ignore", out, err],
    windowsHide: true
  });
  child.unref();
  await waitForHttpOk(url);

  const handoffPath = writeHandoffFile(repoRoot, {
    host: options.host,
    logPaths: {
      stderr: stderrPath,
      stdout: stdoutPath
    },
    path: options.path,
    pid: child.pid,
    port: options.port,
    url
  });

  console.log(`Dev review server starting at ${url}`);
  console.log(`Handoff file: ${handoffPath}`);
  console.log(`Logs: ${stdoutPath}`);
  console.log("");
  console.log(`For Codex/browser-use, say: @browser-use open ${url}`);
  console.log("Do not paste the @browser-use command into the browser address bar; paste only the URL there.");
}

const thisFile = fileURLToPath(import.meta.url);
const entryFile = process.argv[1] ? resolve(process.argv[1]) : "";
if (entryFile && basename(thisFile) === basename(entryFile) && pathToFileURL(entryFile).href === import.meta.url) {
  void main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
