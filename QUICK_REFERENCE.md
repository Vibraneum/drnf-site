# DRNF Astro - Quick Reference

## Architecture Overview

```
src/
├── layouts/
│   └── Layout.astro          ← Main layout (includes Header/Footer)
├── components/
│   └── astro/
│       ├── Header.astro      ← Navigation (287 lines)
│       └── Footer.astro      ← Footer (157 lines)
└── pages/
    ├── index.astro           ← Homepage (216 lines)
    ├── about.astro           ← About page (118 lines)
    └── ... (15 pages total)
```

## Creating a New Page

```astro
---
import Layout from '../layouts/Layout.astro';

const pageTitle = 'Page Title | DRNF';
const pageDescription = 'SEO description';
---

<Layout title={pageTitle} description={pageDescription} activePage="page-slug">
  <section>
    <h1>Your Content</h1>
    <p>Page content here...</p>
  </section>
</Layout>
```

## Layout Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | Yes | Page title (appears in `<title>` tag) |
| `description` | string | Yes | Meta description for SEO |
| `activePage` | string | No | Current page identifier for nav highlighting |
| `noHeaderFooter` | boolean | No | Disable Header/Footer (for 404, etc.) |
| `keywords` | string | No | Meta keywords (defaults provided) |
| `ogImage` | string | No | Open Graph image URL |
| `canonicalUrl` | string | No | Canonical URL for SEO |
| `pageType` | string | No | Open Graph type (default: 'website') |

## Common Tasks

### Update Navigation
Edit: `/src/components/astro/Header.astro`
- Changes apply to ALL pages automatically

### Update Footer
Edit: `/src/components/astro/Footer.astro`
- Changes apply to ALL pages automatically

### Update SEO Defaults
Edit: `/src/layouts/Layout.astro`
- Modify default keywords, OG image, etc.

### Add New Page to Menu
Edit: `/src/components/astro/Header.astro`
- Add link to desktop nav (lines 57-127)
- Add link to mobile menu (lines 309-364)

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## File Sizes

- Layout.astro: 5.5 KB
- Header.astro: 10.5 KB
- Footer.astro: 4.7 KB
- Average page: 10-30 KB (content only)

## Key Benefits

✅ Change header once → all 18 pages update
✅ Change footer once → all 18 pages update
✅ Zero code duplication
✅ Clean, maintainable structure
✅ Type-safe with TypeScript

---

**Build Status**: ✅ 0 errors, 18 pages, 18.96s
**Last Updated**: November 11, 2025
