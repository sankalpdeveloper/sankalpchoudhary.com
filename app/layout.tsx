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
  title: "Sankalp Choudhary - Full Stack Developer & API Architect",
  description: "MERN stack developer with healthcare focus and 5+ years experience. Building impactful web apps using React, Node.js, MongoDB. Expert in UHI, ABHA, AWS, and API architectures at Health-e.in",
  keywords: ["MERN Stack Developer", "Health-e.in", "UHI", "ABHA", "Node.js", "React", "MongoDB", "Healthcare Technology", "Full Stack Developer", "AWS"],
  authors: [{ name: "Sankalp Choudhary" }],
  openGraph: {
    title: "Sankalp Choudhary - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in scalable web applications and robust API architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
