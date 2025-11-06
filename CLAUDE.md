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

### November 2025 - Website Refocus
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
