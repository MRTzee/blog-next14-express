import { User } from './user.type';

export interface Blog {
  id: number;
  title: string;
  desciption: string;
  category: string;
  content: string;
  thumbnail: string;
  userId: number;
  createdAt: number;
  updateAt: Date;
  deletedAt: Date | null;

  user: User;
}

export interface IFromCreateBlog {
  id: number;
  title: string;
  desciption: string;
  content: string;
  category: string;
  thumbnail: File[];

  userId?: number;
}
