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
  title: "Data Analysis Platform",
  description: "A platform for data analysis and visualization",
  icons: {
    icon: [
      { url: '/public/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/public/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/public/logo.png',
    apple: { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/logo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
