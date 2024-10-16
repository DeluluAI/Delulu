
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

import { RecorderLayoutComponent } from "@/components/recorder/recorder-layout";

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
    title: "Mi Recorder",
    description: "Mi Recorder",
    icons: {
        icon: [
            { url: '/icons/icon.png', sizes: 'any' },
        ],
    },
};

export default function RecorderLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <RecorderLayoutComponent>
                    <main>
                        {children}
                    </main>
                </RecorderLayoutComponent>
            </body>
        </html>
    );
}
