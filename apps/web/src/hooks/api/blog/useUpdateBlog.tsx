'use client';

import { axiosInstance } from '@/lib/axios';
import { Blog, IFormBlog } from '@/types/blog.type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FileWithPath } from 'react-dropzone';

const useUpdateBlog = (blogId: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const updateBlog = async (payload: Partial<IFormBlog>) => {
    try {
      const { title, category, content, description, thumbnail } = payload;

      const updateBlogForm = new FormData();
      if (title) updateBlogForm.append('title', title);
      if (category) updateBlogForm.append('title', category);
      if (content) updateBlogForm.append('title', content);
      if (description) updateBlogForm.append('title', description);

      if (thumbnail) {
        thumbnail.forEach((file: FileWithPath) => {
          updateBlogForm.append('thumbnail', file);
        });
      }

      await axiosInstance.patch<Blog>(`/blogs/${blogId}`);
      router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { updateBlog, isLoading };
};

export default useUpdateBlog;
