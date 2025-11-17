#!/bin/bash

# DRNF Website - Image Download Script
# Created: November 17, 2025
# Purpose: Download high-priority authentic images from partner websites

echo "=================================="
echo "DRNF Image Download Script"
echo "=================================="
echo ""

# Create directory structure
echo "Creating image directories..."
mkdir -p images/loocafe
mkdir -p images/news-media
mkdir -p images/chai-counters
mkdir -p images/community
mkdir -p images/workers
mkdir -p images/logos

echo "✓ Directories created"
echo ""

# Check if wget or curl is available
if command -v wget &> /dev/null; then
    DOWNLOAD_CMD="wget"
    echo "Using wget for downloads"
elif command -v curl &> /dev/null; then
    DOWNLOAD_CMD="curl"
    echo "Using curl for downloads"
else
    echo "Error: Neither wget nor curl is installed. Please install one of them."
    exit 1
fi

echo ""
echo "Starting high-priority downloads..."
echo ""

# Function to download with wget or curl
download_image() {
    local url="$1"
    local output="$2"
    local description="$3"

    echo "Downloading: $description"
    echo "  → $output"

    if [ "$DOWNLOAD_CMD" = "wget" ]; then
        wget -q --show-progress "$url" -O "$output"
    else
        curl -L -# "$url" -o "$output"
    fi

    if [ $? -eq 0 ]; then
        echo "  ✓ Success"
    else
        echo "  ✗ Failed"
    fi
    echo ""
}

# HIGH PRIORITY DOWNLOADS

echo "=== HIGH PRIORITY: LooCafe Images ==="
echo ""

download_image \
    "https://image.typedream.com/cdn-cgi/image/width=3840,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2ixrUutXQbBDs1qCRE0ofPwJ8uz_hero_cover.png" \
    "images/loocafe/loocafe-facility-hero.jpg" \
    "LooCafe Facility Hero"

download_image \
    "https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2iMLcUZXf9WgezPOrgQZqgIztVv_2.png" \
    "images/loocafe/loocafe-interior-design.jpg" \
    "LooCafe Interior Design"

download_image \
    "https://image.typedream.com/cdn-cgi/image/width=1200,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2iMZr6JsOCjfyYEPCz36W9Lkvzh_g2rt.png" \
    "images/loocafe/loocafe-gates-partnership.jpg" \
    "Gates Foundation Partnership"

echo "=== HIGH PRIORITY: News Article Images ==="
echo ""

download_image \
    "https://media.telanganatoday.com/wp-content/uploads/2021/07/Free-Chai.jpg" \
    "images/news-media/chai-counter-telangana-today.jpg" \
    "Free Chai Counter (Telangana Today)"

download_image \
    "https://assets.thehansindia.com/h-upload/2021/03/13/1037071-chaui.webp" \
    "images/news-media/chai-service-hans-india.jpg" \
    "Chai Service (Hans India)"

download_image \
    "https://sc0.blr1.cdn.digitaloceanspaces.com/article/zhcvmxxcqb-1538498276.jpg" \
    "images/news-media/loocafe-scroll-featured.jpg" \
    "LooCafe Featured (Scroll.in)"

echo "=== MEDIUM PRIORITY: Additional LooCafe Images ==="
echo ""

download_image \
    "https://image.typedream.com/cdn-cgi/image/width=3840,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2iMMz9ZpWhtWdA8vb9S2HvRfnMq_collageo_Presentation_.png" \
    "images/loocafe/loocafe-collage-presentation.jpg" \
    "LooCafe Collage Presentation"

download_image \
    "https://image.typedream.com/cdn-cgi/image/width=1080,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2iMLdJh7v3xdUJHLVwASvXmEPnx_1.png" \
    "images/loocafe/loocafe-interior-standard.jpg" \
    "LooCafe Interior Standard"

download_image \
    "https://image.typedream.com/cdn-cgi/image/width=3840,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2iMOrxdWSfMyH3GrKr0FoAmRawP_collageo_Presentation_.png" \
    "images/loocafe/loocafe-technical-diagram.jpg" \
    "LooCafe Technical Diagram"

download_image \
    "https://image.typedream.com/cdn-cgi/image/width=750,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2iMgYB606Qro0wSwMCEf4TPau0P_community_loocafe.png" \
    "images/loocafe/loocafe-community-engagement.jpg" \
    "LooCafe Community Engagement"

download_image \
    "https://image.typedream.com/cdn-cgi/image/width=1200,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2iMqlxLDpLPZf5weOclDaShrpCW_Copy_of_Loocafe_2024_.png" \
    "images/loocafe/loocafe-impact-metrics.jpg" \
    "LooCafe Impact Metrics"

echo "=== LOGOS ==="
echo ""

download_image \
    "https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2uZTnh5jGUtnWibFEtIuEu9mHsO_LooCafe_logo.png" \
    "images/logos/loocafe-logo.png" \
    "LooCafe Main Logo"

download_image \
    "https://api.typedream.com/v0/document/public/d30bcf02-27bf-4bc8-9664-abda8139117d/2iPILVpztaLa0B5uQlvYtSIxxeR_loocafe_logo_icon.PNG" \
    "images/logos/loocafe-icon.png" \
    "LooCafe Icon"

echo "=== SCROLL.IN ARTICLE IMAGES ==="
echo ""

download_image \
    "https://sc0.blr1.digitaloceanspaces.com/inline/894556-yduqmzgymx-1537627914.jpg" \
    "images/news-media/loocafe-scroll-inline-1.jpg" \
    "LooCafe Scroll.in Inline 1"

download_image \
    "https://sc0.blr1.digitaloceanspaces.com/inline/894556-ojenoyfrim-1537627938.jpg" \
    "images/news-media/loocafe-scroll-inline-2.jpg" \
    "LooCafe Scroll.in Inline 2"

download_image \
    "https://sc0.blr1.digitaloceanspaces.com/inline/894556-qgrhostjny-1538498492.jpg" \
    "images/news-media/loocafe-scroll-inline-3.jpg" \
    "LooCafe Scroll.in Inline 3"

echo ""
echo "=================================="
echo "Download Summary"
echo "=================================="
echo ""

# Count downloaded images
total_loocafe=$(ls images/loocafe/*.jpg images/loocafe/*.png 2>/dev/null | wc -l)
total_news=$(ls images/news-media/*.jpg 2>/dev/null | wc -l)
total_logos=$(ls images/logos/*.png 2>/dev/null | wc -l)

echo "LooCafe images: $total_loocafe"
echo "News media images: $total_news"
echo "Logos: $total_logos"
echo ""
echo "Total images downloaded: $((total_loocafe + total_news + total_logos))"
echo ""

echo "=================================="
echo "Next Steps"
echo "=================================="
echo ""
echo "1. Optimize images (compress to <200KB):"
echo "   - Visit https://tinypng.com or https://squoosh.app"
echo "   - Or use ImageMagick: convert input.jpg -quality 85 output.jpg"
echo ""
echo "2. Review images for quality and appropriateness"
echo ""
echo "3. Update HTML files with new image paths"
echo ""
echo "4. Add proper attribution where required"
echo ""
echo "5. Test website locally:"
echo "   python -m http.server 8000"
echo ""
echo "6. Commit and push to repository"
echo ""

echo "For additional images, see IMAGE_SOURCING_REPORT.md"
echo "For stock photos, visit:"
echo "  - Unsplash: https://unsplash.com/s/photos/indian-chai"
echo "  - Pexels: https://www.pexels.com/search/community%20service/"
echo ""
echo "Complete! ✓"
