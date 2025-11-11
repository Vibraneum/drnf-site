# DRNF Astro Project Structure

## 📁 Directory Organization

```
drnf-astro/
├── src/
│   ├── layouts/              # Page layouts
│   │   └── Layout.astro      # Base layout (header, footer, meta)
│   │
│   ├── pages/                # Astro pages (file-based routing)
│   │   ├── index.astro       # Home page (/)
│   │   ├── about.astro       # About page (/about)
│   │   ├── contact.astro     # Contact page (/contact)
│   │   ├── faq.astro         # FAQ page (/faq)
│   │   ├── chai-counters.astro    # Chai Counters (/chai-counters)
│   │   ├── privacy-policy.astro  # Privacy Policy (/privacy-policy)
│   │   ├── terms-of-service.astro  # Terms of Service (/terms-of-service)
│   │   ├── book.astro        # Heritage Book (/book)
│   │   ├── dr-rabinder-nath.astro # Biography (/dr-rabinder-nath)
│   │   └── test/             # Test pages (not deployed)
│   │       ├── test.astro
│   │       ├── test-header.astro
│   │       └── seo-test.astro
│   │
│   ├── components/
│   │   ├── astro/            # Astro components (static)
│   │   │   ├── Header.astro  # Site header/navigation
│   │   │   ├── Footer.astro  # Site footer
│   │   │   ├── SEO.astro     # SEO meta tags
│   │   │   ├── StructuredData.astro # JSON-LD structured data
│   │   │   └── Card.astro    # Reusable card component
│   │   │
│   │   ├── react/            # React Islands (interactive)
│   │   │   └── Counter.tsx   # Example React component
│   │   │
│   │   └── sections/        # Page section components
│   │       └── (future: Hero, CTA, etc.)
│   │
│   ├── utils/                # Utility functions
│   │   └── (future: helpers, constants, etc.)
│   │
│   └── styles/               # Global styles
│       └── global.css        # Global CSS
│
├── public/                   # Static assets (copied as-is)
│   ├── css/                  # Original CSS files
│   │   ├── style.css
│   │   ├── social-share.css
│   │   └── form-validation.css
│   ├── js/                   # Original JavaScript files
│   │   ├── main.js
│   │   ├── social-share.js
│   │   ├── formValidation.js
│   │   └── analytics.js
│   ├── images/               # Image assets
│   └── favicon.svg
│
├── astro.config.mjs          # Astro configuration
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript configuration
```

## 🗂️ Page Organization

### Main Pages (Root Level)
- **index.astro** - Home page
- **about.astro** - About DRNF
- **contact.astro** - Contact form
- **faq.astro** - Frequently Asked Questions
- **chai-counters.astro** - Free Chai Counters program
- **privacy-policy.astro** - Privacy Policy
- **terms-of-service.astro** - Terms of Service
- **book.astro** - Heritage Book
- **dr-rabinder-nath.astro** - Dr. Rabinder Nath biography

### Test Pages (Not Deployed)
- **test/** - Test pages for development

## 🧩 Component Organization

### Astro Components (`src/components/astro/`)
- **Header.astro** - Site navigation and header
- **Footer.astro** - Site footer with links
- **SEO.astro** - SEO meta tags component
- **StructuredData.astro** - JSON-LD structured data
- **Card.astro** - Reusable card component

### React Components (`src/components/react/`)
- **Counter.tsx** - Example React island component
- (Future: ContactForm, MobileNav, Gallery, etc.)

### Section Components (`src/components/sections/`)
- (Future: Hero sections, CTA sections, etc.)

## 📝 Routing

Astro uses **file-based routing**:
- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about`
- `src/pages/contact.astro` → `/contact`
- `src/pages/legal/privacy-policy.astro` → `/legal/privacy-policy` (if nested)

**Note**: Pages are kept at root level to maintain clean URLs (`/about` not `/about/about`).

## 🎨 Styling

- **Original CSS**: Preserved in `public/css/` (style.css, social-share.css, form-validation.css)
- **Global Styles**: `src/styles/global.css`
- **Component Styles**: Scoped styles within components

## 📦 Assets

- **Images**: `public/images/`
- **JavaScript**: `public/js/` (original scripts preserved)
- **CSS**: `public/css/` (original styles preserved)

## 🔧 Utilities

- **src/utils/** - Shared utility functions (future)

## 📚 Documentation

- **PROJECT_STRUCTURE.md** - This file
- **README.md** - Project overview
- **QUICK_START.md** - Quick start guide


