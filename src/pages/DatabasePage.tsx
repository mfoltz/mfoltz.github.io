import { DatabaseDirectory, ReferenceDirectory } from "../components/common/DatabaseDirectory";
import { RecordSearchForm } from "../components/common/RecordSearchForm";
import { SectionHeader } from "../components/common/States";

export function DatabasePage() {
  return <div className="mx-auto max-w-6xl">
    <SectionHeader title="Database" subtitle="Browse gameplay records or find an exact name or GUID." />
    <RecordSearchForm />
    <DatabaseDirectory />
    <ReferenceDirectory />
  </div>;
}
