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
  title: "Ece Kilikci | Data Engineer",
  description:
    "Data Engineer specializing in data platforms, marketing data pipelines, and analytics. Building reliable data systems with Databricks, Spark, and Airflow.",

  keywords: [
    "Data Engineer",
    "Databricks",
    "Spark",
    "Airflow",
    "AWS",
    "Data Platform",
    "Analytics Engineering",
  ],

  authors: [{ name: "Ece Kilikci" }],

  openGraph: {
    title: "Ece Kilikci | Data Engineer",
    description:
      "Building reliable data systems and exploring data behind everyday things.",
    url: "https://www.ecekilikci.com",
    siteName: "Ece Kilikci Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Ece Kilikci",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ece Kilikci | Data Engineer",
    description: "Data Engineer building practical and reliable data systems.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
