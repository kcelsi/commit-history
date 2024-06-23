import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Git history',
  description: 'Show git history for a repository',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="mx-4">{children}</body>
    </html>
  )
}
