import { MapPin, PhoneCall, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-papa-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="text-2xl font-black uppercase">Papa Property</div>
          <p className="mt-4 text-slate-300">Your Property, Our Priority.</p>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-papa-gold">Visit us</div>
          <div className="mt-4 flex items-center gap-3 text-slate-200">
            <MapPin className="h-5 w-5 text-papa-red" />
            <span>{siteConfig.location}</span>
          </div>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-papa-gold">Contact</div>
          <div className="mt-4 space-y-3 text-slate-200">
            <a href={`tel:${siteConfig.phonePrimary}`} className="flex items-center gap-3 hover:text-white">
              <PhoneCall className="h-5 w-5 text-papa-red" />
              {siteConfig.phonePrimary}
            </a>
            <a href={`https://wa.me/256${siteConfig.whatsapp.replace(/^0/, '')}?text=Hello%20Papa%20Property%2C%20I%20want%20to%20buy%20a%20property`} className="flex items-center gap-3 hover:text-white">
              <MessageCircle className="h-5 w-5 text-papa-red" />
              WhatsApp: {siteConfig.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
