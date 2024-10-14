import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavComponent } from "@/components/ui/nav";
import Footer from "@/components/ui/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Delulu",
  description: "Transforma tus interacciones con tus clientes en insights con Delulu.",
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
        <NavComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
