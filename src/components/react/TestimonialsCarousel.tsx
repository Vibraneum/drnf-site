import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  source: string;
  role?: string;
  rating: number;
  icon: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The free chai counter has been a lifeline for me. Every morning, I know I can get a warm cup of tea and some snacks. It's not just about the food - it's about dignity and care.",
    source: "Regular Visitor",
    role: "Banjara Hills Chai Counter",
    rating: 5,
    icon: "☕"
  },
  {
    quote: "DRNF's education workshops changed my daughter's life. She learned about hygiene, health, and life skills that she uses every day. We're so grateful for this support.",
    source: "Parent",
    role: "Community Workshop Participant",
    rating: 5,
    icon: "📚"
  },
  {
    quote: "As a frontline worker, having access to free chai and snacks during my shifts means everything. DRNF's support helps us serve the community better.",
    source: "Frontline Worker",
    role: "Healthcare Professional",
    rating: 5,
    icon: "🛡️"
  },
  {
    quote: "The transparency and dedication of DRNF is remarkable. Every rupee donated goes directly to serving people. That's why I continue to support them.",
    source: "Donor",
    role: "Regular Supporter",
    rating: 5,
    icon: "❤️"
  },
  {
    quote: "My family received essential supplies during a difficult time. DRNF didn't just give us food - they gave us hope and showed us that the community cares.",
    source: "Community Member",
    role: "Donation Drive Recipient",
    rating: 5,
    icon: "🤝"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const gold = '#D4B258';
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-5 h-5"
          style={{ color: star <= rating ? gold : '#E5E7EB' }}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white to-amber-50/30" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#D4B258] animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Community Voices
            </span>
          </div>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Stories from Our Community
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from people whose lives have been touched by DRNF's work
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote Icon */}
          <div className="text-6xl text-[#D4B258]/20 absolute top-6 left-6">"</div>

          {/* Testimonial Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">{currentTestimonial.icon}</div>
              <StarRating rating={currentTestimonial.rating} />
            </div>

            <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              {currentTestimonial.quote}
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-800">{currentTestimonial.source}</p>
                {currentTestimonial.role && (
                  <p className="text-sm text-gray-600">{currentTestimonial.role}</p>
                )}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full hover:bg-[#D4B258]/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full hover:bg-[#D4B258]/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#D4B258] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

