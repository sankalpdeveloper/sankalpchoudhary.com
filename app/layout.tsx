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
  title: "Sankalp Choudhary - Full Stack Developer & Software Engineer",
  description: "Expert Full Stack Developer with JavaScript, React.js, Node.js, Express, FastAPI, and Next.js. SDE-2 at Health-e specializing in healthcare platforms, REST APIs, and performance optimization. Master of Computer Science from Jain University.",
  keywords: ["Sankalp Choudhary", "Full Stack Developer", "JavaScript", "React.js", "Node.js", "Express", "FastAPI", "Health-e", "Software Engineer", "SDE-2", "Healthcare Technology", "REST APIs", "MongoDB", "PostgreSQL"],
  authors: [{ name: "Sankalp Choudhary" }],
  openGraph: {
    title: "Sankalp Choudhary - Full Stack Developer",
    description: "Expert Full Stack Developer specializing in JavaScript, React.js, Node.js, and healthcare platforms. SDE-2 at Health-e with proven track record of optimizing performance and building scalable applications.",
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
