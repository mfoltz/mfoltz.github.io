import { createBrowserRouter } from "react-router-dom";
import { SiteShell } from "./components/layout/SiteShell";
import { dbSections } from "./config/sections";
import { DbDetailPage } from "./pages/DbDetailPage";
import { DbListPage } from "./pages/DbListPage";
import { HomePage } from "./pages/HomePage";
import { MarkdownDetailPage } from "./pages/MarkdownDetailPage";
import { MarkdownListPage } from "./pages/MarkdownListPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SearchPage } from "./pages/SearchPage";

const dbSectionRoutes = dbSections.flatMap((section) => [
  { path: `db/${section}`, element: <DbListPage section={section} /> },
  { path: `db/${section}/:slug`, element: <DbDetailPage section={section} /> }
]);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteShell />,
    children: [
      { index: true, element: <HomePage /> },
      ...dbSectionRoutes,
      { path: "prefabs", element: <MarkdownListPage section="prefabs" /> },
      { path: "prefabs/:slug", element: <MarkdownDetailPage section="prefabs" /> },
      { path: "systems", element: <MarkdownListPage section="systems" /> },
      { path: "systems/:slug", element: <MarkdownDetailPage section="systems" /> },
      { path: "queries", element: <MarkdownListPage section="queries" /> },
      { path: "queries/:slug", element: <MarkdownDetailPage section="queries" /> },
      { path: "search", element: <SearchPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);
