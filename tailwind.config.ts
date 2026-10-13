const path = require('path')

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        papa: {
          navy: '#0d1b4d',
          blue: '#0c2d7d',
          red: '#d9222a',
          light: '#f5f3ef',
          gold: '#f6c66f',
          dark: '#111827'
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(13,27,77,0.88), rgba(12,45,125,0.78)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80')"
      },
      boxShadow: {
        papa: '0 16px 40px rgba(13, 27, 77, 0.18)'
      }
    }
  },
  plugins: []
}
