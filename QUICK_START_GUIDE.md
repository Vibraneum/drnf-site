# Quick Start Guide - Testing Extensionless URLs

**Task**: Test the removal of `.html` extensions from DRNF website
**Status**: Changes made, ready for testing

---

## 1. Start Test Server (30 seconds)

```bash
# Navigate to project
cd "/mnt/d/Ixora Sites/DRNF_website"

# Start test server
python3 test_server.py
```

**Expected Output**:
```
DRNF Website - Local Test Server
Starting server on http://localhost:8000
```

---

## 2. Test in Browser (5 minutes)

Open browser and test these URLs:

### Core Pages
- [ ] http://localhost:8000/ (home)
- [ ] http://localhost:8000/index
- [ ] http://localhost:8000/about
- [ ] http://localhost:8000/contact

### Initiative Pages
- [ ] http://localhost:8000/chai-counters
- [ ] http://localhost:8000/community
- [ ] http://localhost:8000/frontline-workers

### Book Pages
- [ ] http://localhost:8000/book
- [ ] http://localhost:8000/book/story
- [ ] http://localhost:8000/book/explore

### Navigation
- [ ] Click logo (should go to home)
- [ ] Click all nav menu items
- [ ] Open mega menus
- [ ] Test mobile menu (resize browser)

---

## 3. If Testing Succeeds

### Configure Server
```bash
# Create Jekyll config
cat > _config.yml << 'EOF'
permalink: pretty
include:
  - .htaccess
EOF

# Create .htaccess
cat > .htaccess << 'EOF'
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]
EOF

# Remove .nojekyll (if present)
rm -f .nojekyll
```

### Commit and Deploy
```bash
# Stage all changes
git add .

# Commit
git commit -m "Remove .html extensions for cleaner URLs"

# Push to GitHub
git push origin main

# Wait 5-10 minutes for GitHub Pages rebuild
```

### Verify Production
- https://drnf.org/about
- https://drnf.org/contact
- https://drnf.org/chai-counters

---

## 4. If Testing Fails

### Rollback Changes
```bash
# Discard all changes
git checkout -- .

# Or restore specific files
git checkout -- index.html about.html
```

### Report Issues
Contact: hello@ixoragroup.com

---

## Quick Commands

### Verify Links
```bash
python3 verify_links.py
```

### Start Test Server
```bash
python3 test_server.py
```

### Check Git Status
```bash
git status
```

---

## Files Changed

**20 HTML files modified**:
- 15 root files (index, about, contact, etc.)
- 2 book files (story, explore)
- 3 form files

**752 links updated**:
- Navigation links
- Footer links
- CTAs
- Meta tags
- JavaScript redirects

---

## Documentation

- **EXTENSION_REMOVAL_SUMMARY.md** - Executive summary
- **HTML_EXTENSION_REMOVAL_REPORT.md** - Detailed report
- **SERVER_CONFIG_GUIDE.md** - Server configuration
- **This file** - Quick start guide

---

## What Changed

```
BEFORE                 AFTER
=====================  =====================
about.html             about
contact.html           contact
chai-counters.html     chai-counters
book/story.html        book/story
```

---

## What's Preserved

- ✅ External links (LooCafe, Ixora, social media)
- ✅ Email/phone links
- ✅ CSS/JS/image paths
- ✅ Hash fragments (#workshops)

---

## Need Help?

1. Check **EXTENSION_REMOVAL_SUMMARY.md** for overview
2. Check **SERVER_CONFIG_GUIDE.md** for server setup
3. Check **HTML_EXTENSION_REMOVAL_REPORT.md** for details
4. Contact: hello@ixoragroup.com / +91 9966906781

---

**Status**: Ready for Testing
**Next**: Start test server and verify locally
