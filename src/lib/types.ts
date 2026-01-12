export type Category = {
  id: number;
  name: string | null;
  icon: string | null;
};

export interface Component {
  id: number;
  name: string;
  category: string;
  tags: string[];
  promt: string;
  description?: string;
  image?: string;
  video?: string;
  code?: string;
  url?: string;
}
