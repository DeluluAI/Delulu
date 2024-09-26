import type { Metadata } from "next";
import { Nunito_Sans, Bai_Jamjuree } from "next/font/google";
import "./globals.css";

import Nav from './components/Nav'

const nunito = Nunito_Sans({
  display: 'swap',
  subsets: ["latin"],
  variable: '--font-nunito'
});

const bai = Bai_Jamjuree({
  display: 'swap',
  subsets: ["latin"],
  variable: '--font-bai',
  weight: "400",
});

export const metadata: Metadata = {
  title: "KAIX: Tu camino hacia la libertad financiera",
  description: "Impulsa tu práctica de asesoría financiera. Conoce más sobre el mundo de las finanzas y cómo puedes ayudar a tus clientes a alcanzar sus metas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${nunito.variable} ${bai.className} ${bai.variable} bg-[#1b1b1b]`}>
        <Nav />
        <hr className='border-t-2 border-deepGray' />

        {children}
      </body>
    </html>
  );
}
