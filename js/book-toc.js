/**
 * Book Page - Table of Contents & Reading Progress
 * Automatically generates TOC from headings and tracks reading progress
 */

class BookTableOfContents {
    constructor() {
        this.content = document.querySelector('.book-content, .about-content, main');
        if (!this.content) return;

        this.headings = [];
        this.sidebar = null;
        this.mobileMenu = null;
        this.progressBar = null;
        this.activeId = null;

        this.init();
    }

    init() {
        // Get all headings from content
        this.extractHeadings();

        if (this.headings.length === 0) {
            console.log('No headings found for TOC');
            return;
        }

        // Create progress bar
        this.createProgressBar();

        // Create desktop sidebar
        this.createDesktopSidebar();

        // Create mobile toggle & menu
        this.createMobileTOC();

        // Initialize scroll tracking
        this.initScrollTracking();

        // Track visibility of sections
        this.initIntersectionObserver();
    }

    extractHeadings() {
        // Find all h2 and h3 headings in content
        const headingElements = this.content.querySelectorAll('h2, h3');

        headingElements.forEach((heading, index) => {
            // Generate ID if not exists
            if (!heading.id) {
                const id = this.generateId(heading.textContent);
                heading.id = id;
            }

            this.headings.push({
                id: heading.id,
                text: heading.textContent,
                level: heading.tagName.toLowerCase(),
                element: heading
            });
        });
    }

    generateId(text) {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    createProgressBar() {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'reading-progress-bar';
        this.progressBar.style.width = '0%';
        document.body.appendChild(this.progressBar);
    }

    createDesktopSidebar() {
        this.sidebar = document.createElement('aside');
        this.sidebar.className = 'book-toc-sidebar';

        const title = document.createElement('h3');
        title.className = 'book-toc-title';
        title.textContent = 'Table of Contents';

        const list = document.createElement('ul');
        list.className = 'book-toc-list';

        this.headings.forEach(heading => {
            const item = document.createElement('li');
            item.className = 'book-toc-item';

            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.className = `book-toc-link book-toc-${heading.level}`;
            link.textContent = heading.text;
            link.setAttribute('data-heading-id', heading.id);

            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToHeading(heading.id);

                // Close mobile menu if open
                if (this.mobileMenu) {
                    this.mobileMenu.classList.remove('active');
                }
            });

            item.appendChild(link);
            list.appendChild(item);
        });

        this.sidebar.appendChild(title);
        this.sidebar.appendChild(list);
        document.body.appendChild(this.sidebar);
    }

    createMobileTOC() {
        // Create toggle button
        const toggle = document.createElement('button');
        toggle.className = 'book-toc-mobile-toggle';
        toggle.innerHTML = `
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <span>Contents</span>
        `;

        // Create mobile menu
        this.mobileMenu = document.createElement('div');
        this.mobileMenu.className = 'book-toc-mobile-menu';

        const header = document.createElement('div');
        header.className = 'sticky-cta-mobile-header';
        header.innerHTML = `
            <h3>Table of Contents</h3>
            <button class="sticky-cta-mobile-close">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        `;

        const list = document.createElement('ul');
        list.className = 'book-toc-list';

        this.headings.forEach(heading => {
            const item = document.createElement('li');
            item.className = 'book-toc-item';

            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.className = `book-toc-link book-toc-${heading.level}`;
            link.textContent = heading.text;
            link.setAttribute('data-heading-id', heading.id);

            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToHeading(heading.id);
                this.mobileMenu.classList.remove('active');
            });

            item.appendChild(link);
            list.appendChild(item);
        });

        this.mobileMenu.appendChild(header);
        this.mobileMenu.appendChild(list);

        document.body.appendChild(toggle);
        document.body.appendChild(this.mobileMenu);

        // Toggle menu
        toggle.addEventListener('click', () => {
            this.mobileMenu.classList.add('active');
        });

        // Close button
        header.querySelector('.sticky-cta-mobile-close').addEventListener('click', () => {
            this.mobileMenu.classList.remove('active');
        });
    }

    scrollToHeading(id) {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update active state
            this.setActiveHeading(id);
        }
    }

    setActiveHeading(id) {
        // Remove active class from all links
        const allLinks = document.querySelectorAll('.book-toc-link');
        allLinks.forEach(link => link.classList.remove('active'));

        // Add active class to current link
        const activeLinks = document.querySelectorAll(`[data-heading-id="${id}"]`);
        activeLinks.forEach(link => link.classList.add('active'));

        this.activeId = id;
    }

    initScrollTracking() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateProgressBar();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateProgressBar() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        if (this.progressBar) {
            this.progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
        }
    }

    initIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setActiveHeading(entry.target.id);
                }
            });
        }, options);

        // Observe all heading elements
        this.headings.forEach(heading => {
            observer.observe(heading.element);
        });
    }
}

// Initialize on book pages
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on a page with long-form content
    const contentArea = document.querySelector('.book-content, .about-content, main');
    if (contentArea) {
        const headings = contentArea.querySelectorAll('h2, h3');
        if (headings.length >= 3) {
            // Only initialize TOC if there are at least 3 headings
            new BookTableOfContents();

            // Add book-page class to html for smooth scrolling
            document.documentElement.classList.add('book-page');
        }
    }
});
