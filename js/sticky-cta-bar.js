// Sticky CTA Bar for DRNF Website
(function() {
  'use strict';

  function createStickyCTA() {
    const cta = document.createElement('div');
    cta.id = 'drnf-sticky-cta';
    cta.innerHTML = `
      <div class="sticky-cta-desktop">
        <div class="sticky-cta-content">
          <div class="sticky-cta-left">
            <div class="sticky-cta-indicator"></div>
            <div>
              <p class="sticky-cta-title">Ready to Support Our Mission?</p>
              <p class="sticky-cta-subtitle"><strong>Join us:</strong> Volunteer, donate, or partner with DRNF</p>
            </div>
          </div>
          <div class="sticky-cta-right">
            <a href="tel:+919966906781" class="sticky-cta-phone">
              <i class="fas fa-phone"></i>
              <span>+91 99669 06781</span>
            </a>
            <a href="contact.html" class="sticky-cta-button">
              Get Involved
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="sticky-cta-mobile">
        <button class="sticky-cta-mobile-button" id="drnf-mobile-cta-btn">
          Get Involved
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="sticky-cta-mobile-expanded" id="drnf-mobile-cta-expanded" style="display: none;">
          <div class="sticky-cta-mobile-header">
            <h3>Quick Contact</h3>
            <button class="sticky-cta-mobile-close" id="drnf-mobile-cta-close">&times;</button>
          </div>
          <div class="sticky-cta-mobile-actions">
            <a href="https://wa.me/919966906781?text=Hello%2C%20I%20would%20like%20to%20support%20DRNF%27s%20mission." target="_blank" class="sticky-cta-whatsapp">
              <i class="fab fa-whatsapp"></i>
              <div>
                <div class="sticky-cta-action-title">WhatsApp</div>
                <div class="sticky-cta-action-subtitle">Fastest response</div>
              </div>
            </a>
            <a href="contact.html" class="sticky-cta-contact">
              <i class="fas fa-envelope"></i>
              <div>
                <div class="sticky-cta-action-title">Contact Form</div>
                <div class="sticky-cta-action-subtitle">Detailed inquiry</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    `;
    return cta;
  }

  function addStickyCTAStyles() {
    if (document.getElementById('drnf-sticky-cta-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'drnf-sticky-cta-styles';
    style.textContent = `
      #drnf-sticky-cta {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 40;
      }
      .sticky-cta-desktop {
        display: none;
      }
      @media (min-width: 768px) {
        .sticky-cta-desktop {
          display: block;
          background: white;
          border-top: 1px solid #e5e7eb;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
        }
        .sticky-cta-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .sticky-cta-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }
        .sticky-cta-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .sticky-cta-title {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }
        .sticky-cta-subtitle {
          font-size: 12px;
          color: #6b7280;
        }
        .sticky-cta-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .sticky-cta-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #1f2937;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
        }
        .sticky-cta-phone:hover {
          color: #667eea;
        }
        .sticky-cta-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .sticky-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }
      }
      .sticky-cta-mobile {
        display: block;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 40;
      }
      @media (min-width: 768px) {
        .sticky-cta-mobile {
          display: none;
        }
      }
      .sticky-cta-mobile-button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 14px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 50px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        font-weight: 700;
        font-size: 14px;
        border: none;
        cursor: pointer;
        transition: transform 0.2s;
      }
      .sticky-cta-mobile-button:hover {
        transform: scale(1.05);
      }
      .sticky-cta-mobile-expanded {
        background: white;
        border-radius: 20px;
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        padding: 16px;
        width: 280px;
        border: 1px solid #e5e7eb;
      }
      .sticky-cta-mobile-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .sticky-cta-mobile-header h3 {
        font-weight: 700;
        font-size: 14px;
        color: #1f2937;
      }
      .sticky-cta-mobile-close {
        color: #6b7280;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 20px;
      }
      .sticky-cta-mobile-actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .sticky-cta-whatsapp,
      .sticky-cta-contact {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 12px 16px;
        border-radius: 12px;
        text-decoration: none;
        transition: transform 0.2s;
      }
      .sticky-cta-whatsapp {
        background: #25D366;
        color: white;
      }
      .sticky-cta-whatsapp:hover {
        background: #20BA5A;
        transform: translateY(-2px);
      }
      .sticky-cta-contact {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }
      .sticky-cta-contact:hover {
        opacity: 0.9;
        transform: translateY(-2px);
      }
      .sticky-cta-action-title {
        font-weight: 600;
        font-size: 14px;
      }
      .sticky-cta-action-subtitle {
        font-size: 11px;
        opacity: 0.9;
      }
    `;
    document.head.appendChild(style);
  }

  function init() {
    // Don't show on contact page
    if (window.location.pathname.includes('contact.html')) return;

    addStickyCTAStyles();
    
    if (!document.getElementById('drnf-sticky-cta')) {
      const cta = createStickyCTA();
      document.body.appendChild(cta);

      // Mobile toggle
      const mobileBtn = document.getElementById('drnf-mobile-cta-btn');
      const mobileExpanded = document.getElementById('drnf-mobile-cta-expanded');
      const mobileClose = document.getElementById('drnf-mobile-cta-close');

      mobileBtn.onclick = () => {
        mobileExpanded.style.display = mobileExpanded.style.display === 'none' ? 'block' : 'none';
      };

      mobileClose.onclick = () => {
        mobileExpanded.style.display = 'none';
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

