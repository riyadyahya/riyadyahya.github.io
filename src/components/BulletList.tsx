import type { ReactNode } from 'react';

type BulletListProps = {
  children: ReactNode;
};

const BulletList = ({ children }: BulletListProps) => (
  <ul className="list-disc marker:text-neutral-400 space-y-2 ml-4 text-[15px] leading-[1.6] text-neutral-700 *:pl-1.5">
    {children}
  </ul>
);

export default BulletList;
