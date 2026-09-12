import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { FooterGate } from "@/components/FooterGate";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const site = "https://abbytes.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Ab Creative World — Creator Studio",
    template: "%s · Ab Creative World",
  },
  description:
    "Studio home for trailers, music, and creative drops — tip if you want more.",
  openGraph: {
    type: "website",
    siteName: "Ab Creative World",
    title: "Ab Creative World",
    description:
      "Studio home for trailers, music, and creative drops — tip if you want more.",
    url: site,
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "Ab Creative World" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ab Creative World",
    description:
      "Studio home for trailers, music, and creative drops — tip if you want more.",
    images: ["/og-home.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <FooterGate />
      </body>
    </html>
  );
}
