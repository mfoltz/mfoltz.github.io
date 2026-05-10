import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { ReferenceDetail } from "../../types/reference";
import { ReferenceDetailView } from "./ReferenceDetailView";

function renderWithoutLayoutWarning(render: () => string) {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    const first = String(args[0] ?? "");
    if (first.includes("useLayoutEffect does nothing on the server")) {
      return;
    }

    originalError(...args);
  };

  try {
    return render();
  } finally {
    console.error = originalError;
  }
}

function renderReferenceDetail(detail: ReferenceDetail) {
  return renderWithoutLayoutWarning(() =>
    renderToStaticMarkup(
      <MemoryRouter>
        <ReferenceDetailView detail={detail} />
      </MemoryRouter>
    )
  );
}

test("prefab component relations explain snapshot source and doc coverage", () => {
  const detail: ReferenceDetail = {
    section: "prefabs",
    kind: "prefab",
    slug: "char-test-vblood",
    title: "CHAR_Test_VBlood",
    path: "/prefabs/char-test-vblood",
    sourcePath: "content/prefabs/CHAR_Test_VBlood.md",
    excerpt: "Test prefab.",
    tags: ["CHAR_Test_VBlood"],
    stats: [
      { label: "Components", value: "2" },
      { label: "Component Docs", value: "1 / 2" }
    ],
    relationGroups: [
      {
        title: "Components",
        totalCount: 2,
        items: [
          { title: "ProjectM.AbilityBar_Server", path: "/components/abilitybar-server", description: "10 fields" },
          { title: "ProjectM.IdleInteractor", description: "3 fields" }
        ]
      },
      {
        title: "Collections",
        totalCount: 1,
        items: [{ title: "CHAR", path: "/prefabs/char", description: "Collection" }]
      }
    ]
  };

  const html = renderReferenceDetail(detail);

  assert.match(html, /2 components/);
  assert.doesNotMatch(html, /2 linked/);
  assert.match(html, /extracted prefab component snapshot/);
  assert.match(html, /Linked rows open generated component docs/);
  assert.match(html, /No component doc/);
  assert.match(html, /href="\/components\/abilitybar-server"/);
  assert.match(html, /Component Docs/);
  assert.match(html, /1 \/ 2/);
});
