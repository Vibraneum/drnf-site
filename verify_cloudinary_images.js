// Verify all Cloudinary images are accessible
const https = require('https');

const images = [
  { name: 'DRNF_logo.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599287/drnf-assets/drnf-assets/DRNF_logo.jpg' },
  { name: 'LooCafe_Workstation.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599290/drnf-assets/drnf-assets/LooCafe_Workstation.jpg' },
  { name: 'Untitled_1.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599292/drnf-assets/drnf-assets/Untitled_1.jpg' },
  { name: 'Untitled_2.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599293/drnf-assets/drnf-assets/Untitled_2.jpg' },
  { name: 'Untitled_3.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599295/drnf-assets/drnf-assets/Untitled_3.jpg' },
  { name: 'Untitled_4.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599296/drnf-assets/drnf-assets/Untitled_4.jpg' },
  { name: 'Untitled_5.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599297/drnf-assets/drnf-assets/Untitled_5.jpg' },
  { name: 'Untitled_6.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599298/drnf-assets/drnf-assets/Untitled_6.jpg' },
  { name: 'Untitled_7.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599300/drnf-assets/drnf-assets/Untitled_7.jpg' },
  { name: 'Untitled.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599302/drnf-assets/drnf-assets/Untitled.jpg' },
  { name: 'loocafe_no_bg_collage.png', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599305/drnf-assets/drnf-assets/loocafe_no_bg_collage.png' },
  { name: 'rabinder_nath2.1.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599308/drnf-assets/drnf-assets/rabinder_nath2.1.jpg' },
  { name: 'rabinder_nath_1.6.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599310/drnf-assets/drnf-assets/rabinder_nath_1.6.jpg' },
  { name: 'rabinder_nath_5.1.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599312/drnf-assets/drnf-assets/rabinder_nath_5.1.jpg' },
  { name: 'rabinder_nath_5.5.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599313/drnf-assets/drnf-assets/rabinder_nath_5.5.jpg' },
  { name: 'rabinder_nath_drive.jpg', url: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599315/drnf-assets/drnf-assets/rabinder_nath_drive.jpg' }
];

console.log('🔍 Verifying all Cloudinary images are accessible...\n');

async function checkImage(image) {
  return new Promise((resolve) => {
    https.get(image.url, (res) => {
      const status = res.statusCode;
      const contentType = res.headers['content-type'];
      const contentLength = res.headers['content-length'];
      const sizeKB = contentLength ? (parseInt(contentLength) / 1024).toFixed(0) : 'unknown';

      if (status === 200) {
        console.log(`✅ ${image.name.padEnd(30)} → ${status} (${sizeKB} KB, ${contentType})`);
        resolve({ ...image, status, ok: true, size: sizeKB });
      } else {
        console.log(`❌ ${image.name.padEnd(30)} → ${status} ERROR`);
        resolve({ ...image, status, ok: false });
      }
    }).on('error', (err) => {
      console.log(`❌ ${image.name.padEnd(30)} → Network error: ${err.message}`);
      resolve({ ...image, status: 'error', ok: false, error: err.message });
    });
  });
}

async function verifyAll() {
  const results = [];

  for (const image of images) {
    const result = await checkImage(image);
    results.push(result);
  }

  const successful = results.filter(r => r.ok).length;
  const failed = results.filter(r => !r.ok).length;

  console.log('\n📊 Verification Summary:');
  console.log(`   Total images: ${results.length}`);
  console.log(`   ✅ Accessible: ${successful}`);
  console.log(`   ❌ Failed: ${failed}`);

  if (failed === 0) {
    console.log('\n🎉 ALL IMAGES VERIFIED AND ACCESSIBLE!');
    console.log('✅ Ready for Cloudflare Pages deployment!');
  } else {
    console.log('\n⚠️ Some images are not accessible. Fix before deploying.');
  }
}

verifyAll().catch(console.error);
