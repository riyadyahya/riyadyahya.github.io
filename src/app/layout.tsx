import type { Metadata } from 'next';
import './globals.css';
import profile from '../assets/profile.jpg';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {PERSONAL_INFO, TOP_SKILLS} from "@/constants";

export const metadata: Metadata = {
  metadataBase: new URL('https://riyadyahya.github.io'),
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.summary,
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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Riyad Yahya Portfolio",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/ico' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/ico' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico',
        color: '#2563eb'
      },
      {
        rel: 'icon',
        type: 'image/ico',
        sizes: '32x32',
        url: '/favicon.ico'
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ]
  },
  openGraph: {
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.summary,
    type: 'website',
    url: 'https://riyadyahya.github.io',
    images: [
      {
        url: profile.src,
        width: profile.width,
        height: profile.height,
        alt: "Riyad Yahya - Senior Software Engineer"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.summary,
    images: [profile.src],
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
  alternates: {
    canonical: "https://riyadyahya.github.io",
    languages: {
      'en-US': 'https://riyadyahya.github.io',
    },
  },
  verification: {
    google: "K_xsDJU3vPXmT5OKdGadFK73P6sv8UJDo48vPZO4XxY",
  },
  other: {
    'msapplication-TileColor': '#2563eb',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Riyad Yahya Portfolio',
    'application-name': 'Riyad Yahya Portfolio',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#2563eb',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
    <head>
      <title>{`${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`}</title>
      <link rel="shortcut icon" href="/favicon.ico"/>
      <meta name="theme-color" content="#2563eb"/>
      <meta name="color-scheme" content="light dark"/>
      <link rel="manifest" href="/manifest.json"/>
    </head>
    <body className="font-sans">
    <GoogleAnalytics/>
    <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
