import { BookOpen, User, Menu, Search, ChevronDown, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

// Mock Link component with proper TypeScript types
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

const Link = ({ to, children, className, ...props }: LinkProps) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

// Mock search results data 
interface SearchResult {
  id: string;
  title: string;
  type: 'course' | 'resource' | 'community';
  url: string;
}

const mockSearchResults: SearchResult[] = [
  { id: '1', title: 'Introduction to AI', type: 'course', url: '/courses/intro-to-ai' },
  { id: '2', title: 'Machine Learning Basics', type: 'course', url: '/courses/ml-basics' },
  { id: '3', title: 'Neural Networks Guide', type: 'resource', url: '/resources/neural-networks' },
  { id: '4', title: 'AI Ethics Discussion', type: 'community', url: '/community/ai-ethics' },
  { id: '5', title: 'Deep Learning Advanced', type: 'course', url: '/courses/deep-learning' },
  { id: '6', title: 'Computer Vision Projects', type: 'resource', url: '/resources/computer-vision' }
];

export function Navbar() {
  // Detect if we're on a mobile device
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Memoize search results to prevent unnecessary re-renders
  const filteredResults = useRef<SearchResult[]>([]);
  // Store timeout reference to properly clear it
  const searchTimeoutRef = useRef<number | null>(null);
  
  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      // Add overscroll-behavior to prevent background content from scrolling on mobile
      document.body.style.overscrollBehavior = 'none';
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overscrollBehavior = 'auto';
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overscrollBehavior = 'auto';
    };
  }, [isMenuOpen]);
  
  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setShowSearchResults(false);
  };
  
  // Handle search input change with debounce for better performance on mobile
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }
    
    setIsSearching(true);
    
    // Clear any existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Use a longer debounce on mobile devices to reduce input lag
    const debounceTime = isMobile ? 400 : 250;
    
    // Simulate search delay with debounce
    searchTimeoutRef.current = window.setTimeout(() => {
      // Filter results and store in ref to prevent unnecessary re-renders
      filteredResults.current = mockSearchResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase())
      );
      
      // Only update state if we need to (optimization)
      if (JSON.stringify(filteredResults.current) !== JSON.stringify(searchResults)) {
        setSearchResults(filteredResults.current);
      }
      
      setIsSearching(false);
      setShowSearchResults(true);
    }, debounceTime);
  };
  
  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      // In a real app, you might redirect to a search results page
      console.log(`Searching for: ${searchQuery}`);
    }
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchResults(false);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  
  return (
      <nav className="fixed w-full z-50 bg-gradient-to-r from-black/90 via-gray-950/90 to-black/90 backdrop-blur-xl border-b border-gray-800/30 shadow-lg">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-slow-alt"></div>
      </div>
      
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          {/* Logo and main navigation */}
          <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 group-hover:from-indigo-600 group-hover:to-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.4)] group-hover:shadow-[0_0_20px_rgba(79,70,229,0.6)] group-hover:scale-105">
                  <BookOpen className="h-6 w-6 text-white" />
              </div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 group-hover:from-indigo-300 group-hover:to-violet-300 transition-all duration-300">
                Genius.AI
              </span>
            </Link>
            
            <div className="hidden lg:flex items-center ml-12 space-x-6">
              <Link 
                to="/courses" 
                className="px-3 py-2 text-gray-300 hover:text-white rounded-md transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 font-medium">Courses</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-full group-hover:left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              </Link>
              <Link 
                to="/playground" 
                className="px-3 py-2 text-gray-300 hover:text-white rounded-md transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 font-medium">Playground</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-full group-hover:left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              </Link>
              <Link 
                to="/resources" 
                className="px-3 py-2 text-gray-300 hover:text-white rounded-md transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 font-medium">Resources</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-full group-hover:left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              </Link>
              <Link 
                to="/community" 
                className="px-3 py-2 text-gray-300 hover:text-white rounded-md transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 font-medium">Community</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-full group-hover:left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              </Link>
            </div>
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search bar - hidden on mobile */}
              <div className="hidden md:block relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                    className="pl-9 pr-9 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent w-56 transition-all duration-300 focus:w-64"
                />
                {searchQuery && (
                  <button 
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-white transition-colors duration-300" />
                  </button>
                )}
              </form>
              
              {/* Search results dropdown */}
              {showSearchResults && (
                  <div className="absolute right-0 mt-2 w-72 bg-black/90 backdrop-blur-xl rounded-lg shadow-lg py-1 border border-gray-800/30 animate-fadeIn z-50">
                  <div className="px-3 py-2 border-b border-gray-800/30">
                    <p className="text-sm text-gray-400">
                      {isSearching ? (
                        "Searching..."
                      ) : searchResults.length > 0 ? (
                        `Found ${searchResults.length} result${searchResults.length === 1 ? '' : 's'}`
                      ) : (
                        "No results found"
                      )}
                    </p>
                  </div>
                  
                  <div className="max-h-60 overflow-y-auto">
                    {searchResults.map((result) => (
                      <Link 
                        key={result.id}
                        to={result.url} 
                        onClick={handleLinkClick}
                        className="flex items-center px-3 py-2 hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <div className="mr-3">
                          {result.type === 'course' && (
                            <div className="p-1 rounded-md bg-indigo-500/20 text-indigo-400">
                              <BookOpen className="h-4 w-4" />
                            </div>
                          )}
                          {result.type === 'resource' && (
                            <div className="p-1 rounded-md bg-violet-500/20 text-violet-400">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          )}
                          {result.type === 'community' && (
                            <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm text-white font-medium">{result.title}</p>
                          <p className="text-xs text-gray-400 capitalize">{result.type}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {searchResults.length > 0 && (
                    <div className="px-3 py-2 border-t border-gray-800/30">
                      <Link 
                        to={`/search?q=${encodeURIComponent(searchQuery)}`}
                        onClick={handleLinkClick}
                        className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200 flex items-center"
                      >
                        View all results
                        <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            
            {/* Profile dropdown */}
            <div className="relative" ref={profileRef}>
              <button 
                className="flex items-center space-x-1.5 p-1.5 rounded-full hover:bg-gray-900/60 transition-all duration-300 touch-target"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md transition-all duration-300 hover:shadow-[0_0_10px_rgba(79,70,229,0.4)]">
                  <User className="h-4 w-4 text-white" />
                </div>
                <ChevronDown className={`h-3.5 w-3.5 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl rounded-lg shadow-lg py-1 border border-gray-800/30 animate-fadeIn">
                  <Link to="/profile" className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 group">
                    <User className="h-4 w-4 mr-2 text-gray-400 group-hover:text-indigo-400" />
                    <span>Profile</span>
                  </Link>
                  <Link to="/settings" className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-200 group">
                    <svg className="h-4 w-4 mr-2 text-gray-400 group-hover:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Settings</span>
                  </Link>
                  <hr className="my-1 border-gray-800/30" />
                  <button className="flex w-full items-center px-4 py-2 text-red-400 hover:text-red-300 transition-all duration-200 group">
                    <svg className="h-4 w-4 mr-2 text-red-500/70 group-hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-1.5 rounded-full hover:bg-gray-900/60 transition-all duration-300 touch-target"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <Menu className="h-5 w-5 text-gray-400 hover:text-white transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
            <div ref={menuRef} className="lg:hidden py-3 border-t border-gray-800/20 animate-fadeIn mobile-menu bg-gradient-to-r from-black/95 via-gray-950/95 to-black/95 backdrop-blur-xl">
            <div className="flex flex-col space-y-1">
              <Link to="/courses" onClick={handleLinkClick} className="px-4 py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 touch-target">
                <span className="font-medium">Courses</span>
              </Link>
              <Link to="/playground" onClick={handleLinkClick} className="px-4 py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 touch-target">
                <span className="font-medium">Playground</span>
              </Link>
              <Link to="/resources" onClick={handleLinkClick} className="px-4 py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 touch-target">
                <span className="font-medium">Resources</span>
              </Link>
              <Link to="/community" onClick={handleLinkClick} className="px-4 py-3 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 touch-target">
                <span className="font-medium">Community</span>
              </Link>
              
              {/* Mobile search */}
                <div className="px-4 py-2 mt-1">
                <form onSubmit={handleSearchSubmit}>
                  <div className="relative" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="search"
                      placeholder="Search courses, resources..."
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg py-2 pl-10 pr-8 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => searchQuery.trim() !== '' && setShowSearchResults(true)}
                      style={{ touchAction: 'manipulation' }}
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                    />
                    {searchQuery && (
                      <button 
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <X className="h-4 w-4 text-gray-400 hover:text-white transition-colors duration-300" />
                      </button>
                    )}
                  </div>
                </form>
                
                {/* Mobile search results */}
                {showSearchResults && searchResults.length > 0 && (
                    <div className="mt-2 bg-gray-900/80 rounded-md border border-gray-800/30 animate-fadeIn" style={{ willChange: 'opacity, transform' }}>
                    <div className="max-h-60 overflow-y-auto">
                      {searchResults.map((result) => (
                        <Link 
                          key={result.id}
                          to={result.url} 
                          onClick={handleLinkClick}
                          className="flex items-center px-3 py-2 hover:bg-gray-800/50 transition-all duration-200 border-b border-gray-800/20 last:border-b-0"
                        >
                          <div className="mr-3">
                            {result.type === 'course' && (
                              <div className="p-1 rounded-md bg-indigo-500/20 text-indigo-400">
                                <BookOpen className="h-4 w-4" />
                              </div>
                            )}
                            {result.type === 'resource' && (
                              <div className="p-1 rounded-md bg-violet-500/20 text-violet-400">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                            )}
                            {result.type === 'community' && (
                              <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-white font-medium">{result.title}</p>
                            <p className="text-xs text-gray-400 capitalize">{result.type}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    <div className="px-3 py-2 border-t border-gray-800/30">
                      <Link 
                        to={`/search?q=${encodeURIComponent(searchQuery)}`}
                        onClick={handleLinkClick}
                        className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200 flex items-center"
                      >
                        View all results
                        <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>  
    </nav>
  );
}