import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://topnochwealth.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Topnoch Wealth Enterprises LLC",
    default: "Topnoch Wealth Enterprises LLC — Structure. Capital. Wealth.",
  },
  description:
    "We help entrepreneurs become fundable, acquire capital, and build wealth — without predatory lending or guesswork.",
  keywords: [
    "business funding",
    "financial literacy",
    "entrepreneur coaching",
    "fundability",
    "business credit",
    "wealth building",
    "capital acquisition",
  ],
  authors: [{ name: "Maurice L. Coleman" }],
  creator: "Topnoch Wealth Enterprises LLC",
  publisher: "Topnoch Wealth Enterprises LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Topnoch Wealth Enterprises LLC — Structure. Capital. Wealth.",
    description:
      "We help entrepreneurs become fundable, acquire capital, and build wealth — without predatory lending or guesswork.",
    type: "website",
    locale: "en_US",
    siteName: "Topnoch Wealth Enterprises LLC",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Topnoch Wealth Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Topnoch Wealth Enterprises LLC — Structure. Capital. Wealth.",
    description:
      "We help entrepreneurs become fundable, acquire capital, and build wealth.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
