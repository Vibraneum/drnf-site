import React, { useState } from 'react';

interface StickyCtaBarProps {
  currentPage?: string;
}

const StickyCtaBar: React.FC<StickyCtaBarProps> = ({ currentPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Don't show on contact page
  if (currentPage === 'contact') {
    return null;
  }

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const handleDonationClick = () => {
    window.location.href = '/forms/food-donation-form';
  };

  return (
    <>
      {/* Desktop CTA Bar - Bottom Sticky */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Join us in making a difference
                </p>
                <p className="text-xs text-gray-600">
                  <strong>500+ people served daily</strong> • Your support matters
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Phone Number Display */}
              <a
                href="tel:+919966906781"
                className="flex items-center space-x-2 text-gray-700 hover:text-[#D4B258] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">+91 99669 06781</span>
              </a>

              {/* Primary CTA Button */}
              <button
                onClick={handleContactClick}
                className="flex items-center space-x-2 px-8 py-3 bg-[#D4B258] text-white rounded-full hover:bg-[#C3A24B] transition-all duration-200 font-bold shadow-lg"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating CTA Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center space-x-2 px-6 py-4 bg-[#D4B258] text-white rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 font-bold text-sm"
          >
            <span>Help Us</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-3 w-64 border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800 text-sm">Quick Actions</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-2">
              {/* Donation Button */}
              <button
                onClick={() => {
                  setIsExpanded(false);
                  handleDonationClick();
                }}
                className="flex items-center space-x-3 w-full px-4 py-3 bg-[#D4B258] hover:bg-[#C3A24B] text-white rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div className="text-left flex-1">
                  <div className="text-sm font-semibold">Donate Food</div>
                  <div className="text-xs opacity-90">Help our chai counters</div>
                </div>
              </button>

              {/* Contact Form Button */}
              <button
                onClick={() => {
                  setIsExpanded(false);
                  handleContactClick();
                }}
                className="flex items-center space-x-3 w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-left flex-1">
                  <div className="text-sm font-semibold">Contact Us</div>
                  <div className="text-xs opacity-90">Get in touch</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StickyCtaBar;

