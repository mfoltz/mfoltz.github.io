import { Form } from "react-router-dom";

export function RecordSearchForm() {
  return <Form action="/search" role="search" className="my-6">
    <label htmlFor="record-search" className="mb-2 block text-sm font-medium text-[var(--database-muted)]">Find a record</label>
    <div className="flex gap-2">
      <input id="record-search" name="q" type="search" placeholder="Name, prefab, component, or GUID" className="database-input min-w-0 flex-1 rounded-lg px-4 py-3" />
      <button type="submit" className="database-action-quiet rounded-lg px-4 py-3 font-medium">Search</button>
    </div>
  </Form>;
}
