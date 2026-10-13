import Link from 'next/link'
import { listings } from '@/lib/mock-data'

export default function ListingsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-papa-red">Available deals</p>
        <h1 className="mt-3 text-4xl font-black uppercase text-papa-navy">Our listings</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {listings.map((listing) => (
          <article key={listing.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl">
            <img src={listing.image} alt={listing.title} className="h-60 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-papa-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-papa-red">
                  {listing.type}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{listing.status}</span>
              </div>
              <h2 className="mt-4 text-xl font-black text-papa-navy">{listing.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{listing.location}</p>
              <p className="mt-3 text-sm text-slate-600">{listing.shortDescription}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-xl font-black text-papa-navy">{listing.price}</span>
                <Link href={`/listings/${listing.slug}`} className="rounded-full bg-papa-navy px-4 py-2 text-sm font-semibold text-white hover:bg-papa-blue">
                  Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
