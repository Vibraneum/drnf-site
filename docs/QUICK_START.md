# DRNF Astro - Quick Start Guide

## For Next Agent/Developer

### Project Location
```bash
cd "/mnt/d/Ixora Sites/drnf-astro"
```

---

## 5-Minute Quick Start

### 1. Start Development Server
```bash
npm run dev
```
Opens at: http://localhost:4321

### 2. View Test Page
Navigate to: http://localhost:4321/test
- See React and Astro components in action
- Verify Tailwind styling works

### 3. Create New Page
```bash
# Create new file in src/pages/
touch src/pages/about.astro
```

Example content:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="About DRNF">
  <main class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-green-800">About Us</h1>
    <p class="mt-4 text-gray-700">Your content here...</p>
  </main>
</Layout>
```

### 4. Create New Component

#### Astro Component (Static)
```astro
<!-- src/components/astro/Button.astro -->
---
interface Props {
  text: string;
  href?: string;
}
const { text, href = '#' } = Astro.props;
---

<a href={href} class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
  {text}
</a>
```

#### React Component (Interactive)
```tsx
// src/components/react/DonationForm.tsx
import { useState } from 'react';

export default function DonationForm() {
  const [amount, setAmount] = useState('');

  return (
    <form className="p-6 bg-white rounded-lg shadow-md">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Enter amount"
      />
      <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded">
        Donate
      </button>
    </form>
  );
}
```

Use in page:
```astro
---
import DonationForm from '../components/react/DonationForm';
---

<DonationForm client:load />
```

### 5. Build for Production
```bash
npm run build
```
Output: `dist/` directory

---

## File Organization

### Pages go in: `src/pages/`
- `index.astro` → `/` (homepage)
- `about.astro` → `/about`
- `contact.astro` → `/contact`
- Automatic routing based on filename

### Components go in:
- **Static**: `src/components/astro/` (no JS)
- **Interactive**: `src/components/react/` (with client-side JS)

### Layouts go in: `src/layouts/`
- Use `Layout.astro` as base
- Create custom layouts as needed

### Styles go in: `src/styles/`
- Global styles in `global.css`
- Tailwind utilities everywhere

---

## Tailwind Classes Reference

### DRNF Color Scheme
```css
/* Primary Colors */
.text-green-800    /* Forest Green - headers */
.bg-green-600      /* Green - buttons */
.text-orange-600   /* Orange - accents */
.text-brown-700    /* Brown - secondary text */

/* Backgrounds */
.bg-gray-50        /* Light background */
.bg-white          /* Content backgrounds */

/* Shadows & Borders */
.shadow-md         /* Medium shadow */
.rounded-lg        /* Large rounded corners */
.border            /* Default border */
```

### Common Patterns
```html
<!-- Container -->
<div class="container mx-auto px-4 py-16">

<!-- Card -->
<div class="p-6 bg-white rounded-lg shadow-md">

<!-- Button -->
<button class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">

<!-- Grid -->
<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
```

---

## React Component Hydration

### Options
```astro
<!-- Load immediately -->
<Counter client:load />

<!-- Load when page is idle -->
<Counter client:idle />

<!-- Load when visible -->
<Counter client:visible />

<!-- Load on mobile only -->
<Counter client:media="(max-width: 768px)" />

<!-- No SSR, client only -->
<Counter client:only="react" />
```

**Recommendation**: Use `client:load` for important interactive features, `client:idle` for everything else.

---

## View Transitions

### Already enabled in Layout.astro!

To disable on specific links:
```html
<a href="/about" data-astro-reload>No transition</a>
```

To customize transition:
```html
<div transition:name="hero" transition:animate="slide">
  Content here
</div>
```

---

## Common Tasks

### Add New Page
1. Create `src/pages/pagename.astro`
2. Import Layout
3. Add content
4. Auto-routes to `/pagename`

### Add Navigation
```astro
<!-- src/components/astro/Nav.astro -->
<nav class="bg-green-800 text-white">
  <div class="container mx-auto px-4 py-4">
    <ul class="flex gap-6">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/initiatives">Initiatives</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>
```

Add to Layout.astro:
```astro
<body>
  <Nav />
  <slot />
  <Footer />
</body>
```

### Add Images
1. Put images in `public/images/`
2. Reference as `/images/filename.jpg`
```html
<img src="/images/chai-counter.jpg" alt="Chai Counter" />
```

Or use Astro Image (optimized):
```astro
---
import { Image } from 'astro:assets';
import chaiImg from '../assets/chai-counter.jpg';
---

<Image src={chaiImg} alt="Chai Counter" />
```

---

## Debugging

### Check TypeScript Errors
```bash
npm run astro check
```

### View Build Output
```bash
npm run build
# Check dist/ folder
```

### Clear Cache
```bash
rm -rf .astro dist node_modules/.vite
npm run dev
```

---

## Environment Setup (if needed)

### Add .env file
```bash
# .env
PUBLIC_SITE_URL=https://drnf.org
SECRET_API_KEY=your-secret-key
```

Access in components:
```astro
---
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
---
```

---

## Deployment

### Build
```bash
npm run build
```

### Deploy dist/ folder to:
- GitHub Pages
- Vercel
- Netlify
- Any static host

---

## Need Help?

### Documentation
- Full setup: See `PROJECT_SETUP.md`
- Agent report: See `AGENT_1_REPORT.md`
- Astro docs: https://docs.astro.build

### Test Page
Visit `/test` to see working examples of:
- Astro components
- React components
- Tailwind styling
- View transitions

---

## Quick Reference

### Dev Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview build locally
```

### File Extensions
- `.astro` - Astro component (static or with JS)
- `.tsx` - React component (TypeScript)
- `.ts` - TypeScript file
- `.css` - Stylesheet

### Import Paths
```typescript
// Layouts
import Layout from '../layouts/Layout.astro';

// Astro components
import Card from '../components/astro/Card.astro';

// React components
import Counter from '../components/react/Counter';

// Styles
import '../styles/global.css';
```

---

## DRNF Specific Notes

### Color Scheme (from original site)
- **Primary**: Forest Green `#2c5530`
- **Secondary**: Saddle Brown `#8b4513`
- **Accent**: Orange `#f39c12`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Key Pages to Migrate
1. Home
2. About
3. Initiatives (Four Pillars)
4. Tea Counter
5. Community Support
6. Education & Sanitation
7. Environment & Animal Welfare
8. Get Involved
9. Contact

### Important Features
- Free Chai Counter map/locations
- Impact metrics (116,800+ cups, 70+ jobs)
- Donation forms
- Volunteer registration
- Partnership logos (LooCafe, Ixora Group)

---

**Ready to start! All tools are set up and working.**

Questions? Check the detailed docs or the test page at `/test`.

Happy coding! 🚀
