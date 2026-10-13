'use client'

import { useMemo, useState } from 'react'
import { listings as initialListings } from '@/lib/mock-data'

export default function AdminPage() {
  const [listings, setListings] = useState(initialListings)
  const [form, setForm] = useState({
    title: '',
    location: '',
    price: '',
    type: 'plot',
    shortDescription: ''
  })

  const totalValue = useMemo(() => listings.length, [listings])

  const handleAdd = () => {
    if (!form.title || !form.location || !form.price) return

    const nextListing = {
      id: Date.now(),
      title: form.title,
      slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      type: form.type as any,
      location: form.location,
      price: form.price,
      shortDescription: form.shortDescription || 'New property listing added by admin.',
      description: form.shortDescription || 'New property listing added by admin.',
      status: 'available',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      images: ['https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'],
      featured: false,
      mapLabel: form.location,
      featuredTag: 'New listing'
    }

    setListings((current) => [nextListing, ...current])
    setForm({ title: '', location: '', price: '', type: 'plot', shortDescription: '' })
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-papa-red">Admin dashboard</p>
          <h1 className="mt-2 text-4xl font-black uppercase text-papa-navy">Manage listings</h1>
        </div>
        <div className="rounded-2xl bg-papa-navy px-5 py-3 text-white">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Total listings</div>
          <div className="text-2xl font-black">{totalValue}</div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/80">
          <h2 className="text-2xl font-black text-papa-navy">Add a new listing</h2>

          <div className="mt-5 space-y-4">
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Location" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="Price" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full rounded-2xl border border-slate-200 px-4 py-3">
              <option value="land">Land</option>
              <option value="plot">Plot</option>
              <option value="house">House</option>
              <option value="farm">Farm</option>
              <option value="apartment">Apartment</option>
            </select>
            <textarea value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} placeholder="Short description" rows={4} className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
            <button onClick={handleAdd} className="w-full rounded-full bg-papa-red px-6 py-3 font-bold text-white hover:bg-red-600">Add listing</button>
          </div>
        </div>

        <div className="space-y-4">
          {listings.map((listing) => (
            <div key={listing.id} className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-lg shadow-slate-200/80 md:flex-row">
              <img src={listing.image} alt={listing.title} className="h-32 w-full rounded-2xl object-cover md:w-44" />
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-black text-papa-navy">{listing.title}</h3>
                  <span className="rounded-full bg-papa-red/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-papa-red">{listing.type}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{listing.location}</p>
                <p className="mt-2 text-xl font-black text-papa-navy">{listing.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
