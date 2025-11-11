# DRNF Navigation Structure - Complete Reference

**Component**: Header.astro
**Total Links**: 26 unique navigation links
**Date**: November 11, 2025

---

## Desktop Navigation (Main Header)

### Primary Navigation Bar

```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO] DRNF                 Home  About▼  Book  Programs▼      │
│         Serving with          Contact  FAQ        [Our Story]   │
│         Compassion                                               │
└─────────────────────────────────────────────────────────────────┘
```

#### Main Menu Items (6 items)

1. **Home** → `/`
2. **About** → Mega Menu (8 links)
3. **Heritage Book** → `/book`
4. **Our Programs** → Mega Menu (8 links)
5. **Contact** → `/contact`
6. **FAQ** → `/faq`

#### CTA Button

- **"Our Story"** → `/about`
- **Color**: Forest Green (#2c5530)
- **Note**: Per CLAUDE.md, NOT "Volunteer Today" (Nov 2025 refocus)

---

## About Mega Menu (8 links)

**Trigger**: Hover or click on "About" in main navigation

### Left Side Card
- **Image**: Dr. Rabinder Nath photo
- **Heading**: "About Us"
- **Description**: "Learn about our story, mission, and the legacy of Dr. Rabinder Nath."

### Right Side Grid (2 columns)

#### Column 1
1. **Our Story** → `/about`
   - Icon: fas fa-book-open
2. **Dr. Rabinder Nath** → `/dr-rabinder-nath`
   - Icon: fas fa-user-md
3. **Heritage Book** → `/book`
   - Icon: fas fa-book
4. **Our Team** → `/about#team`
   - Icon: fas fa-users

#### Column 2
5. **Vision & Mission** → `/about#mission`
   - Icon: fas fa-bullseye
6. **Impact & Stats** → `/about#impact`
   - Icon: fas fa-trophy
7. **Our Values** → `/about#values`
   - Icon: fas fa-star
8. **Contact Us** → `/contact`
   - Icon: fas fa-envelope

---

## Programs Mega Menu (8 links)

**Trigger**: Hover or click on "Our Programs" in main navigation

### Left Side Card
- **Image**: Chai counter photo
- **Heading**: "Our Programs"
- **Description**: "Explore our community service initiatives and programs making a difference."

### Right Side Grid (2 columns)

#### Column 1
1. **Free Chai Counters** → `/chai-counters`
   - Icon: fas fa-coffee
2. **LooCafe Partnership** → `/loocafe-impact`
   - Icon: fas fa-building
3. **Frontline Workers** → `/frontline-workers`
   - Icon: fas fa-user-shield
4. **Community Support** → `/community`
   - Icon: fas fa-hands-helping
5. **Education Workshops** → `/community#workshops`
   - Icon: fas fa-graduation-cap

#### Column 2
6. **Environmental Care** → `/community#environment`
   - Icon: fas fa-leaf
7. **Animal Welfare** → `/community#animal-welfare`
   - Icon: fas fa-paw
8. **Get in Touch** → `/contact`
   - Icon: fas fa-envelope

---

## Mobile Navigation (Hamburger Menu)

**Trigger**: Click hamburger icon (3 horizontal lines) on mobile devices (<768px)

### Mobile Menu Structure

```
┌─────────────────────────────┐
│  [LOGO] DRNF          [X]   │
├─────────────────────────────┤
│  🏠 Home                    │
│  ▼ About DRNF              │
│     ❤️ Our Story & Mission  │
│     👨‍⚕️ Dr. Rabinder Nath    │
│     📖 Heritage Book         │
│  ▼ Our Work                │
│     ☕ Free Chai Counters   │
│     🤝 Community Programs   │
│  ❓ FAQ                     │
│  ✉️ Contact Us              │
├─────────────────────────────┤
│  [Facebook] [LinkedIn]     │
└─────────────────────────────┘
```

### Direct Links (3 items)
1. **Home** → `/`
   - Icon: fas fa-home
2. **FAQ** → `/faq`
   - Icon: fas fa-question-circle
3. **Contact Us** → `/contact`
   - Icon: fas fa-envelope

### Accordion Section 1: About DRNF (3 links)
**Trigger**: Click "About DRNF" to expand/collapse

1. **Our Story & Mission** → `/about`
   - Icon: fas fa-heart
2. **Dr. Rabinder Nath** → `/dr-rabinder-nath`
   - Icon: fas fa-user-md
3. **Heritage Book** → `/book`
   - Icon: fas fa-book

### Accordion Section 2: Our Work (2 links)
**Trigger**: Click "Our Work" to expand/collapse

1. **Free Chai Counters** → `/chai-counters`
   - Icon: fas fa-mug-hot
2. **Community Programs** → `/community`
   - Icon: fas fa-hands-helping

### Social Media Links (2 items)
1. **Facebook** → `https://www.facebook.com/DrRabinderNathFoundation/`
   - Icon: fab fa-facebook-f
   - Opens in new tab
2. **LinkedIn** → `https://www.linkedin.com/company/dr-rabinder-nath-foundation/`
   - Icon: fab fa-linkedin-in
   - Opens in new tab

---

## All Unique Routes (Alphabetical)

```
/                            # Home
/about                       # About Us / Our Story
/about#impact                # Impact & Stats (anchor)
/about#mission               # Vision & Mission (anchor)
/about#team                  # Our Team (anchor)
/about#values                # Our Values (anchor)
/book                        # Heritage Book
/chai-counters               # Free Chai Counters
/community                   # Community Support
/community#animal-welfare    # Animal Welfare (anchor)
/community#environment       # Environmental Care (anchor)
/community#workshops         # Education Workshops (anchor)
/contact                     # Contact Us / Get in Touch
/dr-rabinder-nath            # Dr. Rabinder Nath Biography
/faq                         # FAQ
/frontline-workers           # Frontline Workers
/loocafe-impact              # LooCafe Partnership
```

**Total Unique Pages**: 10 pages + 6 anchor links = 16 unique destinations

---

## Navigation Behavior

### Desktop Behavior (≥768px)

1. **Main Navigation**:
   - Fixed/sticky header (stays visible on scroll)
   - Glassmorphism effect (semi-transparent background with blur)
   - Hover states on all links (color change)

2. **Mega Menus**:
   - Trigger: Hover over "About" or "Our Programs"
   - Display: Dropdown panel below header
   - Layout: Left card + Right grid (2 columns)
   - Close: Mouse leaves menu area

3. **CTA Button**:
   - Always visible
   - Prominent styling (green background)
   - Hover effect (darker green)

### Mobile Behavior (<768px)

1. **Hamburger Menu**:
   - Icon: Three horizontal lines
   - Position: Top right corner
   - Click: Opens full-screen overlay

2. **Mobile Overlay**:
   - Background: Semi-transparent dark overlay
   - Layout: Vertical list
   - Header: Logo + Close button (X)
   - Body: Scrollable navigation links

3. **Accordion Sections**:
   - Visual: Downward chevron icon (rotates when open)
   - Click: Toggles visibility of nested links
   - Animation: Smooth expand/collapse
   - Multiple sections can be open simultaneously

4. **Close Behavior**:
   - Click X button (top right)
   - Click outside menu area
   - Navigate to new page

---

## Styling Classes Reference

### Navigation Container Classes

```css
.enhanced-nav                /* Main navigation wrapper */
.nav-container-enhanced      /* Inner container (max-width, padding) */
.nav-logo-enhanced           /* Logo + brand text wrapper */
.nav-brand-text              /* Brand text container */
.brand-title                 /* "Dr. Rabinder Nath Foundation" */
.brand-tagline               /* "Serving with Compassion" */
.logo-img                    /* Logo image (60x60px, rounded) */
```

### Navigation Links Classes

```css
.nav-links-enhanced          /* Desktop navigation ul */
.nav-link-enhanced           /* Individual navigation link */
.nav-link-enhanced.active    /* Active/current page state */
.nav-dropdown-trigger        /* Mega menu trigger element */
.nav-actions-enhanced        /* CTA button container */
.nav-cta-enhanced            /* "Our Story" CTA button */
.mobile-menu-toggle          /* Hamburger icon button */
```

### Mega Menu Classes

```css
.mega-menu                   /* Mega menu container */
.mega-menu-container         /* Inner wrapper */
.mega-menu-content           /* Flexbox layout (card + grid) */
.mega-menu-card              /* Left side card with image */
.mega-menu-grid              /* Right side grid */
.mega-menu-header            /* Grid header section */
.mega-menu-columns           /* 2-column grid */
.mega-menu-link              /* Individual mega menu link */
.mega-menu-icon              /* Font Awesome icon */
.mega-menu-text              /* Link text */
.arrow-circle                /* Arrow icon in card */
.chevron                     /* Dropdown chevron SVG */
```

### Mobile Menu Classes

```css
.mobile-menu-overlay         /* Full-screen overlay */
.mobile-menu-header          /* Logo + close button */
.mobile-menu-close           /* Close (X) button */
.mobile-menu-body            /* Scrollable content area */
.mobile-menu-item-clean      /* Direct navigation link */
.mobile-section-clean        /* Accordion section wrapper */
.mobile-section-header-clean /* Accordion trigger button */
.mobile-section-content-clean/* Accordion collapsible content */
.mobile-link-clean           /* Link inside accordion */
.mobile-chevron              /* Chevron icon (rotates) */
.mobile-social-clean         /* Social media icons container */
```

---

## Interaction States

### Link States

```css
/* Default */
.nav-link-enhanced {
  color: #2c3e50;  /* Dark slate gray */
}

/* Hover */
.nav-link-enhanced:hover {
  color: #2c5530;  /* Forest green */
}

/* Active (current page) */
.nav-link-enhanced.active {
  color: #2c5530;  /* Forest green */
  font-weight: 600;
}
```

### CTA Button States

```css
/* Default */
.nav-cta-enhanced {
  background: #2c5530;  /* Forest green */
  color: white;
}

/* Hover */
.nav-cta-enhanced:hover {
  background: #1e3a20;  /* Darker green */
}
```

### Mobile Accordion States

```css
/* Closed (default) */
.mobile-section-content-clean {
  max-height: 0;
  overflow: hidden;
}

/* Open */
.mobile-section-content-clean.active {
  max-height: 500px;
  overflow: visible;
}

/* Chevron closed */
.mobile-chevron {
  transform: rotate(0deg);
}

/* Chevron open */
.mobile-chevron.rotate {
  transform: rotate(180deg);
}
```

---

## Accessibility Notes

### Keyboard Navigation

1. **Tab Order**:
   - Logo → Main nav links → CTA button → Hamburger (mobile)
   - Mega menu links are tabbable when menu is open
   - Mobile menu links tabbable when overlay is open

2. **Enter Key**:
   - Activates links
   - Opens/closes mega menus
   - Toggles mobile accordion sections

3. **Escape Key** (recommended):
   - Closes mega menus
   - Closes mobile overlay

### ARIA Labels

```html
<!-- Hamburger button -->
<button aria-label="Toggle mobile menu">...</button>

<!-- Close button -->
<button aria-label="Close mobile menu">...</button>

<!-- Social links -->
<a href="..." aria-label="Facebook">...</a>
<a href="..." aria-label="LinkedIn">...</a>

<!-- Accordion buttons -->
<button data-toggle="about-section" type="button">
  <span>About DRNF</span>
  <i class="fas fa-chevron-down mobile-chevron"></i>
</button>
```

### Screen Reader Considerations

1. **Semantic HTML**: `<nav>`, `<ul>`, `<li>`, `<button>` tags used correctly
2. **Alt Text**: All images have descriptive alt text
3. **Link Text**: All links have meaningful text (no "Click here")
4. **Focus Indicators**: Visible focus outlines on interactive elements

---

## Design System Colors

### Brand Colors

```css
--primary-color: #2c5530;      /* Forest Green (brand primary) */
--secondary-color: #8b4513;     /* Saddle Brown (brand secondary) */
--accent-color: #f39c12;        /* Orange (highlights) */
```

### Text Colors

```css
--text-primary: #2c3e50;        /* Dark Slate Gray (body text) */
--text-secondary: #7f8c8d;      /* Gray (taglines, captions) */
```

### Navigation Specific

```css
/* Header background */
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);

/* Link hover */
color: var(--primary-color);

/* CTA button */
background: var(--primary-color);
color: white;

/* CTA button hover */
background: #1e3a20;  /* Darker shade of primary */
```

---

## Responsive Breakpoints

### Mobile (<768px)

- Hamburger menu visible
- Desktop navigation hidden
- Logo size reduced (50x50px)
- CTA button hidden (available in mobile menu)
- Single column layout

### Tablet (768px - 1199px)

- Desktop navigation visible
- Mega menus active
- Full logo size (60x60px)
- CTA button visible
- Slightly reduced spacing

### Desktop (≥1200px)

- Full desktop navigation
- Maximum content width (1400px)
- Spacious mega menus
- All features visible
- Generous padding and spacing

---

## Integration Checklist

### Required Files

- [x] Header.astro component created
- [ ] CSS styles from /DRNF_website/css/style.css
- [ ] JavaScript from /DRNF_website/js/main.js
- [ ] Font Awesome 6.4.0 CDN link
- [ ] Google Fonts (Inter + Playfair Display)

### Required Functionality

- [ ] Sticky header on scroll
- [ ] Mega menu hover/click interactions
- [ ] Mobile hamburger menu toggle
- [ ] Mobile accordion expand/collapse
- [ ] Active page highlighting
- [ ] Smooth transitions/animations
- [ ] Responsive layout (mobile/tablet/desktop)

### Testing Requirements

- [ ] Desktop navigation (Chrome, Firefox, Safari, Edge)
- [ ] Mobile navigation (iOS Safari, Android Chrome)
- [ ] Mega menu hover behavior (desktop)
- [ ] Accordion toggle behavior (mobile)
- [ ] All links resolve correctly
- [ ] Active page highlighting works
- [ ] Keyboard navigation functional
- [ ] Screen reader compatibility

---

## Summary Statistics

| Category | Count |
|----------|-------|
| Total Navigation Links | 26 |
| Unique Pages | 10 |
| Anchor Links | 6 |
| Main Menu Items | 6 |
| About Mega Menu Links | 8 |
| Programs Mega Menu Links | 8 |
| Mobile Direct Links | 3 |
| Mobile About Accordion | 3 |
| Mobile Work Accordion | 2 |
| Social Media Links | 2 |
| CTA Buttons | 1 |

**Duplicate Links** (appear multiple times):
- `/about` - 3 times (main nav, mega menu, mobile)
- `/contact` - 3 times (main nav, both mega menus)
- `/book` - 3 times (main nav, mega menu, mobile)

**Total Clickable Elements**: 30+ (including accordions, close buttons)

---

**Last Updated**: November 11, 2025
**Component**: Header.astro
**Status**: ✅ Complete structure, awaiting CSS/JS integration
