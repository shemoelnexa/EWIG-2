import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const editorialOld = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    {
      path: "../fonts/ppeditorialold-ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/ppeditorialold-ultralightitalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/ppeditorialold-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ppeditorialold-italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "East & West International Group | Leading Real Estate in UAE",
  description:
    "Since 1993, East & West International Group (EWIG) has been a leading integrated real estate group in the UAE, offering premium residential, commercial, and managed properties across Abu Dhabi, Dubai, and Sharjah.",
  openGraph: {
    title: "East & West International Group",
    description: "Leading Integrated Real Estate Group in the UAE since 1993",
    url: "https://www.eastandwest.ae",
    siteName: "East & West International Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${editorialOld.variable} ${inter.variable}`}>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
