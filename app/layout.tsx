import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SignupModalProvider } from "@/context/SignupModalContext";
import { SignupModal } from "@/components/SignupModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Track LPG levels and plan refills",
  description:
    "Cylinx helps gas vendors monitor LPG levels and plan proactive refills to keep customers loyal.",
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
        <SignupModalProvider>
          {children}
          <SignupModal />
        </SignupModalProvider>
      </body>
    </html>
  );
}
