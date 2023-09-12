export interface NewsTypes {
  id: number;
  title_ru: string;
  title_uz: string;
  title_en: string;
  description_ru: string;
  description_uz: string;
  description_en: string;
  content_ru: string;
  content_uz: string;
  content_en: string;
  created_at: string;
  updated_at: string;
  slug: string;
  status: number;
  title: string;
  description: string;
  content: string;
  new_tags: NewTag[];
}

export interface NewTag {
  id: number;
  new_id: number;
  tag_id: number;
  tag: Tag;
}

export interface Tag {
  id: number;
  name_ru: string;
  name_uz: string;
  name_en: string;
  created_at: string;
  name: string;
}
