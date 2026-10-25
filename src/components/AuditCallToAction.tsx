import Link from 'next/link';
import Contact from '@/components/Contact';
import { AUDIT_PRICE } from '@/constants';

type AuditCallToActionProps = {
  subject: string;
};

const AuditCallToAction = ({ subject }: AuditCallToActionProps) => (
  <Contact
    title="Start with a 48-hour audit"
    intro={
      <>
        A fixed {AUDIT_PRICE} review of {subject}: database rules, secrets, payments, reliability, performance and
        code. You get a ranked fix list within 48 hours of giving me access, and a clear call on which path fits.{' '}
        <Link
          href="/mvp-to-production/"
          className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
        >
          See everything the audit covers
        </Link>
        .
      </>
    }
  />
);

export default AuditCallToAction;
