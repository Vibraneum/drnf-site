import React, { useState } from 'react';

interface BeforeAfterItem {
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  improvements: string[];
  stats?: {
    label: string;
    value: string;
  };
}

const transformations: BeforeAfterItem[] = [
  {
    title: 'Banjara Hills Chai Counter',
    location: 'Hyderabad',
    beforeImage: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599308/drnf-assets/drnf-assets/rabinder_nath2.1.jpg',
    afterImage: 'https://res.cloudinary.com/dhupieu4x/image/upload/f_auto,q_auto:good/drnf-assets/drnf-assets/drnf-chai-counter-banjara-hills-active.jpg',
    improvements: [
      '24/7 free chai service',
      '500-600 people served daily',
      'Safe space for community',
      'Dignified service delivery'
    ],
    stats: {
      label: 'People Served',
      value: '500-600/day'
    }
  },
  {
    title: 'Community Education Workshop',
    location: 'Hyderabad',
    beforeImage: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599308/drnf-assets/drnf-assets/rabinder_nath2.1.jpg',
    afterImage: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599308/drnf-assets/drnf-assets/rabinder_nath2.1.jpg',
    improvements: [
      '70+ students reached',
      'Weekly workshops',
      'Life skills training',
      'Health & hygiene education'
    ],
    stats: {
      label: 'Students Impacted',
      value: '70+'
    }
  },
  {
    title: 'LooCafe Partnership Impact',
    location: 'Hyderabad',
    beforeImage: 'https://res.cloudinary.com/dhupieu4x/image/upload/v1762599308/drnf-assets/drnf-assets/rabinder_nath2.1.jpg',
    afterImage: 'https://res.cloudinary.com/dhupieu4x/image/upload/f_auto,q_auto:good/drnf-assets/drnf-assets/drnf-chai-counter-banjara-hills-active.jpg',
    improvements: [
      '30 LooCafes in pilot program',
      '70+ jobs created',
      'Environmental excellence',
      '5-star garbage-free city award'
    ],
    stats: {
      label: 'Jobs Created',
      value: '70+'
    }
  }
];

const BeforeAfterGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showBefore, setShowBefore] = useState<{ [key: number]: boolean }>({});

  const toggleView = (index: number) => {
    setShowBefore(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const gold = '#D4B258';

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: gold }}></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Our Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Real Transformations, Real Results
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            See how DRNF has transformed lives and communities across Hyderabad
          </p>
        </div>

        {/* Main Featured Transformation */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Before/After Image Toggle */}
              <div className="relative group h-96 md:h-auto">
                <img
                  src={showBefore[selectedIndex]
                    ? transformations[selectedIndex].beforeImage
                    : transformations[selectedIndex].afterImage}
                  alt={showBefore[selectedIndex] ? 'Before transformation' : 'After transformation'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Before/After Label */}
                <div
                  className="absolute top-4 left-4 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg"
                  style={{ backgroundColor: showBefore[selectedIndex] ? '#EF4444' : gold }}
                >
                  {showBefore[selectedIndex] ? 'BEFORE' : 'AFTER'}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleView(selectedIndex)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    View {showBefore[selectedIndex] ? 'After' : 'Before'}
                  </span>
                </button>
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-center">
                <div
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 self-start"
                  style={{ backgroundColor: `${gold}20`, color: gold }}
                >
                  {transformations[selectedIndex].location}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  {transformations[selectedIndex].title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {transformations[selectedIndex].location}
                </p>

                <ul className="space-y-3 mb-6">
                  {transformations[selectedIndex].improvements.map((improvement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#D4B258] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{improvement}</span>
                    </li>
                  ))}
                </ul>

                {transformations[selectedIndex].stats && (
                  <div className="bg-gradient-to-r from-[#D4B258]/10 to-[#D4B258]/5 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">{transformations[selectedIndex].stats!.label}</p>
                    <p className="text-2xl font-bold" style={{ color: gold }}>
                      {transformations[selectedIndex].stats!.value}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {transformations.map((transformation, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`text-left bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border-2 ${
                selectedIndex === index
                  ? 'border-[#D4B258] shadow-lg'
                  : 'border-transparent hover:border-gray-200'
              }`}
            >
              <img
                src={transformation.afterImage}
                alt={transformation.title}
                className="w-full h-32 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 text-sm mb-1">{transformation.title}</h4>
                <p className="text-xs text-gray-600">{transformation.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;

