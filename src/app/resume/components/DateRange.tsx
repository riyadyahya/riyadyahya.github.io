import { formatMonthYear, toIsoMonth } from '@/utils/dates';

type DateRangeProps = {
  start: Date;
  end?: Date;
};

export default function DateRange({ start, end }: DateRangeProps) {
  return (
    <>
      <time dateTime={toIsoMonth(start)}>{formatMonthYear(start)}</time>
      {' – '}
      {end ? <time dateTime={toIsoMonth(end)}>{formatMonthYear(end)}</time> : 'Present'}
    </>
  );
}
