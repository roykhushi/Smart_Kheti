import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'AI-Powered Weed Detection | Smart Agriculture Solutions',
=======
  title: 'Smart Kheti',
>>>>>>> b5235b3 (final changes)
  description: 'Revolutionizing agriculture with AI and IoT-based weed detection for sustainable and efficient farming.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

