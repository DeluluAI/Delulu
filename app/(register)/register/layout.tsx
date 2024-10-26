import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../globals.css";
import LeftMenu from "@/components/register/leftMenu";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Registrate en Delulu",
  description: "Registrate para empezar con Delulu.",
  icons: {
    icon: [
      { url: '/icons/icon.png', sizes: 'any' },
    ],
  },
};

export default function RegisterLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-row justify-between h-screen">
          <LeftMenu />
          <div className="flex justify-center w-full">
          {children}
          </div>
        </div>
      </body>
    </html>
  )
}
