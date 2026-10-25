import type { ReactNode } from 'react';

type StepProps = {
  label: string;
  title: string;
  note?: string;
  children: ReactNode;
};

const Step = ({ label, title, note, children }: StepProps) => (
  <li className="max-w-[62ch]">
    <p className="text-[13px] text-neutral-600 tabular-nums mb-1">{label}</p>
    <h3 className="text-[16px] font-semibold leading-[1.5] text-neutral-950 mb-2">{title}</h3>
    {note && <p className="text-[14px] leading-[1.6] text-neutral-950 mb-2">{note}</p>}
    <p className="text-[15px] leading-[1.65] text-neutral-700">{children}</p>
  </li>
);

export default Step;
