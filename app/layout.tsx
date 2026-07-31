import React from "react"
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'

import './globals.css'

const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const title = 'Wiam Rabie | AI & Digital Engineering'
const description =
  'Portfolio of Wiam Rabie - Digital Engineering & Artificial Intelligence Engineer. Explore projects in AI, computer vision, deep learning, and web development.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_poppins.variable} ${_inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
