# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Organization Overview

### Dr. Rabinder Nath Foundation (DRNF)
- **Founded**: 2020
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
- **Fonts**: Google Fonts (Inter for body text, Playfair Display for headings)

### Project Structure
```
DRNF_website/
├── index.html              # Main landing page with all sections
├── faq.html                # FAQ page with structured data
├── css/
│   └── style.css           # All styles (responsive, animations, components)
├── js/
│   └── main.js             # Interactive features (navigation, animations, lightbox)
├── images/                 # Website images and media
│   ├── DRNF_logo.jpg       # Foundation logo
│   ├── rabinder_nath2.1.jpg
│   ├── loocafe_no_bg_collage.png
│   └── [various images and videos]
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine instructions
├── CNAME                   # Domain configuration (drnf.org)
├── .nojekyll               # Prevents Jekyll processing on GitHub Pages
└── .github/
    └── workflows/
        └── static.yml      # GitHub Actions deployment workflow
```

### Key Website Sections (index.html)
1. **Hero Section** (`#hero`): Statistics (1,16,800+ cups served, 2 active counters, 70+ jobs)
2. **Social Media** (`#socials`): Facebook and LinkedIn links
3. **About** (`#about`): Foundation legacy and Dr. Rabinder Nath's story with YouTube videos
4. **Free Chai Counters** (`#chai-counters`): LooCafe partnership, media coverage, expansion plans
5. **Community Initiatives** (`#donations`): Ongoing community work and support programs
6. **Workshops** (`#workshops`): Sanitation and education workshops
7. **Environment** (`#environment`): Tree plantation and animal welfare initiatives
8. **Books** (`#books`): Literary legacy (7+ books, Punjabi Nationalism book relaunch)
9. **Contact** (`#contact`): WhatsApp, email, office location, volunteer opportunities

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

### Color Palette
```css
--primary-color: #2c5530;      /* Forest Green */
--secondary-color: #8b4513;     /* Saddle Brown */
--accent-color: #f39c12;        /* Orange */
--text-primary: #2c3e50;        /* Dark Slate Gray */
--text-secondary: #7f8c8d;      /* Gray */
```

### Typography
- **Headings**: Playfair Display (serif) - elegant, traditional feel
- **Body Text**: Inter (sans-serif) - modern, readable
- **Responsive Sizing**: Uses CSS clamp() for fluid typography

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

## JavaScript Features (js/main.js)

The main.js file provides:
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Scroll Effects**: Hide/show navbar, parallax hero section
- **Active Section Highlighting**: Navigation updates based on scroll position
- **Smooth Scrolling**: Anchor links with offset for fixed navbar
- **Counter Animations**: Animated statistics on scroll into view
- **Lightbox Gallery**: Click images to view full-size with overlay
- **Video Controls**: Auto-pause other videos when one plays
- **Back to Top Button**: Appears after scrolling 300px
- **AOS Integration**: Fade/slide animations for sections
- **Social Share**: Pre-configured for Facebook, Twitter, LinkedIn, WhatsApp

## Important Notes for Future Development

### Content Philosophy
1. **Community-Centered**: All content should emphasize community service and compassion
2. **Transparency**: Be clear about ongoing vs. past initiatives
3. **Sustainability Focus**: Highlight sustainable models and long-term impact
4. **Partnership Emphasis**: Always credit LooCafe, Ixora Group, and other partners

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
- Always maintain the dignified, compassionate tone
- Preserve references to Dr. Rabinder Nath's legacy
- Keep statistics current (update cup count, jobs created, etc.)
- Ensure all external links (especially LooCafe and Ixora) remain functional
- Preserve structured data for SEO (schema.org markup)

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

## Contact for Technical Questions
For technical issues or enhancement requests regarding this website, contact:
- **Email**: hello@ixoragroup.com
- **WhatsApp**: +91 9966906781
