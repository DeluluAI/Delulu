import { NavMenu } from "@/components/navigation-menu";
import Footer from '@/components/ui/footer';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Delulu AI",
  description: "Transforma tus interacciones con tus clientes en insights con Delulu.",
  icons: {
    icon: [
      { url: '/icons/icon.png', sizes: 'any' },
    ],
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center`}>
                <NavMenu />
                {children}
                <Footer />
            </body>
        </html>
    )
}
