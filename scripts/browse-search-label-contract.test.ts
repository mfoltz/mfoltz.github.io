import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("./browse-visual-check.ts", import.meta.url), "utf8");
const expected = ["456 results \u00b7 1 section", "0 results \u00b7 0 sections"];

function requireExactResultLabels(text: string) {
  const parsed = ts.createSourceFile("browse-visual-check.ts", text, ts.ScriptTarget.Latest, true);
  const labels: string[] = [];
  function visit(node: ts.Node) {
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression) &&
        node.expression.name.text === "getByText" && node.arguments[0] &&
        ts.isStringLiteral(node.arguments[0]) && /^\d+ results /.test(node.arguments[0].text)) {
      labels.push(node.arguments[0].text);
    }
    ts.forEachChild(node, visit);
  }
  visit(parsed);
  assert.deepEqual(labels, expected, "Browse assertions retain the exact recorded result labels");
}

test("browse result assertions preserve both UTF-8 middle-dot labels", () => {
  requireExactResultLabels(source);
});

test("either extra-character encoding mutation fails the result-label contract", () => {
  for (const label of expected) {
    const mutated = source.replace(label, label.replace("\u00b7", "\u00c2\u00b7"));
    assert.notEqual(mutated, source, "Mutation must affect the actual harness literal");
    assert.throws(() => requireExactResultLabels(mutated), /exact recorded result labels/);
  }
});
