'use client';

import useGetBlogs from '@/hooks/api/blog/useGetBlogs';
import { appConfig } from '@/utils/config';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { debounce } from 'lodash';

interface BlogOption {
  value: number;
  label: string;
}
const Autocomplete = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useGetBlogs({ search });
  const loadOptions = (
    inputValue: string,
    callback: (options: BlogOption[]) => void,
  ) => {
    try {
      const options = data.map((blog) => {
        return {
          label: blog.title,
          value: blog.id,
        };
      });
      callback(options);
      setSearch(inputValue);
    } catch (error) {
      callback([]);
    }
  };

  const debounceLoadOptions = debounce(loadOptions, 750);

  return (
    <AsyncSelect
      placeholder="Search for article"
      className="mx-auto my-4 max-w-[650px]"
      loadOptions={debounceLoadOptions}
      isLoading={isLoading}
      onChange={(blog) => {
        router.push(appConfig.baseURLNext + `/${blog?.value}`);
      }}
    />
  );
};

export default Autocomplete;
