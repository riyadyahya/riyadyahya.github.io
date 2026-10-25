import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/structuredData';

export type Crumb = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  trail: Crumb[];
  current: string;
};

const Breadcrumbs = ({ trail, current }: BreadcrumbsProps) => {
  const links = [{ name: 'Home', href: '/' }, ...trail];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(links, current)} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-neutral-600">
          {links.map((c) => (
            <li key={c.href} className="flex items-center gap-x-2">
              <Link href={c.href} className="underline-offset-4 hover:text-neutral-950 hover:underline">
                {c.name}
              </Link>
              <span aria-hidden="true" className="text-neutral-400">
                /
              </span>
            </li>
          ))}
          <li aria-current="page" className="text-neutral-950">
            {current}
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
