import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"]
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"]
})

export const metadata: Metadata = {
  title: 'MIRR | Streetwear Premium - Diseño con Actitud',
  description: 'MIRR - Más que ropa, es actitud. Streetwear premium nacido en Medellín. Diseñamos para los que rompen las reglas. Envíos a todo el mundo.',
  keywords: ['streetwear', 'MIRR', 'Medellín', 'gothic', 'urban fashion', 'premium clothing', 'hoodies', 'ropa urbana'],
  openGraph: {
    title: 'MIRR | Streetwear Premium',
    description: 'Más que ropa, es actitud. Streetwear premium nacido en Medellín.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable} bg-background`}>
      <body className="font-serif antialiased">
        <div className="grain-overlay" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
