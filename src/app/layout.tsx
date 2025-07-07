// src/app/layout.tsx
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import '@/styles/scss/main.scss'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KuKraft',
  description: 'Atelier Ku Kraft - Design Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}