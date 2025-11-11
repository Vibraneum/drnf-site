import React from 'react';

interface CaseStudyPreview {
  title: string;
  description: string;
  keyResult: string;
  imageUrl: string;
  page: string;
}

const featuredCaseStudies: CaseStudyPreview[] = [
  {
    title: 'Free Chai Counters',
    description: '24/7 service providing dignity and care to 500-600 people daily',
    keyResult: '500-600 people/day',
    imageUrl: 'https://res.cloudinary.com/dhupieu4x/image/upload/f_auto,q_auto:good/drnf-assets/drnf-assets/drnf-chai-counter-banjara-hills-active.jpg',
    page: '/chai-counters'
  },
  {
    title: 'LooCafe Partnership',
    description: 'Environmental excellence and job creation through strategic partnership',
    keyResult: '70+ jobs created',
    imageUrl: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599308/drnf-assets/drnf-assets/rabinder_nath2.1.jpg',
    page: '/loocafe-impact'
  },
  {
    title: 'Education Workshops',
    description: 'Empowering young minds through weekly workshops and life skills training',
    keyResult: '70+ students reached',
    imageUrl: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599308/drnf-assets/drnf-assets/rabinder_nath2.1.jpg',
    page: '/community#workshops'
  }
];

const CaseStudiesTeaser: React.FC = () => {
  const gold = '#D4B258';

  const handleCardClick = (page: string) => {
    window.location.href = page;
  };

  return (
    <section className="bg-gray-50 py-12 md:py-16 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            style={{ backgroundColor: gold }}
            className="text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4"
          >
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Proven Impact Across Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Discover how DRNF has transformed lives and communities with measurable results and sustainable solutions
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCaseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => handleCardClick(caseStudy.page)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">{caseStudy.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-3">{caseStudy.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-[#D4B258]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-800">{caseStudy.keyResult}</span>
                </div>
                <div className="flex items-center text-[#D4B258] font-semibold text-sm group">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTeaser;

