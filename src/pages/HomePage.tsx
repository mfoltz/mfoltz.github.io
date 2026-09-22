import { DatabaseDirectory, ReferenceDirectory } from "../components/common/DatabaseDirectory";
import { RecordSearchForm } from "../components/common/RecordSearchForm";
import databaseSplashMark from "../../static/database-assets/vrdb.png";

export function HomePage() {
  return <div className="mx-auto max-w-6xl pb-8">
    <header className="mx-auto max-w-2xl text-center">
      <h1><img src={databaseSplashMark} alt="V Rising Data Base" className="mx-auto aspect-[1280/674] w-full max-w-[24rem] object-contain" /></h1>
      <p className="mt-2 text-base text-[var(--database-muted)]">Gameplay data and technical references for V Rising.</p>
    </header>
    <div className="mx-auto mb-8 max-w-2xl"><RecordSearchForm /></div>
    <DatabaseDirectory />
    <ReferenceDirectory />
    <p className="mt-8 text-sm text-[var(--database-muted)]">For guides and community documentation, visit the <a href="https://wiki.vrisingmods.com/" className="text-[var(--database-accent-soft)] underline underline-offset-4">Community Wiki</a>.</p>
  </div>;
}
