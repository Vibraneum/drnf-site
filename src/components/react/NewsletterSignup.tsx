import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'validation'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubmitStatus('validation');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    if (!validateEmail(email)) {
      setSubmitStatus('validation');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Redirect to newsletter signup form
      window.location.href = `/forms/newsletter-signup?email=${encodeURIComponent(email)}`;
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const gold = '#D4B258';
  const darkGold = '#C3A24B';

  return (
    <section className="w-full bg-gradient-to-br from-[#FFF7E6] to-[#FFE4B3] py-12 px-4 sm:px-6 lg:px-8 rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Stay Connected with DRNF
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Receive monthly impact stories, event invitations, and exclusive insights into our community work
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-[#D4B258] focus:border-[#D4B258] text-gray-800 placeholder-gray-500 shadow-sm"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: gold }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = darkGold;
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = gold;
                }
              }}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              <p className="font-semibold">✓ Successfully subscribed!</p>
              <p className="text-sm mt-1">Check your email for confirmation.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
              <p className="font-semibold">Something went wrong</p>
              <p className="text-sm mt-1">Please try again or contact us directly.</p>
            </div>
          )}

          {submitStatus === 'validation' && (
            <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg text-center">
              <p className="font-semibold">Please enter a valid email address</p>
            </div>
          )}

          <p className="text-xs text-gray-600 text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <div className="text-2xl mb-2">📧</div>
            <p className="text-sm font-semibold text-gray-800">Monthly Updates</p>
            <p className="text-xs text-gray-600">Impact stories & news</p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">🎉</div>
            <p className="text-sm font-semibold text-gray-800">Event Invitations</p>
            <p className="text-xs text-gray-600">Join our community events</p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">💡</div>
            <p className="text-sm font-semibold text-gray-800">Exclusive Insights</p>
            <p className="text-xs text-gray-600">Behind-the-scenes content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;


