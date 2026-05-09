import assert from "node:assert/strict";
import test from "node:test";
import { buildReviewUrl, buildViteArgs, isRepoLocalDevServerCommand, parseDevReviewArgs } from "./dev-review";

test("parseDevReviewArgs applies recipe route and strict local defaults", () => {
  assert.deepEqual(parseDevReviewArgs([]), {
    cleanStale: false,
    host: "127.0.0.1",
    path: "/db/recipes/recipe-armor-boots-t01-bone",
    port: 5173
  });
});

test("parseDevReviewArgs accepts path host port and clean-stale options", () => {
  assert.deepEqual(parseDevReviewArgs(["--clean-stale", "--path", "/db/items/item-blood-essence-t01", "--host", "localhost", "--port", "5180"]), {
    cleanStale: true,
    host: "localhost",
    path: "/db/items/item-blood-essence-t01",
    port: 5180
  });
});

test("buildReviewUrl preserves the selected local route", () => {
  assert.equal(buildReviewUrl({ host: "127.0.0.1", path: "/db/recipes/recipe-armor-boots-t01-bone", port: 5173 }), "http://127.0.0.1:5173/db/recipes/recipe-armor-boots-t01-bone");
});

test("buildViteArgs always includes strictPort", () => {
  assert.deepEqual(buildViteArgs({ host: "127.0.0.1", port: 5173 }), ["--host", "127.0.0.1", "--port", "5173", "--strictPort"]);
});

test("isRepoLocalDevServerCommand matches only repo-local Vite dev commands", () => {
  const repoRoot = "C:\\Users\\mitch\\source\\Repos\\mfoltz.github.io";
  assert.equal(
    isRepoLocalDevServerCommand(`"node" "${repoRoot}\\node_modules\\.bin\\..\\vite\\bin\\vite.js" --host 127.0.0.1 --port 5173`, repoRoot),
    true
  );
  assert.equal(isRepoLocalDevServerCommand(`"node" "C:\\other\\node_modules\\vite\\bin\\vite.js" --host 127.0.0.1 --port 5173`, repoRoot), false);
  assert.equal(isRepoLocalDevServerCommand(`"node" "${repoRoot}\\scripts\\build-search-index.ts"`, repoRoot), false);
});
