import { listings } from '@/lib/mock-data'

export default function Home() {
  const featured = listings.filter((listing) => listing.featured)

  return (
    <main>
      <section className="bg-hero-pattern bg-cover bg-center text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                Papa Property Consultant Limited
              </div>
              <h1 className="max-w-xl text-4xl font-black uppercase leading-none sm:text-5xl lg:text-7xl">
                Buy, Sell <span className="text-papa-red">& Invest</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-200">
                Secure your next land, plot, house, or investment opportunity with trusted guidance and real local expertise.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/listings" className="rounded-full bg-papa-red px-6 py-3 font-semibold text-white transition hover:bg-red-600">
                  Explore listings
                </a>
                <a href="https://wa.me/256781158404?text=Hello%20Papa%20Property%2C%20I%20want%20to%20buy%20a%20property" className="rounded-full border border-white bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
                  WhatsApp us
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/5 p-4 shadow-papa backdrop-blur-sm">
              <div className="overflow-hidden rounded-2xl bg-white text-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern apartment building"
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-papa-navy">Featured</div>
                  <h2 className="mt-3 text-2xl font-black text-papa-navy">Luxury residence</h2>
                  <p className="mt-2 text-sm text-slate-600">Prime property opportunities in Mbarara and surrounding investment zones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-papa-red">Property deals</p>
            <h2 className="mt-2 text-3xl font-black text-papa-navy">Featured listings</h2>
          </div>
          <a href="/listings" className="text-sm font-semibold text-papa-blue hover:text-papa-red">
            View all listings →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((listing) => (
            <article key={listing.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl">
              <img src={listing.image} alt={listing.title} className="h-60 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-papa-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-papa-red">
                    {listing.type}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">{listing.status}</span>
                </div>
                <h3 className="mt-4 text-xl font-black text-papa-navy">{listing.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{listing.shortDescription}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-black text-papa-navy">{listing.price}</span>
                  <a href={`/listings/${listing.slug}`} className="rounded-full bg-papa-navy px-4 py-2 text-sm font-semibold text-white hover:bg-papa-blue">
                    View details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {[
              { label: 'Buying & Selling Land', icon: '📍' },
              { label: 'Farms & Banana Plantation', icon: '🌿' },
              { label: 'Accommodation', icon: '🏠' },
              { label: 'Buying & Selling Used Cars', icon: '🚗' }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-lg">
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="text-lg font-black uppercase text-papa-navy">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-papa-red">Why choose us</p>
            <h2 className="mt-3 text-3xl font-black text-papa-navy">Trusted & professional service</h2>
            <ul className="mt-6 space-y-4 text-lg text-slate-700">
              <li>✓ Genuine & verified properties</li>
              <li>✓ Competitive prices</li>
              <li>✓ Secure & hassle-free transactions</li>
              <li>✓ Local market expertise in Mbarara</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-papa-navy p-8 text-white shadow-papa">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-papa-gold">Location</div>
            <h3 className="mt-4 text-3xl font-black">Kakoba - Mbarara</h3>
            <p className="mt-4 text-lg text-slate-200">Musomesa Arced</p>
            <div className="mt-8 space-y-4">
              <div><div className="text-sm uppercase text-slate-300">Telephone</div><div className="text-2xl font-black">0781158404</div></div>
              <div><div className="text-sm uppercase text-slate-300">WhatsApp</div><div className="text-2xl font-black">0759003978</div></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
