# DRNF Website - Image Assets Documentation

## Missing Image Files

The following image files are referenced in the HTML but are currently missing from the `/images` directory. These need to be added with actual foundation photos.

### Required Image Directories

Create the following subdirectories in `/images`:
```
images/
├── initiatives/
├── awards/
└── team/
```

### Missing Images by Category

#### Initiatives Images (`images/initiatives/`)
1. **drnf-chai-counter-banjara-hills-active.jpg**
   - Location: Used on index.html (hero section)
   - Purpose: Main hero image showing active chai counter at Banjara Hills
   - Recommended size: 1200x800px minimum
   - Alt text: "DRNF Free Chai Counter at Banjara Hills serving tea 24/7 to homeless community and frontline workers in Hyderabad"

2. **drnf-free-chai-counter.jpg**
   - Purpose: General free chai counter image
   - Recommended size: 800x600px

3. **drnf-chai-counter-kadak-house-active.jpg**
   - Purpose: Chai counter at Kadak House location
   - Recommended size: 800x600px

4. **drnf-team-photo.jpg**
   - Purpose: Foundation team group photo
   - Recommended size: 1200x800px

5. **blood-donation-drive-2024.jpg**
   - Purpose: Community initiative - blood donation event
   - Recommended size: 800x600px

6. **ganesh-chaturthi-celebration-2024.jpg**
   - Purpose: Cultural celebration event
   - Recommended size: 800x600px

#### Awards Images (`images/awards/`)
1. **5-star-garbage-free-city-award.jpg**
   - Location: Used on index.html (awards section)
   - Purpose: Environmental excellence award photo
   - Recommended size: 800x600px
   - Alt text: "DRNF receives 5-star Garbage Free City Award for environmental excellence and waste management through LooCafe partnership"

2. **team-receiving-award.jpg**
   - Location: Used on index.html (awards section)
   - Purpose: Team receiving recognition
   - Recommended size: 800x600px
   - Alt text: "DRNF team receiving recognition award for community service and social impact in Hyderabad"

#### Team Images (`images/team/`)
1. **employee-birthday-celebration.jpg**
   - Purpose: Employee engagement - birthday celebration
   - Recommended size: 800x600px

2. **employee-engagement-goa-trip-airport.jpg**
   - Purpose: Employee trip/team building
   - Recommended size: 800x600px

3. **team-gathering-1.jpg**
   - Purpose: Team gathering photo
   - Recommended size: 800x600px

4. **team-gathering-2.jpg**
   - Purpose: Team gathering photo
   - Recommended size: 800x600px

#### General Images (`images/`)
1. **chai_counter.jpg**
   - Location: navigation-template.html (mega menu)
   - Purpose: Generic chai counter image for navigation
   - Recommended size: 400x300px

## Existing Images (Available)

The following images are already present in `/images`:
- DRNF_logo.jpg
- LooCafe_Workstation.png
- community-service-team.jpg
- loocafe_no_bg_collage.png
- rabinder_nath2.1.jpg
- rabinder_nath_1.6.jpg
- rabinder_nath_5.1.jpg
- rabinder_nath_5.5.jpg
- rabinder_nath_drive.jpg
- Untitled.png through Untitled 7.png (various images)
- WhatsApp videos (2)

## Temporary Placeholder Solution

Until actual photos are provided, you can use placeholder images from:
- **Unsplash Source API**: `https://source.unsplash.com/800x600/?charity,india`
- **Placeholder.com**: `https://via.placeholder.com/800x600/2c5530/ffffff?text=DRNF+Photo`
- **Local placeholders**: Use existing community-service-team.jpg as temporary placeholder

## Image Optimization Guidelines

When adding real images:
1. **Format**: Use JPG for photos, PNG for logos/graphics with transparency
2. **Size**: Compress images to < 200KB using tools like TinyPNG or ImageOptim
3. **Dimensions**:
   - Hero images: 1200x800px
   - Card images: 800x600px
   - Thumbnails: 400x300px
4. **Alt text**: Always include descriptive alt text for accessibility
5. **Loading**: Use `loading="lazy"` for images below the fold

## Action Items

1. Contact DRNF foundation to obtain actual photos of:
   - Active chai counters (Banjara Hills, Kadak House locations)
   - Award ceremonies (5-star Garbage Free City Award)
   - Team photos and gatherings
   - Community initiative events

2. Create missing directories:
   ```bash
   mkdir -p images/initiatives images/awards images/team
   ```

3. Add images with proper naming convention

4. Update HTML files if any image paths need correction

## Notes

- All Cloudinary URLs in the HTML are working and don't need local copies
- Focus on getting high-quality, authentic photos that showcase DRNF's work
- Ensure all photos have appropriate permissions for web use
- Consider adding captions to images for better context

---
**Created**: November 2025
**Last Updated**: November 13, 2025
