import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PerformanceMonitor from "./performance-monitor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud + AI Modernization Assessment | Reduce Costs & Accelerate Innovation",
  description: "Get a comprehensive Cloud + AI assessment in 2-4 weeks. Reduce cloud costs by 20-40%, identify high-impact AI opportunities, and receive a clear modernization roadmap.",
  keywords: [
    "cloud modernization",
    "AI assessment",
    "cloud cost optimization",
    "cloud architecture review",
    "AI readiness assessment",
    "cloud infrastructure",
    "technical debt reduction",
    "cloud migration",
    "AI strategy",
    "DevOps optimization"
  ],
  authors: [{ name: "Cloud + AI Modernization Team" }],
  creator: "Cloud + AI Modernization Team",
  publisher: "Cloud + AI Modernization Team",
  metadataBase: new URL('https://example.com'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: "Cloud + AI Modernization Assessment | Reduce Costs & Accelerate Innovation",
    description: "Get a comprehensive Cloud + AI assessment in 2-4 weeks. Reduce cloud costs by 20-40%, identify high-impact AI opportunities, and receive a clear modernization roadmap.",
    siteName: "Cloud + AI Modernization Assessment",
    images: [
      {
        url: '/og-image.jpg', // Add this image to public folder
        width: 1200,
        height: 630,
        alt: 'Cloud + AI Modernization Assessment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cloud + AI Modernization Assessment | Reduce Costs & Accelerate Innovation",
    description: "Get a comprehensive Cloud + AI assessment in 2-4 weeks. Reduce cloud costs by 20-40%, identify high-impact AI opportunities.",
    images: ['/og-image.jpg'], // Add this image to public folder
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
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}
