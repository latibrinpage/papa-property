export type ListingType = 'land' | 'plot' | 'house' | 'farm' | 'apartment' | 'vehicle'

export type Listing = {
  id: number
  title: string
  slug: string
  type: ListingType
  location: string
  price: string
  shortDescription: string
  description: string
  status: 'available' | 'sold' | 'featured'
  image: string
  images: string[]
  featured: boolean
  beds?: number
  size?: string
  featuredTag?: string
  mapLabel: string
}

export const listings: Listing[] = [
  {
    id: 1,
    title: 'Prime 50x100ft Plot in Nyarubanga',
    slug: 'prime-50x100ft-plot-nyarubanga',
    type: 'plot',
    location: 'Nyarubanga, Mbarara',
    price: '15M',
    shortDescription: 'A few plots remaining close to the Northern bypass with ready access roads.',
    description: 'Imagine getting a 50x100ft plot for only 15M and 10M on a walkable distance to the Northern Bypass, a few plots remaining at the Nyarubanga estate 2km from Kyamugorani roundabout. Secure your plot today.',
    status: 'featured',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    size: '50x100ft',
    mapLabel: 'Nyarubanga Estate',
    featuredTag: 'Hot deal'
  },
  {
    id: 2,
    title: 'Rubeko VIP Estate Parcel',
    slug: 'rubeko-vip-estate-parcel',
    type: 'land',
    location: 'Rubeko, Mbarara',
    price: '9M',
    shortDescription: 'Promotional price: 50x100ft titled land with electricity and water in a prime estate.',
    description: 'A premium 50x100ft parcel in the Rubeko VIP estate, just 6km from Mbarara city centre. Electricity and water are available and only a few plots remain.',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    size: '50x100ft',
    mapLabel: 'Rubeko VIP Estate',
    featuredTag: 'Limited stock'
  },
  {
    id: 3,
    title: 'Modern Family House',
    slug: 'modern-family-house',
    type: 'house',
    location: 'Kakoba, Mbarara',
    price: 'UGX 230M',
    shortDescription: 'A clean, modern home perfect for living or rental investment in a growing residential area.',
    description: 'A spacious, newly built family home in Kakoba with modern finishes, comfortable living space and easy access to city services.',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    beds: 4,
    size: '1500 sq ft',
    mapLabel: 'Kakoba',
    featuredTag: 'Ready to move in'
  },
  {
    id: 4,
    title: 'Banana Plantation Land',
    slug: 'banana-plantation-land',
    type: 'farm',
    location: 'Mbarara outskirts',
    price: '12M',
    shortDescription: 'Large farmland opportunity with rich soil and agricultural potential.',
    description: 'Ideal for a banana plantation or agro-investment. This land offers strong long-term value and good access from surrounding roads.',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    size: '1 acre',
    mapLabel: 'Mbarara outskirts',
    featuredTag: 'Agro investment'
  }
]

export const featuredListings = listings.filter((listing) => listing.featured)

export const getListingBySlug = (slug: string) => listings.find((listing) => listing.slug === slug)
