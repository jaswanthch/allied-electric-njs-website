import type { Metadata } from "next";
import { Revalia, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const revalia = Revalia({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-revalia",
});

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Allied Electric | Trusted Electrical Services in Thunder Bay",
  description: "Professional electrical services in Thunder Bay, Ontario. Residential, commercial, and industrial electrical solutions available 24 hours a day. Licensed, bonded, and insured.",
  keywords: "Thunder Bay electrician, electrical services Thunder Bay, 24-hour electrician Thunder Bay, commercial electrician, residential electrician, generator installation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${revalia.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

