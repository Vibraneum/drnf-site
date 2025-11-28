/**
 * DRNF Website - Cloudinary Bulk Upload Script for Large Images
 *
 * This script uploads the large chai counter photos and community images to Cloudinary
 * Uses q_auto,f_auto for automatic compression and format conversion
 *
 * Usage:
 *   cd "/mnt/d/Ixora Sites/DRNF_website"
 *   npm install cloudinary
 *   node scripts/upload-large-images.cjs
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

// Image upload configuration for large files
const imageConfigs = [
  // ============================================================
  // COMMUNITY SERVICE TEAM (11MB - Single large file)
  // ============================================================
  {
    category: 'community',
    folder: '',
    files: [
      { localPath: 'community-service-team.jpg', publicId: 'community-service-team' }
    ]
  },

  // ============================================================
  // CHAI COUNTER PHOTOS (95MB total - 17 photos, 3-9MB each)
  // ============================================================
  {
    category: 'chai-counters',
    folder: 'chai-counter-photos',
    files: [
      { localPath: '20250313_182621.jpg', publicId: 'chai-counter-01' },
      { localPath: '20250313_182624.jpg', publicId: 'chai-counter-02' },
      { localPath: '20250313_182635.jpg', publicId: 'chai-counter-03' },
      { localPath: '20250313_182638.jpg', publicId: 'chai-counter-04' },
      { localPath: '20250313_182639.jpg', publicId: 'chai-counter-05' },
      { localPath: '20250313_182642.jpg', publicId: 'chai-counter-06' },
      { localPath: '20250313_182649.jpg', publicId: 'chai-counter-07' },
      { localPath: '20250313_182655.jpg', publicId: 'chai-counter-08' },
      { localPath: '20250313_182703.jpg', publicId: 'chai-counter-09' },
      { localPath: '20250313_182711.jpg', publicId: 'chai-counter-10' },
      { localPath: '20250313_182715.jpg', publicId: 'chai-counter-11' },
      { localPath: '20250313_182720.jpg', publicId: 'chai-counter-12' },
      { localPath: '20250313_182727.jpg', publicId: 'chai-counter-13' },
      { localPath: '20250313_182731.jpg', publicId: 'chai-counter-14' },
      { localPath: '20250313_182738.jpg', publicId: 'chai-counter-15' },
      { localPath: '20250313_182758.jpg', publicId: 'chai-counter-16' },
      { localPath: '20250313_182804.jpg', publicId: 'chai-counter-17' }
    ]
  }
];

/**
 * Upload a single image to Cloudinary
 */
async function uploadImage(config, basePath, categoryFolder) {
  const folderPath = categoryFolder ? path.join(basePath, categoryFolder) : basePath;
  const fullPath = path.join(folderPath, config.localPath);
  const cloudFolder = categoryFolder ? categoryFolder.replace(/\//g, '-') : 'community';
  const publicId = `${CLOUDINARY_FOLDER}/${cloudFolder}/${config.publicId}`;

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    console.log(`⏭️  Skipping (not found): ${config.localPath}`);
    return { skipped: true };
  }

  const fileSizeBytes = fs.statSync(fullPath).size;
  const fileSizeMB = (fileSizeBytes / (1024 * 1024)).toFixed(2);

  try {
    console.log(`📤 Uploading: ${config.localPath} (${fileSizeMB} MB)`);
    console.log(`   → ${publicId}`);

    const result = await cloudinary.uploader.upload(fullPath, {
      public_id: publicId,
      overwrite: true,
      invalidate: true,
      resource_type: 'image',
      // Enable automatic optimization
      transformation: [
        { quality: 'auto', fetch_format: 'auto' }
      ]
    });

    const optimizedSize = (result.bytes / 1024).toFixed(2);
    const savings = ((1 - result.bytes / fileSizeBytes) * 100).toFixed(1);

    console.log(`✅ Uploaded: ${result.public_id}`);
    console.log(`   Original: ${fileSizeMB} MB → Optimized: ${optimizedSize} KB (${savings}% savings)`);
    console.log(`   URL: ${result.secure_url}\n`);

    return {
      success: true,
      result,
      publicId,
      originalSize: fileSizeBytes,
      optimizedSize: result.bytes
    };
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
  console.log('\n🚀 DRNF - Cloudinary Bulk Upload for Large Images\n');
  console.log(`☁️  Cloud Name: ${CLOUDINARY_CLOUD_NAME}`);
  console.log(`📁 Folder: ${CLOUDINARY_FOLDER}`);
  console.log(`📍 Source: ${IMAGES_BASE}\n`);
  console.log('='.repeat(60) + '\n');

  const stats = {
    total: 0,
    successful: 0,
    failed: 0,
    skipped: 0,
    originalBytes: 0,
    optimizedBytes: 0
  };

  const uploadedUrls = {};

  for (const category of imageConfigs) {
    console.log(`\n📂 ${category.category.toUpperCase()}`);
    console.log('-'.repeat(40) + '\n');

    uploadedUrls[category.category] = [];

    for (const fileConfig of category.files) {
      stats.total++;
      const result = await uploadImage(fileConfig, IMAGES_BASE, category.folder);

      if (result.success) {
        stats.successful++;
        stats.originalBytes += result.originalSize;
        stats.optimizedBytes += result.optimizedSize;

        const localPath = category.folder
          ? `images/${category.folder}/${fileConfig.localPath}`
          : `images/${fileConfig.localPath}`;

        uploadedUrls[category.category].push({
          localPath,
          publicId: result.publicId,
          url: result.result.secure_url,
          optimizedUrl: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto/${result.publicId}`
        });
      } else if (result.skipped) {
        stats.skipped++;
      } else {
        stats.failed++;
      }

      // Rate limiting - wait 500ms between uploads
      await new Promise(resolve => setTimeout(resolve, 500));
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

  if (stats.successful > 0) {
    const originalMB = (stats.originalBytes / (1024 * 1024)).toFixed(2);
    const optimizedMB = (stats.optimizedBytes / (1024 * 1024)).toFixed(2);
    const totalSavings = ((1 - stats.optimizedBytes / stats.originalBytes) * 100).toFixed(1);

    console.log(`\n💾 Size Reduction:`);
    console.log(`   Original: ${originalMB} MB`);
    console.log(`   Optimized: ${optimizedMB} MB`);
    console.log(`   Savings: ${totalSavings}%`);
  }

  // Generate mapping file
  const mappingPath = path.join(__dirname, '..', 'cloudinary-large-images.json');
  fs.writeFileSync(mappingPath, JSON.stringify(uploadedUrls, null, 2));
  console.log(`\n📄 URL mapping saved to: cloudinary-large-images.json`);

  // Generate code replacement suggestions
  console.log('\n📝 Code Updates Required:');
  console.log('   Replace local image paths with Cloudinary URLs in:');
  console.log('   - index.html');
  console.log('   - chai-counters.html');
  console.log('   - frontline-workers.html');

  console.log('\n✨ Upload complete!\n');
  return stats;
}

// Run
uploadAllImages().catch(console.error);
