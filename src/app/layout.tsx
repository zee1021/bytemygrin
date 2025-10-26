import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Byte My Grin - AI Powered Dental Assistant",
  description: "Get instant answers and advice from our AI assistant. Available 24/7 for all your dental questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
      appearance={{
        variables: {
          colorPrimary: '#4B0076',
          colorBackground: '#ffffff',
          colorText: '#000000',
          colorTextSecondary: '#6b7280',
          colorInputBackground: '#f9fafb',
        },
      }}
    >
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
