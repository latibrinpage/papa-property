# Papa Property

A modern property listings website and admin management dashboard for Papa Property Consultant Limited, built with Next.js and Supabase-ready architecture.

## Features
- Public property listings showcase
- Listing detail pages with WhatsApp contact actions
- Admin dashboard for adding listings
- Branding based on the Papa Property poster
- Vercel and Supabase-ready configuration
- Mobile-friendly responsive design

## Tech stack
- Next.js 14
- React 18
- Tailwind CSS
- Supabase ready
- Vercel deployment ready

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npm run dev
   ```

3. Open:
   ```bash
   http://localhost:3000
   ```

## Production deployment

### Deploy to Vercel
1. Push the project to a GitHub repository.
2. Import the repo into Vercel.
3. Set environment variables in the Vercel dashboard.
4. Deploy.

### Supabase setup (recommended for real data)
Create a `.env.local` file with:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Then build database tables for `listings`, `leads`, and `listing_images`.

## Brand information used
- Company: Papa Property Consultant Limited
- Tagline: Your Property, Our Priority
- Contact: 0781158404 / 0759003978
- Location: Kakoba - Mbarara - Musomesa Arced

## Notes
This project is a solid MVP starter. It uses mock listing data for demonstration and can be extended to real Supabase data and admin authentication.
