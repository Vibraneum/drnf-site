// Upload all DRNF images to Cloudinary
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dhupieu4x',
  api_key: '514375451689993',
  api_secret: 'n6jJhK7rY1qleak60_1NV41VHGY',
});

const imagesDir = '/mnt/d/Ixora Sites/DRNF_website/images';
const uploadResults = [];

// List of all image files to upload
const imageFiles = [
  'DRNF_logo.jpg',
  'LooCafe_Workstation.png',
  'Untitled 1.png',
  'Untitled 2.png',
  'Untitled 3.png',
  'Untitled 4.png',
  'Untitled 5.png',
  'Untitled 6.png',
  'Untitled 7.png',
  'Untitled.png',
  'community-service-team.jpg',
  'loocafe_no_bg_collage.png',
  'rabinder_nath2.1.jpg',
  'rabinder_nath_1.6.jpg',
  'rabinder_nath_5.1.jpg',
  'rabinder_nath_5.5.jpg',
  'rabinder_nath_drive.jpg'
];

console.log('🚀 Starting Cloudinary upload for DRNF images...\n');

async function uploadImage(filename) {
  const filePath = path.join(imagesDir, filename);
  const publicId = `drnf-assets/${filename.replace(/\s+/g, '_').replace(/\.[^.]+$/, '')}`;

  try {
    const stats = fs.statSync(filePath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log(`Uploading: ${filename} (${sizeInMB} MB)...`);

    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      resource_type: 'image',
      folder: 'drnf-assets',
      transformation: [
        { quality: 'auto', fetch_format: 'auto' }
      ]
    });

    const uploadedSizeKB = (result.bytes / 1024).toFixed(0);
    console.log(`✅ ${filename} → ${uploadedSizeKB}KB`);
    console.log(`   URL: ${result.secure_url}\n`);

    return {
      filename,
      originalSize: sizeInMB + ' MB',
      cloudinaryUrl: result.secure_url,
      cloudinaryId: result.public_id,
      uploadedSize: uploadedSizeKB + ' KB',
      format: result.format,
      width: result.width,
      height: result.height
    };
  } catch (error) {
    console.error(`❌ Error uploading ${filename}:`, error.message);
    return {
      filename,
      error: error.message
    };
  }
}

async function uploadAll() {
  for (const file of imageFiles) {
    const result = await uploadImage(file);
    uploadResults.push(result);
  }

  // Save results to JSON file
  const outputPath = '/mnt/d/Ixora Sites/DRNF_website/CLOUDINARY_UPLOAD_RESULTS.json';
  fs.writeFileSync(outputPath, JSON.stringify(uploadResults, null, 2));

  console.log('\n✅ All uploads complete!');
  console.log(`📄 Results saved to: ${outputPath}`);
  console.log(`\n📊 Summary:`);
  console.log(`   Total images: ${uploadResults.length}`);
  console.log(`   Successful: ${uploadResults.filter(r => !r.error).length}`);
  console.log(`   Failed: ${uploadResults.filter(r => r.error).length}`);
}

uploadAll().catch(console.error);
