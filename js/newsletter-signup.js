// Newsletter Signup for DRNF Website
(function() {
  'use strict';

  const CRM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwJs-QIKrH86XQPiXYLLQf7iy82xSeC7tcJYrxnvP119aSZ6NElX_T59pD2hUgvMaNn/exec';

  function createNewsletterSection() {
    const section = document.createElement('section');
    section.className = 'newsletter-signup-section';
    section.innerHTML = `
      <div class="newsletter-container">
        <div class="newsletter-content">
          <div class="newsletter-icon">📧</div>
          <h2>Stay Updated with DRNF 💚</h2>
          <p>Get monthly updates on our community programs, chai counters, and impact stories</p>
          <form id="drnf-newsletter-form" class="newsletter-form">
            <input type="text" name="name" placeholder="Your name (optional)" class="newsletter-input">
            <input type="email" name="email" placeholder="your.email@example.com" required class="newsletter-input">
            <button type="submit" class="newsletter-button">Subscribe</button>
          </form>
          <div id="drnf-newsletter-status" class="newsletter-status"></div>
          <p class="newsletter-privacy">Unsubscribe anytime. We respect your privacy.</p>
        </div>
      </div>
    `;
    return section;
  }

  function addNewsletterStyles() {
    if (document.getElementById('drnf-newsletter-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'drnf-newsletter-styles';
    style.textContent = `
      .newsletter-signup-section {
        width: 100%;
        padding: 60px 0;
        background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.15) 100%);
      }
      .newsletter-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 20px;
      }
      .newsletter-content {
        text-align: center;
      }
      .newsletter-icon {
        font-size: 64px;
        margin-bottom: 20px;
      }
      .newsletter-content h2 {
        font-size: 32px;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 12px;
      }
      .newsletter-content p {
        font-size: 18px;
        color: #6b7280;
        margin-bottom: 32px;
        line-height: 1.6;
      }
      .newsletter-form {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .newsletter-input {
        width: 100%;
        padding: 14px 20px;
        border: 2px solid #e5e7eb;
        border-radius: 50px;
        font-size: 16px;
      }
      .newsletter-input:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }
      .newsletter-button {
        width: 100%;
        padding: 14px 24px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .newsletter-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
      }
      .newsletter-status {
        min-height: 32px;
        margin-top: 16px;
      }
      .newsletter-privacy {
        font-size: 14px;
        color: #6b7280;
        margin-top: 24px;
      }
      @media (min-width: 640px) {
        .newsletter-form {
          flex-direction: row;
          align-items: stretch;
        }
        .newsletter-input:first-child {
          flex: 0 0 200px;
        }
        .newsletter-button {
          flex: 0 0 auto;
          padding: 14px 32px;
          white-space: nowrap;
        }
      }
    `;
    document.head.appendChild(style);
  }

  async function handleNewsletterSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById('drnf-newsletter-status');
    
    const email = formData.get('email');
    if (!email || !email.includes('@')) {
      statusDiv.innerHTML = '<p style="color: #f59e0b;">Please enter a valid email address.</p>';
      return;
    }

    const data = {
      name: formData.get('name') || '',
      email: email,
      queryType: 'Newsletter Subscription',
      message: 'Subscribed to DRNF newsletter',
      source: 'drnf',
      newsletter: true
    };

    statusDiv.innerHTML = '<p style="color: #667eea;">Subscribing...</p>';

    try {
      await fetch(CRM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      statusDiv.innerHTML = '<p style="color: #10b981;">✓ Subscribed! Check your email for confirmation.</p>';
      form.reset();
      setTimeout(() => {
        statusDiv.innerHTML = '';
      }, 8000);
    } catch (error) {
      statusDiv.innerHTML = '<p style="color: #ef4444;">Error subscribing. Please try again.</p>';
      setTimeout(() => {
        statusDiv.innerHTML = '';
      }, 5000);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    addNewsletterStyles();
    
    // Add newsletter section before footer
    const footer = document.querySelector('footer');
    if (footer && !document.querySelector('.newsletter-signup-section')) {
      const newsletterSection = createNewsletterSection();
      footer.parentNode.insertBefore(newsletterSection, footer);
      
      // Attach form handler
      document.getElementById('drnf-newsletter-form').onsubmit = handleNewsletterSubmit;
    }
  }
})();

