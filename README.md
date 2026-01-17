# Allied Electric Website

Professional electrical contractor website for Allied Electric, serving Thunder Bay, Ontario.

## Features

- ✅ Modern, responsive design with mobile-first approach
- ✅ Primary brand color (#80C342) used throughout
- ✅ Strong focus on "Book an Appointment" conversion
- ✅ SEO optimized for local search
- ✅ All sections: Hero, About, Services, Generators, OnCue Plus, Our Work, Book Appointment, Contact, Footer
- ✅ Smooth scroll navigation
- ✅ Click-to-call functionality for mobile users

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   ├── Generators.tsx  # Generator solutions
│   ├── OnCuePlus.tsx   # OnCue Plus system
│   ├── OurWork.tsx     # Portfolio section
│   ├── BookAppointment.tsx # Appointment form
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Footer
└── public/
    └── logo.png        # Company logo
```

## Brand Colors

- **Primary:** #80C342 (Green)
- **Hover:** #6BA836 (Darker green)
- **Text:** Gray scale (900, 700, 600, 400)
- **Background:** White and light gray

## Customization

### Update Contact Information

Edit the contact details in:
- `components/Header.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)

### Form Submission

The appointment form currently uses `mailto:` as a fallback. To integrate with a backend:

1. Update `components/BookAppointment.tsx`
2. Add your API endpoint
3. Handle form submission server-side

### Add Google Maps

Replace the map placeholder in `components/Contact.tsx` with a Google Maps embed:

```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

## SEO

The site includes:
- Meta tags in `app/layout.tsx`
- Semantic HTML structure
- Local SEO keywords (Thunder Bay electrician, etc.)
- Mobile-friendly design
- Fast loading times

## License

© 2024 Allied Electric. All rights reserved.

