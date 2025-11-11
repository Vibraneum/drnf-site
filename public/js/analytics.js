/**
 * Google Analytics GA4 Event Tracking Helper
 *
 * This module provides helper functions to track events in Google Analytics 4.
 *
 * Setup Instructions:
 * 1. Create a GA4 property at https://analytics.google.com
 * 2. Get your Measurement ID (G-XXXXXXXXXX)
 * 3. Replace 'G-PLACEHOLDER' in all HTML pages with your actual Measurement ID
 * 4. This script should be loaded in all HTML pages
 *
 * Events being tracked:
 * - form_submit: Contact/volunteer form submissions
 * - cta_click: Call-to-action button clicks
 * - phone_click: Phone number clicks
 * - whatsapp_click: WhatsApp engagement
 * - email_click: Email link clicks
 * - external_link_click: External link clicks
 * - social_share: Social media share clicks
 * - volunteer_interest: Volunteer engagement tracking
 * - page_scroll: User scroll depth tracking (25%, 50%, 75%, 100%)
 * - video_play: Video engagement
 */

/**
 * Track a custom event in Google Analytics
 * @param {string} eventName - Name of the event to track
 * @param {Object} parameters - Optional parameters for the event
 */
function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      ...parameters,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track form submission
 * @param {string} formName - Name of the form being submitted
 * @param {Object} formData - Optional form data
 */
function trackFormSubmission(formName, formData = {}) {
  trackEvent('form_submit', {
    form_name: formName,
    page: window.location.pathname,
    ...formData,
  });
}

/**
 * Track CTA button clicks
 * @param {string} buttonText - Text displayed on the button
 * @param {string} buttonLocation - Location where button appears
 */
function trackCTAClick(buttonText, buttonLocation = '') {
  trackEvent('cta_click', {
    button_text: buttonText.trim(),
    button_location: buttonLocation,
    page: window.location.pathname,
  });
}

/**
 * Track phone number clicks
 */
function trackPhoneClick() {
  trackEvent('phone_click', {
    phone_number: '+91-9966-906781',
    page: window.location.pathname,
  });
}

/**
 * Track WhatsApp button clicks
 * @param {string} location - Where the button was clicked
 */
function trackWhatsAppClick(location = '') {
  trackEvent('whatsapp_click', {
    location: location,
    phone_number: '+91-9966-906781',
    page: window.location.pathname,
  });
}

/**
 * Track email link clicks
 */
function trackEmailClick() {
  trackEvent('email_click', {
    email: 'info@drnf.org',
    page: window.location.pathname,
  });
}

/**
 * Track external link clicks
 * @param {string} url - External URL
 * @param {string} text - Link text
 */
function trackExternalLinkClick(url, text = 'External Link') {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: text.trim(),
    page: window.location.pathname,
  });
}

/**
 * Track social media shares
 * @param {string} platform - Social platform name
 */
function trackSocialShare(platform) {
  trackEvent('social_share', {
    platform: platform,
    page: window.location.pathname,
  });
}

/**
 * Track volunteer interest/engagement
 * @param {string} actionType - Type of volunteer action
 */
function trackVolunteerInterest(actionType = 'volunteer_click') {
  trackEvent('volunteer_interest', {
    action_type: actionType,
    page: window.location.pathname,
  });
}

/**
 * Track user scrolling behavior
 * @param {number} scrollDepth - Percentage of page scrolled
 */
function trackScrollDepth(scrollDepth) {
  trackEvent('page_scroll', {
    scroll_depth: Math.min(Math.round(scrollDepth), 100),
    page: window.location.pathname,
  });
}

/**
 * Track video play events
 * @param {string} videoTitle - Title of the video
 */
function trackVideoPlay(videoTitle) {
  trackEvent('video_play', {
    video_title: videoTitle,
    page: window.location.pathname,
  });
}

/**
 * Initialize scroll depth tracking
 * Automatically tracks when user scrolls to 25%, 50%, 75%, 100%
 */
function initializeScrollTracking() {
  const thresholds = [25, 50, 75, 100];
  const trackedThresholds = new Set();

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    thresholds.forEach((threshold) => {
      if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
        trackedThresholds.add(threshold);
        trackScrollDepth(threshold);
      }
    });
  });
}

/**
 * Initialize automatic tracking for common elements
 */
function initializeAutomaticTracking() {
  // Track CTA button clicks
  document.addEventListener('click', (e) => {
    const target = e.target;
    const button = target.closest('button, a');

    if (button) {
      // Track primary buttons
      if (button.classList.contains('btn-primary') ||
          button.classList.contains('btn-secondary') ||
          button.classList.contains('cta-btn')) {
        trackCTAClick(button.textContent || 'Button', button.className);
      }

      // Track WhatsApp button
      if (button.classList.contains('whatsapp-btn') ||
          (button.href && button.href.includes('wa.me'))) {
        trackWhatsAppClick(button.className);
      }

      // Track external links
      if (button.getAttribute('target') === '_blank' &&
          button.href &&
          !button.href.includes(window.location.hostname) &&
          !button.href.includes('mailto:')) {
        trackExternalLinkClick(button.href, button.textContent || 'External Link');
      }

      // Track phone links
      if (button.href && button.href.includes('tel:')) {
        trackPhoneClick();
      }

      // Track email links
      if (button.href && button.href.includes('mailto:')) {
        trackEmailClick();
      }
    }
  });

  // Track video plays
  const videos = document.querySelectorAll('video, iframe[src*="youtube"]');
  videos.forEach((video) => {
    if (video.tagName === 'VIDEO') {
      video.addEventListener('play', () => {
        trackVideoPlay(video.title || 'Video');
      });
    } else if (video.tagName === 'IFRAME') {
      // YouTube iframes - track on click
      video.addEventListener('click', () => {
        trackVideoPlay(video.title || 'YouTube Video');
      });
    }
  });
}

/**
 * Set user properties for analytics
 * @param {Object} properties - User properties to set
 */
function setUserProperties(properties = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('config', '', properties);
  }
}

/**
 * Initialize all analytics tracking
 * Call this function once on page load
 */
function initializeAnalytics() {
  initializeScrollTracking();
  initializeAutomaticTracking();
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAnalytics);
} else {
  initializeAnalytics();
}

// Export functions for global use
window.analyticsHelpers = {
  trackEvent,
  trackFormSubmission,
  trackCTAClick,
  trackPhoneClick,
  trackWhatsAppClick,
  trackEmailClick,
  trackExternalLinkClick,
  trackSocialShare,
  trackVolunteerInterest,
  trackScrollDepth,
  trackVideoPlay,
  initializeScrollTracking,
  initializeAutomaticTracking,
  setUserProperties,
  initializeAnalytics,
};
