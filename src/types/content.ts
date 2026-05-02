import { TextVariableResolutionMap } from "../lib/textVariables";

export interface SearchEntry {
  title: string;
  slug: string;
  section: string;
  kind?: string;
  tags: string[];
  excerpt: string;
  path: string;
  badges?: string[];
  textVariableValues?: TextVariableResolutionMap;
}
