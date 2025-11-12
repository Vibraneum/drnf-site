/**
 * Modern Navbar JavaScript
 * Handles: scroll effects, mobile menu, progress bar
 */

class ModernNavbar {
    constructor() {
        this.nav = document.querySelector('nav');
        this.mobileToggle = document.querySelector('.mobile-menu-toggle');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.body = document.body;
        this.init();
    }

    init() {
        // Scroll effects
        this.handleScroll();
        window.addEventListener('scroll', () => this.handleScroll());

        // Mobile menu toggle
        if (this.mobileToggle && this.mobileMenu) {
            this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (this.mobileMenu.classList.contains('active') &&
                    !this.mobileMenu.contains(e.target) &&
                    !this.mobileToggle.contains(e.target)) {
                    this.toggleMobileMenu();
                }
            });

            // Close mobile menu when clicking a link (but not dropdown toggles)
            const mobileLinks = this.mobileMenu.querySelectorAll('.mobile-menu-links > li > a, .mobile-dropdown-content a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (this.mobileMenu.classList.contains('active')) {
                        this.toggleMobileMenu();
                    }
                });
            });
        }

        // Mobile dropdown toggles
        this.initMobileDropdowns();

        // Scroll progress bar
        this.createScrollProgress();
        this.updateScrollProgress();
        window.addEventListener('scroll', () => this.updateScrollProgress());

        // Set active link based on current page
        this.setActiveLink();
    }

    handleScroll() {
        if (window.pageYOffset > 50) {
            this.nav.classList.add('scrolled');
        } else {
            this.nav.classList.remove('scrolled');
        }
    }

    toggleMobileMenu() {
        this.mobileMenu.classList.toggle('active');
        this.mobileToggle.classList.toggle('active');
        this.body.classList.toggle('mobile-menu-open');
    }

    createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
        this.progressBar = progressBar;
    }

    updateScrollProgress() {
        if (!this.progressBar) return;

        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        this.progressBar.style.width = `${scrolled}%`;
    }

    setActiveLink() {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('.nav-links a, .mobile-menu-links a');

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath || (href !== '/' && currentPath.includes(href))) {
                link.classList.add('active');
            }
        });
    }

    initMobileDropdowns() {
        const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const dropdown = toggle.closest('.mobile-dropdown');

                // Toggle current dropdown
                dropdown.classList.toggle('active');

                // Close other dropdowns
                const allDropdowns = document.querySelectorAll('.mobile-dropdown');
                allDropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });
            });
        });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new ModernNavbar();
});
