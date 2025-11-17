# Server Configuration Guide for Extensionless URLs

**Important**: After removing `.html` extensions from links, the server must be configured to serve the correct files.

---

## GitHub Pages Configuration

### Option 1: Jekyll Configuration (Recommended for GitHub Pages)

**Step 1**: Create `_config.yml` in root directory:
```yaml
# Jekyll configuration for GitHub Pages
permalink: pretty
include:
  - .htaccess
```

**Step 2**: Create `.htaccess` file:
```apache
# Enable extensionless URLs
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]

# Redirect .html to extensionless
RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /([^\ ]+)\.html
RewriteRule ^(.*)\.html$ /$1 [L,R=301]
```

**Step 3**: Remove `.nojekyll` file (if present)
```bash
rm .nojekyll
```

**Step 4**: Commit and push:
```bash
git add _config.yml .htaccess
git rm .nojekyll  # if it exists
git commit -m "Add Jekyll config for extensionless URLs"
git push origin main
```

### Option 2: JavaScript Fallback (Client-Side)

If server configuration isn't possible, add this to every page:

**Add to `<head>` section of each HTML file:**
```html
<script>
// Handle extensionless URLs with JavaScript fallback
(function() {
    var path = window.location.pathname;

    // If path doesn't have extension and page is not found
    if (!path.match(/\.[a-z]+$/i) && path !== '/') {
        // Try adding .html
        var testPath = path + '.html';

        // Check if .html version exists
        fetch(testPath, {method: 'HEAD'})
            .then(response => {
                if (response.ok) {
                    window.location.replace(testPath);
                }
            })
            .catch(error => {
                // Fallback: try loading .html version anyway
                window.location.replace(testPath);
            });
    }
})();
</script>
```

**Note**: This is NOT recommended for production as it requires an extra HTTP request.

### Option 3: Custom Domain with Cloudflare

If using custom domain (drnf.org) with Cloudflare:

**Step 1**: Add Page Rule in Cloudflare:
- **URL Pattern**: `drnf.org/*`
- **Setting**: URL Rewrite
- **Destination**: Add `.html` to requests without extension

**Step 2**: Configure in Cloudflare Dashboard:
1. Go to Rules → Page Rules
2. Create new rule: `*drnf.org/*`
3. Add rewrite: Append `.html` to paths without extension

---

## Testing Extensionless URLs Locally

### Method 1: Python HTTP Server with Custom Handler

Create `server.py`:
```python
#!/usr/bin/env python3
import http.server
import socketserver
import os

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # If path doesn't have extension, try .html
        if not os.path.splitext(self.path)[1]:
            if os.path.exists('.' + self.path + '.html'):
                self.path += '.html'

        return super().do_GET()

PORT = 8000
Handler = MyHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server running at http://localhost:{PORT}")
    httpd.serve_forever()
```

Run:
```bash
python3 server.py
```

### Method 2: Node.js http-server with Rewrites

Install:
```bash
npm install -g http-server
```

Run with extension rewriting:
```bash
http-server -p 8000 --ext html
```

### Method 3: PHP Built-in Server

Create `router.php`:
```php
<?php
// If path doesn't have extension, try .html
$path = $_SERVER['REQUEST_URI'];
if (!pathinfo($path, PATHINFO_EXTENSION)) {
    $htmlPath = __DIR__ . $path . '.html';
    if (file_exists($htmlPath)) {
        include $htmlPath;
        exit;
    }
}
return false;
?>
```

Run:
```bash
php -S localhost:8000 router.php
```

---

## Testing Checklist

After configuring server, test these URLs:

### Root Pages
- [ ] `http://localhost:8000/` or `/index`
- [ ] `http://localhost:8000/about`
- [ ] `http://localhost:8000/contact`
- [ ] `http://localhost:8000/faq`

### Initiative Pages
- [ ] `http://localhost:8000/chai-counters`
- [ ] `http://localhost:8000/community`
- [ ] `http://localhost:8000/frontline-workers`
- [ ] `http://localhost:8000/loocafe-impact`

### Heritage Pages
- [ ] `http://localhost:8000/book`
- [ ] `http://localhost:8000/book/story`
- [ ] `http://localhost:8000/book/explore`
- [ ] `http://localhost:8000/partition-story`

### Other Pages
- [ ] `http://localhost:8000/dr-rabinder-nath`
- [ ] `http://localhost:8000/transparency`
- [ ] `http://localhost:8000/privacy-policy`
- [ ] `http://localhost:8000/terms-of-service`

### Hash Fragments
- [ ] `http://localhost:8000/community#workshops`
- [ ] `http://localhost:8000/community#environment`
- [ ] `http://localhost:8000/transparency#cost-effectiveness`

### Navigation Testing
- [ ] Click logo (should go to home)
- [ ] Click all main nav links
- [ ] Open mega menus and click dropdown links
- [ ] Test mobile menu (all links)
- [ ] Test footer links
- [ ] Test CTA buttons throughout pages

### 404 Page
- [ ] Visit non-existent page: `/nonexistent`
- [ ] Click "Go Home" button
- [ ] Click "Contact Us" button

---

## Redirect Old .html URLs (Optional)

If you want old `.html` URLs to redirect to extensionless:

### .htaccess (Apache)
```apache
# Redirect .html to extensionless
RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /([^\ ]+)\.html
RewriteRule ^(.*)\.html$ /$1 [L,R=301]
```

### Cloudflare Page Rule
- **URL Pattern**: `*drnf.org/*.html`
- **Setting**: Forwarding URL (301 Permanent Redirect)
- **Destination**: `https://drnf.org/$1` (without .html)

### JavaScript Fallback
```html
<script>
// Redirect .html URLs to extensionless
(function() {
    var path = window.location.pathname;
    if (path.endsWith('.html')) {
        var newPath = path.replace('.html', '');
        window.location.replace(newPath);
    }
})();
</script>
```

---

## Recommended Approach for drnf.org

Based on your GitHub Pages setup:

### Step 1: Add Jekyll Config
```bash
cd /mnt/d/Ixora\ Sites/DRNF_website
cat > _config.yml << 'EOF'
permalink: pretty
include:
  - .htaccess
EOF
```

### Step 2: Add .htaccess
```bash
cat > .htaccess << 'EOF'
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]

# Redirect .html to extensionless
RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /([^\ ]+)\.html
RewriteRule ^(.*)\.html$ /$1 [L,R=301]
EOF
```

### Step 3: Remove .nojekyll (if present)
```bash
rm -f .nojekyll
```

### Step 4: Test Locally
```bash
python3 server.py  # Use custom server script from Method 1
```

### Step 5: Commit and Deploy
```bash
git add _config.yml .htaccess
git rm .nojekyll  # if it exists
git commit -m "Configure server for extensionless URLs"
git push origin main
```

---

## Troubleshooting

### Issue: 404 Errors on GitHub Pages

**Cause**: GitHub Pages not configured for extensionless URLs

**Solutions**:
1. Add Jekyll `_config.yml` with `permalink: pretty`
2. Remove `.nojekyll` file
3. Wait 5-10 minutes for GitHub Pages to rebuild

### Issue: Links Still Show .html

**Cause**: Browser cache or old bookmarks

**Solution**:
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Test in incognito/private mode

### Issue: Redirects Not Working

**Cause**: `.htaccess` not supported by server

**Solution**:
1. Verify GitHub Pages is using Jekyll (not disabled with `.nojekyll`)
2. Check if custom domain is properly configured
3. Use Cloudflare Page Rules as alternative

---

## Performance Considerations

### Pros of Extensionless URLs
- ✅ Cleaner, more professional URLs
- ✅ Easier to type and remember
- ✅ Better for SEO
- ✅ Platform-agnostic (can switch from .html to .php without breaking links)

### Cons of Extensionless URLs
- ⚠️ Requires server configuration
- ⚠️ May need rewrite rules
- ⚠️ Extra setup complexity

### Recommendation
For static sites on GitHub Pages, extensionless URLs are worth it for the professional appearance and SEO benefits. The setup is straightforward with Jekyll.

---

## Additional Resources

- **GitHub Pages**: https://docs.github.com/en/pages
- **Jekyll Permalinks**: https://jekyllrb.com/docs/permalinks/
- **Apache mod_rewrite**: https://httpd.apache.org/docs/current/mod/mod_rewrite.html
- **Cloudflare Page Rules**: https://support.cloudflare.com/hc/en-us/articles/218411427

---

**Guide Version**: 1.0
**Last Updated**: November 13, 2025
**Status**: Ready for implementation
