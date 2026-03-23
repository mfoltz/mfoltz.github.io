import { createBrowserRouter } from "react-router-dom";
import { SiteShell } from "./components/layout/SiteShell";
import { dbSections, referenceSections } from "./config/sections";
import { DbDetailPage } from "./pages/DbDetailPage";
import { DbListPage } from "./pages/DbListPage";
import { HomePage } from "./pages/HomePage";
import { LegacyReferenceRedirectPage } from "./pages/LegacyReferenceRedirectPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ReferenceDetailPage } from "./pages/ReferenceDetailPage";
import { ReferenceListPage } from "./pages/ReferenceListPage";
import { SearchPage } from "./pages/SearchPage";

const dbSectionRoutes = dbSections.flatMap((section) => [
  { path: `db/${section}`, element: <DbListPage section={section} /> },
  { path: `db/${section}/:slug`, element: <DbDetailPage section={section} /> }
]);

const referenceRoutes = referenceSections.flatMap((section) => [
  { path: section, element: <ReferenceListPage section={section} /> },
  { path: `${section}/:slug`, element: <ReferenceDetailPage section={section} /> },
  { path: `${section}/*`, element: <LegacyReferenceRedirectPage /> }
]);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteShell />,
    children: [
      { index: true, element: <HomePage /> },
      ...referenceRoutes,
      ...dbSectionRoutes,
      { path: "search", element: <SearchPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);
