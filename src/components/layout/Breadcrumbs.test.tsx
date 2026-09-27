import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import { DbDetailPage } from "../../pages/DbDetailPage";

test("breadcrumbs override only the current label and preserve parent links", () => {
  const html = renderToStaticMarkup(<MemoryRouter initialEntries={["/db/npcs/char-clive"]}><Breadcrumbs currentLabel="Clive the Firestarter" /></MemoryRouter>);
  assert.match(html, /href="\/"/);
  assert.match(html, /href="\/db"/);
  assert.match(html, /href="\/db\/npcs"/);
  assert.match(html, /aria-current="page"[^>]*>Clive the Firestarter</);
  assert.doesNotMatch(html, /Char Clive|overflow-x-auto|min-w-max|whitespace-nowrap/);
});

test("a loading detail uses the route-derived breadcrumb fallback", () => {
  const html = renderToStaticMarkup(<MemoryRouter initialEntries={["/db/items/item-blood-essence-t01"]}><Routes><Route path="/db/:section/:slug" element={<DbDetailPage />} /></Routes></MemoryRouter>);
  assert.match(html, /Loading entity detail/);
  assert.match(html, /aria-current="page"[^>]*>Item Blood Essence T01</);
  assert.equal((html.match(/aria-label="Breadcrumbs"/g) ?? []).length, 1);
});
