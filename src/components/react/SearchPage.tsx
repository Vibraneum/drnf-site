import React, { useState, useEffect, useRef } from 'react';
import { searchIndex, fuzzySearch, getRecentSearches, saveRecentSearch, clearRecentSearches, SearchResult } from './SearchIndex';

interface SearchPageProps {
  navigate?: (page: string) => void;
}

const CategoryFilter: React.FC<{
  categories: string[];
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}> = ({ categories, activeCategory, onSelectCategory }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    <button
      onClick={() => onSelectCategory(null)}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
        activeCategory === null
          ? 'bg-[#D4B258] text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      All
    </button>
    {categories.map(category => (
      <button
        key={category}
        onClick={() => onSelectCategory(category)}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
          activeCategory === category
            ? 'bg-[#D4B258] text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

const SearchPage: React.FC<SearchPageProps> = ({ navigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const categories = ['Programs', 'About', 'Forms', 'Pages', 'Legal'];

  useEffect(() => {
    setRecentSearches(getRecentSearches());
    inputRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setQuery('');
        setResults([]);
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const searchResults = fuzzySearch(query, searchIndex);
    const filteredResults = activeCategory
      ? searchResults.filter(r => r.category === activeCategory)
      : searchResults;

    setResults(filteredResults);
    setIsSearching(false);
  }, [query, activeCategory]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      saveRecentSearch(searchQuery);
      setRecentSearches(getRecentSearches());
    }
  };

  const handleResultClick = (result: SearchResult) => {
    saveRecentSearch(query);
    if (navigate) {
      navigate(result.page);
    } else {
      window.location.href = result.page;
    }
  };

  const handleClearRecent = () => {
    clearRecentSearches();
    setRecentSearches([]);
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-[#D4B258]/30 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const popularSearches = ['chai counters', 'community', 'donation', 'transparency', 'contact', 'about'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Search DRNF
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Find programs, information, and ways to get involved
          </p>
          <div className="mt-8 max-w-2xl mx-auto relative">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4B258]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for programs, forms, contact info..."
              className="w-full h-16 pl-14 pr-14 border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300 focus:border-amber-400 text-lg shadow-sm transition-all"
              aria-label="Search website"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Press <kbd className="px-2 py-1 bg-white rounded border border-gray-300 text-gray-700 font-mono">Ctrl</kbd> + <kbd className="px-2 py-1 bg-white rounded border border-gray-300 text-gray-700 font-mono">K</kbd> to focus search
          </p>
        </section>

        {/* Category Filter */}
        {query && <CategoryFilter categories={categories} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />}

        {/* Search Results */}
        {query && (
          <section className="mb-12">
            {isSearching ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4B258]"></div>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {results.length} {results.length === 1 ? 'result' : 'results'} found
                </h2>
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="w-full text-left bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#D4B258]/30"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D4B258]/10 text-[#D4B258]">
                            {result.category}
                          </span>
                          <h3 className="text-lg font-bold text-gray-800">
                            {highlightMatch(result.title, query)}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm">{result.description}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No results found for "{query}"</p>
                <p className="text-sm text-gray-500">Try different keywords or browse categories below</p>
              </div>
            )}
          </section>
        )}

        {/* Default Content - Recent Searches & Popular */}
        {!query && (
          <section className="space-y-8">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Recent Searches</h2>
                  <button
                    onClick={handleClearRecent}
                    className="text-sm text-gray-500 hover:text-[#D4B258] transition-colors"
                  >
                    Clear all
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="px-4 py-2 bg-gray-100 hover:bg-[#D4B258] hover:text-white rounded-full text-sm font-medium transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Searches</h2>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="px-4 py-2 bg-[#D4B258]/10 hover:bg-[#D4B258] hover:text-white rounded-full text-sm font-medium transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Browse by Category */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map(category => {
                  const categoryItems = searchIndex.filter(item => item.category === category).slice(0, 6);
                  return (
                    <div key={category} className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="font-bold text-gray-800 mb-3">{category}</h3>
                      <div className="space-y-2">
                        {categoryItems.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => handleResultClick(item)}
                            className="w-full text-left text-sm text-gray-600 hover:text-[#D4B258] transition-colors flex items-center justify-between group"
                          >
                            <span>{item.title}</span>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-[#D4B258] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

