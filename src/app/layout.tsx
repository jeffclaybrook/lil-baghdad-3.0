import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lil Baghdad",
  description: "Iraqi made, Texas inspired"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-JDJYK3LM1M" />
        {children}
      </body>
    </html>
  );
}
