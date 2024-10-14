import { DashboardLayoutComponent } from "@/components/dashboard/dashboard-layout";

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
  title: "Mi Dashboard",
  description: "Mi Dashboard",
  icons: {
    icon: [
      { url: '/icons/icon.png', sizes: 'any' },
    ],
  },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (   
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DashboardLayoutComponent>
          <main>
            {children}
          </main>
        </DashboardLayoutComponent>
      </body>
    </html>
  );
}
