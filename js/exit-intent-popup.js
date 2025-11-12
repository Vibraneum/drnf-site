// Exit Intent Popup for DRNF Website
(function() {
  'use strict';

  const EXIT_POPUP_SHOWN_KEY = 'drnf_exit_popup_shown';
  const EXIT_POPUP_TIMESTAMP_KEY = 'drnf_exit_popup_timestamp';
  const EXIT_POPUP_SESSION_KEY = 'drnf_exit_popup_session';
  const CRM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwJs-QIKrH86XQPiXYLLQf7iy82xSeC7tcJYrxnvP119aSZ6NElX_T59pD2hUgvMaNn/exec';

  let timeOnPage = 0;
  let popupVisible = false;

  // Track time on page
  setInterval(() => {
    timeOnPage++;
  }, 1000);

  function shouldShowPopup() {
    const sessionShown = sessionStorage.getItem(EXIT_POPUP_SESSION_KEY);
    if (sessionShown) return false;

    const lastShown = localStorage.getItem(EXIT_POPUP_TIMESTAMP_KEY);
    if (lastShown) {
      const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
      if (parseInt(lastShown) > sevenDaysAgo) {
        return false;
      }
    }

    if (timeOnPage < 30) return false;
    return true;
  }

  function createPopup() {
    const popup = document.createElement('div');
    popup.id = 'drnf-exit-popup';
    popup.innerHTML = `
      <div class="exit-popup-overlay" id="drnf-popup-overlay"></div>
      <div class="exit-popup-content" id="drnf-popup-content">
        <button class="exit-popup-close" id="drnf-popup-close" aria-label="Close">&times;</button>
        <div class="exit-popup-body">
          <h2>Stay Connected with DRNF 💚</h2>
          <p>Get updates on our community programs, chai counters, and impact stories</p>
          <form id="drnf-exit-form">
            <input type="text" name="name" placeholder="Your name" required>
            <input type="email" name="email" placeholder="your.email@example.com" required>
            <select name="interest">
              <option value="">Select Interest</option>
              <option value="volunteering">Volunteering</option>
              <option value="donations">Donations</option>
              <option value="chai-counters">Chai Counters</option>
              <option value="updates">General Updates</option>
            </select>
            <button type="submit">Subscribe</button>
            <button type="button" class="exit-popup-no-thanks">No thanks</button>
          </form>
          <div id="drnf-popup-status"></div>
        </div>
      </div>
    `;
    document.body.appendChild(popup);
    return popup;
  }

  function showPopup() {
    if (popupVisible || !shouldShowPopup()) return;
    
    let popup = document.getElementById('drnf-exit-popup');
    if (!popup) {
      popup = createPopup();
      addPopupStyles();
    }

    popup.style.display = 'flex';
    popupVisible = true;
    document.body.style.overflow = 'hidden';
    sessionStorage.setItem(EXIT_POPUP_SESSION_KEY, 'true');

    // Close handlers
    document.getElementById('drnf-popup-close').onclick = closePopup;
    document.getElementById('drnf-popup-overlay').onclick = closePopup;
    document.getElementById('drnf-exit-form').querySelector('.exit-popup-no-thanks').onclick = closePopup;

    // Form submission
    document.getElementById('drnf-exit-form').onsubmit = handleSubmit;

    // Escape key
    document.addEventListener('keydown', handleEscape);
  }

  function closePopup() {
    const popup = document.getElementById('drnf-exit-popup');
    if (popup) {
      popup.style.display = 'none';
      popupVisible = false;
      document.body.style.overflow = '';
      localStorage.setItem(EXIT_POPUP_TIMESTAMP_KEY, Date.now().toString());
      document.removeEventListener('keydown', handleEscape);
    }
  }

  function handleEscape(e) {
    if (e.key === 'Escape') closePopup();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById('drnf-popup-status');
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      queryType: formData.get('interest') || 'Newsletter Subscription',
      message: 'Subscribed via exit intent popup',
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

      statusDiv.innerHTML = '<p style="color: #10b981;">✓ Subscribed! Check your email.</p>';
      form.reset();
      setTimeout(() => {
        closePopup();
      }, 3000);
    } catch (error) {
      statusDiv.innerHTML = '<p style="color: #ef4444;">Error. Please try again.</p>';
    }
  }

  function addPopupStyles() {
    if (document.getElementById('drnf-popup-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'drnf-popup-styles';
    style.textContent = `
      #drnf-exit-popup {
        display: none;
        position: fixed;
        inset: 0;
        z-index: 9999;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .exit-popup-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
      }
      .exit-popup-content {
        position: relative;
        background: white;
        border-radius: 20px;
        max-width: 500px;
        width: 100%;
        padding: 40px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: popupBounce 0.3s ease-out;
      }
      .exit-popup-close {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #f3f4f6;
        border: none;
        font-size: 20px;
        cursor: pointer;
        transition: background 0.2s;
      }
      .exit-popup-close:hover {
        background: #e5e7eb;
      }
      .exit-popup-body h2 {
        font-size: 28px;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 12px;
      }
      .exit-popup-body p {
        color: #6b7280;
        margin-bottom: 24px;
      }
      #drnf-exit-form input,
      #drnf-exit-form select {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 16px;
      }
      #drnf-exit-form input:focus,
      #drnf-exit-form select:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }
      #drnf-exit-form button[type="submit"] {
        width: 100%;
        padding: 14px 24px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        margin-bottom: 12px;
      }
      .exit-popup-no-thanks {
        width: 100%;
        background: none;
        border: none;
        color: #6b7280;
        text-decoration: underline;
        cursor: pointer;
        font-size: 14px;
      }
      @keyframes popupBounce {
        0% { transform: scale(0.9) translateY(20px); opacity: 0; }
        50% { transform: scale(1.02); }
        100% { transform: scale(1) translateY(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  // Exit intent detection
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 50 && shouldShowPopup() && !popupVisible) {
      setTimeout(() => showPopup(), 100);
    }
  });
})();

