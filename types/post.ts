import { StaticImageData } from "next/image";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  image?: string | StaticImageData;
  author?: string;
  date?: string;
  tags?: string[];
}
