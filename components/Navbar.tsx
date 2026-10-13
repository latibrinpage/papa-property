import Link from 'next/link'
import { MapPinned, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-papa-navy text-xl font-black text-white">P</div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-papa-red">Papa</div>
            <div className="text-xl font-black uppercase leading-none text-papa-navy">Property</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          <Link href="/">Home</Link>
          <Link href="/listings">Listings</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 text-sm font-semibold text-slate-700 lg:flex">
            <MapPinned className="h-4 w-4 text-papa-red" />
            <span>{siteConfig.location}</span>
          </div>
          <a href={`tel:${siteConfig.phonePrimary}`} className="inline-flex items-center gap-2 rounded-full bg-papa-red px-4 py-2 text-sm font-bold text-white transition hover:bg-red-600">
            <Phone className="h-4 w-4" />
            {siteConfig.phonePrimary}
          </a>
        </div>
      </div>
    </header>
  )
}
