import Link from 'next/link'
import { ArrowRight, MapPin, PhoneCall, MessageCircle } from 'lucide-react'
import { listings, getListingBySlug } from '@/lib/mock-data'
import { notFound } from 'next/navigation'

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = getListingBySlug(params.id)

  if (!listing) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-3xl bg-white p-4 shadow-xl shadow-slate-200/80">
        <img src={listing.image} alt={listing.title} className="h-[420px] w-full rounded-2xl object-cover" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/80">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-papa-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-papa-red">{listing.type}</span>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{listing.status}</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-papa-navy sm:text-4xl">{listing.title}</h1>
          <p className="mt-3 text-lg text-slate-600">{listing.shortDescription}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-700">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-papa-red" /> {listing.location}</div>
            <div className="text-lg font-black text-papa-navy">{listing.price}</div>
          </div>

          <p className="mt-6 text-base leading-8 text-slate-700">{listing.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {listing.size ? <div className="rounded-2xl bg-slate-100 p-4"><div className="text-xs uppercase text-slate-500">Size</div><div className="mt-2 font-black text-papa-navy">{listing.size}</div></div> : null}
            {listing.beds ? <div className="rounded-2xl bg-slate-100 p-4"><div className="text-xs uppercase text-slate-500">Bedrooms</div><div className="mt-2 font-black text-papa-navy">{listing.beds}</div></div> : null}
            <div className="rounded-2xl bg-slate-100 p-4"><div className="text-xs uppercase text-slate-500">Status</div><div className="mt-2 font-black capitalize text-papa-navy">{listing.status}</div></div>
          </div>
        </div>

        <aside className="rounded-3xl bg-papa-navy p-6 text-white shadow-xl shadow-slate-200/80">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-papa-gold">Quick contact</div>
          <h2 className="mt-4 text-2xl font-black">Speak with Papa Property</h2>

          <div className="mt-6 space-y-4">
            <a href="tel:0781158404" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <PhoneCall className="h-5 w-5 text-papa-red" />
              <span>0781158404</span>
            </a>
            <a href={`https://wa.me/256781158404?text=Hello%20Papa%20Property%2C%20I%20am%20interested%20in%20${encodeURIComponent(listing.title)}`} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <MessageCircle className="h-5 w-5 text-papa-red" />
              <span>WhatsApp now</span>
            </a>
          </div>

          <div className="mt-8 rounded-2xl bg-white/10 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Location</div>
            <div className="mt-2 text-lg font-black">{listing.mapLabel}</div>
          </div>

          <Link href="/listings" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-papa-gold">
            Back to listings <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </main>
  )
}
