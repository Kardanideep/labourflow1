import type { Metadata } from "next";
import "./globals.css";
import seo from "@/data/seo.json";
export const metadata: Metadata = {
  title: { default: seo.title, template: "%s | LabourFlow" },
  description: seo.description,
  keywords: seo.keywords,
  metadataBase: new URL("https://www.labourflow.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "https://www.labourflow.in",
    siteName: "LabourFlow",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "LabourFlow" }],
  },
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
