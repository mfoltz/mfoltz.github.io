import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { transformSync } from "esbuild";
import { chromium } from "playwright";

type ReadinessStatus = "ready" | "blocked" | "warning";

interface ReadinessCheck {
  id: string;
  label: string;
  status: ReadinessStatus;
  note: string;
  command?: string;
}

const sandboxSafeCommands = ["npm run test:visual-review", "npm run validate:data", "npm run qa:ingestion-readiness"];
const approvedSpawnEnabledScripts = [
  "npm run qa:spawn-readiness",
  "npm run build",
  "npm run verify",
  "npm run visual:compare",
  "npm run visual:baseline",
  "npm run visual:compare:capture",
  "npm run visual:baseline:capture",
  "npm run visual:compare:ci"
];
const doNotApproveBroadly = ["npm", "node", "npx", "pwsh", "python", "vite", "playwright", "chromium"];

function formatError(error: unknown): string {
  if (error instanceof Error) {
    const code = "code" in error && typeof error.code === "string" ? ` ${error.code}` : "";
    const syscall = "syscall" in error && typeof error.syscall === "string" ? ` during ${error.syscall}` : "";
    return `${error.message}${code}${syscall}`;
  }

  return String(error);
}

function statusMark(status: ReadinessStatus): string {
  if (status === "ready") {
    return "[ready]";
  }

  if (status === "warning") {
    return "[warn]";
  }

  return "[blocked]";
}

function checkNodeChildProcess(): ReadinessCheck {
  try {
    const result = spawnSync(process.execPath, ["--version"], {
      encoding: "utf8",
      stdio: "pipe"
    });

    if (result.error) {
      return {
        id: "node-child-process",
        label: "Node child process spawn",
        status: "blocked",
        note: formatError(result.error),
        command: "node --version"
      };
    }

    if (result.status !== 0) {
      return {
        id: "node-child-process",
        label: "Node child process spawn",
        status: "blocked",
        note: `node exited with status ${result.status}: ${(result.stderr ?? "").trim()}`,
        command: "node --version"
      };
    }

    return {
      id: "node-child-process",
      label: "Node child process spawn",
      status: "ready",
      note: (result.stdout ?? "").trim() || "node child process completed",
      command: "node --version"
    };
  } catch (error) {
    return {
      id: "node-child-process",
      label: "Node child process spawn",
      status: "blocked",
      note: formatError(error),
      command: "node --version"
    };
  }
}

function checkEsbuildTransform(): ReadinessCheck {
  try {
    transformSync("const answer: number = 42;", {
      loader: "ts"
    });

    return {
      id: "esbuild-transform",
      label: "esbuild transform service",
      status: "ready",
      note: "esbuild transform completed"
    };
  } catch (error) {
    return {
      id: "esbuild-transform",
      label: "esbuild transform service",
      status: "blocked",
      note: formatError(error),
      command: "vite build / tsx"
    };
  }
}

async function checkPlaywrightLaunch(): Promise<ReadinessCheck> {
  let browser;

  try {
    browser = await chromium.launch({ headless: true });
    return {
      id: "playwright-chromium",
      label: "Playwright Chromium launch",
      status: "ready",
      note: "Chromium launched and closed"
    };
  } catch (error) {
    return {
      id: "playwright-chromium",
      label: "Playwright Chromium launch",
      status: "blocked",
      note: formatError(error),
      command: "npm run visual:compare"
    };
  } finally {
    await browser?.close().catch(() => undefined);
  }
}

function checkDistOutput(): ReadinessCheck {
  const distDir = resolve(process.cwd(), "dist");
  const indexPath = join(distDir, "index.html");

  if (existsSync(indexPath)) {
    return {
      id: "dist-output",
      label: "Existing dist output",
      status: "ready",
      note: indexPath,
      command: "npm run visual:compare:capture"
    };
  }

  return {
    id: "dist-output",
    label: "Existing dist output",
    status: "warning",
    note: "dist/index.html is missing; capture-only visual commands need a prior successful build.",
    command: "npm run build"
  };
}

function summarize(checks: ReadinessCheck[]) {
  const blocked = checks.filter((check) => check.status === "blocked");
  const warnings = checks.filter((check) => check.status === "warning");

  if (blocked.length === 0) {
    return warnings.length === 0
      ? "Native spawn lanes look ready for verify/build/visual review."
      : "Native spawn lanes look usable, but capture-only commands need existing dist output.";
  }

  return "One or more native spawn lanes are blocked here. Use sandbox-safe checks, then request approval only for the exact repo-owned npm script you need.";
}

function printCommandList(title: string, commands: string[]) {
  console.log(`${title}:`);
  for (const command of commands) {
    console.log(`- ${command}`);
  }
}

async function main() {
  const checks: ReadinessCheck[] = [
    checkNodeChildProcess(),
    checkEsbuildTransform(),
    await checkPlaywrightLaunch(),
    checkDistOutput()
  ];

  console.log("Spawn readiness");
  console.log("");
  for (const check of checks) {
    console.log(`- ${statusMark(check.status)} ${check.label}: ${check.note}`);
    if (check.command) {
      console.log(`  command: ${check.command}`);
    }
  }

  console.log("");
  console.log(`Summary: ${summarize(checks)}`);
  console.log("");
  printCommandList("Sandbox-safe repo checks", sandboxSafeCommands);
  console.log("");
  printCommandList("Approved spawn-enabled repo scripts", approvedSpawnEnabledScripts);
  console.log("");
  printCommandList("Do not request broad persistent approval for", doNotApproveBroadly);
  console.log("");
  console.log("Codex escalation rule: request approval for the exact npm script, and suggest only that exact prefix rule.");
}

void main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
