import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Raleway } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Living Gallery - Sacred Art & Spiritual Calligraphy",
  description:
    "Where ink becomes prayer, and every stroke tells a sacred story. Discover spiritual calligraphy and vintage-style paintings.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
