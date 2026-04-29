import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import { SearchPage } from "../../pages/SearchPage";

function ShellHarness() {
  return (
    <div data-shell-harness="true">
      <Outlet />
    </div>
  );
}

function renderShell(path: string, searchElement = <div>Search placeholder</div>) {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    const first = String(args[0] ?? "");
    if (first.includes("useLayoutEffect does nothing on the server")) {
      return;
    }

    originalError(...args);
  };

  try {
    return renderToStaticMarkup(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/" element={<ShellHarness />}>
            <Route index element={<div>Home placeholder</div>} />
            <Route path="search" element={searchElement} />
            <Route path="db/:section" element={<div>Database list placeholder</div>} />
            <Route path="db/:section/:slug" element={<div>Database detail placeholder</div>} />
            <Route path="prefabs" element={<div>Reference placeholder</div>} />
            <Route path="components" element={<div>Components placeholder</div>} />
            <Route path="systems" element={<div>Systems placeholder</div>} />
            <Route path="queries" element={<div>Queries placeholder</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  } finally {
    console.error = originalError;
  }
}

test("participating routes no longer render a global steering surface", () => {
  assert.doesNotMatch(renderShell("/"), /data-steering-band="true"/);
  assert.doesNotMatch(renderShell("/db/abilities"), /data-steering-band="true"/);
  assert.doesNotMatch(renderShell("/db/items/item-blood-essence-t01"), /data-steering-band="true"/);
  assert.doesNotMatch(renderShell("/search"), /data-steering-band="true"/);
  assert.doesNotMatch(renderShell("/prefabs"), /data-steering-band="true"/);
  assert.doesNotMatch(renderShell("/"), /Operator surface/);
});

test("search keeps scope filters page-owned after the steering trim", () => {
  const html = renderShell("/search?q=blood&scope=db", <SearchPage />);

  assert.match(html, /All Results/);
  assert.match(html, /Reference/);
  assert.match(html, /Database/);
  assert.doesNotMatch(html, /aria-label="(Frame|Mode|Horizon|Noise Gate|Timebox|Guidance)"/);
  assert.doesNotMatch(html, /Operator surface/);
});
