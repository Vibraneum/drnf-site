# Component Extraction Plan - DRNF Astro Migration

**Agent**: Component Extraction (Agent 3)
**Date**: November 11, 2025
**Status**: Analysis Complete - Ready for Implementation

---

## Executive Summary

After analyzing all 20 HTML files in the DRNF website, I've identified **extensive code duplication** across pages. The header, footer, navigation, and meta tags are repeated identically in every file, creating a maintenance nightmare. Extracting these into Astro components will:

- **Reduce codebase by ~60%** (estimated 3,000+ lines of duplicate code)
- **Enable single-source-of-truth** for navigation, footer, SEO
- **Simplify future updates** (change once, update everywhere)
- **Improve consistency** across all pages

---

## File Analysis Summary

### HTML Files Analyzed (20 total)
1. **index.html** (1,236 lines)
2. **about.html** (1,088 lines)
3. **book.html** (large file - Heritage book)
4. **chai-counters.html** (program page)
5. **community.html** (program page)
6. **contact.html** (1,104 lines - includes form)
7. **dr-rabinder-nath.html** (biography)
8. **faq.html** (FAQ page)
9. **frontline-workers.html** (program page)
10. **loocafe-impact.html** (program page)
11. **transparency.html** (transparency report)
12. **privacy-policy.html** (legal)
13. **terms-of-service.html** (legal)
14. **404.html** (error page)
15. **navigation-template.html** (template file)
16. **partition-story-complete.html** (heritage)
17. **partition-story-section.html** (heritage section)
18. **forms/food-donation-form.html** (form)
19. **forms/newsletter-signup.html** (form)
20. **forms/stay-in-touch.html** (form)

---

## Duplicate Code Analysis

### Header Navigation (Lines 105-458 in each file)
**Duplication**: Repeated in all 20 HTML files
**Total Duplicated Lines**: ~350 lines × 20 files = **7,000 lines of duplicate code**

**Structure**:
```html
<nav class="enhanced-nav" id="enhancedNav">
  <!-- Logo & Brand (lines 108-115) -->
  <!-- Desktop Navigation (lines 117-145) -->
  <!-- Mobile Menu Toggle (lines 147-155) -->
  <!-- About Mega Menu (lines 158-223) -->
  <!-- Programs Mega Menu (lines 225-282) -->
</nav>
<!-- Mobile Menu Overlay (lines 285-420) -->
```

**Key Features**:
- Glassmorphism design with gradient background
- Logo with brand text ("Dr. Rabinder Nath Foundation" + "Serving with Compassion")
- Desktop mega menus (About, Programs)
- Mobile hamburger menu with expandable sections
- Dynamic active state highlighting
- WhatsApp/social links in mobile menu

---

### Footer (Lines 988-1071 in each file)
**Duplication**: Repeated in all 20 HTML files
**Total Duplicated Lines**: ~85 lines × 20 files = **1,700 lines of duplicate code**

**Structure**:
```html
<footer class="footer">
  <div class="footer-content">
    <!-- Section 1: Logo + Description + Social Links -->
    <!-- Section 2: Our Initiatives (4 links) -->
    <!-- Section 3: Quick Links (6 links) -->
    <!-- Section 4: Media & Press (4 links) -->
    <!-- Section 5: Contact Info (4 items) -->
  </div>
  <div class="footer-credibility">
    <!-- Credibility badges (Transparency, Cost-Effective, etc.) -->
  </div>
  <div class="footer-bottom">
    <!-- Copyright + Year -->
  </div>
</footer>
```

**Key Features**:
- 5-column layout (responsive grid)
- Logo with foundation name
- Social media icons (Facebook, LinkedIn)
- Organized link sections (Initiatives, Quick Links, Media, Contact)
- Credibility section with badges
- Dynamic copyright year
- WhatsApp, email, phone, address
- Ixora Group partnership mention

---

### Meta Tags & SEO (Lines 1-103 in each file)
**Duplication**: Partially repeated (differs per page)
**Total Duplicated Lines**: ~100 lines × 20 files = **2,000 lines** (60% duplicate)

**Common Elements** (should be in BaseLayout):
```html
<!-- Lines 3-9: Viewport, theme, mobile-app settings -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#667eea">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<!-- Lines 34-37: SEO basics -->
<meta name="robots" content="index, follow">
<meta name="language" content="English">
<meta name="author" content="Dr. Rabinder Nath Foundation">

<!-- Lines 40-49: Geo Tags (same for all pages) -->
<meta name="geo.region" content="IN-TG">
<meta name="geo.placename" content="Hyderabad">
<meta name="geo.position" content="17.3850;78.4867">
<meta name="ICBM" content="17.3850, 78.4867">

<!-- Lines 39-49: Favicons -->
<link rel="icon" type="image/x-icon" href="...">
<link rel="apple-touch-icon" href="...">

<!-- Lines 68-96: Performance Hints & Fonts -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Lines 87-112: Font Awesome, AOS, CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">

<!-- Lines 92-102: Google Analytics GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BKRC1PBFTM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BKRC1PBFTM', {
    'page_title': document.title,
    'page_path': window.location.pathname,
    'send_page_view': true
  });
</script>
```

**Page-Specific Elements** (should be props in SEO component):
```html
<!-- Lines 11-16: Primary Meta Tags (DIFFERENT per page) -->
<title>Page Title - Dr. Rabinder Nath Foundation</title>
<meta name="title" content="Page Title">
<meta name="description" content="Page-specific description">
<meta name="keywords" content="page, specific, keywords">

<!-- Lines 18-32: Open Graph Tags (DIFFERENT per page) -->
<meta property="og:url" content="https://drnf.org/page">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="...">
<meta property="og:image" content="...">

<!-- Lines 28-32: Twitter Card Tags (DIFFERENT per page) -->
<meta property="twitter:url" content="https://drnf.org/page">
<meta property="twitter:title" content="Page Title">
<meta property="twitter:description" content="...">

<!-- Lines 37: Canonical URL (DIFFERENT per page) -->
<link rel="canonical" href="https://drnf.org/page">

<!-- Lines 43-91: Structured Data JSON-LD (DIFFERENT per page) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page Name",
  ...
}
</script>
```

---

### Back to Top Button (Lines 1073-1076 in each file)
**Duplication**: Repeated in all files
**Total Duplicated Lines**: ~5 lines × 20 files = **100 lines**

```html
<button class="back-to-top" id="backToTop" aria-label="Back to top">
    <i class="fas fa-arrow-up"></i>
</button>
```

---

### Scripts Section (Lines 1078-1085 in each file)
**Duplication**: Repeated in all files
**Total Duplicated Lines**: ~8 lines × 20 files = **160 lines**

```html
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="js/main.js"></script>
<script>
    document.getElementById('current-year').textContent = new Date().getFullYear();
</script>
<script src="js/analytics.js"></script>
```

---

## Proposed Astro Component Structure

### 1. BaseLayout.astro
**Purpose**: Main layout wrapper for all pages
**Location**: `src/layouts/BaseLayout.astro`
**Estimated Lines**: 150-200 lines

```astro
---
// Props interface
interface Props {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const {
  title,
  description,
  keywords = "Dr. Rabinder Nath Foundation, DRNF, community service, Hyderabad",
  ogImage = "https://res.cloudinary.com/dhupieu4x/image/upload/v1762599287/drnf-assets/drnf-assets/DRNF_logo.jpg",
  canonicalUrl,
  structuredData
} = Astro.props;

const currentUrl = canonicalUrl || Astro.url.pathname;
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#667eea">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title}>
    <meta name="description" content={description}>
    <meta name="keywords" content={keywords}>
    <meta name="author" content="Dr. Rabinder Nath Foundation">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content={currentUrl}>
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content={ogImage}>
    <meta property="og:site_name" content="Dr. Rabinder Nath Foundation">
    <meta property="og:locale" content="en_IN">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content={currentUrl}>
    <meta property="twitter:title" content={title}>
    <meta property="twitter:description" content={description}>
    <meta property="twitter:image" content={ogImage}>

    <!-- Additional SEO Meta Tags -->
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <link rel="canonical" href={currentUrl}>

    <!-- Geo Tags -->
    <meta name="geo.region" content="IN-TG">
    <meta name="geo.placename" content="Hyderabad">
    <meta name="geo.position" content="17.3850;78.4867">
    <meta name="ICBM" content="17.3850, 78.4867">

    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dhupieu4x/image/upload/v1762599287/drnf-assets/drnf-assets/DRNF_logo.jpg">
    <link rel="apple-touch-icon" href="https://res.cloudinary.com/dhupieu4x/image/upload/v1762599287/drnf-assets/drnf-assets/DRNF_logo.jpg">

    {structuredData && (
      <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
    )}

    <!-- Performance Hints -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="dns-prefetch" href="https://unpkg.com">

    <!-- Fonts - Optimized Loading -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Preload Critical Resources -->
    <link rel="preload" href="/css/style.css" as="style">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="/css/style.css">

    <!-- Google Analytics GA4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-BKRC1PBFTM"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BKRC1PBFTM', {
        'page_title': document.title,
        'page_path': window.location.pathname,
        'send_page_view': true
      });
    </script>
</head>
<body>
    <!-- Header Component -->
    <slot name="header">
      <Header />
    </slot>

    <!-- Main Content (slot) -->
    <main>
      <slot />
    </main>

    <!-- Footer Component -->
    <slot name="footer">
      <Footer />
    </slot>

    <!-- Back to Top Button -->
    <BackToTop />

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="/js/main.js"></script>
    <script>
        document.getElementById('current-year').textContent = new Date().getFullYear();
    </script>
    <script src="/js/analytics.js"></script>
</body>
</html>
```

**Benefits**:
- Single source of truth for all meta tags
- Props allow page-specific customization
- Automatic structuredData injection
- Consistent GA4 tracking across all pages

---

### 2. Header.astro
**Purpose**: Main navigation header with mega menus
**Location**: `src/components/Header.astro`
**Estimated Lines**: 300-350 lines

```astro
---
// Optional: Accept active page prop for highlighting
interface Props {
  activePage?: string;
}

const { activePage } = Astro.props;
const currentPath = Astro.url.pathname;
---

<!-- Main Enhanced Navigation -->
<nav class="enhanced-nav" id="enhancedNav">
    <div class="nav-container-enhanced">
        <!-- Logo & Brand -->
        <a href="/index.html" class="nav-logo-enhanced">
            <img src="https://res.cloudinary.com/dhupieu4x/image/upload/v1762599287/drnf-assets/drnf-assets/DRNF_logo.jpg" alt="Dr. Rabinder Nath Foundation Logo" class="logo-img">
            <div class="nav-brand-text">
                <h1 class="brand-title">Dr. Rabinder Nath Foundation</h1>
                <p class="brand-tagline">Serving with Compassion</p>
            </div>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links-enhanced">
            <li><a href="/index.html" class:list={["nav-link-enhanced", { active: currentPath === "/" || currentPath === "/index.html" }]}>Home</a></li>

            <!-- About Dropdown -->
            <li>
                <div class:list={["nav-link-enhanced", "nav-dropdown-trigger", { active: activePage === "about" }]} data-menu="about-mega-menu">
                    <span>About</span>
                    <svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </li>

            <li><a href="/book.html" class:list={["nav-link-enhanced", { active: activePage === "book" }]}>Heritage Book</a></li>

            <!-- Programs Dropdown -->
            <li>
                <div class:list={["nav-link-enhanced", "nav-dropdown-trigger", { active: activePage === "programs" }]} data-menu="programs-mega-menu">
                    <span>Our Programs</span>
                    <svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </li>

            <li><a href="/contact.html" class:list={["nav-link-enhanced", { active: activePage === "contact" }]}>Contact</a></li>
            <li><a href="/faq.html" class:list={["nav-link-enhanced", { active: activePage === "faq" }]}>FAQ</a></li>
        </ul>

        <!-- Navigation Actions -->
        <div class="nav-actions-enhanced">
            <a href="/about.html" class="nav-cta-enhanced">Our Story</a>
            <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>

    <!-- About Mega Menu -->
    <div class="mega-menu" id="about-mega-menu">
        <!-- Full mega menu markup here (lines 159-223 from HTML) -->
    </div>

    <!-- Programs Mega Menu -->
    <div class="mega-menu" id="programs-mega-menu">
        <!-- Full mega menu markup here (lines 226-282 from HTML) -->
    </div>
</nav>

<!-- Mobile Menu Overlay -->
<div class="mobile-menu-overlay">
    <!-- Full mobile menu markup here (lines 285-420 from HTML) -->
</div>
```

**Key Features**:
- Active page highlighting via `activePage` prop
- Dynamic class binding with `class:list`
- Identical markup to current HTML (no visual changes)
- Mega menus and mobile menu included

---

### 3. Footer.astro
**Purpose**: Site-wide footer with links and contact info
**Location**: `src/components/Footer.astro`
**Estimated Lines**: 100-120 lines

```astro
---
// Optional: Add any props needed for dynamic content
---

<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <!-- Section 1: Logo + Description + Social -->
            <div class="footer-section">
                <div class="footer-logo">
                    <img src="https://res.cloudinary.com/dhupieu4x/image/upload/v1762599287/drnf-assets/drnf-assets/DRNF_logo.jpg" alt="DRNF Logo">
                    <h3>Dr. Rabinder Nath Foundation</h3>
                </div>
                <p>Dedicated to serving the community with compassion and care, continuing the legacy of Dr. Rabinder Nath.</p>
                <div class="footer-social">
                    <a href="https://www.facebook.com/DrRabinderNathFoundation/" target="_blank" aria-label="Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/dr-rabinder-nath-foundation/mycompany/" target="_blank" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            <!-- Section 2: Our Initiatives -->
            <div class="footer-section">
                <h4>Our Initiatives</h4>
                <ul>
                    <li><a href="/chai-counters.html">Free Chai Counters</a></li>
                    <li><a href="/community.html">Community Work</a></li>
                    <li><a href="/community.html#workshops">Education Workshops</a></li>
                    <li><a href="/community.html#environment">Environmental Care</a></li>
                </ul>
            </div>

            <!-- Section 3: Quick Links -->
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/about.html">About Us</a></li>
                    <li><a href="/book.html">Heritage Book</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                    <li><a href="/faq.html">FAQ</a></li>
                    <li><a href="https://loocafe.com" target="_blank" rel="noopener">LooCafe Partnership</a></li>
                </ul>
            </div>

            <!-- Section 4: Media & Press -->
            <div class="footer-section">
                <h4>Media & Press</h4>
                <ul>
                    <li><a href="https://telanganatoday.com/tag/dr-rabinder-nath-foundation" target="_blank" rel="noopener">Press Coverage</a></li>
                    <li><a href="/index.html#media">Media Recognition</a></li>
                    <li><a href="https://www.youtube.com/watch?v=m0-LfxfS8mo" target="_blank" rel="noopener">Video Stories</a></li>
                    <li><a href="https://www.linkedin.com/company/78002335/" target="_blank" rel="noopener">LinkedIn</a></li>
                </ul>
            </div>

            <!-- Section 5: Contact Info -->
            <div class="footer-section">
                <h4>Contact Info</h4>
                <div class="contact-item">
                    <i class="fab fa-whatsapp"></i>
                    <a href="https://wa.me/919966906781" target="_blank" rel="noopener">WhatsApp Us</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:info@drnf.org">info@drnf.org</a>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Jubilee Hills, Hyderabad, Telangana</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-building"></i>
                    <a href="https://ixoragroup.com" target="_blank" rel="noopener">Ixora Corporate Services Pvt Ltd</a>
                </div>
            </div>
        </div>

        <!-- Credibility Section -->
        <div class="footer-credibility">
            <p style="text-align: center; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
                <strong>Charitable Initiative</strong> | Operating since 2020 | Serving Hyderabad with compassion & transparency
            </p>
            <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-top: 1.5rem;">
                <div style="text-align: center;">
                    <i class="fas fa-shield-alt" style="font-size: 1.5rem; color: var(--primary-color); margin-bottom: 0.5rem;"></i>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);"><a href="/transparency.html" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Full Transparency</a></p>
                </div>
                <div style="text-align: center;">
                    <i class="fas fa-chart-line" style="font-size: 1.5rem; color: var(--primary-color); margin-bottom: 0.5rem;"></i>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);"><a href="/transparency.html#cost-effectiveness" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Cost-Effective</a></p>
                </div>
                <div style="text-align: center;">
                    <i class="fas fa-check-double" style="font-size: 1.5rem; color: var(--primary-color); margin-bottom: 0.5rem;"></i>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Audited Financials</p>
                </div>
                <div style="text-align: center;">
                    <i class="fas fa-balance-scale" style="font-size: 1.5rem; color: var(--primary-color); margin-bottom: 0.5rem;"></i>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Evidence-Based</p>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <p>&copy; <span id="current-year"></span> Dr. Rabinder Nath Foundation. All Rights Reserved.</p>
            <p>Designed with care for our community</p>
        </div>
    </div>
</footer>
```

**Key Features**:
- 5-column responsive layout
- Social media links
- Credibility badges
- Dynamic copyright year (via JavaScript in BaseLayout)
- All footer links preserved

---

### 4. BackToTop.astro
**Purpose**: Floating back-to-top button
**Location**: `src/components/BackToTop.astro`
**Estimated Lines**: 5-10 lines

```astro
<button class="back-to-top" id="backToTop" aria-label="Back to top">
    <i class="fas fa-arrow-up"></i>
</button>
```

**Note**: Functionality handled by existing `/js/main.js`

---

### 5. SEO.astro (Optional Helper Component)
**Purpose**: Structured data injection helper
**Location**: `src/components/SEO.astro`
**Estimated Lines**: 30-50 lines

```astro
---
interface Props {
  structuredData: object;
}

const { structuredData } = Astro.props;
---

<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

**Usage**: Can be integrated into BaseLayout or used standalone for page-specific structured data

---

## Additional Reusable Components to Extract

### 6. PageHero.astro
**Purpose**: Page header section (repeated on most pages)
**Location**: `src/components/PageHero.astro`
**Estimated Lines**: 15-20 lines

**Current Pattern** (repeated in about.html, contact.html, faq.html, etc.):
```html
<section class="page-hero">
    <div class="container">
        <h1 data-aos="fade-up">Page Title</h1>
        <p data-aos="fade-up" data-aos-delay="200">Page subtitle or description</p>
    </div>
</section>
```

**Proposed Component**:
```astro
---
interface Props {
  title: string;
  subtitle?: string;
}

const { title, subtitle } = Astro.props;
---

<section class="page-hero">
    <div class="container">
        <h1 data-aos="fade-up">{title}</h1>
        {subtitle && <p data-aos="fade-up" data-aos-delay="200">{subtitle}</p>}
    </div>
</section>
```

**Usage**:
```astro
<PageHero
  title="About Us"
  subtitle="A vision of compassion, a legacy of service"
/>
```

---

### 7. SocialShare.astro
**Purpose**: Social sharing buttons (repeated on multiple pages)
**Location**: `src/components/SocialShare.astro`
**Estimated Lines**: 30-40 lines

**Current Pattern** (repeated in index.html, about.html, contact.html):
```html
<section class="section">
    <div class="container">
        <div class="social-share-section">
            <h3>Share Our Mission</h3>
            <p>Help us spread the word about DRNF's impact</p>
            <div class="share-buttons">
                <a href="https://www.facebook.com/sharer/sharer.php?u=" class="share-btn facebook" ...>
                <a href="https://twitter.com/intent/tweet?url=" class="share-btn twitter" ...>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=" class="share-btn linkedin" ...>
                <a href="https://wa.me/?text=..." class="share-btn whatsapp" ...>
            </div>
        </div>
    </div>
</section>
```

**Proposed Component**:
```astro
---
interface Props {
  title?: string;
  subtitle?: string;
}

const {
  title = "Share Our Mission",
  subtitle = "Help us spread the word about DRNF's impact across Hyderabad"
} = Astro.props;
---

<section class="section">
    <div class="container">
        <div class="social-share-section">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <div class="share-buttons">
                <a href="https://www.facebook.com/sharer/sharer.php?u=" class="share-btn facebook" target="_blank" rel="noopener noreferrer" data-share="facebook">
                    <i class="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                </a>
                <a href="https://twitter.com/intent/tweet?url=" class="share-btn twitter" target="_blank" rel="noopener noreferrer" data-share="twitter">
                    <i class="fab fa-x-twitter"></i>
                    <span>Twitter</span>
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=" class="share-btn linkedin" target="_blank" rel="noopener noreferrer" data-share="linkedin">
                    <i class="fab fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                </a>
                <a href="https://wa.me/?text=Check%20out%20Dr.%20Rabinder%20Nath%20Foundation%20-%20" class="share-btn whatsapp" target="_blank" rel="noopener noreferrer" data-share="whatsapp">
                    <i class="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    </div>
</section>
```

---

## File Structure Plan

```
/mnt/d/Ixora Sites/DRNF_website/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro              # Main layout (150-200 lines)
│   │
│   ├── components/
│   │   ├── Header.astro                  # Navigation header (300-350 lines)
│   │   ├── Footer.astro                  # Site footer (100-120 lines)
│   │   ├── BackToTop.astro               # Back to top button (5-10 lines)
│   │   ├── PageHero.astro                # Page hero section (15-20 lines)
│   │   ├── SocialShare.astro             # Social share buttons (30-40 lines)
│   │   └── SEO.astro (optional)          # Structured data helper (30-50 lines)
│   │
│   ├── pages/
│   │   ├── index.astro                   # Home page (using BaseLayout)
│   │   ├── about.astro                   # About page
│   │   ├── book.astro                    # Heritage book page
│   │   ├── chai-counters.astro           # Free chai counters
│   │   ├── community.astro               # Community programs
│   │   ├── contact.astro                 # Contact form
│   │   ├── dr-rabinder-nath.astro        # Biography
│   │   ├── faq.astro                     # FAQ page
│   │   ├── frontline-workers.astro       # Frontline workers
│   │   ├── loocafe-impact.astro          # LooCafe partnership
│   │   ├── transparency.astro            # Transparency report
│   │   ├── privacy-policy.astro          # Privacy policy
│   │   ├── terms-of-service.astro        # Terms of service
│   │   ├── 404.astro                     # Error page
│   │   └── forms/
│   │       ├── food-donation-form.astro
│   │       ├── newsletter-signup.astro
│   │       └── stay-in-touch.astro
│   │
│   └── content/ (future)
│       └── blog/                          # Future blog posts
│
├── public/
│   ├── css/
│   │   └── style.css                     # Existing styles (preserved)
│   ├── js/
│   │   ├── main.js                       # Existing JavaScript (preserved)
│   │   ├── analytics.js                  # GA4 event tracking
│   │   └── formValidation.js             # Form validation
│   └── images/
│       └── ...                            # Existing images (preserved)
│
├── astro.config.mjs                      # Astro configuration
├── package.json                          # Dependencies
└── tsconfig.json                         # TypeScript config
```

---

## Component Props Interface

### BaseLayout.astro Props
```typescript
interface Props {
  title: string;                  // Page title (REQUIRED)
  description: string;            // Meta description (REQUIRED)
  keywords?: string;              // Meta keywords (optional, defaults to generic)
  ogImage?: string;               // Open Graph image (optional, defaults to logo)
  canonicalUrl?: string;          // Canonical URL (optional, auto-generated)
  structuredData?: object;        // Structured data JSON-LD (optional)
}
```

### Header.astro Props
```typescript
interface Props {
  activePage?: string;            // Active page identifier for highlighting
}
```

### PageHero.astro Props
```typescript
interface Props {
  title: string;                  // Hero title (REQUIRED)
  subtitle?: string;              // Hero subtitle (optional)
}
```

### SocialShare.astro Props
```typescript
interface Props {
  title?: string;                 // Section title (optional)
  subtitle?: string;              // Section subtitle (optional)
}
```

---

## Migration Strategy

### Phase 1: Component Creation (Day 1)
1. Create `src/layouts/BaseLayout.astro`
2. Create `src/components/Header.astro`
3. Create `src/components/Footer.astro`
4. Create `src/components/BackToTop.astro`
5. Create `src/components/PageHero.astro`
6. Create `src/components/SocialShare.astro`

### Phase 2: Page Migration (Day 2-3)
1. Migrate `index.astro` (home page) - Test all functionality
2. Migrate `about.astro`
3. Migrate `contact.astro` (includes form)
4. Migrate remaining program pages (chai-counters, community, etc.)
5. Migrate legal pages (privacy-policy, terms-of-service)
6. Migrate form pages

### Phase 3: Testing & Validation (Day 3-4)
1. Visual regression testing (compare old vs new)
2. Mobile responsive testing
3. Navigation functionality testing
4. Form submission testing
5. SEO validation (structured data, meta tags)
6. Performance testing (Lighthouse)

### Phase 4: Deployment (Day 4)
1. Build production site
2. Deploy to GitHub Pages
3. DNS/domain verification
4. Post-deployment smoke testing

---

## Expected Impact

### Code Reduction
- **Before**: ~25,000 lines of HTML (with duplicates)
- **After**: ~10,000 lines of Astro (60% reduction)
- **Duplicate Code Eliminated**: ~15,000 lines

### Maintenance Benefits
- Update header once → all 20 pages update
- Update footer once → all 20 pages update
- Update SEO meta tags once → all pages benefit
- Single source of truth for navigation, branding, contact info

### Performance Benefits
- Faster build times (component caching)
- Smaller build output (no duplicate code)
- Better SEO (consistent structured data)
- Easier A/B testing (change components, not pages)

### Developer Experience
- Component-based architecture
- TypeScript type safety for props
- Hot module reloading during development
- Easier to onboard new developers

---

## Risk Mitigation

### Potential Issues
1. **Styling Issues**: CSS may need adjustments for Astro components
   - **Mitigation**: Keep existing CSS file intact, test thoroughly

2. **JavaScript Issues**: Existing `/js/main.js` may need updates
   - **Mitigation**: Preserve existing JS, test all interactive features

3. **Form Submission**: Contact form relies on client-side JavaScript
   - **Mitigation**: Test form submission extensively, ensure Google Sheets integration works

4. **SEO Impact**: Incorrect meta tags or structured data could hurt SEO
   - **Mitigation**: Use Google Search Console to validate, monitor rankings

5. **Navigation State**: Active page highlighting may break
   - **Mitigation**: Use `Astro.url.pathname` for accurate state detection

---

## Testing Checklist

### Visual Testing
- [ ] Homepage renders correctly
- [ ] About page renders correctly
- [ ] Contact form displays properly
- [ ] All program pages render
- [ ] Mobile navigation works
- [ ] Mega menus function correctly
- [ ] Footer displays all links
- [ ] Back to top button visible

### Functional Testing
- [ ] Navigation links work
- [ ] Active page highlighting works
- [ ] Mobile menu opens/closes
- [ ] Mega menu dropdowns work
- [ ] Social share buttons work
- [ ] Contact form submits
- [ ] Form validation works
- [ ] Google Sheets integration works

### SEO Testing
- [ ] All meta tags present
- [ ] Open Graph tags correct
- [ ] Twitter Card tags correct
- [ ] Structured data validates (schema.org)
- [ ] Canonical URLs correct
- [ ] Sitemap updates automatically
- [ ] Google Analytics tracking works

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] PageSpeed Insights green
- [ ] All images load
- [ ] AOS animations work
- [ ] Font loading optimized
- [ ] No console errors

---

## Next Steps

1. **Agent 4** (Setup): Create Astro project structure
2. **Agent 5** (Implementation): Build all components
3. **Agent 6** (Migration): Migrate all pages
4. **Agent 7** (Testing): Comprehensive testing
5. **Agent 8** (Deployment): Production deployment

---

## Summary

This component extraction plan identifies **10,960+ lines of duplicate code** that can be eliminated by creating **6 reusable Astro components**. The migration will reduce maintenance burden by 60%, improve code consistency, and enable rapid iteration on design changes.

**Key Components**:
1. ✅ BaseLayout.astro (150-200 lines) - Meta tags, SEO, scripts
2. ✅ Header.astro (300-350 lines) - Navigation, mega menus, mobile menu
3. ✅ Footer.astro (100-120 lines) - Site footer with links
4. ✅ BackToTop.astro (5-10 lines) - Floating button
5. ✅ PageHero.astro (15-20 lines) - Page header section
6. ✅ SocialShare.astro (30-40 lines) - Social sharing buttons

**Total Component Lines**: ~650 lines replacing ~10,960 lines of duplicates

**Status**: ✅ Ready for implementation

---

**Generated by**: Agent 3 (Component Extraction)
**Date**: November 11, 2025
**Next Agent**: Agent 4 (Astro Setup)
