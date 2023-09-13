export interface SingleNewsProps {
  id: number
  title_ru: string
  title_uz: string
  title_en: string
  description_ru: string
  description_uz: string
  description_en: string
  content_ru: string
  content_uz: string
  content_en: string
  created_at: string
  updated_at: string
  slug: string
  status: number
  latest_news: News[]
  title: string
  description: string
  content: string
  new_tags: any[]
  new_files: NewFile[]
}

export interface News {
  id: number
  title_ru: string
  title_uz: string
  title_en: string
  description_ru: string
  description_uz: string
  description_en: string
  content_ru: string
  content_uz: string
  content_en: string
  created_at: string
  updated_at: string
  slug: string
  status: number
  title: string
  description: string
  content: string
}

export interface NewFile {
  id: number
  new_id: number
  file: string
  file_url: string
}
