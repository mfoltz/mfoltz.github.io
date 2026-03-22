export interface ContentIndexEntry {
  slug: string;
  title: string;
  section: string;
  path: string;
  source: string;
  tags: string[];
  excerpt: string;
  lastModified?: string;
}

export interface SearchEntry {
  title: string;
  slug: string;
  section: string;
  tags: string[];
  excerpt: string;
  path: string;
}
