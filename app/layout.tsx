import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Next.js + Cloudflare Pages + Cloudflare D1 + Drizzle ORM + Tailwind CSS + Shadcn UI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
