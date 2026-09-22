import { Link } from "react-router-dom";
import { dbSections, getDbSectionLabel, getReferenceSectionLabel, referenceSections } from "../../config/sections";

const descriptions: Record<string, string> = {
  items: "Equipment, resources, consumables, and inventory.",
  recipes: "Outputs, ingredients, crafting times, and stations.",
  npcs: "Units, V Blood bosses, drops, and blood types.",
  abilities: "Spells, weapon skills, schools, and mechanics.",
  workstations: "Station roles, matching floors, servant bonuses, recipes, and outputs.",
  blueprints: "Building records and their prefab references.",
  quests: "Journal entries, requirements, and rewards.",
  buffs: "Buff records and component references.",
  itemsets: "Item set records and source definitions."
};

export function DatabaseDirectory() {
  return <section aria-labelledby="gameplay-heading">
    <h2 id="gameplay-heading" className="mb-4 text-xl font-semibold">Gameplay data</h2>
    <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
      {dbSections.map(section => <Link key={section} to={`/db/${section}`} className="directory-link border-t border-[var(--database-divider)] py-4">
        <h3 className="font-semibold text-[var(--database-ink)]">{getDbSectionLabel(section)} <span aria-hidden="true" className="float-right text-[var(--database-accent-soft)]">↗</span></h3>
        <p className="mt-1 text-sm leading-6 text-[var(--database-muted)]">{descriptions[section]}</p>
      </Link>)}
    </div>
  </section>;
}

export function ReferenceDirectory() {
  return <section aria-labelledby="reference-heading" className="mt-8 border-t border-[var(--database-divider)] pt-6">
    <h2 id="reference-heading" className="text-xl font-semibold">Technical reference</h2>
    <p className="mt-2 text-sm text-[var(--database-muted)]">Read prefab values and follow their component, system, and query definitions.</p>
    <div className="mt-4 flex flex-wrap gap-3">
      {referenceSections.map(section => <Link key={section} to={`/${section}`} className="database-action-quiet rounded-lg px-4 py-2 text-sm">{getReferenceSectionLabel(section)}</Link>)}
    </div>
  </section>;
}
