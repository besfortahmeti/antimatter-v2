export type Element = {
  id: number;
  name: string | null;
  prompt: string | null;
  description: string | null;
  image: string | null;
  video: string | null;
  code: string | null;
  tags: string[];
  category_id: number;
  category: string | null;
  created_at: string;
  updated_at: string;
};
