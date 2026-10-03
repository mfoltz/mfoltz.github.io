import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { DbArtwork } from "../components/db/DbArtwork";
import { BrowseControlStrip } from "../components/common/BrowseControlStrip";
import { ItemIndexRow, NpcIndexRow } from "./DbListPage";
import { DbIndexCard, DbReferenceList } from "../components/db/DbCards";
import { hasUsefulDbFacet } from "../config/dbBrowse";
import { itemRowSummary } from "../lib/dbPresentation";
import { SearchResultRow } from "./SearchPage";
import type { DbIndexEntry, DbRelatedEntityRef } from "../types/db";

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

test("related cards preserve complete names, identifiers, zero values and exact destinations in order", () => {
  const refs: DbRelatedEntityRef[] = [
    { title: "A Very Long UnbrokenReferenceTitle", prefab: "Item_Long_Unbroken_Prefab_Identifier", guid: 0,
      amount: 0, path: "/db/items/exact-zero", icon: "/existing.png" },
    { title: "Negative GUID", prefab: "Recipe_Negative", guid: -2125962345, path: "/db/recipes/exact-negative" }
  ];
  const html = render(<DbReferenceList items={refs} emptyLabel="No records" />);
  for (const ref of refs) {
    assert.ok(html.includes(ref.title));
    assert.ok(html.includes(ref.prefab));
    assert.ok(html.includes(`href="${ref.path}"`));
  }
  assert.match(html, /data-db-reference-amount=""><span[^>]*>0x<\/span>/);
  assert.match(html, /data-db-reference-guid=""[^>]*>0<\/div>/);
  assert.match(html, /data-db-reference-guid=""[^>]*>-2125962345<\/div>/);
  assert.ok(html.indexOf(refs[0].title) < html.indexOf(refs[1].title));
  assert.equal((html.match(/data-db-reference-amount=/g) ?? []).length, 1);
  assert.equal((html.match(/<img /g) ?? []).length, 1);
});

test("related cards omit absent metadata and artwork without inventing links", () => {
  const html = render(<DbReferenceList items={[{ title: "Unknown record", prefab: "Unknown_Prefab", guid: null }]} emptyLabel="No records" />);
  assert.match(html, /Unknown record/);
  assert.match(html, /Unknown_Prefab/);
  assert.doesNotMatch(html, /<a |<img |data-db-reference-metadata|data-db-reference-guid|data-db-reference-amount/);
  const quantityOnly = render(<DbReferenceList items={[{ title: "Quantity only", prefab: "Only_Quantity", guid: null, amount: 2 }]} emptyLabel="No records" />);
  assert.match(quantityOnly, />2x<\/span>/);
  assert.doesNotMatch(quantityOnly, /data-db-reference-guid/);
  const empty = render(<DbReferenceList items={[]} emptyLabel="No recorded relation" />);
  assert.match(empty, /No recorded relation/);
  assert.doesNotMatch(empty, /<ul|<a |data-db-reference/);
});

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

test("only complete item singleton boilerplate is suppressed without metadata reappearing", () => {
  for (const kind of ["Tech", "None"]) {
    for (const excerpt of [`${kind} item, max stack 1.`, `  ${kind.toUpperCase()} item, max stack 1  `]) {
      const entry = { ...item, excerpt, itemType: kind, maxAmount: 1, description: "Do not substitute this description." };
      const html = render(<ItemIndexRow entry={entry} />);
      assert.doesNotMatch(html, /<p|>Stack 1<|>Tech<|>None<|substitute/);
      const search = { ...entry, kind: "item", section: "items", tags: [] };
      assert.doesNotMatch(render(<SearchResultRow entry={search} query="" />), /<p|substitute/);
      assert.equal(entry.excerpt, excerpt, "Indexed source text is not mutated");
      assert.match(render(<SearchResultRow entry={{ ...search, section: "prefabs" }} query="" />), /max stack 1/);
    }
  }
  for (const excerpt of ["Tech item, max stack 2.", "Tech item, max stack 1. Unlocks a recipe.", "None item, max stack 1. Activates an effect.", "Fake Item, max stack 1.", "Jewel item, max stack 1. Associated with Aftershock."]) {
    assert.equal(itemRowSummary(excerpt), excerpt);
    assert.match(render(<ItemIndexRow entry={{ ...item, excerpt }} />), /<p/);
    assert.match(render(<SearchResultRow entry={{ ...item, excerpt, section: "items", kind: "item", tags: [] }} query="" />), /<p/);
  }
  assert.equal(itemRowSummary(undefined), undefined);
  assert.doesNotMatch(render(<ItemIndexRow entry={{ ...item, excerpt: "" }} />), /<p/);
});

test("NPC rows show V Blood status once while retaining level, faction, servant and other blood types", () => {
  const npc = { ...item, title: "Clive", npcKind: "V Blood Boss", npcFaction: "Bandits", isVBlood: true, isServant: true, npcLevel: 0, excerpt: "" };
  for (const npcBloodType of ["VBlood", "V Blood"]) {
    const html = render(<NpcIndexRow entry={{ ...npc, npcBloodType }} />);
    assert.match(html, />V Blood Boss</);
    assert.doesNotMatch(html, />V Blood</);
    assert.match(html, />Level 0</);
    assert.match(html, />Bandits</);
    assert.match(html, />Servant</);
  }
  const carrier = render(<NpcIndexRow entry={{ ...npc, npcKind: "VBlood", npcBloodType: "V Blood" }} />);
  assert.equal((carrier.match(/>V Blood</g) ?? []).length, 1);
  const fallback = render(<NpcIndexRow entry={{ ...npc, npcKind: "Human" }} />);
  assert.equal((fallback.match(/>V Blood</g) ?? []).length, 1);
  assert.match(render(<NpcIndexRow entry={{ ...npc, npcBloodType: "Warrior" }} />), />Warrior Blood</);
});

test("archive rows omit section badges while preserving distinct facts and counting only unique overflow", () => {
  for (const [section, categories] of Object.entries({ blueprints: ["TM", "Blueprint"], quests: ["Journal"], buffs: ["AB", "Debuff", "Parallel"], itemsets: ["Item", "Set"] })) {
    const html = render(<DbIndexCard section={section} entry={{ ...item, categories }} />);
    assert.doesNotMatch(html, new RegExp(`>${section}<`, "i"));
    for (const category of categories) assert.ok(html.includes(`>${category}<`));
  }
  const html = render(<DbIndexCard section="buffs" entry={{ ...item, tier: "Tier 1", recordKind: "Debuff", categories: ["Debuff", "Parallel", "Parallel", "Magic", "Magic"] }} />);
  assert.match(html, />Tier 1</);
  assert.equal((html.match(/>Debuff</g) ?? []).length, 1);
  assert.match(html, />Parallel</);
  assert.match(html, />\+1</);
  const empty = render(<DbIndexCard section="quests" entry={{ ...item, categories: [], excerpt: "" }} />);
  assert.doesNotMatch(empty, /database-pill-|<p|mt-2 flex/);
});

test("facets retain narrowing choices and active selections, including useful singleton values", () => {
  assert.equal(hasUsefulDbFacet("all", 163, [{ count: 163 }]), false);
  assert.equal(hasUsefulDbFacet("Journal", 163, [{ count: 163 }]), true);
  assert.equal(hasUsefulDbFacet("all", 10, [{ count: 8 }]), true);
  assert.equal(hasUsefulDbFacet("all", 10, [{ count: 5 }, { count: 5 }]), true);
  assert.equal(hasUsefulDbFacet("all", 0, []), false);
  assert.equal(hasUsefulDbFacet("all", 0, [{ count: 0 }]), false);
  assert.equal(hasUsefulDbFacet("Journal", 0, []), true);
});

test("compact search controls retain Clear without a repeated active-query chip", () => {
  for (const compact of [false, true]) {
    const html = renderToStaticMarkup(<BrowseControlStrip compact={compact} discloseOnDesktop metrics={[{ label: "456 results · 1 section" }]} onClear={() => {}} clearLabel="Clear search" filterSlot={<button>Items</button>} />);
    assert.match(html, />Clear search</);
    assert.match(html, /456 results · 1 section/);
    assert.equal((html.match(/>Show filters</g) ?? []).length, 1);
    assert.doesNotMatch(html, />Active</);
  }
  const idle = renderToStaticMarkup(<BrowseControlStrip compact discloseOnDesktop metrics={[]} />);
  assert.doesNotMatch(idle, /Clear filters|Show filters/);
});
