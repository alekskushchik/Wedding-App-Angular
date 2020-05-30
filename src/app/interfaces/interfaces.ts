export interface Section {
  meta: SectionMeta;
  action: object;
  type: string;
  content: SectionContent[];
}

export interface SectionMeta {
  title: string;
  description: string;
}

export interface SectionContent {
  style: string;
  _id: string;
  title: string;
  url: string;
}
