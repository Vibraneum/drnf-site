# Component Usage Guide - DRNF Astro Migration

**Created by**: Agent 4
**Date**: November 11, 2025
**Purpose**: Quick reference for using Layout, SEO, and StructuredData components

---

## Component Overview

| Component | Location | Purpose | Lines |
|-----------|----------|---------|-------|
| **Layout.astro** | `src/layouts/Layout.astro` | Base page layout | 129 |
| **SEO.astro** | `src/components/astro/SEO.astro` | Meta tags (OG, Twitter) | 47 |
| **StructuredData.astro** | `src/components/astro/StructuredData.astro` | JSON-LD schema | 79 |

---

## Quick Start: Basic Page

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Page Title"
  description="Page description for SEO (150-160 characters recommended)"
>
  <h1>Your Page Content</h1>
  <p>Content goes here...</p>
</Layout>
```

**Result**: Fully SEO-optimized page with:
- Meta tags (title, description, keywords)
- Open Graph tags (Facebook)
- Twitter Card tags
- Canonical URL
- Geo tags (Hyderabad)
- Default organization structured data
- Google Analytics tracking
- Font Awesome icons
- Google Fonts (Inter, Playfair Display)
- AOS animations
- View Transitions

---

## Advanced: Custom Structured Data

```astro
---
import Layout from '../layouts/Layout.astro';

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Us - Dr. Rabinder Nath Foundation",
  "description": "Learn about our foundation's history and mission",
  "url": "https://drnf.org/about"
};
---

<Layout
  title="About Us"
  description="Learn about Dr. Rabinder Nath Foundation's history, mission, and community impact in Hyderabad."
  keywords="DRNF history, foundation story, community service Hyderabad, Abhishek Nath"
  structuredData={pageSchema}
>
  <h1>About Us</h1>
  <p>Content goes here...</p>
</Layout>
```

---

## Layout.astro Props Reference

### Required Props
```typescript
title: string;           // Page title (e.g., "About Us")
description: string;     // Meta description (150-160 chars)
```

### Optional Props
```typescript
keywords?: string;       // Comma-separated keywords
                        // Default: "Dr. Rabinder Nath Foundation, DRNF, community service..."

ogImage?: string;        // Open Graph image URL
                        // Default: DRNF logo (Cloudinary CDN)

canonicalUrl?: string;   // Canonical URL override
                        // Default: Auto-generated from Astro.url

pageType?: string;       // Open Graph type
                        // Default: "website"
                        // Options: "article", "profile", etc.

structuredData?: object; // Custom JSON-LD schema
                        // Default: Organization schema (NGO type)
```

---

## Examples by Page Type

### Homepage
```astro
<Layout
  title="Dr. Rabinder Nath Foundation - Serving with Compassion"
  description="Community service organization in Hyderabad providing free chai counters, education support, and community programs. 116,800+ cups served, 70+ jobs created."
  keywords="DRNF, Dr. Rabinder Nath Foundation, free chai Hyderabad, community service, NGO Hyderabad, LooCafe partnership"
>
  <!-- Hero section, statistics, etc. -->
</Layout>
```

### About Page
```astro
<Layout
  title="About Us"
  description="Learn about Dr. Rabinder Nath Foundation's mission to serve with compassion. Founded in 2020 in honor of Dr. Rabinder Nath, dental surgeon and social worker."
  keywords="DRNF history, Dr. Rabinder Nath, Abhishek Nath founder, community service Hyderabad"
>
  <!-- About content -->
</Layout>
```

### Program Pages (Free Chai Counters, etc.)
```astro
<Layout
  title="Free Chai Counters"
  description="DRNF operates 2 free chai counters in Hyderabad, serving 500-600 people daily. 116,800+ cups served through partnership with LooCafe network."
  keywords="free chai Hyderabad, LooCafe partnership, community service, tea distribution"
  pageType="article"
>
  <!-- Program details -->
</Layout>
```

### Contact Page
```astro
<Layout
  title="Contact Us"
  description="Get in touch with Dr. Rabinder Nath Foundation. WhatsApp: +91-9966906781, Email: info@drnf.org. Located in Jubilee Hills, Hyderabad."
  keywords="contact DRNF, Hyderabad NGO contact, volunteer inquiry, donation inquiry"
>
  <!-- Contact form, location map, etc. -->
</Layout>
```

---

## SEO Component Features

The SEO component is automatically included in Layout.astro. It provides:

### Open Graph Tags (Facebook)
- `og:type` - Content type (website, article, etc.)
- `og:url` - Page URL
- `og:title` - Page title
- `og:description` - Page description
- `og:image` - Featured image
- `og:site_name` - "Dr. Rabinder Nath Foundation"
- `og:locale` - "en_IN" (English - India)

### Twitter Card Tags
- `twitter:card` - "summary_large_image"
- `twitter:url` - Page URL
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Featured image

### Additional SEO
- **Canonical URL**: Prevents duplicate content penalties
- **Geo Tags**: Hyderabad, Telangana (17.3850, 78.4867)

---

## StructuredData Component Features

### Default Organization Schema

Automatically includes when no custom schema is provided:

```json
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Dr. Rabinder Nath Foundation",
  "alternateName": "DRNF",
  "url": "https://drnf.org",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Abhishek Nath"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Door No: 8, 2-293/82/J/A/101, Journalist Colony",
    "addressLocality": "Jubilee Hills",
    "addressRegion": "Telangana",
    "postalCode": "500033",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9966906781",
    "email": "info@drnf.org"
  },
  "sameAs": [
    "https://www.facebook.com/DrRabinderNathFoundation/",
    "https://www.linkedin.com/company/dr-rabinder-nath-foundation/"
  ]
}
```

### Custom Schema Examples

#### Article Page
```astro
structuredData={{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Free Chai Counters - DRNF Initiative",
  "author": {
    "@type": "Organization",
    "name": "Dr. Rabinder Nath Foundation"
  },
  "datePublished": "2020-01-01",
  "description": "..."
}}
```

#### FAQ Page
```astro
structuredData={{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I volunteer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact us via WhatsApp..."
      }
    }
  ]
}}
```

#### Event Page
```astro
structuredData={{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Community Chai Distribution",
  "startDate": "2025-01-15",
  "location": {
    "@type": "Place",
    "name": "Jubilee Hills, Hyderabad"
  }
}}
```

---

## Built-in Features

### Google Analytics 4
Automatically tracks:
- Page views
- Page title
- Page path

**Tracking ID**: G-BKRC1PBFTM

### Font Awesome 6.4.0
All icons available:
```html
<i class="fas fa-heart"></i>
<i class="fab fa-facebook"></i>
<i class="fas fa-check-circle"></i>
```

### Google Fonts
- **Inter**: Body text (300, 400, 500, 600, 700 weights)
- **Playfair Display**: Headings (400, 500, 600, 700 weights)

Usage:
```css
font-family: 'Inter', sans-serif;
font-family: 'Playfair Display', serif;
```

### AOS Animations
Scroll-triggered animations:
```html
<div data-aos="fade-up">Animates on scroll</div>
<div data-aos="fade-left" data-aos-delay="200">Delayed animation</div>
```

Available animations:
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`
- And more (see AOS docs)

### View Transitions
Automatically enabled between pages for smooth transitions.

---

## Testing Your Pages

### SEO Testing
1. **View Page Source**: Verify all meta tags present
2. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **Google Rich Results Test**: https://search.google.com/test/rich-results
5. **Lighthouse**: Run SEO audit (target 95+)

### Structured Data Validation
```bash
# Extract and validate JSON-LD
cat dist/your-page/index.html | grep -oP '(?<=<script type="application/ld\+json">).*?(?=</script>)' | python3 -m json.tool
```

### Build and Preview
```bash
# Build the site
npm run build

# Preview the built site
npm run preview
# Opens at http://localhost:4321
```

---

## Common Patterns

### Multi-language Support (Future)
```astro
<Layout
  title="About Us"
  description="..."
>
  <SEO
    title="About Us"
    description="..."
    locale="en_IN"  <!-- Future prop -->
  />
</Layout>
```

### Custom OG Image per Page
```astro
<Layout
  title="Free Chai Counters"
  description="..."
  ogImage="https://res.cloudinary.com/.../chai-counter-hero.jpg"
>
  <!-- Content -->
</Layout>
```

### Blog Post with Article Schema
```astro
---
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Our Impact in 2024",
  "datePublished": "2024-12-31",
  "author": {
    "@type": "Organization",
    "name": "Dr. Rabinder Nath Foundation"
  },
  "image": "https://res.cloudinary.com/.../blog-image.jpg"
};
---

<Layout
  title="Our Impact in 2024"
  description="..."
  pageType="article"
  structuredData={articleSchema}
>
  <!-- Blog content -->
</Layout>
```

---

## Best Practices

### Title Tags
- Keep under 60 characters
- Include "Dr. Rabinder Nath Foundation" (auto-appended)
- Be descriptive and keyword-rich
- Example: "Free Chai Counters - DRNF Initiative"

### Meta Descriptions
- Keep between 150-160 characters
- Include primary keyword
- Make it compelling (drives clicks)
- Example: "DRNF operates 2 free chai counters in Hyderabad, serving 500-600 people daily. Learn about our LooCafe partnership and community impact."

### Keywords
- Use 5-10 relevant keywords
- Separate with commas
- Include location (Hyderabad, Telangana)
- Include brand name (DRNF)
- Example: "free chai Hyderabad, DRNF, community service, NGO Telangana, LooCafe"

### Structured Data
- Use specific schema types (WebPage, Article, FAQPage, etc.)
- Include all required fields
- Validate with Google Rich Results Test
- Keep organization info consistent

### Images
- Use descriptive file names
- Always provide alt text
- Optimize file size (target < 200 KB)
- Use Cloudinary CDN for hosting
- Dimensions: 1200x630 for OG images (Facebook)

---

## Troubleshooting

### Meta tags not showing
- Check page source (View Source in browser)
- Verify Layout component is imported
- Ensure title and description props are provided

### Structured data errors
- Validate JSON syntax
- Use Google Rich Results Test
- Check for required fields
- Verify schema type is correct

### Fonts not loading
- Check browser console for errors
- Verify Google Fonts link in Layout.astro
- Clear browser cache

### Icons not showing
- Verify Font Awesome CDN link
- Check icon class names (fas, fab, far)
- Clear browser cache

### Analytics not tracking
- Verify GA4 tracking ID (G-BKRC1PBFTM)
- Check browser console for errors
- Test in GA4 Real-Time view
- Ensure scripts are not blocked (ad blockers)

---

## Resources

### Documentation
- **Astro Docs**: https://docs.astro.build
- **Schema.org**: https://schema.org
- **Font Awesome**: https://fontawesome.com/icons
- **AOS Library**: https://michalsnik.github.io/aos/
- **Google Fonts**: https://fonts.google.com

### Testing Tools
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Google Rich Results**: https://search.google.com/test/rich-results
- **Lighthouse**: Built into Chrome DevTools
- **PageSpeed Insights**: https://pagespeed.web.dev

---

**Guide Version**: 1.0
**Last Updated**: November 11, 2025
**Next Update**: After Header/Footer components (Agent 5)
