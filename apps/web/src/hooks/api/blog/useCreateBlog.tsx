'use client';

import { useRouter } from 'next/navigation';
import { Blog, IFromCreateBlog } from '@/types/blog.type';
import { AxiosError } from 'axios';
import { FileWithPath } from 'react-dropzone';
const useCreateBlog = () => {
  const router = useRouter();
  const createdBlog = async (payload: IFromCreateBlog) => {
    try {
      const { title, category, content, desciption, thumbnail, userId } =
        payload;
    } catch (error) {
      if (error instanceof AxiosError) {
        // ubah
        console.log(error);
      }
    }
  };
  return <div>useCreateBlog</div>;
};

export default useCreateBlog;
