'use client';

import Link from 'next/link';

const AppointmentButton = () => {
  return (
    <Link
      href="https://calendar.app.google/5eh6h4PEqgRKrKsA8"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
    >
      Book an appointment
    </Link>
  );
};

export default AppointmentButton; 