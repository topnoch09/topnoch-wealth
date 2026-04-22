import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "Topnoch Wealth Enterprises LLC — Structure. Capital. Wealth.",
    description:
      "We help entrepreneurs become fundable, acquire capital, and build wealth — without predatory lending or guesswork.",
    type: "website",
    locale: "en_US",
    siteName: "Topnoch Wealth Enterprises LLC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
