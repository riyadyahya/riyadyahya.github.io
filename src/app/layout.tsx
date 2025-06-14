import type { Metadata } from "next";
import { Inter } from "next/font/google";
import favicon from '../assets/favicon.png';
import profile from '../assets/profile.jpeg';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://riyadyahya.github.io'),
  title: {
    default: "Riyad Yahya - Senior Software Engineer",
    template: "%s | Riyad Yahya"
  },
  description: "Senior Software Engineer specializing in React.js, Node.js, and MongoDB. Building scalable & secure systems with over 7 years of experience in SaaS companies.",
  applicationName: "Riyad Yahya Portfolio",
  keywords: [
    "Riyad Yahya",
    "Senior Software Engineer",
    "React.js",
    "Node.js",
    "MongoDB",
    "DevOps",
    "AWS",
    "TypeScript",
    "Full Stack Developer",
    "Palestine",
    "Tech Lead",
    "Team Leadership",
    "MERN Stack",
    "Cloud Architecture",
    "Microservices"
  ],
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Riyad Yahya Portfolio",
  },
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb'
      }
    ]
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://riyadyahya.github.io",
    title: "Riyad Yahya - Senior Software Engineer",
    description: "Senior Software Engineer specializing in React.js, Node.js, and MongoDB. Building scalable & secure systems with over 7 years of experience in SaaS companies.",
    siteName: "Riyad Yahya Portfolio",
    images: [
      {
        url: profile.src,
        width: profile.width,
        height: profile.height,
        alt: "Riyad Yahya - Senior Software Engineer"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riyad Yahya - Senior Software Engineer",
    description: "Senior Software Engineer specializing in React.js, Node.js, and MongoDB. Building scalable & secure systems with over 7 years of experience in SaaS companies.",
    creator: "@riyadyahya",
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
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <GoogleAnalytics />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
