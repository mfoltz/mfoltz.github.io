export const referenceSections = ["prefabs", "components", "systems", "queries"] as const;
export type ReferenceSection = (typeof referenceSections)[number];

export interface ReferenceFieldRow {
  label: string;
  value: string;
  monospace?: boolean;
  path?: string;
  copyValue?: string;
}

export interface ReferenceDetailSection {
  title: string;
  rows: ReferenceFieldRow[];
}

export interface ReferenceRelation {
  title: string;
  path?: string;
  description?: string;
  badges?: string[];
}

export interface ReferenceRelationGroup {
  title: string;
  items: ReferenceRelation[];
  emptyLabel?: string;
  totalCount?: number;
}

export interface ReferenceCodeBlock {
  title: string;
  language?: string;
  value: string;
}

export interface ReferenceIndexEntry {
  section: ReferenceSection;
  kind: string;
  slug: string;
  title: string;
  path: string;
  excerpt: string;
  tags: string[];
  badges?: string[];
}

export interface ReferenceDetail extends ReferenceIndexEntry {
  summary?: string;
  eyebrow?: string;
  sourcePath: string;
  legacyPaths?: string[];
  stats?: ReferenceFieldRow[];
  detailSections?: ReferenceDetailSection[];
  relationGroups?: ReferenceRelationGroup[];
  codeBlocks?: ReferenceCodeBlock[];
}
