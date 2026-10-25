import type { ReactNode } from 'react';

type DefinitionProps = {
  term: string;
  children: ReactNode;
};

const Definition = ({ term, children }: DefinitionProps) => (
  <div className="grid gap-1 py-5 sm:grid-cols-[200px_1fr] sm:gap-8">
    <dt className="text-[15px] font-medium text-neutral-950">{term}</dt>
    <dd className="text-[15px] leading-[1.65] text-neutral-700 max-w-[62ch]">{children}</dd>
  </div>
);

export default Definition;
