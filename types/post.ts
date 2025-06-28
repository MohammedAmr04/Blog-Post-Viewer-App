export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  image?: string;
  author?: string;
  date?: string;
  tags?: string[];
};
