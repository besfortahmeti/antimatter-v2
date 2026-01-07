export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

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
