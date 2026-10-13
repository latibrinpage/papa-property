import type { Metadata } from 'next'
import '@/app/globals.css'
import { siteConfig } from '@/lib/site'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: 'Buy, sell and invest in land, plots, houses and rental properties with Papa Property.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
