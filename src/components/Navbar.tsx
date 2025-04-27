import { BookOpen, User, Menu, Bell, Search, ChevronDown } from 'lucide-react';
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

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95' : 'bg-gradient-to-r from-black/90 via-gray-950/90 to-black/90'} backdrop-blur-xl border-b border-gray-800/30 shadow-lg`}
      role="navigation"
      aria-label="Main navigation"
    >
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
          <div className="flex items-center space-x-4">
            {/* Search bar - hidden on mobile */}
            <div className="hidden md:flex items-center">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent w-56 transition-all duration-300 focus:w-64"
                />
              </div>
            </div>
            
            {/* Notifications */}
            <button className="relative p-1.5 rounded-full hover:bg-gray-900/60 transition-all duration-300 group">
              <Bell className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-indigo-500 notification-pulse"></span>
            </button>
            
            {/* Profile dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1.5 p-1.5 rounded-full hover:bg-gray-900/60 transition-all duration-300"
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
              className="lg:hidden p-2.5 rounded-full hover:bg-gray-900/60 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <Menu className="h-6 w-6 text-gray-400 hover:text-white transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          id="mobile-menu"
          ref={menuRef}
          className={`lg:hidden py-3 border-t border-gray-800/20 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}
        >
          <div className="flex flex-col space-y-1 px-2">
            <Link 
              to="/courses" 
              className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-medium">Courses</span>
            </Link>
            <Link 
              to="/playground" 
              className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Playground</span>
            </Link>
            <Link 
              to="/resources" 
              className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="font-medium">Resources</span>
            </Link>
            <Link 
              to="/community" 
              className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">Community</span>
            </Link>
            
            {/* Mobile search */}
            <div className="px-4 py-2 mt-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                  className="w-full pl-9 pr-4 py-3 bg-gray-900/50 border border-gray-800/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}