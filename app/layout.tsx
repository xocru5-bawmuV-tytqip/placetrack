import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: 'PlaceTrack | Poornima University Placement Portal',
    template: '%s | PlaceTrack',
  },
  description:
    "PlaceTrack is Poornima University's official placement portal — discover placement data, connect with seniors, practice with SevenAI, and land your dream job.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-[#0A0F1E] text-white antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
