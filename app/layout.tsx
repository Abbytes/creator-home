import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { FooterGate } from "@/components/FooterGate";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ab Creative World — Creator Studio",
    template: "%s · Ab Creative World",
  },
  description:
    "Ab Creative World — portfolio-first creator studio. Featured work, projects, and scored trailers.",
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
