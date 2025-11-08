// Fix double-prefixed URLs: https://drnf.org/https://res.cloudinary...
const fs = require('fs');
const path = require('path');

const htmlFiles = [
  'about.html', 'community.html', 'chai-counters.html', 'index.html',
  'loocafe-impact.html', 'frontline-workers.html', 'dr-rabinder-nath.html',
  'transparency.html', 'contact.html', 'terms-of-service.html',
  'privacy-policy.html', 'navigation-template.html', 'faq.html', 'book.html'
];

const baseDir = '/mnt/d/Ixora Sites/DRNF_website';
let totalFixes = 0;

console.log('🔧 Fixing double-prefixed URLs...\n');

htmlFiles.forEach(filename => {
  const filePath = path.join(baseDir, filename);

  if (!fs.existsSync(filePath)) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Fix: https://drnf.org/https://res.cloudinary... → https://res.cloudinary...
  content = content.replace(/https:\/\/drnf\.org\/https:\/\/res\.cloudinary/g, 'https://res.cloudinary');

  const changes = originalContent !== content;
  const count = (originalContent.match(/https:\/\/drnf\.org\/https:\/\/res\.cloudinary/g) || []).length;

  if (changes) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filename}: Fixed ${count} double-prefixed URLs`);
    totalFixes += count;
  }
});

console.log('\n📊 Summary:');
console.log(`   Total fixes: ${totalFixes}`);
console.log('\n✅ All double-prefixed URLs fixed!');
