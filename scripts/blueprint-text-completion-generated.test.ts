import assert from "node:assert/strict";
import test from "node:test";
import { completionExpectedCounts, completionActivationCount } from "./blueprint-text-completion";
import { validateGeneratedCompletion } from "./blueprint-text-completion-generated";
test("independently owned fields reach exact Blueprint, related and source destinations", async () => {
  const result = await validateGeneratedCompletion(process.cwd());
  for (const key of ["signals", "names", "descriptions", "pairs"] as const)
    assert.equal(result[key], completionExpectedCounts[key]);
  if (completionActivationCount === 270)
    assert.deepEqual(result, { signals: 1197, names: 1172, descriptions: 1180, pairs: 1155,
      materialLabels: 341, bookLabels: 109, itemOwners: 75 });
});
