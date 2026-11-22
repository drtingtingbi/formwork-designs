import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ variable: "--font-quicksand", subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.formworkdesigns.com.au";
const shareImageUrl = `${siteUrl.replace(/\/$/, "")}${basePath}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Formwork Designs | Drafting & Formwork Design",
  description: "Practical, precise drafting and formwork design for Australian construction projects.",
  keywords: ["formwork design", "formwork drafting", "construction drafting", "Australia"],
  icons: {
    icon: `${basePath}/favicon.png`,
    shortcut: `${basePath}/favicon.png`,
  },
  openGraph: {
    title: "Formwork Designs | Drafting & Formwork Design",
    description: "Practical, precise drafting and formwork design for Australian construction projects.",
    type: "website",
    images: [{ url: shareImageUrl, width: 1734, height: 907, alt: "Formwork Designs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formwork Designs | Drafting & Formwork Design",
    description: "Practical, precise drafting and formwork design for Australian construction projects.",
    images: [shareImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={quicksand.variable}>{children}</body>
    </html>
  );
}
