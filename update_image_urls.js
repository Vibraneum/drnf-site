// Update all HTML files with Cloudinary URLs
const fs = require('fs');
const path = require('path');

const replacements = [
  { from: 'images/DRNF_logo.jpg', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599287/drnf-assets/drnf-assets/DRNF_logo.jpg' },
  { from: 'images/LooCafe_Workstation.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599290/drnf-assets/drnf-assets/LooCafe_Workstation.jpg' },
  { from: 'images/Untitled 1.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599292/drnf-assets/drnf-assets/Untitled_1.jpg' },
  { from: 'images/Untitled 2.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599293/drnf-assets/drnf-assets/Untitled_2.jpg' },
  { from: 'images/Untitled 3.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599295/drnf-assets/drnf-assets/Untitled_3.jpg' },
  { from: 'images/Untitled 4.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599296/drnf-assets/drnf-assets/Untitled_4.jpg' },
  { from: 'images/Untitled 5.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599297/drnf-assets/drnf-assets/Untitled_5.jpg' },
  { from: 'images/Untitled 6.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599298/drnf-assets/drnf-assets/Untitled_6.jpg' },
  { from: 'images/Untitled 7.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599300/drnf-assets/drnf-assets/Untitled_7.jpg' },
  { from: 'images/Untitled.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599302/drnf-assets/drnf-assets/Untitled.jpg' },
  { from: 'images/loocafe_no_bg_collage.png', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599305/drnf-assets/drnf-assets/loocafe_no_bg_collage.png' },
  { from: 'images/rabinder_nath2.1.jpg', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599308/drnf-assets/drnf-assets/rabinder_nath2.1.jpg' },
  { from: 'images/rabinder_nath_1.6.jpg', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599310/drnf-assets/drnf-assets/rabinder_nath_1.6.jpg' },
  { from: 'images/rabinder_nath_5.1.jpg', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599312/drnf-assets/drnf-assets/rabinder_nath_5.1.jpg' },
  { from: 'images/rabinder_nath_5.5.jpg', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599313/drnf-assets/drnf-assets/rabinder_nath_5.5.jpg' },
  { from: 'images/rabinder_nath_drive.jpg', to: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599315/drnf-assets/drnf-assets/rabinder_nath_drive.jpg' },
];

const htmlFiles = [
  'about.html',
  'community.html',
  'chai-counters.html',
  'index.html',
  'loocafe-impact.html',
  'frontline-workers.html',
  'dr-rabinder-nath.html',
  'transparency.html',
  'contact.html',
  'terms-of-service.html',
  'privacy-policy.html',
  'navigation-template.html',
  'faq.html',
  'book.html'
];

const baseDir = '/mnt/d/Ixora Sites/DRNF_website';
let totalReplacements = 0;
const fileStats = [];

console.log('🚀 Starting image URL replacements...\n');

htmlFiles.forEach(filename => {
  const filePath = path.join(baseDir, filename);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️ Skipping ${filename} (file not found)`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fileReplacements = 0;

  replacements.forEach(({ from, to }) => {
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = (content.match(regex) || []).length;

    if (matches > 0) {
      content = content.replace(regex, to);
      fileReplacements += matches;
      totalReplacements += matches;
    }
  });

  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filename}: ${fileReplacements} replacements`);
    fileStats.push({ filename, replacements: fileReplacements });
  } else {
    console.log(`⏭️ ${filename}: No replacements needed`);
  }
});

console.log('\n📊 Summary:');
console.log(`   Total files processed: ${htmlFiles.length}`);
console.log(`   Files modified: ${fileStats.length}`);
console.log(`   Total replacements: ${totalReplacements}`);

console.log('\n✅ All image URLs updated successfully!');
console.log('🎉 DRNF website is now using Cloudinary CDN for images!');
