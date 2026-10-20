import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { PERSONAL_INFO, SITE_URL, TOP_SKILLS } from "@/constants";
import { siteJsonLd } from '@/structuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const defaultTitle = `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.description,
  keywords: TOP_SKILLS,
  authors: [{
    name: "Riyad Yahya",
    url: "https://www.linkedin.com/in/riyad-yahya"
  }],
  creator: "Riyad Yahya",
  publisher: "Riyad Yahya",
  category: "Portfolio",
  classification: "Personal Website",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: PERSONAL_INFO.name,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/ico' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: defaultTitle,
    description: PERSONAL_INFO.description,
    type: 'website',
    url: SITE_URL,
    siteName: PERSONAL_INFO.name,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${PERSONAL_INFO.name}, ${PERSONAL_INFO.title}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: PERSONAL_INFO.description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "K_xsDJU3vPXmT5OKdGadFK73P6sv8UJDo48vPZO4XxY",
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-tap-highlight': 'no',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
    <body className="font-sans antialiased">
      <GoogleAnalytics/>
      <JsonLd data={siteJsonLd}/>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-md focus:bg-neutral-950 focus:px-4 focus:py-2 focus:text-[14px] focus:text-white"
      >
        Skip to content
      </a>
      <Navbar/>
      <main id="content" className="min-h-screen">
        {children}
      </main>
      <Footer/>
    </body>
    </html>
  );
}
