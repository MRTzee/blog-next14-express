'use client';

import { FC } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface MarkDownProps {
  content: string;
}

const MarkDown: FC<MarkDownProps> = ({ content }) => {
  const renderers: Components = {
    h2: ({ children }) => <h2 className="text-lg font-bold">{children}</h2>,
    p: ({ children }) => <p className="text-lg font-light">{children}</p>,
  };
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={renderers}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkDown;
