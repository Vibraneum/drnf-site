/**
 * DRNF Website - Cloudinary Bulk Upload Script
 *
 * Prerequisites:
 * 1. npm install cloudinary (or run from parent with cloudinary installed)
 * 2. Uses shared Ixora Group Cloudinary credentials
 *
 * Usage:
 *   node scripts/upload-to-cloudinary.cjs
 */

const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

// Configure Cloudinary - Using Ixora Group shared credentials
const CLOUDINARY_CLOUD_NAME = 'dhupieu4x';
const CLOUDINARY_API_KEY = '514375451689993';
const CLOUDINARY_API_SECRET = 'n6jJhK7rY1qleak60_1NV41VHGY';
const CLOUDINARY_FOLDER = 'drnf-assets';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
});

// Base path to local images
const IMAGES_BASE = path.join(__dirname, '..', 'images');

// Image upload configuration
const imageConfigs = [
  // ============================================================
  // LOGOS
  // ============================================================
  {
    category: 'logos',
    files: [
      {
        localPath: 'DRNF_logo.jpg',
        publicId: `${CLOUDINARY_FOLDER}/logos/drnf-logo`,
        description: 'DRNF main logo'
      }
    ]
  },

  // ============================================================
  // DR RABINDER NATH PHOTOS
  // ============================================================
  {
    category: 'founder',
    files: [
      {
        localPath: 'rabinder_nath_1.6.jpg',
        publicId: `${CLOUDINARY_FOLDER}/founder/rabinder-nath-portrait-1`,
        description: 'Dr. Rabinder Nath portrait'
      },
      {
        localPath: 'rabinder_nath2.1.jpg',
        publicId: `${CLOUDINARY_FOLDER}/founder/rabinder-nath-portrait-2`,
        description: 'Dr. Rabinder Nath portrait alt'
      },
      {
        localPath: 'rabinder_nath_5.1.jpg',
        publicId: `${CLOUDINARY_FOLDER}/founder/rabinder-nath-photo-5-1`,
        description: 'Dr. Rabinder Nath photo'
      },
      {
        localPath: 'rabinder_nath_5.5.jpg',
        publicId: `${CLOUDINARY_FOLDER}/founder/rabinder-nath-photo-5-5`,
        description: 'Dr. Rabinder Nath photo alt'
      },
      {
        localPath: 'rabinder_nath_drive.jpg',
        publicId: `${CLOUDINARY_FOLDER}/founder/rabinder-nath-drive`,
        description: 'Dr. Rabinder Nath historical photo'
      }
    ]
  },

  // ============================================================
  // COMMUNITY PHOTOS (Untitled series)
  // ============================================================
  {
    category: 'community',
    files: [
      {
        localPath: 'Untitled.png',
        publicId: `${CLOUDINARY_FOLDER}/community/chai-service-main`,
        description: 'Main chai service photo'
      },
      {
        localPath: 'Untitled 1.png',
        publicId: `${CLOUDINARY_FOLDER}/community/chai-service-1`,
        description: 'Chai service photo 1'
      },
      {
        localPath: 'Untitled 2.png',
        publicId: `${CLOUDINARY_FOLDER}/community/chai-service-2`,
        description: 'Chai service photo 2'
      },
      {
        localPath: 'Untitled 3.png',
        publicId: `${CLOUDINARY_FOLDER}/community/chai-service-3`,
        description: 'Chai service photo 3'
      },
      {
        localPath: 'Untitled 4.png',
        publicId: `${CLOUDINARY_FOLDER}/community/chai-service-4`,
        description: 'Chai service photo 4'
      },
      {
        localPath: 'Untitled 5.png',
        publicId: `${CLOUDINARY_FOLDER}/community/chai-service-5`,
        description: 'Chai service photo 5'
      },
      {
        localPath: 'Untitled 6.png',
        publicId: `${CLOUDINARY_FOLDER}/community/chai-service-6`,
        description: 'Chai service photo 6'
      },
      {
        localPath: 'Untitled 7.png',
        publicId: `${CLOUDINARY_FOLDER}/community/chai-service-7`,
        description: 'Chai service photo 7'
      },
      // community-service-team.jpg removed - exceeds 10MB limit
    ]
  },

  // ============================================================
  // LOOCAFE PARTNERSHIP
  // ============================================================
  {
    category: 'loocafe',
    files: [
      {
        localPath: 'loocafe_no_bg_collage.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/collage-main`,
        description: 'LooCafe collage main'
      },
      {
        localPath: 'LooCafe_Workstation.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/workstation`,
        description: 'LooCafe workstation'
      },
      {
        localPath: 'loocafe/hero-cover.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/hero-cover`,
        description: 'LooCafe hero image'
      },
      {
        localPath: 'loocafe/logo.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/logo`,
        description: 'LooCafe logo'
      },
      {
        localPath: 'loocafe/exterior-view.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/exterior-view`,
        description: 'LooCafe exterior view'
      },
      {
        localPath: 'loocafe/mini-collage.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/mini-collage`,
        description: 'LooCafe Mini collage'
      },
      {
        localPath: 'loocafe/collage-2024.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/collage-2024`,
        description: 'LooCafe 2024 collage'
      },
      {
        localPath: 'loocafe/facility-photo-1.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/facility-1`,
        description: 'LooCafe facility photo'
      },
      {
        localPath: 'loocafe/facility-collage-1.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/facility-collage-1`,
        description: 'LooCafe facility collage 1'
      },
      {
        localPath: 'loocafe/facility-collage-2.png',
        publicId: `${CLOUDINARY_FOLDER}/loocafe/facility-collage-2`,
        description: 'LooCafe facility collage 2'
      }
    ]
  }
];

/**
 * Upload a single image to Cloudinary
 */
async function uploadImage(config, basePath) {
  const fullPath = path.join(basePath, config.localPath);

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    console.log(`⏭️  Skipping (not found): ${config.localPath}`);
    return { skipped: true };
  }

  try {
    console.log(`📤 Uploading: ${config.localPath}`);
    console.log(`   → ${config.publicId}`);

    const result = await cloudinary.uploader.upload(fullPath, {
      public_id: config.publicId,
      overwrite: true,
      invalidate: true,
      resource_type: 'image'
    });

    console.log(`✅ Uploaded: ${result.public_id}`);
    console.log(`   Size: ${(result.bytes / 1024).toFixed(2)} KB`);
    console.log(`   URL: ${result.secure_url}\n`);

    return { success: true, result };
  } catch (error) {
    console.error(`❌ Failed: ${config.localPath}`);
    console.error(`   Error: ${error.message}\n`);
    return { failed: true, error };
  }
}

/**
 * Main upload function
 */
async function uploadAllImages() {
  console.log('\n🚀 DRNF - Cloudinary Bulk Upload\n');
  console.log(`☁️  Cloud Name: ${CLOUDINARY_CLOUD_NAME}`);
  console.log(`📁 Folder: ${CLOUDINARY_FOLDER}`);
  console.log(`📍 Source: ${IMAGES_BASE}\n`);
  console.log('='.repeat(60) + '\n');

  const stats = {
    total: 0,
    successful: 0,
    failed: 0,
    skipped: 0
  };

  const uploadedUrls = {};

  for (const category of imageConfigs) {
    console.log(`\n📂 ${category.category.toUpperCase()}`);
    console.log('-'.repeat(40) + '\n');

    uploadedUrls[category.category] = [];

    for (const fileConfig of category.files) {
      stats.total++;
      const result = await uploadImage(fileConfig, IMAGES_BASE);

      if (result.success) {
        stats.successful++;
        uploadedUrls[category.category].push({
          name: path.basename(fileConfig.localPath),
          publicId: fileConfig.publicId,
          url: result.result.secure_url,
          description: fileConfig.description
        });
      } else if (result.skipped) {
        stats.skipped++;
      } else {
        stats.failed++;
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 UPLOAD SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total: ${stats.total}`);
  console.log(`✅ Successful: ${stats.successful}`);
  console.log(`❌ Failed: ${stats.failed}`);
  console.log(`⏭️  Skipped: ${stats.skipped}`);

  // Generate mapping file
  const mappingPath = path.join(__dirname, '..', 'cloudinary-urls.json');
  fs.writeFileSync(mappingPath, JSON.stringify(uploadedUrls, null, 2));
  console.log(`\n📄 URL mapping saved to: cloudinary-urls.json`);

  console.log('\n✨ Upload complete!\n');
  return stats;
}

// Run
uploadAllImages().catch(console.error);
