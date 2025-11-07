# DRNF Website Refactor Audit
**Date**: November 7, 2025
**Focus**: Homepage sections and Contact page issues

---

## Issues Identified

### 1. **Homepage - Initiatives Section** (index.html lines 548-611)
**Current Problems:**
- ❌ Buttons not clearly visible
- ❌ Icons spread out poorly across the layout
- ❌ Not using enough images from assets folder
- ❌ Poor visual hierarchy

**Available Images in Assets:**
- rabinder_nath_1.6.jpg
- rabinder_nath_5.1.jpg
- rabinder_nath_5.5.jpg
- rabinder_nath_drive.jpg
- rabinder_nath2.1.jpg
- loocafe_no_bg_collage.png
- LooCafe_Workstation.png
- Untitled.png through Untitled 7.png

**Planned Fixes:**
1. Add background images to each initiative card
2. Improve button contrast and visibility
3. Reorganize icon layout with better spacing
4. Add hover effects for better interactivity
5. Use gradient overlays for text readability on images

---

### 2. **Homepage - Impact Section** (index.html lines 614-671)
**Current Problems:**
- ❌ Only displays statistics with icons
- ❌ No images or visual content
- ❌ Monotonous grid layout
- ❌ Lacks engagement

**Planned Fixes:**
1. Add background image showcasing impact
2. Add photo cards showing real impact (chai counter, workshops, etc.)
3. Improve stat card design with gradients
4. Add testimonial or impact story cards
5. Use images like loocafe_no_bg_collage.png or chai counter images

---

### 3. **Homepage - Discover Our Work Section** (index.html lines 756-785)
**Current Problems:**
- ❌ Buttons not clearly visible
- ❌ Generic layout without visual appeal
- ❌ No images or visual hierarchy
- ❌ Poor contrast

**Planned Fixes:**
1. Add hero background image
2. Improve button styling with stronger colors and shadows
3. Add feature cards with images
4. Better typography hierarchy
5. Add subtle animations on scroll

---

### 4. **About Dropdown Navigation** (index.html lines 204-268)
**Current Status:**
- ✅ Mega menu HTML structure exists
- ✅ JavaScript functionality implemented (main.js lines 658-728)
- ⚠️ May have CSS visibility or hover timing issues

**Planned Fixes:**
1. Test dropdown functionality
2. Improve hover states and transitions
3. Ensure mega menu is visible on hover/click
4. Fix any z-index layering issues
5. Improve mobile dropdown experience

---

### 5. **Contact Page - Header Visibility** (contact.html line 581)
**Current Problems:**
- ❌ "Join Our Mission" header not visible
- ❌ Poor contrast on `.page-hero` section
- ❌ Text disappears into background

**Current Code:**
```html
<section class="page-hero">
    <div class="container">
        <h1 data-aos="fade-up">Join Our Mission</h1>
        <p data-aos="fade-up" data-aos-delay="200">Become part of a community making a real difference in Hyderabad</p>
    </div>
</section>
```

**Planned Fixes:**
1. Add background color or image to `.page-hero`
2. Improve text contrast (white text on dark background OR dark text on light background)
3. Add text shadows for visibility
4. Improve padding and spacing
5. Ensure responsive design works

---

### 6. **Contact Page - Font Readability** (contact.html general)
**Current Problems:**
- ❌ Cursive font (Playfair Display) may be hard to read in some sections
- ❌ Font sizes might be too small on mobile
- ❌ Line height and spacing issues

**Current Font Stack:**
- Headings: 'Playfair Display' (serif/cursive)
- Body: 'Inter' (sans-serif)

**Planned Fixes:**
1. Consider changing heading font to more humanist sans-serif (like Inter, Open Sans, or Lato)
2. Or keep Playfair Display but increase font weight and size
3. Improve line-height for better readability
4. Adjust letter-spacing for cursive fonts
5. Test on multiple devices

---

### 7. **Press Coverage Section** (index.html lines 674-753)
**Current State:**
- ✅ Section exists with media cards
- ⚠️ Could be improved with better design

**Current Structure:**
- Media grid with 3 cards: Press Coverage, Videos, Connect
- Links to external press articles and YouTube videos
- Inline styles used

**Planned Improvements:**
1. Move inline styles to CSS file
2. Add press logos (Telangana Today, Times of India, YouTube)
3. Better card hover effects
4. Add publication dates
5. Featured press coverage carousel or highlight section

---

## Priority Order

1. **HIGH PRIORITY**
   - Contact page header visibility (critical UX issue)
   - Initiatives section refactor (main homepage content)
   - About dropdown fix (navigation broken)

2. **MEDIUM PRIORITY**
   - Impact section improvements
   - Discover Our Work section
   - Contact page font readability

3. **LOW PRIORITY**
   - Press coverage section enhancements

---

## Next Steps

1. ✅ Create this audit document
2. ⏳ Fix Contact page header visibility
3. ⏳ Refactor Initiatives section with images
4. ⏳ Refactor Impact section with visual content
5. ⏳ Fix About dropdown
6. ⏳ Refactor Discover Our Work section
7. ⏳ Improve Contact page typography
8. ⏳ Test all changes

---

**Document Status**: Complete
**Ready for Implementation**: Yes
