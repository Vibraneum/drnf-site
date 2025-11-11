// DRNF Website - Interactive JavaScript

// Google Analytics GA4 Event Tracking Helper
const trackEvent = (eventName, parameters = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Active navigation link highlighting (FIXED for enhanced nav)
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        const navbarHeight = navbar ? navbar.offsetHeight : 80;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionId = section.getAttribute('id');

            // Check both old and new nav classes
            const correspondingNavLink = document.querySelector(`.nav-link-enhanced[href="${sectionId}.html"]`) ||
                                        document.querySelector(`.nav-link-enhanced[href="index.html"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Highlight current section in nav
                document.querySelectorAll('.nav-link-enhanced').forEach(link => {
                    link.classList.remove('active');
                });

                // If we're on homepage sections, highlight Home
                if (sectionId === 'hero' || sectionId === 'socials' || sectionId === 'about') {
                    const homeLink = document.querySelector('.nav-link-enhanced[href="index.html"]');
                    if (homeLink) homeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Track scroll depth for analytics
    let scrolledThresholds = new Set();
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

        // Track at 25%, 50%, 75%, and 100%
        const thresholds = [25, 50, 75, 100];
        thresholds.forEach(threshold => {
            if (scrollPercent >= threshold && !scrolledThresholds.has(threshold)) {
                scrolledThresholds.add(threshold);
                trackEvent('page_scroll', {
                    'scroll_percentage': threshold,
                    'page': window.location.pathname
                });
            }
        });
    });

    // Track phone and WhatsApp clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"], a[href*="whatsapp"], a[href*="wa.me"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.href;
            if (href.includes('tel:')) {
                trackEvent('phone_click', {
                    'phone_number': href.replace('tel:', ''),
                    'source': this.textContent.trim() || 'phone_link',
                    'page': window.location.pathname
                });
            } else if (href.includes('wa.me') || href.includes('whatsapp')) {
                trackEvent('whatsapp_click', {
                    'source': this.textContent.trim() || 'whatsapp_button',
                    'page': window.location.pathname
                });
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Track CTA clicks
            if (this.classList.contains('btn') || this.classList.contains('nav-cta-enhanced') || this.classList.contains('cta-btn')) {
                const buttonText = this.textContent.trim();
                trackEvent('cta_click', {
                    'button_text': buttonText,
                    'button_class': this.className,
                    'page': window.location.pathname
                });
            }

            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const offsetTop = target.offsetTop - navbarHeight - 20; // Account for fixed navbar + buffer
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dynamic year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Animated counters for statistics
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toLocaleString() + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toLocaleString() + '+';
            }
        }, 16);
    }

    // Intersection Observer for counter animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number, .employment-number');
                statNumbers.forEach(stat => {
                    const targetValue = parseInt(stat.textContent.replace(/[^\d]/g, ''));
                    if (targetValue && !stat.classList.contains('animated')) {
                        stat.classList.add('animated');
                        animateCounter(stat, targetValue);
                    }
                });
            }
        });
    }, observerOptions);

    // Observe hero stats and employment stats
    const heroStats = document.querySelector('.hero-stats');
    const employmentStats = document.querySelector('.employment-stats');
    
    if (heroStats) counterObserver.observe(heroStats);
    if (employmentStats) counterObserver.observe(employmentStats);

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Video player enhancement
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        video.addEventListener('loadstart', function() {
            // Add loading indicator
            const loader = document.createElement('div');
            loader.className = 'video-loader';
            loader.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            video.parentNode.appendChild(loader);
        });

        video.addEventListener('canplay', function() {
            // Remove loading indicator
            const loader = video.parentNode.querySelector('.video-loader');
            if (loader) {
                loader.remove();
            }
        });

        // Pause other videos when one starts playing
        video.addEventListener('play', function() {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });

    // Gallery lightbox effect
    const galleryImages = document.querySelectorAll('.gallery-grid img, .image-item img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            createLightbox(this.src, this.alt);
        });
    });

    function createLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${src}" alt="${alt}">
                <div class="lightbox-caption">${alt}</div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Close lightbox functionality
        const closeBtn = lightbox.querySelector('.lightbox-close');
        
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });

        function closeLightbox() {
            document.body.removeChild(lightbox);
            document.body.style.overflow = 'auto';
        }
    }

    // Form validation and submission (if contact forms exist)
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid) {
                // Track form submission
                const formName = form.getAttribute('data-form-name') || form.getAttribute('id') || 'contact_form';
                const interestType = form.querySelector('select[name="interest_type"]')?.value || 'general';

                trackEvent('form_submit', {
                    'form_name': formName,
                    'form_type': interestType,
                    'page': window.location.pathname
                });

                // Show success message
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                form.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.classList.add('fade-out');
                setTimeout(() => {
                    if (notification.parentNode) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
        
        // Manual close
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        });
    }

    // Social share functionality
    function createSocialShare() {
        const shareButtons = document.querySelectorAll('.share-btn, .social-card, [class*="social"]');

        shareButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                // Track social shares and external link clicks
                const platform = this.dataset.platform || this.className;
                const href = this.href || this.getAttribute('data-platform');

                if (href || platform) {
                    trackEvent('social_share', {
                        'platform': platform,
                        'page': window.location.pathname,
                        'page_title': document.title
                    });
                }

                // Handle share button clicks
                if (this.classList.contains('share-btn')) {
                    e.preventDefault();
                    const platform = this.dataset.platform;
                    const url = encodeURIComponent(window.location.href);
                    const title = encodeURIComponent(document.title);

                    let shareUrl = '';

                    switch(platform) {
                        case 'facebook':
                            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                            break;
                        case 'twitter':
                            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                            break;
                        case 'linkedin':
                            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                            break;
                        case 'whatsapp':
                            shareUrl = `https://wa.me/?text=${title} ${url}`;
                            break;
                    }

                    if (shareUrl) {
                        window.open(shareUrl, '_blank', 'width=600,height=400');
                    }
                }
            });
        });

        // Track external link clicks
        const externalLinks = document.querySelectorAll('a[target="_blank"], a[rel="noopener"]');
        externalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                trackEvent('external_link_click', {
                    'link_url': this.href,
                    'link_text': this.textContent.trim(),
                    'page': window.location.pathname
                });
            });
        });
    }

    createSocialShare();

    // Search functionality (if needed)
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.toLowerCase().trim();
            
            if (query.length > 2) {
                searchTimeout = setTimeout(() => {
                    performSearch(query);
                }, 300);
            } else {
                hideSearchResults();
            }
        });
        
        function performSearch(query) {
            // Simple content search
            const searchableElements = document.querySelectorAll('h1, h2, h3, h4, p');
            const results = [];
            
            searchableElements.forEach(element => {
                if (element.textContent.toLowerCase().includes(query)) {
                    results.push({
                        title: element.textContent.trim().substring(0, 100),
                        element: element
                    });
                }
            });
            
            displaySearchResults(results);
        }
        
        function displaySearchResults(results) {
            if (!searchResults) return;
            
            if (results.length === 0) {
                searchResults.innerHTML = '<p>No results found.</p>';
            } else {
                searchResults.innerHTML = results.map(result => 
                    `<div class="search-result" onclick="scrollToElement(this)" data-element="${result.element.id}">
                        ${result.title}
                    </div>`
                ).join('');
            }
            
            searchResults.style.display = 'block';
        }
        
        function hideSearchResults() {
            if (searchResults) {
                searchResults.style.display = 'none';
            }
        }
    }

    // Scroll to element function
    window.scrollToElement = function(element) {
        const targetId = element.dataset.element;
        const target = document.getElementById(targetId);
        
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            hideSearchResults();
        }
    };

    // Performance optimization: debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    window.addEventListener('scroll', debounce(function() {
        // Scroll-dependent operations can be added here
    }, 16));

    // Theme toggle (for future dark mode implementation)
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // Save preference
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('darkTheme', isDark);
        });
        
        // Load saved theme preference
        const savedTheme = localStorage.getItem('darkTheme');
        if (savedTheme === 'true') {
            document.body.classList.add('dark-theme');
        }
    }

    // Print functionality
    window.printPage = function() {
        window.print();
    };

    // Copy to clipboard functionality
    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Failed to copy to clipboard.', 'error');
        });
    };

    // Analytics tracking (placeholder for future implementation)
    function trackEvent(action, category, label) {
        // Google Analytics or other tracking implementation
        console.log(`Event tracked: ${action} in ${category} with label ${label}`);
    }

    // Track button clicks
    document.querySelectorAll('.btn, .social-card, .news-card').forEach(element => {
        element.addEventListener('click', function() {
            const action = 'click';
            const category = this.className.includes('btn') ? 'button' : 'card';
            const label = this.textContent.trim() || this.href;
            trackEvent(action, category, label);
        });
    });

    console.log('DRNF Website initialized successfully! 🎉');

    // ========================================
    // ENHANCED NAVIGATION SYSTEM
    // ========================================

    initializeEnhancedNavigation();
});

// Enhanced Navigation Initialization
function initializeEnhancedNavigation() {
    const enhancedNav = document.querySelector('.enhanced-nav');
    const topBar = document.querySelector('.top-bar');
    const megaMenus = document.querySelectorAll('.mega-menu');
    const navDropdownTriggers = document.querySelectorAll('.nav-dropdown-trigger');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    // Scroll effect for enhanced navigation
    if (enhancedNav) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 50) {
                enhancedNav.classList.add('scrolled');
            } else {
                enhancedNav.classList.remove('scrolled');
            }
        });

        // Set top-bar class if top bar exists
        if (topBar) {
            enhancedNav.classList.add('with-top-bar');
        }
    }

    // Mega Menu Functionality
    navDropdownTriggers.forEach(trigger => {
        const menuId = trigger.getAttribute('data-menu');
        const megaMenu = document.getElementById(menuId);

        if (megaMenu) {
            // Click to toggle (better for accessibility and mobile)
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const isActive = megaMenu.classList.contains('active');

                closeMegaMenus();

                if (!isActive) {
                    megaMenu.classList.add('active');
                    trigger.classList.add('active');
                }
            });

            // Mouse enter (for desktop hover)
            trigger.addEventListener('mouseenter', function() {
                closeMegaMenus();
                megaMenu.classList.add('active');
                trigger.classList.add('active');
            });

            // Keep mega menu open when hovering over it
            megaMenu.addEventListener('mouseenter', function() {
                megaMenu.classList.add('active');
                trigger.classList.add('active');
            });

            // Close on mouse leave from trigger
            trigger.addEventListener('mouseleave', function(e) {
                // Check if we're not moving to the mega menu
                setTimeout(() => {
                    if (!megaMenu.matches(':hover') && !trigger.matches(':hover')) {
                        megaMenu.classList.remove('active');
                        trigger.classList.remove('active');
                    }
                }, 100);
            });

            // Close on mouse leave from mega menu
            megaMenu.addEventListener('mouseleave', function() {
                megaMenu.classList.remove('active');
                trigger.classList.remove('active');
            });
        }
    });

    // Close mega menus when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown-trigger') && !e.target.closest('.mega-menu')) {
            closeMegaMenus();
        }
    });

    // Close mega menus on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMegaMenus();
            closeMobileMenu();
        }
    });

    function closeMegaMenus() {
        megaMenus.forEach(menu => menu.classList.remove('active'));
        navDropdownTriggers.forEach(trigger => trigger.classList.remove('active'));
    }

    // Mobile Menu Toggle
    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            openMobileMenu();
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            closeMobileMenu();
        });
    }

    // Mobile Menu Accordion
    mobileMenuLinks.forEach(link => {
        const hasSubmenu = link.nextElementSibling && link.nextElementSibling.classList.contains('mobile-submenu');

        if (hasSubmenu) {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const submenu = this.nextElementSibling;
                const isActive = submenu.classList.contains('active');

                // Close all other submenus
                document.querySelectorAll('.mobile-submenu').forEach(sub => {
                    sub.classList.remove('active');
                });
                document.querySelectorAll('.mobile-menu-link').forEach(l => {
                    l.classList.remove('active');
                });

                // Toggle current submenu
                if (!isActive) {
                    submenu.classList.add('active');
                    this.classList.add('active');
                }
            });
        }
    });

    // Close mobile menu when clicking on a link without submenu
    document.querySelectorAll('.mobile-submenu-link').forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    // Close mobile menu when clicking on direct links
    document.querySelectorAll('.mobile-menu-link:not([data-submenu])').forEach(link => {
        link.addEventListener('click', function() {
            if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('mobile-submenu')) {
                closeMobileMenu();
            }
        });
    });

    function openMobileMenu() {
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.add('active');
            mobileMenuToggle.classList.add('active');
            document.body.classList.add('mobile-menu-open');
        }
    }

    // New Clean Mobile Menu Section Toggles
    document.querySelectorAll('.mobile-section-header-clean').forEach(header => {
        header.addEventListener('click', function() {
            const toggleId = this.getAttribute('data-toggle');
            const content = document.getElementById(toggleId);

            // Close all other sections
            document.querySelectorAll('.mobile-section-content-clean').forEach(section => {
                if (section.id !== toggleId) {
                    section.classList.remove('active');
                    const otherHeader = document.querySelector(`[data-toggle="${section.id}"]`);
                    if (otherHeader) {
                        otherHeader.classList.remove('active');
                    }
                }
            });

            // Toggle current section
            this.classList.toggle('active');
            if (content) {
                content.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking on clean links
    document.querySelectorAll('.mobile-menu-item-clean, .mobile-link-clean').forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    function closeMobileMenu() {
        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
            document.body.classList.remove('mobile-menu-open');

            // Close all submenus
            document.querySelectorAll('.mobile-submenu').forEach(sub => {
                sub.classList.remove('active');
            });
            document.querySelectorAll('.mobile-menu-link').forEach(l => {
                l.classList.remove('active');
            });
        }
    }

    // Close mobile menu when clicking overlay background
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }

    // Active link highlighting for enhanced nav
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link-enhanced, .mobile-menu-link, .mobile-submenu-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && (currentPath === href || currentPath.includes(href.replace('.html', '')))) {
            link.classList.add('active');
        }
    });

    console.log('Enhanced Navigation System initialized! ✨');
}

// Add CSS for lightbox and notifications
const additionalStyles = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        animation: fadeIn 0.3s ease forwards;
    }

    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    }

    .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 8px;
    }

    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        z-index: 10001;
    }

    .lightbox-caption {
        color: white;
        margin-top: 1rem;
        font-size: 1.1rem;
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 1rem;
        min-width: 300px;
        animation: slideIn 0.3s ease;
    }

    .notification-success {
        background: #27ae60;
    }

    .notification-error {
        background: #e74c3c;
    }

    .notification-info {
        background: #3498db;
    }

    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    }

    .notification.fade-out {
        animation: fadeOut 0.3s ease forwards;
    }

    .video-loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--primary-color);
        font-size: 2rem;
        z-index: 10;
    }

    .search-results {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-top: none;
        max-height: 300px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
    }

    .search-result {
        padding: 1rem;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    .search-result:hover {
        background: #f8f9fa;
    }

    @keyframes fadeIn {
        to { opacity: 1; }
    }

    @keyframes fadeOut {
        to { opacity: 0; transform: translateX(100%); }
    }

    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }

    .gallery-grid img {
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .gallery-grid img:hover {
        transform: scale(1.05);
    }

    .nav-open {
        overflow: hidden;
    }

    .error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 5px rgba(231, 76, 60, 0.3) !important;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

/* ===================================
   SOCIAL SHARE FUNCTIONALITY
   =================================== */

// Initialize social share buttons with current page URL
function initializeSocialShare() {
    const currentUrl = window.location.href;
    const pageTitle = document.title;
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(pageTitle);

    // Get all share buttons
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(button => {
        const platform = button.getAttribute('data-share');
        let shareUrl = '';

        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=Check%20out%20DRNF's%20amazing%20work%20-%20${encodedTitle}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=Check%20out%20DRNF's%20amazing%20work%20-%20${encodedTitle}%20${encodedUrl}`;
                break;
        }

        // Update the href with the actual URL
        if (shareUrl) {
            button.setAttribute('href', shareUrl);
        }

        // Add click tracking (optional - for analytics)
        button.addEventListener('click', function(e) {
            const platform = this.getAttribute('data-share');
            if (window.gtag) {
                gtag('event', 'share', {
                    'method': platform,
                    'page': pageTitle
                });
            }
        });
    });
}

// Initialize social share when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSocialShare();
});

// Also initialize when page loads (for dynamically loaded content)
window.addEventListener('load', function() {
    initializeSocialShare();
}); 