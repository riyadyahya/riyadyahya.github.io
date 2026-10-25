import type { ReactNode } from 'react';

type TopicProps = {
  title: string;
  children: ReactNode;
};

const Topic = ({ title, children }: TopicProps) => (
  <article>
    <h3 className="text-[16px] font-semibold leading-[1.5] text-neutral-950 mb-2">{title}</h3>
    <div className="text-[15px] leading-[1.65] text-neutral-700">{children}</div>
  </article>
);

export default Topic;
