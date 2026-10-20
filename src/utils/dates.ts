// Helper function to calculate duration between two dates
export const calculateDuration = (startDate: Date, endDate?: Date): string | null => {
  if (!endDate) return null;

  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30.44);
  const diffYears = Math.floor(diffMonths / 12);
  const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? '' : 's'}`;

  if (diffYears > 0) {
    const remainingMonths = diffMonths % 12;
    if (remainingMonths > 0) {
      return `${plural(diffYears, 'year')} ${plural(remainingMonths, 'month')}`;
    }
    return plural(diffYears, 'year');
  }

  return plural(diffMonths, 'month');
};

export const formatMonthYear = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

export const toIsoMonth = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

// Helper function to format date range for display
export const formatDateRange = (startDate: Date, endDate?: Date): string => {
  const startFormatted = formatMonthYear(startDate);

  if (!endDate) {
    return `${startFormatted} – Present`;
  }

  return `${startFormatted} – ${formatMonthYear(endDate)}`;
};
