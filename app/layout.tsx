import type { Metadata, Viewport } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
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
  title: 'MIRR | Streetwear Premium - Diseno con Actitud',
  description: 'MIRR - Mas que ropa, es actitud. Streetwear premium nacido en Medellin. Disenamos para los que rompen las reglas. Envios a Colombia y Ecuador.',
  keywords: ['streetwear', 'MIRR', 'Medellin', 'urban fashion', 'premium clothing', 'hoodies', 'ropa urbana', 'Colombia', 'Ecuador'],
  openGraph: {
    title: 'MIRR | Streetwear Premium',
    description: 'Mas que ropa, es actitud. Streetwear premium nacido en Medellin.',
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
    <html lang="es" className={`${oswald.variable} ${inter.variable} bg-background`} suppressHydrationWarning>
      <body className="font-serif antialiased overflow-x-hidden">
        <CartProvider>
          <div className="grain-overlay" aria-hidden="true" />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </CartProvider>
      </body>
    </html>
  )
}
