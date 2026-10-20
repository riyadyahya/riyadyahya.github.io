import { CONTACT_INFO } from '@/constants';

type BookCallButtonProps = {
  compact?: boolean;
};

const BookCallButton = ({ compact = false }: BookCallButtonProps) => (
  <a
    href={CONTACT_INFO.calendar}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center rounded-md bg-accent font-medium text-white transition-colors hover:bg-accent-strong ${
      compact ? 'h-9 px-3.5 text-[13px]' : 'h-11 px-5 text-[15px]'
    }`}
  >
    {compact ? 'Book a call' : 'Book a 30-min call'}
    <span className="sr-only"> (opens Google Calendar in a new tab)</span>
  </a>
);

export default BookCallButton;
