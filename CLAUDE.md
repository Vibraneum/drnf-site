# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Website Purpose & Philosophy

**IMPORTANT**: This website is an **information-focused showcase**, not a volunteer recruitment platform.

> "It is a site to express our work in detail and what we are, what we believe in, our daily impact and more"

### Primary Purpose
- Showcase the foundation's daily work and community impact (500-600 people served daily)
- Share Dr. Rabinder Nath's legacy and the foundation's story
- Highlight community service programs and initiatives
- Communicate the foundation's beliefs, values, and mission
- Enable information discovery and exploration

### What This Site Is NOT
- ❌ A volunteer recruitment platform
- ❌ A donation-focused fundraising site
- ❌ An action-oriented campaign site

### What This Site IS
- ✅ An information-rich showcase of community service work
- ✅ A storytelling platform for Dr. Rabinder Nath's legacy
- ✅ A detailed presentation of programs and daily impact
- ✅ An educational resource about the foundation's values

**When making changes**: Always prioritize information discovery over action-oriented CTAs. Contact options should be available but not pushy.

## Organization Overview

### Dr. Rabinder Nath Foundation (DRNF)
- **Founded**: 2016
- **Location**: Hyderabad, Telangana, India
- **Mission**: Community service organization dedicated to serving with compassion and care
- **Named After**: Late Vijayshree Dr. Rabinder Nath (dental surgeon, social worker, and pioneer in Hyderabad)
- **Founder**: Abhishek Nath (Managing Director & CEO of Ixora Corporate Services Pvt Ltd)

### Core Initiatives
1. **Free Chai Counters**: 2 active locations in Hyderabad, serving 1,16,800+ cups (24/7 operation, 365 days)
2. **Community Support Programs**: Ongoing donation drives and community assistance (historical support ~₹5,00,000)
3. **Sanitation & Education Workshops**: Educational support for 70+ students at Abhi Sai Datta Trust
4. **Environmental Conservation**: Tree plantation drives and sustainability programs
5. **Animal Welfare**: Support for rescue organizations and individual rescue workers

### Strategic Partnerships
- **LooCafe**: Partnership leveraging 270+ locations across Hyderabad; piloted across 30 LooCafes (2022-2023)
- **Ixora Group**: Primary institutional support (parent organization of founder)
- **Kadak Chai**: Chai supply partnership
- **Abhi Sai Datta Trust**: Educational workshop partnership for orphanage support

### Employment Impact
- 40+ full-time associates currently employed
- 70+ jobs created through various programs
- Focus on meaningful employment while serving community

## Website Architecture

This is a **static website** deployed to **GitHub Pages** at **drnf.org**.

### Technology Stack
- **HTML5**: Semantic markup with comprehensive SEO meta tags
- **CSS3**: Custom properties, Flexbox/Grid layouts, mobile-first responsive design
- **Vanilla JavaScript**: No framework dependencies, DOM manipulation only
- **Animation Library**: AOS (Animate On Scroll) v2.3.1
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Manrope for body text, Playfair Display for headings)

### Project Structure
```
DRNF_website/
├── index.html                          # Main landing page with modern hero section
├── about.html                          # About page with foundation story
├── book.html                           # Heritage book page
├── faq.html                            # FAQ page with structured data
├── contact.html                        # Contact page with form
├── chai-counters.html                  # Free chai counters program
├── community.html                      # Community support programs
├── dr-rabinder-nath.html              # Dr. Rabinder Nath biography
├── privacy-policy.html                 # Privacy policy
├── terms-of-service.html               # Terms of service
├── navigation-template.html            # Navigation template for consistency
├── css/
│   ├── style.css                       # All styles (responsive, animations, components)
│   └── social-share.css                # Social sharing button styles
├── js/
│   ├── main.js                         # Interactive features (navigation, animations)
│   └── social-share.js                 # Social sharing functionality
├── images/                             # Website images and media
│   ├── DRNF_logo.jpg                   # Foundation logo
│   ├── rabinder_nath2.1.jpg
│   ├── loocafe_no_bg_collage.png
│   └── [various images and videos]
├── sitemap.xml                         # SEO sitemap
├── robots.txt                          # Search engine instructions
├── CNAME                               # Domain configuration (drnf.org)
├── .nojekyll                           # Prevents Jekyll processing on GitHub Pages
├── CLAUDE.md                           # This file - Development documentation
├── MOBILE_FIX_SUMMARY.md               # Mobile navigation fixes documentation
├── WEBSITE_REFOCUS_SUMMARY.md          # Complete refocus documentation (Nov 2025)
└── .github/
    └── workflows/
        └── static.yml                  # GitHub Actions deployment workflow
```

### Key Website Sections (index.html)
1. **Hero Section** (`#hero`): Modern design with statistics (500-600 people served daily, 1,16,800+ cups, 2 counters, 70+ jobs)
   - **CTAs**: "Our Story" (primary), "Get in Touch" (secondary)
   - **Background**: Clean white/gray gradient for excellent readability
   - **Updated**: November 2025 - Complete redesign for clarity
2. **Social Media** (`#socials`): Facebook and LinkedIn links
3. **About** (`#about`): Foundation legacy and Dr. Rabinder Nath's story with YouTube videos
4. **Free Chai Counters** (`#chai-counters`): LooCafe partnership, media coverage, expansion plans
5. **Community Initiatives** (`#donations`): Ongoing community work and support programs
6. **Workshops** (`#workshops`): Sanitation and education workshops
7. **Environment** (`#environment`): Tree plantation and animal welfare initiatives
8. **Books** (`#books`): Literary legacy (7+ books, Punjabi Nationalism book relaunch)
9. **Discover Our Work** (`#get-involved`): Information-focused CTA section (formerly volunteer-focused)
   - Features: Daily Chai Service, Education Support, Community Care
10. **Contact** (`#contact`): WhatsApp, email, office location, general inquiries

## Development Commands

### Deployment
This website uses **GitHub Actions** for automatic deployment to GitHub Pages.

**Workflow File**: `.github/workflows/static.yml`

**Automatic Deployment**:
- Triggered on push to `main` branch
- Can also be triggered manually via GitHub Actions UI (workflow_dispatch)
- Deploys entire repository to GitHub Pages
- No build process required (static site)

**Manual Deployment** (if needed):
```bash
# Push to main branch triggers automatic deployment
git add .
git commit -m "Update website content"
git push origin main
```

### Local Development
No build process is required. Simply open HTML files in a browser:

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use a simple HTTP server for full functionality
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use Node.js http-server
npx http-server -p 8000
```

### Testing
Since this is a static site, testing primarily involves:
1. **Browser Testing**: Open in Chrome, Firefox, Safari, Edge
2. **Mobile Testing**: Use browser DevTools responsive mode or test on actual devices
3. **SEO Testing**: Use Google Lighthouse or PageSpeed Insights
4. **Link Testing**: Manually verify all internal and external links work

## Content & SEO

### Primary Domain & Contact
- **Website**: https://drnf.org
- **WhatsApp**: +91 9966906781 (primary contact - Vedanth Nath)
- **Email**: info@drnf.org / hello@ixoragroup.com
- **Office**: Door No: 8, 2-293/82/J/A/101, Journalist Colony, Jubilee Hills, Hyderabad, Telangana 500033
- **Facebook**: https://www.facebook.com/DrRabinderNathFoundation/
- **LinkedIn**: https://www.linkedin.com/company/dr-rabinder-nath-foundation/

### Important External Links Referenced
- **LooCafe**: https://loocafe.com
- **LooCafe Toilet Tales**: https://loocafe.com/toilettales
- **Ixora Group**: https://ixoragroup.com
- **Telangana Today Article**: https://telanganatoday.com/charitable-trust-launches-free-chai-counter-in-hyderabad
- **YouTube Videos**: Multiple embedded videos for foundation story and media coverage

### SEO Implementation
- **Structured Data**: Organization and NGO schema (founded 2020)
- **Meta Tags**: Comprehensive Open Graph and Twitter Card tags
- **Geo Tags**: Hyderabad, Telangana (17.3850, 78.4867)
- **Sitemap**: sitemap.xml with all major sections
- **Robots.txt**: Proper crawling instructions
- **Canonical URLs**: Set to https://drnf.org/

### Statistics & Numbers (Keep Updated)
- **1,16,800+ cups** of tea served
- **2 active chai counters** in Hyderabad
- **70+ jobs** created
- **40+ full-time associates** currently employed
- **270+ LooCafe locations** (partnership network)
- **30 LooCafes** piloted (2022-2023)
- **6 months** of meals supported at Abhi Sai Datta Trust
- **70 students** at Abhi Sai Datta Trust supported

## Design System

**Last Updated**: November 17, 2025
**Major Redesign**: Issues #2 and #3 - Enhanced visual identity with atmospheric depth

### Design Philosophy

The DRNF design system emphasizes **warmth, approachability, and depth** through:
- **Atmospheric backgrounds** with subtle radial gradients for visual interest
- **Bold accent colors** (teal, terracotta) for emotional storytelling
- **Multi-layered shadows** for depth and hierarchy
- **Rich color palette** with 7-tone green scale for versatility
- **Modern typography** (Manrope + Playfair Display) for professional readability

### Color Palette

#### Primary Colors (7-Tone Green Scale)
The foundation of DRNF's brand identity, providing versatility for all design needs:

```css
--primary-color: #2c5530;        /* Forest Green - main brand color */
--primary-50: #e8f0ea;           /* Lightest green tint - subtle backgrounds */
--primary-100: #c4dbc9;          /* Very light green - soft accents */
--primary-300: #78a67e;          /* Medium light green - borders, dividers */
--primary-light: #3d7545;        /* Lighter green - hover states */
--primary-dark: #1a3320;         /* Darker green - depth, shadows */
--primary-900: #0f1d13;          /* Deepest green shade - high contrast text */
```

**Usage Guide**:
- `--primary-color`: Primary buttons, links, brand elements
- `--primary-50` to `--primary-300`: Backgrounds, cards, subtle highlights
- `--primary-light`: Hover states, interactive elements
- `--primary-dark` & `--primary-900`: Text on light backgrounds, footer, depth

#### Secondary Colors
```css
--secondary-color: #8b4513;      /* Saddle Brown - complementary to green */
--secondary-light: #a0522d;      /* Lighter brown - warm accents */
--secondary-dark: #6b3410;       /* Darker brown - depth */
```

**Usage**: Gradients, dual-tone designs, warm sections

#### Accent Colors - The Bold Palette
New accent colors added for emotional storytelling and visual variety:

```css
--accent-color: #f39c12;         /* Warm Orange - primary CTA color */
--accent-hover: #e67e22;         /* Darker orange - hover states */
--accent-teal: #0d7377;          /* Deep Teal - modern/innovative content */
--accent-teal-light: #14919b;    /* Lighter teal - gradients */
--accent-terracotta: #c1666b;    /* Warm Terracotta - emotional/personal stories */
--accent-terracotta-light: #d48a8e; /* Lighter terracotta - gradients */
```

**Color Strategy**:
- **Teal** (`--accent-teal`): Use for modern, innovative, or technology-related content
- **Terracotta** (`--accent-terracotta`): Use for emotional stories, personal narratives, community impact
- **Orange** (`--accent-color`): Primary CTA buttons, urgent actions
- **Warm tones**: Community-focused sections, partnership highlights
- **Green tints**: Brand-aligned sections, environmental initiatives

#### Text Colors
```css
--text-primary: #1a202c;         /* Almost black - maximum readability */
--text-secondary: #4a5568;       /* Medium gray - secondary text */
--text-light: #718096;           /* Light gray - subtle text, captions */
```

#### Background Colors
```css
--background-light: #f7fafc;     /* Very light gray - page background */
--background-white: #ffffff;     /* Pure white - cards, sections */
--background-dark: #2d3748;      /* Dark gray - dark sections, footer */
--border-light: #e2e8f0;         /* Light border color */
```

#### Utility Colors
```css
--success-color: #38a169;        /* Green - success states */
--info-color: #3182ce;           /* Blue - informational content */
--warning-color: #dd6b20;        /* Orange - warnings */
```

### Gradient System

#### Core Gradients
```css
--gradient-primary: linear-gradient(135deg, #2c5530 0%, #3d7545 100%);
--gradient-secondary: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
--gradient-accent: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
--gradient-teal: linear-gradient(135deg, #0d7377 0%, #14919b 100%);
--gradient-terracotta: linear-gradient(135deg, #c1666b 0%, #d48a8e 100%);
```

#### Special Gradients
```css
/* Hero Section - Multi-layered atmospheric gradient */
--gradient-hero:
    radial-gradient(ellipse at 80% 20%, rgba(232, 240, 234, 0.6) 0%, transparent 50%),
    radial-gradient(ellipse at 20% 80%, rgba(196, 219, 201, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 60% 60%, rgba(255, 255, 255, 0.8) 0%, transparent 60%),
    linear-gradient(135deg, #e8f0ea 0%, #ffffff 40%, #c4dbc9 100%);

/* Card Backgrounds - Subtle depth */
--gradient-card: linear-gradient(145deg, #ffffff 0%, #f7fafc 100%);

/* Dark Overlays - For images with text */
--gradient-overlay: linear-gradient(135deg, rgba(44,85,48,0.95) 0%, rgba(61,117,69,0.9) 100%);
```

**Gradient Usage**:
- `--gradient-primary`: Primary buttons, CTAs, brand elements
- `--gradient-teal`/`--gradient-terracotta`: Story-specific CTAs and highlights
- `--gradient-hero`: Hero sections only (distinctive DRNF look)
- `--gradient-card`: Elevated card backgrounds

### Shadow System

Six levels of shadows for depth and hierarchy:

```css
--shadow-xs: 0 1px 2px rgba(0,0,0,0.05);           /* Minimal - subtle borders */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.03);  /* Small cards */
--shadow-md: 0 4px 8px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);  /* Standard cards */
--shadow-lg: 0 8px 16px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.06);  /* Elevated cards */
--shadow-xl: 0 12px 24px rgba(0,0,0,0.12), 0 6px 12px rgba(0,0,0,0.08); /* Floating elements */
--shadow-2xl: 0 20px 40px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1); /* Modals, popups */
--shadow-inner: inset 0 2px 4px rgba(0,0,0,0.06); /* Inset shadows */
--shadow-green: 0 4px 20px rgba(44,85,48,0.15);   /* Green-tinted shadow for brand elements */
```

**Shadow Selection Guide**:
- **xs/sm**: Subtle separation, minimal depth
- **md**: Standard cards, most components
- **lg/xl**: Prominent cards, hover states
- **2xl**: Modals, popups, critical UI
- **green**: Buttons, CTAs, brand-colored elements

### Typography System

#### Font Families
```css
--font-primary: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
--font-heading: 'Playfair Display', Georgia, serif;
```

**Font Strategy**:
- **Manrope**: Modern, clean sans-serif for body text (replaces Inter)
  - Professional and highly readable
  - Excellent at all sizes
  - Friendly yet authoritative tone
- **Playfair Display**: Elegant serif for headings
  - Timeless, dignified aesthetic
  - Perfect for storytelling and heritage content
  - Creates strong visual hierarchy

#### Font Size Scale
```css
--font-size-xs: 0.75rem;      /* 12px - labels, captions */
--font-size-sm: 0.875rem;     /* 14px - small text */
--font-size-base: 1rem;       /* 16px - body text (increased from 14px) */
--font-size-lg: 1.125rem;     /* 18px - large body text */
--font-size-xl: 1.25rem;      /* 20px - subheadings */
--font-size-2xl: 1.5rem;      /* 24px - small headings */
--font-size-3xl: 1.875rem;    /* 30px - medium headings */
--font-size-4xl: 2.25rem;     /* 36px - large headings */
--font-size-5xl: 3rem;        /* 48px - hero headings */
--font-size-6xl: 3.75rem;     /* 60px - extra large hero */
```

**Typography Guidelines**:
- **Base size**: 16px (increased for better readability)
- **Line height**: 1.7 for body text (improved readability)
- **Headings**: Use Playfair Display with appropriate hierarchy
- **Body**: Manrope at 16px base for optimal reading experience

### Atmospheric Backgrounds

Replace generic solid backgrounds with atmospheric depth:

#### Light Atmospheric (Brand-Aligned)
```css
.section-atmospheric-light {
    background:
        radial-gradient(ellipse at 20% 20%, rgba(232, 240, 234, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(196, 219, 201, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, #ffffff 0%, #f7fafc 50%, #e8f0ea 100%);
}
```
**Use for**: General content sections, about pages, standard content

#### Warm Atmospheric (Community)
```css
.section-atmospheric-warm {
    background:
        radial-gradient(ellipse at 30% 40%, rgba(243, 156, 18, 0.08) 0%, transparent 60%),
        radial-gradient(ellipse at 70% 70%, rgba(139, 69, 19, 0.06) 0%, transparent 50%),
        linear-gradient(135deg, #ffffff 0%, #fff5f0 100%);
}
```
**Use for**: Community programs, chai counter sections, warm stories

#### Teal Atmospheric (Innovation)
```css
.section-atmospheric-teal {
    background:
        radial-gradient(ellipse at 50% 0%, rgba(13, 115, 119, 0.1) 0%, transparent 60%),
        radial-gradient(ellipse at 0% 100%, rgba(20, 145, 155, 0.08) 0%, transparent 50%),
        linear-gradient(135deg, #f0f9fa 0%, #ffffff 100%);
}
```
**Use for**: Modern initiatives, partnerships, innovation stories

#### Terracotta Atmospheric (Emotional)
```css
.section-atmospheric-terracotta {
    background:
        radial-gradient(ellipse at 60% 30%, rgba(193, 102, 107, 0.12) 0%, transparent 60%),
        radial-gradient(ellipse at 20% 80%, rgba(212, 138, 142, 0.08) 0%, transparent 50%),
        linear-gradient(135deg, #fff8f8 0%, #ffffff 100%);
}
```
**Use for**: Personal stories, emotional narratives, testimonials

#### Green Atmospheric (Environmental)
```css
.section-atmospheric-green {
    background:
        radial-gradient(ellipse at 40% 20%, rgba(44, 85, 48, 0.08) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 90%, rgba(61, 117, 69, 0.06) 0%, transparent 50%),
        linear-gradient(135deg, #f7faf7 0%, #ffffff 100%);
}
```
**Use for**: Environmental initiatives, tree plantation, sustainability content

### Component Utilities

#### Card System
```css
/* Elevated Card - Standard depth */
.card-elevated {
    background: var(--gradient-card);
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-lg);  /* 16px */
    transition: all var(--transition-smooth);
    border: 1px solid var(--border-light);
}

.card-elevated:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px);
}

/* Floating Card - Premium depth */
.card-float {
    background: white;
    box-shadow: var(--shadow-lg), 0 0 0 1px rgba(44, 85, 48, 0.05);
    border-radius: var(--border-radius-xl);  /* 24px */
    transition: all var(--transition-smooth);
}

.card-float:hover {
    box-shadow: var(--shadow-2xl), 0 0 0 1px rgba(44, 85, 48, 0.08);
    transform: translateY(-6px) scale(1.01);
}
```

**When to use**:
- **card-elevated**: Standard content cards, service boxes, info sections
- **card-float**: Premium features, highlighted content, hero cards

#### Button Variants

```css
/* Primary Button - Brand green */
.btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow-green);
}

/* Teal Button - Innovation/Modern */
.btn-teal {
    background: var(--gradient-teal);
    color: white;
    box-shadow: 0 4px 20px rgba(13, 115, 119, 0.25);
}

/* Terracotta Button - Emotional/Personal */
.btn-terracotta {
    background: var(--gradient-terracotta);
    color: white;
    box-shadow: 0 4px 20px rgba(193, 102, 107, 0.25);
}
```

**Button Selection**:
- **btn-primary**: Default CTAs, standard actions
- **btn-teal**: Modern content, partnerships, innovation CTAs
- **btn-terracotta**: Emotional CTAs, personal story actions, testimonials
- **btn-secondary**: Alternative actions, less emphasis

#### Text Gradients

```css
/* Teal gradient text */
.text-gradient-teal {
    background: var(--gradient-teal);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
}

/* Primary gradient text */
.text-gradient-primary {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
}

/* Terracotta gradient text */
.text-gradient-terracotta {
    background: var(--gradient-terracotta);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
}
```

**Best Practices**:
- Use for emphasis on key phrases or numbers
- Always set `font-weight: 700` for visibility
- Don't overuse - one or two per section maximum
- Ensure sufficient contrast against background

#### Accent Border Utilities

```css
.accent-border-teal { border-left: 4px solid var(--accent-teal); }
.accent-border-terracotta { border-left: 4px solid var(--accent-terracotta); }
.accent-border-green { border-left: 4px solid var(--primary-color); }
```

**Use for**: Callouts, quotes, highlighted sections

#### Stat Highlights

```css
/* Teal stat highlight */
.stat-highlight {
    padding: 0.25rem 0.75rem;
    background: linear-gradient(135deg, rgba(13, 115, 119, 0.1) 0%, rgba(20, 145, 155, 0.05) 100%);
    border-radius: 8px;
    font-weight: 700;
    color: var(--accent-teal);
    border: 2px solid rgba(13, 115, 119, 0.15);
}

/* Terracotta stat highlight */
.stat-highlight-terracotta {
    padding: 0.25rem 0.75rem;
    background: linear-gradient(135deg, rgba(193, 102, 107, 0.1) 0%, rgba(212, 138, 142, 0.05) 100%);
    border-radius: 8px;
    font-weight: 700;
    color: var(--accent-terracotta);
    border: 2px solid rgba(193, 102, 107, 0.15);
}
```

**Use for**: Inline statistics, key numbers, impact metrics

### Spacing & Layout

```css
--section-padding: clamp(4rem, 10vw, 8rem) 0;  /* Vertical section spacing */
--container-padding: 0 clamp(1.5rem, 5vw, 3rem); /* Horizontal container padding */
--card-gap: 2rem;                               /* Standard gap between cards */
--border-radius: 12px;                          /* Standard border radius */
--border-radius-lg: 16px;                       /* Large border radius */
--border-radius-xl: 24px;                       /* Extra large border radius */
```

### Transitions

```css
--transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);    /* Quick interactions */
--transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);   /* Standard animations */
--transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);     /* Dramatic effects */
```

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

### Design System Maintenance

**When adding new components**:
1. Use existing CSS variables - don't create new colors
2. Choose appropriate atmospheric background from the 5 variants
3. Select button variant based on content emotion/context
4. Use shadow scale appropriately for hierarchy
5. Maintain font system - don't introduce new sizes

**Consistency checklist**:
- ✅ Uses design system color variables
- ✅ Applies appropriate shadow level
- ✅ Uses atmospheric background (not solid colors)
- ✅ Follows typography scale
- ✅ Includes smooth transitions
- ✅ Responsive across all breakpoints

## JavaScript Features (js/main.js)

The main.js file provides:
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Mobile Menu Sections**: Expandable/collapsible sections for clean navigation (Nov 2025)
- **Scroll Effects**: Hide/show navbar, parallax hero section
- **Active Section Highlighting**: Navigation updates based on scroll position
- **Smooth Scrolling**: Anchor links with offset for fixed navbar
- **Counter Animations**: Animated statistics on scroll into view
- **Lightbox Gallery**: Click images to view full-size with overlay
- **Video Controls**: Auto-pause other videos when one plays
- **Back to Top Button**: Appears after scrolling 300px
- **AOS Integration**: Fade/slide animations for sections
- **Social Share**: Pre-configured for Facebook, Twitter, LinkedIn, WhatsApp
- **Mega Menu Dropdowns**: Desktop navigation with enhanced hover effects

### Recent Updates (November 2025)
- Added mobile section toggle functionality (lines 772-802)
- Enhanced dropdown hover states for better UX
- Improved chevron animations on navigation dropdowns

## Recent Changes & Updates

### November 17, 2025 - Design System Overhaul (Issues #2 & #3)
**Major Update**: Complete redesign with enhanced visual identity, atmospheric backgrounds, and bold accent colors.

#### Issue #2: Typography & Color Enhancements
1. **Typography Update**
   - Replaced Inter with **Manrope** for body text (more professional, highly readable)
   - Maintained Playfair Display for headings (elegant, storytelling focus)
   - Increased base font size from 14px to 16px for better readability
   - Improved line height to 1.7 for enhanced reading experience

2. **Rich Color Palette Expansion**
   - Added **7-tone green scale** (primary-50 through primary-900)
   - Introduced **bold accent colors**: Teal (#0d7377) and Terracotta (#c1666b)
   - Created **strategic color usage guide**:
     - Teal for modern/innovative content
     - Terracotta for emotional/personal stories
     - Warm tones for community sections
     - Green tints for brand-aligned content

3. **Multi-Layered Gradient System**
   - Enhanced hero gradient with multi-layer atmospheric effect
   - Added teal and terracotta gradient variants
   - Created 5 core gradients for different use cases

4. **Enhanced Shadow System**
   - Expanded to 6 shadow levels (xs, sm, md, lg, xl, 2xl)
   - Added green-tinted shadow for brand elements
   - Created clear hierarchy for depth and elevation

#### Issue #3: Atmospheric Backgrounds & Components
1. **Atmospheric Section Backgrounds**
   - Created 5 atmospheric background variants replacing flat colors:
     - `section-atmospheric-light` - Brand-aligned (general content)
     - `section-atmospheric-warm` - Community programs
     - `section-atmospheric-teal` - Innovation/partnerships
     - `section-atmospheric-terracotta` - Emotional stories
     - `section-atmospheric-green` - Environmental initiatives
   - Each uses multi-layered radial gradients for depth

2. **Enhanced Component Utilities**
   - **Card System**: `.card-elevated` and `.card-float` with hover effects
   - **Button Variants**: `.btn-teal`, `.btn-terracotta` for story-specific CTAs
   - **Text Gradients**: `.text-gradient-teal`, `.text-gradient-terracotta`, `.text-gradient-primary`
   - **Stat Highlights**: `.stat-highlight` and `.stat-highlight-terracotta` for metrics
   - **Accent Borders**: Color-coded left borders for callouts

3. **Design Philosophy Shift**
   - From generic web design to distinctive DRNF identity
   - Emphasis on warmth, approachability, and atmospheric depth
   - Strategic use of color for emotional storytelling
   - Professional polish with accessible, modern aesthetics

#### Background Agent Enhancements
- Improved spacing with clamp() for fluid responsive design
- Enhanced transition system (fast/smooth/slow variants)
- Better component organization in CSS
- Comprehensive design system documentation

**Impact**: The design overhaul transforms DRNF from a basic static site to a professionally polished, emotionally engaging platform that better represents the foundation's warmth and community focus.

---

### November 13, 2025 - Website Refocus
**Major Update**: Transformed site from volunteer-focused to information-focused showcase.

#### Key Changes:
1. **Hero Section Redesign**
   - Fixed text visibility issues (dark text on light background)
   - Modern white/gray gradient design
   - Changed CTAs: "Volunteer Today" → "Our Story", "Support Our Mission" → "Get in Touch"

2. **Navigation Updates (All Pages)**
   - Navigation CTA: "Volunteer Today" → "Our Story"
   - Mega menu: "Volunteer with Us" → "Get in Touch"
   - Enhanced dropdown hover states with color and animation

3. **Content Refocus**
   - Section title: "Ready to Make an Impact?" → "Discover Our Work"
   - Feature icons: Volunteer/Partner/Support → Daily Chai/Education/Community Care
   - All content emphasizes information discovery over recruitment

4. **Mobile Menu Redesign**
   - Streamlined structure with expandable sections
   - Removed clutter and volunteer-focused CTAs
   - Better organization: "About DRNF" and "Our Work" sections
   - Proper button toggles (removed href="#" issues)

5. **Google Analytics Integration**
   - Added GA4 tracking (ID: G-BKRC1PBFTM) across all pages
   - Automatic page view tracking
   - Event tracking for CTAs, forms, and user engagement

**Documentation**: See `WEBSITE_REFOCUS_SUMMARY.md` for complete details.

## Important Notes for Future Development

### Content Philosophy
1. **Information-Focused**: Prioritize showcasing work and impact over action CTAs
2. **Community-Centered**: All content should emphasize community service and compassion
3. **Transparency**: Be clear about ongoing vs. past initiatives
4. **Sustainability Focus**: Highlight sustainable models and long-term impact
5. **Partnership Emphasis**: Always credit LooCafe, Ixora Group, and other partners
6. **NO Pushy CTAs**: Avoid volunteer recruitment or donation pressure tactics

### LooCafe Partnership Context
- LooCafe is a network of 270+ public toilet facilities across Hyderabad
- Each facility is made from recycled shipping containers with hi-tech monitoring
- Features free toilets, attached cafes, and 24/7 accessibility
- Founded in 2018 by Abhishek Nath (same founder as DRNF)
- DRNF's free chai counters operate through strategic placement within this network
- Partnership documented in LooCafe's "Toilet Tales" (loocafe.com/toilettales)

### Media & External Validation
The foundation has significant media coverage:
- **Telangana Today** (major news outlet coverage)
- **YouTube Interviews**: Telugu, Hindi, and English coverage (4 embedded videos)
- **Facebook Presence**: Active social media engagement
- **Gates Foundation**: LooCafe is the exclusive partner for public toilets

### When Editing Content
- **CRITICAL**: Maintain information-focused approach (not volunteer/donation-focused)
- Always maintain the dignified, compassionate tone
- Preserve references to Dr. Rabinder Nath's legacy
- Keep statistics current (update cup count, jobs created, etc.)
- Ensure all external links (especially LooCafe and Ixora) remain functional
- Preserve structured data for SEO (schema.org markup)
- Avoid adding "Volunteer Today" or similar pushy CTAs
- Use "Our Story", "Get in Touch", "Learn More" for CTAs instead

### Future Expansion Plans
- Expand free chai counters across all 270 LooCafe locations
- Multi-language support (Hindi/Telugu translations)
- Progressive Web App (offline functionality)
- Online donation system with payment gateway
- Volunteer registration portal
- Event calendar for upcoming activities
- Blog section for news and updates

## Testing & Validation

### Pre-Deployment Checklist
1. **HTML Validation**: Ensure semantic HTML5 compliance
2. **CSS Validation**: Check for browser compatibility
3. **Links**: Verify all internal and external links work
4. **Images**: Confirm all images load and have proper alt text
5. **Mobile**: Test on actual mobile devices or browser DevTools
6. **SEO**: Run Lighthouse audit (target 95+ performance, 100 SEO)
7. **Accessibility**: Verify WCAG compliance (proper headings, ARIA labels, keyboard navigation)
8. **Social Media**: Test Open Graph tags using Facebook Debugger / Twitter Card Validator

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- All major mobile browsers

## Repository Management

### Branch Strategy
- **main**: Production branch (automatically deploys to drnf.org)
- No other branches required for this simple static site

### Git Workflow
```bash
# Make changes locally
git add .
git commit -m "Descriptive commit message"
git push origin main  # Triggers automatic deployment
```

### GitHub Pages Configuration
- **Source**: GitHub Actions (via static.yml workflow)
- **Custom Domain**: drnf.org (configured via CNAME file)
- **HTTPS**: Enforced
- **.nojekyll**: Present to prevent Jekyll processing

## Contact Form Setup

The website includes a professional contact form at `/contact` for lead generation. The form uses **Web3Forms** (free service) to handle submissions.

### Form Features
- **Fields**: Name, Email, Phone, Interest Type (dropdown), Message
- **Lead Categories**: Volunteering, Partnership, Donation, Corporate CSR, Media, General, Other
- **Spam Protection**: Built-in honeypot field
- **Email Delivery**: Submissions sent to info@drnf.org
- **Success Handling**: Redirects to /contact?success=true with success message

### Setup Required
1. Get free Web3Forms API key from https://web3forms.com
2. Update line 475 in `/contact.html`: Replace `YOUR_ACCESS_KEY_HERE` with actual key
3. See `/FORM_SETUP.md` for detailed instructions

### Form Location
- **Main Form**: `/contact` page
- **CTAs**: "Get in Touch" buttons throughout site link to contact form (not "Volunteer Today")

## Analytics & Tracking

### Google Analytics 4 (GA4)
- **Measurement ID**: G-BKRC1PBFTM
- **Implementation**: Added to all pages (November 2025)
- **Tracking**:
  - Page views (automatic)
  - CTA clicks
  - Form submissions
  - External link clicks
  - Social share interactions
  - Phone/WhatsApp clicks

**Note**: This is separate from the Ixora Group website analytics. Events are customized for DRNF-specific tracking.

## Contact for Technical Questions
For technical issues or enhancement requests regarding this website, contact:
- **Email**: hello@ixoragroup.com
- **WhatsApp**: +91 9966906781

---

**Document Version**: 1.2
**Last Updated**: November 17, 2025
**Created By**: Claude Code (AI Assistant)
**Status**: Complete documentation with comprehensive design system (Issues #2 & #3 resolved)
