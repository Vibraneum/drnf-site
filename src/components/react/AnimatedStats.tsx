import React, { useState, useEffect, useRef } from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, description }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseInt(value.replace(/[,+\-]/g, ''), 10);
  const hasAnimated = useRef(false);
  const isRange = value.includes('-');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (startTime === null) {
              startTime = currentTime;
            }

            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            if (isRange) {
              // For ranges like "500-600", animate both numbers
              const [start, end] = value.split('-').map(v => parseInt(v.replace(/[^\d]/g, ''), 10));
              const currentStart = Math.floor(easedProgress * start);
              const currentEnd = Math.floor(easedProgress * end);
              setCount(currentStart);
            } else {
              const currentCount = Math.floor(easedProgress * target);
              setCount(currentCount);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              if (isRange) {
                const [start, end] = value.split('-').map(v => parseInt(v.replace(/[^\d]/g, ''), 10));
                setCount(start);
              } else {
                setCount(target);
              }
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target, value, isRange]);
  
  const formatValue = () => {
    if (isRange) {
      const [start, end] = value.split('-').map(v => parseInt(v.replace(/[^\d]/g, ''), 10));
      return `${count.toLocaleString()}-${end.toLocaleString()}`;
    }
    if (value.includes(',')) {
      return count.toLocaleString();
    }
    return count;
  };

  return (
    <div ref={ref} className="bg-white/80 backdrop-blur-sm border border-amber-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4B258]/10">
        {icon}
      </div>
      <p className="text-3xl sm:text-4xl font-bold text-[#D4B258] mb-2">
        {formatValue()}
        {value.includes('+') && count === target && '+'}
        {value.includes('locations') && ' Locations'}
        {value.includes('daily') && ' Daily'}
      </p>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const AnimatedStats: React.FC = () => {
  const statsData = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4B258]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      ),
      value: '500-600',
      description: 'People Served Daily'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4B258]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      value: 'July 2021',
      description: 'Free Chai Counter Started'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4B258]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      value: '2',
      description: 'Active Locations'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4B258]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      value: '70+',
      description: 'Lives Impacted'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4B258]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
          <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      value: '70+',
      description: 'Students Supported'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#D4B258]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      value: '24/7',
      description: 'Service Availability'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50/50 to-white" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="stats-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Measurable change through dedicated service and community care
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;

