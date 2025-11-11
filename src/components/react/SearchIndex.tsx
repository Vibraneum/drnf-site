// Search Index for DRNF Website
// Comprehensive search index with fuzzy matching

export interface SearchResult {
  title: string;
  description: string;
  page: string;
  category: 'Programs' | 'About' | 'Forms' | 'Pages' | 'Legal';
  keywords: string[];
}

export const searchIndex: SearchResult[] = [
  // Programs
  {
    title: 'Free Chai Counters',
    description: 'Operating 24/7 with dignity at its heart. We serve hot tea and meals to those in need.',
    page: '/chai-counters',
    category: 'Programs',
    keywords: ['chai', 'tea', 'free', 'counter', '24/7', 'homeless', 'food', 'service']
  },
  {
    title: 'LooCafe Partnership',
    description: 'Partnership with LooCafe to maximize social impact across Hyderabad.',
    page: '/loocafe-impact',
    category: 'Programs',
    keywords: ['loocafe', 'partnership', 'sanitation', 'hyderabad', 'impact']
  },
  {
    title: 'Frontline Workers',
    description: 'Supporting frontline workers with essential services and recognition.',
    page: '/frontline-workers',
    category: 'Programs',
    keywords: ['frontline', 'workers', 'support', 'essential', 'healthcare']
  },
  {
    title: 'Community Support',
    description: 'Building stronger neighborhoods through regular donation drives and targeted support programs.',
    page: '/community',
    category: 'Programs',
    keywords: ['community', 'support', 'donation', 'drives', 'programs', 'help']
  },
  {
    title: 'Education Workshops',
    description: 'Empowering young minds through weekly workshops covering sanitation, health, and life skills.',
    page: '/community#workshops',
    category: 'Programs',
    keywords: ['education', 'workshops', 'students', 'learning', 'skills', 'sanitation']
  },
  {
    title: 'Environmental Care',
    description: 'Protecting our planet through tree plantation drives and environmental initiatives.',
    page: '/community#environment',
    category: 'Programs',
    keywords: ['environment', 'tree', 'plant', 'green', 'sustainability', 'care']
  },
  {
    title: 'Animal Welfare',
    description: 'Animal welfare programs and care for stray animals.',
    page: '/community#animal-welfare',
    category: 'Programs',
    keywords: ['animal', 'welfare', 'stray', 'care', 'pets', 'compassion']
  },

  // About
  {
    title: 'Our Story',
    description: 'Learn about our story, mission, and the legacy of Dr. Rabinder Nath.',
    page: '/about',
    category: 'About',
    keywords: ['story', 'mission', 'about', 'foundation', 'history', 'legacy']
  },
  {
    title: 'Dr. Rabinder Nath',
    description: 'Learn about Dr. Rabinder Nath, the founder and inspiration behind DRNF.',
    page: '/dr-rabinder-nath',
    category: 'About',
    keywords: ['dr', 'rabinder', 'nath', 'founder', 'doctor', 'dentist', 'inspiration']
  },
  {
    title: 'Heritage Book',
    description: 'Explore the heritage book documenting the legacy of Dr. Rabinder Nath.',
    page: '/book',
    category: 'About',
    keywords: ['book', 'heritage', 'legacy', 'documentation', 'history']
  },
  {
    title: 'Partition Story',
    description: 'The partition story and family history of Dr. Rabinder Nath.',
    page: '/partition-story',
    category: 'About',
    keywords: ['partition', 'story', 'history', 'family', 'migration']
  },
  {
    title: 'Transparency Report',
    description: 'Complete financial transparency and impact reports.',
    page: '/transparency',
    category: 'About',
    keywords: ['transparency', 'financial', 'report', 'impact', 'accountability', 'cost']
  },

  // Forms
  {
    title: 'Food Donation Form',
    description: 'Pledge food and supplies to help us keep our free chai counters running.',
    page: '/forms/food-donation-form',
    category: 'Forms',
    keywords: ['food', 'donation', 'form', 'pledge', 'supplies', 'donate']
  },
  {
    title: 'Newsletter Signup',
    description: 'Receive monthly impact stories, event invitations, and exclusive insights.',
    page: '/forms/newsletter-signup',
    category: 'Forms',
    keywords: ['newsletter', 'signup', 'subscribe', 'updates', 'email', 'monthly']
  },
  {
    title: 'Stay in Touch',
    description: 'Quick signup to receive occasional updates about our community impact.',
    page: '/forms/stay-in-touch',
    category: 'Forms',
    keywords: ['stay', 'touch', 'contact', 'updates', 'connect', 'signup']
  },

  // Pages
  {
    title: 'Contact Us',
    description: 'Get in touch with DRNF. We\'d love to hear from you.',
    page: '/contact',
    category: 'Pages',
    keywords: ['contact', 'email', 'phone', 'reach', 'get', 'touch', 'connect']
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions about DRNF and our programs.',
    page: '/faq',
    category: 'Pages',
    keywords: ['faq', 'questions', 'answers', 'help', 'information', 'common']
  },
  {
    title: 'Home',
    description: 'Dr. Rabinder Nath Foundation - Serving with compassion since 2016.',
    page: '/',
    category: 'Pages',
    keywords: ['home', 'main', 'landing', 'foundation', 'drnf']
  },

  // Legal
  {
    title: 'Privacy Policy',
    description: 'Our privacy policy and data protection practices.',
    page: '/privacy-policy',
    category: 'Legal',
    keywords: ['privacy', 'policy', 'data', 'protection', 'legal']
  },
  {
    title: 'Terms of Service',
    description: 'Terms and conditions for using the DRNF website.',
    page: '/terms-of-service',
    category: 'Legal',
    keywords: ['terms', 'service', 'conditions', 'legal', 'agreement']
  }
];

// Fuzzy search algorithm
export function fuzzySearch(query: string, items: SearchResult[]): SearchResult[] {
  if (!query.trim()) return [];

  const queryLower = query.toLowerCase().trim();
  const queryWords = queryLower.split(/\s+/);

  const scoredResults = items.map(item => {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const descriptionLower = item.description.toLowerCase();
    const keywordsLower = item.keywords.join(' ').toLowerCase();

    // Exact title match
    if (titleLower === queryLower) {
      score += 100;
    }

    // Title contains full query
    if (titleLower.includes(queryLower)) {
      score += 50;
    }

    // Title contains query words
    queryWords.forEach(word => {
      if (titleLower.includes(word)) {
        score += 20;
      }
    });

    // Keywords match
    queryWords.forEach(word => {
      if (keywordsLower.includes(word)) {
        score += 15;
      }
    });

    // Description contains query words
    queryWords.forEach(word => {
      if (descriptionLower.includes(word)) {
        score += 10;
      }
    });

    // Partial keyword match
    queryWords.forEach(word => {
      item.keywords.forEach(keyword => {
        if (keyword.includes(word) || word.includes(keyword)) {
          score += 8;
        }
      });
    });

    return { ...item, score };
  });

  // Filter and sort by score
  return scoredResults
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ score, ...item }) => item);
}

// Recent searches management
export function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  const recent = localStorage.getItem('drnf_recent_searches');
  return recent ? JSON.parse(recent) : [];
}

export function saveRecentSearch(query: string): void {
  if (typeof window === 'undefined') return;
  const recent = getRecentSearches();
  const updated = [query, ...recent.filter(q => q !== query)].slice(0, 5);
  localStorage.setItem('drnf_recent_searches', JSON.stringify(updated));
}

export function clearRecentSearches(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('drnf_recent_searches');
}


