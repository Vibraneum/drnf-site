# DRNF Website - Image Sourcing Quick Start

**Created**: November 17, 2025
**Purpose**: Fast-track guide to download and integrate authentic images

---

## TL;DR - 3-Step Process

1. **Run the download script**: `./download_images.sh`
2. **Optimize the images**: Use TinyPNG or ImageMagick
3. **Update HTML files**: Replace placeholder image paths

**Time Required**: 30-45 minutes
**Images You'll Get**: 16 high-quality authentic images from LooCafe and news sources

---

## Step 1: Download Images (5 minutes)

### Option A: Automated Script (Recommended)

```bash
cd "/mnt/d/Ixora Sites/DRNF_website"
./download_images.sh
```

This will download:
- 10 LooCafe official website images
- 6 news article images (Telangana Today, Hans India, Scroll.in)
- 2 LooCafe logos

### Option B: Manual Download

If the script doesn't work, manually download from the **IMAGE_SOURCING_REPORT.md** file.

Key URLs to download:
1. **Telangana Today**: https://media.telanganatoday.com/wp-content/uploads/2021/07/Free-Chai.jpg
2. **LooCafe Hero**: https://image.typedream.com/.../2ixrUutXQbBDs1qCRE0ofPwJ8uz_hero_cover.png
3. **Hans India**: https://assets.thehansindia.com/h-upload/2021/03/13/1037071-chaui.webp

(See IMAGE_SOURCING_REPORT.md for complete list)

---

## Step 2: Optimize Images (10-15 minutes)

### Why Optimize?

Downloaded images are often 500KB-2MB. We need them under 200KB for fast page loads.

### Option A: Online Tool (Easiest)

1. Visit **https://tinypng.com**
2. Drag and drop all downloaded images
3. Wait for compression (typically 60-70% size reduction)
4. Download compressed versions
5. Replace original files

### Option B: Squoosh (More Control)

1. Visit **https://squoosh.app**
2. Upload one image at a time
3. Adjust quality slider to 80-85%
4. Compare before/after
5. Download

### Option C: Command Line (Fastest for Bulk)

```bash
# Install ImageMagick if not already installed
# On Ubuntu/Debian: sudo apt install imagemagick
# On macOS: brew install imagemagick

cd "/mnt/d/Ixora Sites/DRNF_website/images"

# Compress all JPG files
for img in loocafe/*.jpg news-media/*.jpg; do
  convert "$img" -quality 85 "$img"
done

# Convert PNG to JPG (except logos)
for img in loocafe/*.png; do
  filename=$(basename "$img" .png)
  convert "$img" -quality 85 "loocafe/${filename}.jpg"
  rm "$img"  # Remove original PNG
done
```

**Target Specs**:
- Format: JPG for photos, PNG for logos
- Quality: 80-85%
- Size: <200KB per image
- Dimensions: Match requirements in ASSET_NEEDS_LIST.md

---

## Step 3: Update HTML Files (15-20 minutes)

### Homepage (index.html)

Find the initiative cards section and add background images:

```html
<!-- Around line 150-200 in index.html -->

<!-- Free Chai Counter Initiative -->
<div class="initiative-card" style="background-image: linear-gradient(rgba(44, 85, 48, 0.8), rgba(44, 85, 48, 0.8)), url('images/news-media/chai-counter-telangana-today.jpg');">
  <i class="fas fa-mug-hot"></i>
  <h3>Free Chai Counters</h3>
  <p>Serving 500-600 people daily at 2 locations across Hyderabad...</p>
  <a href="chai-counters.html" class="btn btn-secondary">Learn More</a>
</div>

<!-- Community Support Initiative -->
<div class="initiative-card" style="background-image: linear-gradient(rgba(44, 85, 48, 0.8), rgba(44, 85, 48, 0.8)), url('images/loocafe/loocafe-community-engagement.jpg');">
  <i class="fas fa-hands-helping"></i>
  <h3>Community Support Programs</h3>
  <p>Ongoing donation drives supporting families in need...</p>
  <a href="community.html" class="btn btn-secondary">Learn More</a>
</div>
```

### Chai Counters Page (chai-counters.html)

Add hero section background and inline images:

```html
<!-- Hero Section (around line 40) -->
<section id="hero" class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/news-media/chai-counter-telangana-today.jpg');">
  <div class="container hero-content">
    <h1>Free Chai Counters</h1>
    <p>Serving warmth and compassion, one cup at a time</p>
  </div>
</section>

<!-- In the content section (around line 100) -->
<img
  src="images/news-media/chai-service-hans-india.jpg"
  alt="Free chai and biscuit service at LooCafe location in Hyderabad"
  class="section-image"
  loading="lazy"
>
<figcaption>
  <small>Photo credit: The Hans India</small>
</figcaption>
```

### LooCafe Impact Page (loocafe-impact.html)

If this page exists, update with LooCafe images:

```html
<!-- Hero Section -->
<section id="hero" class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('images/loocafe/loocafe-facility-hero.jpg');">
  <div class="container hero-content">
    <h1>LooCafe Partnership</h1>
    <p>Transforming urban sanitation, one facility at a time</p>
  </div>
</section>

<!-- Interior Section -->
<div class="content-section">
  <h2>Inside a LooCafe</h2>
  <img
    src="images/loocafe/loocafe-interior-design.jpg"
    alt="Clean, well-maintained LooCafe interior with modern amenities"
    class="section-image"
  >
  <p>Each LooCafe features clean facilities, attached cafe, and 24/7 accessibility...</p>
</div>

<!-- Gates Partnership -->
<div class="partnership-highlight">
  <img
    src="images/loocafe/loocafe-gates-partnership.jpg"
    alt="LooCafe partnership with Gates Foundation G2RT program"
    class="partnership-image"
  >
  <p>LooCafe is the exclusive Gates Foundation G2RT partner in Hyderabad...</p>
</div>
```

---

## Step 4: Add Attribution (5 minutes)

### For News Article Images

Add caption below each news image:

```html
<figcaption>
  <small>Photo credit: Telangana Today</small>
</figcaption>

<figcaption>
  <small>Photo credit: The Hans India</small>
</figcaption>

<figcaption>
  <small>Photo credit: Scroll.in</small>
</figcaption>
```

### For LooCafe Images

Add to footer or end of relevant pages:

```html
<p class="image-attribution">
  LooCafe facility images courtesy of
  <a href="https://loocafe.com" target="_blank" rel="noopener">LooCafe</a>,
  DRNF's strategic partner for the free chai counter initiative.
</p>
```

---

## Step 5: Test Locally (5 minutes)

```bash
cd "/mnt/d/Ixora Sites/DRNF_website"
python -m http.server 8000
```

Open browser to **http://localhost:8000**

### Testing Checklist:

- [ ] Homepage initiative cards show images
- [ ] Chai counters page has hero image
- [ ] Images load quickly (Network tab in DevTools)
- [ ] Images look good on mobile (DevTools responsive mode)
- [ ] Alt text is present (inspect element)
- [ ] Attribution is visible where required
- [ ] No 404 errors (Console tab in DevTools)

### Run Lighthouse Audit:

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Performance" and "SEO"
4. Click "Generate report"
5. **Target Scores**: Performance >90, SEO 100

---

## Step 6: Commit and Deploy

```bash
# Add new images
git add images/

# Add updated HTML files
git add *.html

# Commit with detailed message
git commit -m "Add authentic images from LooCafe and news sources

- 10 high-quality images from LooCafe.com official website
- 6 news article images (Telangana Today, Hans India, Scroll.in)
- Optimized all images to <200KB for fast loading
- Added descriptive alt text for accessibility
- Proper attribution for all partner and media images
- Updated homepage, chai-counters, and related pages

Images sourced from verified partners:
- LooCafe official website (partnership images)
- Telangana Today article (editorial use)
- Hans India article (editorial use)
- Scroll.in article (editorial use)

See IMAGE_SOURCING_REPORT.md for complete documentation.
"

# Push to repository
git push origin main

# Deployment happens automatically via GitHub Actions
```

---

## What If You Need More Images?

### Social Media Downloads

**Instagram @loocafe** (382 posts available):
1. Visit https://www.instagram.com/loocafe/
2. Find posts with facility photos, worker portraits, chai counter operations
3. Right-click image → "Open image in new tab" → "Save Image As"
4. Organize into appropriate folder
5. Optimize before using

**Facebook - DRNF**:
1. Visit https://www.facebook.com/DrRabinderNathFoundation/
2. Go to Photos section
3. Look for community service, chai counter, donation drive photos
4. Download high-resolution versions

### Stock Photos (Last Resort)

**Unsplash** (free, no attribution required):
- Indian Chai: https://unsplash.com/s/photos/indian-chai
- Community Service: https://unsplash.com/s/photos/community-service
- Education: https://unsplash.com/s/photos/education-workshop

**Pexels** (free, no attribution required):
- Donation Drives: https://www.pexels.com/search/donation/
- Tree Planting: https://www.pexels.com/search/tree%20planting/

**Use stock photos ONLY as temporary placeholders** - prioritize authentic partner images.

---

## Troubleshooting

### Images Not Downloading

**Problem**: `./download_images.sh` fails

**Solutions**:
1. Check if wget/curl installed: `which wget` or `which curl`
2. If not, install: `sudo apt install wget` (Ubuntu/Debian)
3. Or manually download URLs from IMAGE_SOURCING_REPORT.md

### Images Too Large

**Problem**: Downloaded images are 1-2MB each

**Solutions**:
1. Use TinyPNG: https://tinypng.com (easiest)
2. Or ImageMagick: `convert input.jpg -quality 80 output.jpg`
3. Target: <200KB per image

### Images Not Showing on Website

**Problem**: Broken image icons in browser

**Check**:
1. File path is correct (case-sensitive!)
2. File exists in the right directory
3. File extension matches (`.jpg` not `.JPG`)
4. Browser cache cleared (Ctrl+Shift+R)

### Page Loading Slowly

**Problem**: Lighthouse shows poor Performance score

**Solutions**:
1. Compress images more aggressively (70% quality)
2. Convert to WebP format for modern browsers
3. Add `loading="lazy"` to all images below the fold
4. Use smaller dimensions for thumbnails

---

## Image Status Summary

After running this quick start, you will have:

**✓ Completed** (16 images):
- Asset #1: LooCafe Facility Hero
- Asset #3: LooCafe Interior
- Asset #7: Gates Partnership
- Asset #16: Chai Counter in Action
- Asset #17: Community Support
- Asset #20: Impact Collage
- Asset #21: LooCafe Location
- Asset #22: Chai Preparation
- Plus 8 additional supporting images

**⏳ Still Needed** (8 images):
- Asset #5: Entrepreneur Portrait (Instagram)
- Asset #6: Worker at Work (Instagram/Facebook)
- Asset #9: Frontline Workers Hero (Ixora CSR)
- Asset #10: PPE Distribution (Ixora CSR)
- Asset #18: Education Workshop (stock/Facebook)
- Asset #19: Environmental Activity (stock)
- Asset #23: People with Chai (Instagram/stock)
- Asset #24: 24/7 Operations (stock)

**Progress**: 67% complete with high-priority authentic images

---

## Next Steps After This Quick Start

1. **Schedule a photoshoot** for real DRNF chai counter operations
2. **Contact Ixora Group** (hello@ixoragroup.com) for CSR photos
3. **Download from Instagram/Facebook** for worker portraits and community events
4. **Replace stock photos** with authentic images as they become available
5. **Create video content** by downloading DRNF Facebook videos

---

## Resources

- **Full Documentation**: IMAGE_SOURCING_REPORT.md (10 parts, complete guide)
- **Asset List**: ASSET_NEEDS_LIST.md (24 images with priorities)
- **Sourcing Guide**: IMAGE_SOURCING_GUIDE.md (step-by-step instructions)
- **This File**: Quick start for immediate implementation

---

## Summary: What You Accomplished

By following this quick start, you:

1. ✅ Downloaded 16 authentic images from verified sources
2. ✅ Optimized images for fast web loading (<200KB)
3. ✅ Updated HTML files with real images
4. ✅ Added proper attribution for news sources
5. ✅ Tested website locally for quality
6. ✅ Committed and deployed to production

**Result**: DRNF website now features authentic, high-quality images showcasing the real work of the foundation and its partnerships.

**Time Invested**: 30-45 minutes
**Impact**: Professional, authentic visual storytelling that represents DRNF's true mission

---

**Status**: Ready to implement
**Priority**: HIGH - Significantly improves website quality and authenticity
**Next**: Run `./download_images.sh` to get started!
