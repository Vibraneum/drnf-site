/**
 * Enhanced Components for DRNF Website
 * Vanilla JS versions of React components from Astro site
 * - BackToTop Button
 * - Exit Intent Popup
 * - Sticky CTA Bar
 */

// ============================================================================
// BACK TO TOP BUTTON
// ============================================================================
class BackToTopButton {
    constructor() {
        this.button = null;
        this.init();
    }

    init() {
        // Create button element
        this.button = document.createElement('button');
        this.button.className = 'back-to-top-btn';
        this.button.setAttribute('aria-label', 'Back to top');
        this.button.setAttribute('title', 'Back to top');
        this.button.innerHTML = `
            <svg class="back-to-top-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
        `;

        // Add to page
        document.body.appendChild(this.button);

        // Event listeners
        window.addEventListener('scroll', () => this.toggleVisibility());
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ============================================================================
// EXIT INTENT POPUP
// ============================================================================
class ExitIntentPopup {
    constructor() {
        this.popup = null;
        this.formData = {};
        this.isSubmitting = false;
        this.currentPage = this.getCurrentPage();
        this.config = this.getPopupConfig();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('contact')) return 'contact';
        if (path.includes('404')) return '404';
        if (path.includes('forms')) return 'forms';
        return 'general';
    }

    shouldShowPopup() {
        // Don't show if already shown in this session
        if (sessionStorage.getItem('drnf_exit_popup_shown')) return false;

        // Don't show on certain pages
        if (this.currentPage === 'contact' || this.currentPage === '404') return false;

        return true;
    }

    getPopupConfig() {
        // Default: Newsletter focus
        return {
            heading: "Stay Connected with DRNF 📧",
            subheading: "Get monthly impact stories and community updates",
            fields: [
                {
                    name: 'email',
                    type: 'email',
                    label: 'Email',
                    required: true,
                    placeholder: 'your.email@example.com'
                }
            ],
            buttonText: "Subscribe to Newsletter",
            benefits: [
                "✓ Monthly impact stories",
                "✓ Event invitations",
                "✓ Community updates"
            ]
        };
    }

    init() {
        if (!this.shouldShowPopup()) return;

        // Create popup HTML
        this.createPopup();

        // Add event listener for exit intent
        document.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
    }

    handleMouseLeave(e) {
        if (e.clientY <= 0) {
            this.showPopup();
            sessionStorage.setItem('drnf_exit_popup_shown', 'true');
        }
    }

    createPopup() {
        this.popup = document.createElement('div');
        this.popup.className = 'exit-intent-popup';
        this.popup.style.display = 'none';

        this.popup.innerHTML = `
            <div class="exit-popup-overlay"></div>
            <div class="exit-popup-content">
                <!-- Beautiful Header with Icon -->
                <div class="exit-popup-header-visual">
                    <button class="exit-popup-close" aria-label="Close popup">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <div class="exit-popup-icon">
                        📧
                    </div>

                    <h3>${this.config.heading.replace(' 📧', '')}</h3>
                    <p>${this.config.subheading}</p>
                </div>

                <!-- Content Body -->
                <div class="exit-popup-body">
                    <div class="exit-popup-benefits">
                        ${this.config.benefits.map(b => `<div class="benefit-item">${b.replace('✓ ', '')}</div>`).join('')}
                    </div>

                    <form class="exit-popup-form" id="exitPopupForm">
                        ${this.config.fields.map(field => `
                            <div class="form-group">
                                <label for="${field.name}">${field.label}</label>
                                <input
                                    type="${field.type}"
                                    name="${field.name}"
                                    id="${field.name}"
                                    placeholder="${field.placeholder}"
                                    ${field.required ? 'required' : ''}
                                />
                            </div>
                        `).join('')}

                        <button type="submit" class="exit-popup-submit">
                            <span>${this.config.buttonText}</span>
                        </button>
                    </form>

                    <button class="exit-popup-dismiss">
                        No thanks, I'll browse
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(this.popup);

        // Add event listeners
        this.popup.querySelector('.exit-popup-close').addEventListener('click', () => this.hidePopup());
        this.popup.querySelector('.exit-popup-dismiss').addEventListener('click', () => this.hidePopup());
        this.popup.querySelector('.exit-popup-overlay').addEventListener('click', () => this.hidePopup());
        this.popup.querySelector('#exitPopupForm').addEventListener('submit', (e) => this.handleSubmit(e));
    }

    showPopup() {
        if (this.popup) {
            this.popup.style.display = 'flex';
            // Trigger animation
            setTimeout(() => {
                this.popup.classList.add('active');
            }, 10);
        }
    }

    hidePopup() {
        if (this.popup) {
            this.popup.classList.remove('active');
            setTimeout(() => {
                this.popup.style.display = 'none';
            }, 300);
        }
        sessionStorage.setItem('drnf_exit_popup_shown', 'true');
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.isSubmitting) return;

        this.isSubmitting = true;
        const submitBtn = this.popup.querySelector('.exit-popup-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;

        // Get form data
        const formData = new FormData(e.target);
        const email = formData.get('email');

        // Track with Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'newsletter_signup', {
                'event_category': 'engagement',
                'event_label': 'exit_intent_popup',
                'value': 1
            });
        }

        // Redirect to contact page with email pre-filled
        window.location.href = `/contact.html?email=${encodeURIComponent(email)}&interest=newsletter`;
    }
}

// ============================================================================
// STICKY CTA BAR
// ============================================================================
class StickyCtaBar {
    constructor() {
        this.bar = null;
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('contact')) return 'contact';
        return 'general';
    }

    init() {
        // Don't show on contact page
        if (this.currentPage === 'contact') return;

        // Create bar element
        this.bar = document.createElement('div');
        this.bar.className = 'sticky-cta-bar';

        this.bar.innerHTML = `
            <!-- Desktop Version -->
            <div class="sticky-cta-desktop">
                <div class="sticky-cta-content">
                    <div class="sticky-cta-left">
                        <div class="pulse-indicator"></div>
                        <div class="sticky-cta-text">
                            <p class="sticky-cta-title">Join us in making a difference</p>
                            <p class="sticky-cta-subtitle">
                                <strong>500+ people served daily</strong> • Your support matters
                            </p>
                        </div>
                    </div>

                    <div class="sticky-cta-right">
                        <a href="tel:+919966906781" class="sticky-cta-phone">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span>+91 99669 06781</span>
                        </a>

                        <a href="/contact.html" class="sticky-cta-button">
                            <span>Get in Touch</span>
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Mobile Version -->
            <div class="sticky-cta-mobile">
                <button class="sticky-cta-mobile-trigger">
                    <span>Help Us</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                <div class="sticky-cta-mobile-menu">
                    <div class="sticky-cta-mobile-header">
                        <h3>Quick Actions</h3>
                        <button class="sticky-cta-mobile-close">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="sticky-cta-mobile-actions">
                        <a href="/contact.html?interest=donation" class="sticky-cta-mobile-action primary">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            <div class="action-text">
                                <div class="action-title">Support Us</div>
                                <div class="action-subtitle">Help our chai counters</div>
                            </div>
                        </a>

                        <a href="/contact.html" class="sticky-cta-mobile-action secondary">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <div class="action-text">
                                <div class="action-title">Contact Us</div>
                                <div class="action-subtitle">Get in touch</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(this.bar);

        // Add event listeners for mobile menu
        const trigger = this.bar.querySelector('.sticky-cta-mobile-trigger');
        const menu = this.bar.querySelector('.sticky-cta-mobile-menu');
        const closeBtn = this.bar.querySelector('.sticky-cta-mobile-close');

        trigger.addEventListener('click', () => {
            menu.classList.add('active');
            trigger.style.display = 'none';
        });

        closeBtn.addEventListener('click', () => {
            menu.classList.remove('active');
            trigger.style.display = 'flex';
        });

        // Track analytics
        this.addAnalytics();
    }

    addAnalytics() {
        // Track CTA clicks
        const ctaButton = this.bar.querySelector('.sticky-cta-button');
        if (ctaButton && typeof gtag !== 'undefined') {
            ctaButton.addEventListener('click', () => {
                gtag('event', 'cta_click', {
                    'event_category': 'engagement',
                    'event_label': 'sticky_cta_bar_desktop',
                    'value': 1
                });
            });
        }

        // Track phone clicks
        const phoneLink = this.bar.querySelector('.sticky-cta-phone');
        if (phoneLink && typeof gtag !== 'undefined') {
            phoneLink.addEventListener('click', () => {
                gtag('event', 'phone_click', {
                    'event_category': 'engagement',
                    'event_label': 'sticky_cta_bar_phone',
                    'value': 1
                });
            });
        }
    }
}

// ============================================================================
// INITIALIZE ALL COMPONENTS
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    new BackToTopButton();
    new ExitIntentPopup();
    new StickyCtaBar();
});
