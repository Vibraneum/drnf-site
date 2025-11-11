import React, { useState, useEffect } from 'react';

interface NavItem {
  href: string;
  icon: string;
  text: string;
}

interface MobileNavProps {
  currentPage?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ currentPage = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  // Navigation items with emojis
  const aboutItems: NavItem[] = [
    { href: '/about', icon: '📖', text: 'Our Story & Mission' },
    { href: '/dr-rabinder-nath', icon: '👨‍⚕️', text: 'Dr. Rabinder Nath' },
    { href: '/book', icon: '📚', text: 'Heritage Book' },
    { href: '/about#team', icon: '👥', text: 'Our Team' },
    { href: '/partition-story', icon: '🕰️', text: 'Partition Story' },
    { href: '/transparency', icon: '📊', text: 'Transparency' },
  ];

  const workItems: NavItem[] = [
    { href: '/chai-counters', icon: '☕', text: 'Free Chai Counters' },
    { href: '/community', icon: '🤝', text: 'Community Programs' },
    { href: '/loocafe-impact', icon: '🏢', text: 'LooCafe Partnership' },
    { href: '/frontline-workers', icon: '🛡️', text: 'Frontline Workers' },
    { href: '/community#workshops', icon: '🎓', text: 'Education Workshops' },
    { href: '/community#environment', icon: '🌱', text: 'Environmental Care' },
  ];

  return (
    <>
      {/* Mobile Menu Toggle Button - Hidden on Desktop */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay - Expanded State */}
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
        {/* Mobile Menu Header */}
        <div className="mobile-menu-header">
          <a href="/" className="nav-logo-enhanced" onClick={handleLinkClick}>
            <img
              src="https://res.cloudinary.com/dhupieu4x/image/upload/v1762599287/drnf-assets/drnf-assets/DRNF_logo.jpg"
              alt="DRNF Logo"
              className="logo-img"
              width="40"
              height="40"
              loading="eager"
            />
            <div className="nav-brand-text">
              <h1 className="brand-title">DRNF</h1>
            </div>
          </a>
          <button
            className="mobile-menu-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close mobile menu"
            aria-expanded={isOpen}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Mobile Menu Body */}
        <div className="mobile-menu-body">
          {/* Home Link */}
          <a
            href="/"
            className={`mobile-menu-item-clean ${currentPage === 'home' ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            <span>🏠</span>
            <span>Home</span>
          </a>

          {/* Search Link */}
          <a
            href="/search"
            className="mobile-menu-item-clean"
            onClick={handleLinkClick}
          >
            <i className="fas fa-search"></i>
            <span>Search</span>
          </a>

          {/* About DRNF Section */}
          <div className="mobile-section-clean">
            <button
              className={`mobile-section-header-clean ${expandedSections.includes('about') ? 'active' : ''}`}
              onClick={() => toggleSection('about')}
              aria-expanded={expandedSections.includes('about')}
              type="button"
            >
              <span>ℹ️ About DRNF</span>
              <i
                className={`fas fa-chevron-down mobile-chevron ${
                  expandedSections.includes('about') ? 'rotated' : ''
                }`}
              ></i>
            </button>
            <div
              className={`mobile-section-content-clean ${
                expandedSections.includes('about') ? 'expanded' : ''
              }`}
            >
              {aboutItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-link-clean"
                  onClick={handleLinkClick}
                >
                  <span style={{ fontSize: '1.25rem', width: '28px', textAlign: 'center', display: 'inline-block' }}>{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Our Work Section */}
          <div className="mobile-section-clean">
            <button
              className={`mobile-section-header-clean ${expandedSections.includes('work') ? 'active' : ''}`}
              onClick={() => toggleSection('work')}
              aria-expanded={expandedSections.includes('work')}
              type="button"
            >
              <span>🤝 Our Programs</span>
              <i
                className={`fas fa-chevron-down mobile-chevron ${
                  expandedSections.includes('work') ? 'rotated' : ''
                }`}
              ></i>
            </button>
            <div
              className={`mobile-section-content-clean ${
                expandedSections.includes('work') ? 'expanded' : ''
              }`}
            >
              {workItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-link-clean"
                  onClick={handleLinkClick}
                >
                  <span style={{ fontSize: '1.25rem', width: '28px', textAlign: 'center', display: 'inline-block' }}>{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Links */}
          <a
            href="/faq"
            className="mobile-menu-item-clean"
            onClick={handleLinkClick}
          >
            <span>❓</span>
            <span>FAQ</span>
          </a>

          <a
            href="/contact"
            className="mobile-menu-item-clean"
            onClick={handleLinkClick}
          >
            <span>✉️</span>
            <span>Contact Us</span>
          </a>

          {/* Social Media Links */}
          <div className="mobile-social-clean">
            <a
              href="https://www.facebook.com/DrRabinderNathFoundation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              title="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/dr-rabinder-nath-foundation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Backdrop for closing menu on click outside */}
        <div
          className="mobile-menu-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
};

export default MobileNav;
