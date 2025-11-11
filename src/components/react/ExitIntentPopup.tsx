import React, { useState, useEffect, useCallback } from 'react';

interface ExitIntentPopupProps {
  currentPage?: string;
}

interface PopupConfig {
  heading: string;
  subheading: string;
  fields: Array<{
    name: string;
    type: string;
    label: string;
    required: boolean;
    placeholder: string;
  }>;
  buttonText: string;
  benefits: string[];
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ currentPage = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const getPopupConfig = useCallback((): PopupConfig => {
    // Forms pages - Donation focus
    if (currentPage.includes('forms')) {
      return {
        heading: "Help Us Serve More People 🍵",
        subheading: "Your donation helps us serve 500+ people daily",
        fields: [
          {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
            placeholder: 'Your name'
          },
          {
            name: 'email',
            type: 'email',
            label: 'Email',
            required: true,
            placeholder: 'your.email@example.com'
          }
        ],
        buttonText: "Pledge Donation",
        benefits: [
          "✓ ₹2 per cup of chai",
          "✓ Serves 500 people",
          "✓ Direct impact"
        ]
      };
    }

    // About/Programs pages - Newsletter focus
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
      buttonText: "Subscribe",
      benefits: [
        "✓ Monthly impact stories",
        "✓ Event invitations",
        "✓ Community updates"
      ]
    };
  }, [currentPage]);

  const popupConfig = getPopupConfig();

  // Check if popup should be shown
  const shouldShowPopup = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    // Don't show if already shown in this session
    const hasSeenPopup = sessionStorage.getItem('drnf_exit_popup_shown');
    if (hasSeenPopup) return false;

    // Don't show on certain pages
    if (currentPage === 'contact' || currentPage === '404') return false;

    return true;
  }, [currentPage]);

  useEffect(() => {
    if (!shouldShowPopup()) return;

    let mouseY = 0;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem('drnf_exit_popup_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shouldShowPopup]);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Redirect to appropriate form
      if (currentPage.includes('forms')) {
        window.location.href = `/forms/food-donation-form?${new URLSearchParams(formData).toString()}`;
      } else {
        window.location.href = `/forms/newsletter-signup?${new URLSearchParams(formData).toString()}`;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsSubmitting(false);
      }, 3000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('drnf_exit_popup_shown', 'true');
  };

  if (!isVisible) return null;

  const gold = '#D4B258';

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{popupConfig.heading}</h3>
          <p className="text-gray-600">{popupConfig.subheading}</p>
        </div>

        {/* Benefits */}
        <div className="mb-6 space-y-2">
          {popupConfig.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-[#D4B258]">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {popupConfig.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4B258] focus:border-[#D4B258] outline-none"
                disabled={isSubmitting}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            style={{ backgroundColor: gold }}
          >
            {isSubmitting ? 'Submitting...' : popupConfig.buttonText}
          </button>
        </form>

        {/* Close Link */}
        <button
          onClick={handleClose}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 w-full text-center"
        >
          No thanks, I'll browse
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;


