import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { DbArtwork } from "../components/db/DbArtwork";
import { BrowseControlStrip } from "../components/common/BrowseControlStrip";
import { ItemIndexRow } from "./DbListPage";
import { SearchResultRow } from "./SearchPage";
import type { DbIndexEntry } from "../types/db";

const item: DbIndexEntry = {
  title: "Blood Essence", slug: "blood-essence", path: "/db/items/blood-essence",
  categories: [], itemType: "Stackable", maxAmount: 500, excerpt: "Stackable item; max stack 500."
};
function render(element: React.ReactElement) {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (!String(args[0]).includes("useLayoutEffect does nothing on the server")) originalError(...args);
  };
  try {
    return renderToStaticMarkup(<MemoryRouter>{element}</MemoryRouter>);
  } finally {
    console.error = originalError;
  }
}

test("artwork is optional and portraits take precedence over an existing sprite", () => {
  assert.equal(renderToStaticMarkup(<DbArtwork />), "");
  const html = renderToStaticMarkup(<DbArtwork icon="/sprite.png" portraitAssetPath="/portrait.png" />);
  assert.match(html, /src="\/portrait.png"/);
  assert.doesNotMatch(html, /sprite.png|database-avatar-well/);
});

test("item rows put the title first and remove only summary-covered metadata", () => {
  const html = render(<ItemIndexRow entry={{ ...item, icon: "/blood.png", tier: "Tier 1" }} />);
  assert.ok(html.indexOf("Blood Essence") < html.indexOf("Tier 1"));
  assert.ok(html.indexOf("Blood Essence") < html.indexOf('src="/blood.png"'));
  assert.doesNotMatch(html, />Stack 500<|>Stackable<|database-avatar-well/);
  const withoutSummary = render(<ItemIndexRow entry={{ ...item, excerpt: "", maxAmount: 0 }} />);
  assert.match(withoutSummary, />Stack 0</);
  assert.match(withoutSummary, />Stackable</);
  assert.doesNotMatch(withoutSummary, /<img/);
});

test("database search retains meaningful badges and reference search retains routes", () => {
  const entry = { ...item, section: "items", kind: "item", tags: [], badges: ["Database", "Items", "item", "Tier 1", "Fake Item"], icon: "/blood.png" };
  const html = render(<SearchResultRow entry={entry} query="" />);
  assert.match(html, /Tier 1/);
  assert.match(html, /Fake Item/);
  assert.match(html, /src="\/blood.png"/);
  assert.doesNotMatch(html, />Database<|>Items<|>item<|>\/db\/items\/blood-essence</);
  const reference = render(<SearchResultRow entry={{ ...entry, section: "prefabs", path: "/prefabs/raw-prefab" }} query="" />);
  assert.match(reference, />Reference</);
  assert.match(reference, />\/prefabs\/raw-prefab</);
});

test("detailed filters are opt-in on desktop and absent filters have no disclosure", () => {
  const html = renderToStaticMarkup(<BrowseControlStrip metrics={[]} discloseOnDesktop primaryControls={<button>Items</button>} filterSlot={<button>Tier</button>} />);
  assert.match(html, /aria-expanded="false"/);
  assert.ok(html.indexOf(">Items<") < html.indexOf("Show filters"));
  assert.doesNotMatch(html, /lg:flex|lg:hidden/);
  assert.doesNotMatch(renderToStaticMarkup(<BrowseControlStrip metrics={[]} discloseOnDesktop />), /Show filters/);
  assert.match(renderToStaticMarkup(<BrowseControlStrip metrics={[]} filterSlot={<button>Reference kind</button>} />), /hidden lg:flex/);
});
