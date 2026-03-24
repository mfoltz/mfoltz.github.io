import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

interface CoverageMetric {
  total: number;
  matched: number;
  coveragePct: number;
  signal?: string;
  lowSignalExcluded?: number;
}

interface DomainThreshold {
  minMatchedCount?: number;
  minCoveragePct?: number;
  warnMatchedCount?: number;
  warnCoveragePct?: number;
}

interface ThresholdConfig {
  domains: Record<string, DomainThreshold>;
}

async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readFile(filePath, "utf8")) as T;
}

function formatPct(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const coveragePath = path.join(repoRoot, "data", "enrichment", "enrichment-coverage.json");
  const thresholdsPath = path.join(repoRoot, "data", "enrichment", "coverage-thresholds.json");

  const [coverage, thresholds] = await Promise.all([
    readJson<Record<string, CoverageMetric>>(coveragePath),
    readJson<ThresholdConfig>(thresholdsPath)
  ]);

  const failures: string[] = [];
  const warnings: string[] = [];

  for (const [domain, rules] of Object.entries(thresholds.domains)) {
    const metric = coverage[domain];
    if (!metric) {
      failures.push(`${domain}: missing metric in enrichment-coverage.json`);
      continue;
    }

    if (rules.minMatchedCount !== undefined && metric.matched < rules.minMatchedCount) {
      failures.push(`${domain}: matched ${metric.matched} is below floor ${rules.minMatchedCount}`);
    }
    if (rules.minCoveragePct !== undefined && metric.coveragePct < rules.minCoveragePct) {
      failures.push(`${domain}: coverage ${formatPct(metric.coveragePct)} is below floor ${formatPct(rules.minCoveragePct)}`);
    }

    if (rules.warnMatchedCount !== undefined && metric.matched < rules.warnMatchedCount) {
      warnings.push(`${domain}: matched ${metric.matched} is below target ${rules.warnMatchedCount}`);
    }
    if (rules.warnCoveragePct !== undefined && metric.coveragePct < rules.warnCoveragePct) {
      warnings.push(`${domain}: coverage ${formatPct(metric.coveragePct)} is below target ${formatPct(rules.warnCoveragePct)}`);
    }

    if (metric.signal && metric.signal !== "high-signal") {
      failures.push(`${domain}: unexpected signal value '${metric.signal}' (expected 'high-signal')`);
    }

    if (metric.lowSignalExcluded !== undefined && metric.lowSignalExcluded > 0) {
      warnings.push(`${domain}: ${metric.lowSignalExcluded} low-signal row(s) excluded from matched coverage.`);
    }
  }

  if (warnings.length > 0) {
    console.warn("Enrichment threshold warnings:");
    for (const warning of warnings) {
      console.warn(`- ${warning}`);
    }
  }

  if (failures.length > 0) {
    throw new Error(`Enrichment thresholds failed:\n${failures.map((failure) => `- ${failure}`).join("\n")}`);
  }

  console.log("Enrichment threshold floors passed.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
