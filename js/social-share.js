/**
 * Social Share Buttons - DRNF Website
 * Provides social sharing functionality for Facebook, Twitter, LinkedIn, and WhatsApp
 * Supports both desktop sidebar and mobile bottom bar layouts
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize social share buttons
    initSocialShareButtons();
});

/**
 * Initialize social share buttons with responsive behavior
 */
function initSocialShareButtons() {
    // Get or create social share container
    let shareContainer = document.getElementById('social-share-buttons');

    if (!shareContainer) {
        // Create container if it doesn't exist
        shareContainer = createSocialShareContainer();
        document.body.appendChild(shareContainer);
    }

    // Get current page URL and title
    const pageUrl = window.location.href;
    const pageTitle = document.title.split(' | ')[0]; // Get first part before pipe
    const pageDescription = document.querySelector('meta[name="description"]')?.content || pageTitle;

    // Set share URLs for each platform
    updateShareUrls(pageUrl, pageTitle, pageDescription);

    // Add responsive behavior
    handleResponsiveBehavior();
}

/**
 * Create the social share container HTML structure
 */
function createSocialShareContainer() {
    const container = document.createElement('div');
    container.id = 'social-share-buttons';
    container.className = 'social-share-container';

    container.innerHTML = `
        <div class="social-share-wrapper">
            <div class="social-share-heading">Share Our Mission</div>

            <!-- Facebook Share Button -->
            <a href="#"
               class="social-share-btn facebook-btn"
               id="facebook-share"
               title="Share on Facebook"
               aria-label="Share on Facebook"
               target="_blank"
               rel="noopener noreferrer">
                <i class="fab fa-facebook-f"></i>
                <span class="share-tooltip">Facebook</span>
            </a>

            <!-- Twitter/X Share Button -->
            <a href="#"
               class="social-share-btn twitter-btn"
               id="twitter-share"
               title="Share on Twitter"
               aria-label="Share on Twitter"
               target="_blank"
               rel="noopener noreferrer">
                <i class="fab fa-x-twitter"></i>
                <span class="share-tooltip">Twitter</span>
            </a>

            <!-- LinkedIn Share Button -->
            <a href="#"
               class="social-share-btn linkedin-btn"
               id="linkedin-share"
               title="Share on LinkedIn"
               aria-label="Share on LinkedIn"
               target="_blank"
               rel="noopener noreferrer">
                <i class="fab fa-linkedin-in"></i>
                <span class="share-tooltip">LinkedIn</span>
            </a>

            <!-- WhatsApp Share Button -->
            <a href="#"
               class="social-share-btn whatsapp-btn"
               id="whatsapp-share"
               title="Share on WhatsApp"
               aria-label="Share on WhatsApp"
               target="_blank"
               rel="noopener noreferrer">
                <i class="fab fa-whatsapp"></i>
                <span class="share-tooltip">WhatsApp</span>
            </a>
        </div>
    `;

    return container;
}

/**
 * Update share URLs for all platforms
 */
function updateShareUrls(url, title, description) {
    // Prepare share texts
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    const twitterText = `Check out ${title} - ${description}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(twitterText)}`;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    const whatsappText = `${title} - ${description} ${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;

    // Update button hrefs
    const facebookBtn = document.getElementById('facebook-share');
    const twitterBtn = document.getElementById('twitter-share');
    const linkedinBtn = document.getElementById('linkedin-share');
    const whatsappBtn = document.getElementById('whatsapp-share');

    if (facebookBtn) facebookBtn.href = facebookUrl;
    if (twitterBtn) twitterBtn.href = twitterUrl;
    if (linkedinBtn) linkedinBtn.href = linkedinUrl;
    if (whatsappBtn) whatsappBtn.href = whatsappUrl;

    // Add click handlers for better UX
    if (facebookBtn) facebookBtn.addEventListener('click', handleShareClick);
    if (twitterBtn) twitterBtn.addEventListener('click', handleShareClick);
    if (linkedinBtn) linkedinBtn.addEventListener('click', handleShareClick);
    if (whatsappBtn) whatsappBtn.addEventListener('click', handleShareClick);
}

/**
 * Handle share button clicks - opens in popup window
 */
function handleShareClick(event) {
    const url = event.currentTarget.href;
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    // Open share URL in a popup for desktop, or standard behavior for mobile
    if (!/Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        event.preventDefault();
        window.open(url, 'share', `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`);
    }
}

/**
 * Handle responsive behavior for different screen sizes
 */
function handleResponsiveBehavior() {
    const container = document.getElementById('social-share-buttons');
    if (!container) return;

    // Detect screen size and adjust layout
    function updateLayout() {
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
            container.classList.add('mobile-layout');
            container.classList.remove('desktop-layout');
        } else {
            container.classList.remove('mobile-layout');
            container.classList.add('desktop-layout');
        }
    }

    // Initial layout
    updateLayout();

    // Update on resize
    window.addEventListener('resize', updateLayout);
}

/**
 * Public function to manually share on a specific platform
 * Usage: socialShare('twitter') or socialShare('whatsapp')
 */
window.socialShare = function(platform) {
    const btn = document.getElementById(`${platform}-share`);
    if (btn) {
        btn.click();
    }
};

/**
 * Public function to get current page share data
 * Returns: { url, title, description }
 */
window.getSocialShareData = function() {
    return {
        url: window.location.href,
        title: document.title.split(' | ')[0],
        description: document.querySelector('meta[name="description"]')?.content || ''
    };
};
