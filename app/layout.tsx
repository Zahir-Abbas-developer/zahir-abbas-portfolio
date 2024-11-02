import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zahir",
  description: "Zahir Abbas Portfolio",
};

import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} max-w-[1700px] m-auto relative`}>
        <div className="absolute -left-[10rem] xxl:-left-[30rem] -top-[5rem] xxl:-top-[15rem] overflow-hidden">
          <div className="relative w-[100vw] lg:w-[50vw] h-[100dvh]">
            <Image src="/assets/images/bg.png" fill alt="..." />
          </div>
        </div>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
