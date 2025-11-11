# DRNF Images - Quick Reference Guide

**Last Updated**: November 11, 2025

---

## Folder Structure

```
/public/images/
├── logos/          → DRNF logo (1 file)
├── team/           → Dr. Rabinder Nath & team photos (9 files)
├── initiatives/    → Chai counter, community work, videos (4 files)
├── partners/       → LooCafe images (2 files)
└── backgrounds/    → Reserve/unused images (3 files)
```

---

## Most Commonly Used Images

### DRNF Logo
```astro
<!-- Always use Cloudinary URL -->
<img src="https://res.cloudinary.com/dhupieu4x/image/upload/v1762599287/drnf-assets/drnf-assets/DRNF_logo.jpg"
     alt="Dr. Rabinder Nath Foundation Logo">
```

### Dr. Rabinder Nath Portrait (Primary)
```astro
<!-- Main portrait - use for About sections -->
<img src="https://res.cloudinary.com/dhupieu4x/image/upload/v1762599308/drnf-assets/drnf-assets/rabinder_nath2.1.jpg"
     alt="Dr. Rabinder Nath">
```

### Chai Counter - Banjara Hills
```astro
<!-- Active chai counter location -->
<img src="https://res.cloudinary.com/dhupieu4x/image/upload/f_auto,q_auto:good/drnf-assets/drnf-assets/drnf-chai-counter-banjara-hills-active.jpg"
     alt="Free Chai Counter - Banjara Hills Location">
```

### Chai Counter - Kadak House
```astro
<!-- Active chai counter location -->
<img src="https://res.cloudinary.com/dhupieu4x/image/upload/f_auto,q_auto:good/drnf-assets/drnf-assets/drnf-chai-counter-kadak-house-active.jpg"
     alt="Free Chai Counter - Kadak House Location">
```

### LooCafe Partnership Collage
```astro
<!-- LooCafe network showcase -->
<img src="https://res.cloudinary.com/dhupieu4x/image/upload/v1762599305/drnf-assets/drnf-assets/loocafe_no_bg_collage.png"
     alt="LooCafe Network Partnership">
```

---

## Local Image Paths

### Team Photos (Local)
```
/images/team/rabinder_nath2.1.jpg           (537x556)
/images/team/rabinder_nath_1.6.jpg          (720x960)
/images/team/rabinder_nath_5.1.jpg          (960x720)
/images/team/rabinder_nath_5.5.jpg          (960x705)
/images/team/rabinder_nath_drive.jpg        (960x720)
/images/team/community-service-team.jpg     (4080x3060 - LARGE!)
/images/team/community-group-photo-2022.png (1600x900)
/images/team/ved-with-google-1.png          (1536x2048)
/images/team/ved-with-google-2.png          (1200x1600)
```

### Initiative Photos (Local)
```
/images/initiatives/chai-counter-news-telangana-today.png (1280x960)
/images/initiatives/animal-welfare.png                     (800x611)
/images/initiatives/WhatsApp_Video_2023-02-16_at_19.50.38.mp4 (3.0MB)
/images/initiatives/WhatsApp_Video_2023-02-16_at_19.50.41.mp4 (5.1MB)
```

### Partner Images (Local)
```
/images/partners/LooCafe_Workstation.png    (1920x1080)
/images/partners/loocafe_no_bg_collage.png  (1396x1134 - transparent)
```

---

## Cloudinary-Only Images (No Local Copy)

These are ONLY on Cloudinary and should be referenced via URL:

```
charminar-cleaning-team.jpg                  → Frontline workers page
loocafe-exhibition-booth.jpg                 → LooCafe impact page
IMG-20250119-WA0056.jpg                      → Swachh Telangana initiative
dr-rabinder-nath-memorial-dental-camp.jpg   → Memorial events page
free-chai-counter-team.jpg                   → Chai counter gallery
```

---

## Quick Decision Guide

### When to use Cloudinary URL:
✅ Logo (appears on every page)
✅ Dr. Rabinder Nath photos (used across multiple pages)
✅ Chai counter location photos (frequently referenced)
✅ LooCafe partnership images
✅ Any image used on multiple pages

**Why?** CDN delivery, auto-optimization, caching, format conversion

### When to use Local Path:
✅ Community gallery images (specific to one page)
✅ Team photos for specific sections
✅ Videos (not on Cloudinary)
✅ Background images for design variations

**Why?** Faster development, no external dependencies, full control

---

## Cloudinary URL Pattern

```
Base URL:
https://res.cloudinary.com/dhupieu4x/image/upload/

Transformations:
f_auto,q_auto:good    → Auto format, good quality
v1762599287           → Version number (cache busting)

Path:
/drnf-assets/drnf-assets/[filename]

Full Example:
https://res.cloudinary.com/dhupieu4x/image/upload/f_auto,q_auto:good/drnf-assets/drnf-assets/drnf-chai-counter-banjara-hills-active.jpg
```

---

## Alt Text Best Practices

### Good Alt Text:
✅ "Dr. Rabinder Nath Foundation Free Chai Counter at Banjara Hills serving homeless community"
✅ "DRNF team volunteers at community service event in Hyderabad"
✅ "LooCafe public toilet network partnership with 270+ locations"

### Bad Alt Text:
❌ "image1.jpg"
❌ "photo"
❌ "Dr Rabinder Nath" (too brief, no context)

**Rule**: Describe what the image shows AND its relevance to DRNF's mission.

---

## Adding New Images

### Step-by-Step:

1. **Choose Category**
   - Team member photo? → `/images/team/`
   - Initiative/program? → `/images/initiatives/`
   - Partner organization? → `/images/partners/`
   - Logo/branding? → `/images/logos/`

2. **Name File**
   - Use kebab-case: `chai-counter-new-location.jpg`
   - Be descriptive: `blood-donation-drive-2024.jpg`
   - No spaces or special characters

3. **Optimize Image**
   - Resize to appropriate dimensions (max 2000px wide)
   - Compress (80-85% quality for JPEGs)
   - Use JPEG for photos, PNG for graphics/transparency

4. **Add to Project**
   ```bash
   # Copy file to appropriate folder
   cp ~/Downloads/new-photo.jpg /public/images/initiatives/
   ```

5. **Use in Code**
   ```astro
   <!-- Local path -->
   <img src="/images/initiatives/new-photo.jpg" alt="Descriptive alt text">

   <!-- OR upload to Cloudinary first, then use URL -->
   <img src="https://res.cloudinary.com/dhupieu4x/image/upload/f_auto,q_auto:good/drnf-assets/drnf-assets/new-photo.jpg"
        alt="Descriptive alt text">
   ```

6. **Update Documentation**
   - Add entry to IMAGE_MANIFEST.md
   - Note which pages use the image

---

## Troubleshooting

### Image not loading (404 error)
1. Check file actually exists in expected folder
2. Verify path is correct (case-sensitive!)
3. Check file extension matches (.jpg vs .jpeg vs .png)
4. For Cloudinary: verify URL is complete and correct

### Image loads but looks pixelated
1. Check source image resolution
2. If Cloudinary: check quality setting (use `q_auto:good` or `q_auto:best`)
3. Consider using higher resolution source image

### Image loads slowly
1. Check file size (should be < 1MB ideally)
2. Use Cloudinary URLs for automatic optimization
3. Add `loading="lazy"` attribute for below-fold images

### Broken image icon appears
1. Image file doesn't exist at specified path
2. Filename or path has typo
3. Image was moved/renamed but code wasn't updated
4. Network issue (if using Cloudinary URL)

---

## Need More Info?

📄 **Detailed Documentation**: See `IMAGE_MANIFEST.md` (comprehensive inventory)
📄 **Organization Summary**: See `IMAGE_ORGANIZATION_SUMMARY.md` (how/why organized)
📄 **Main Project Docs**: See `/CLAUDE.md` (project overview)

---

**Quick Help**:
- Find an image: Search IMAGE_MANIFEST.md
- Add new image: Follow "Adding New Images" above
- Fix broken image: Check "Troubleshooting" above
- Understand structure: See folder structure at top

---

**Last Audit**: November 11, 2025
**Status**: All images properly organized and documented
**Build Status**: ✅ Passing (no broken images)
