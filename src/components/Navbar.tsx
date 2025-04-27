import { BookOpen, User, Menu, Bell, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';
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
              className="lg:hidden p-1.5 rounded-full hover:bg-gray-900/60 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="lg:hidden py-3 border-t border-gray-800/20 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              <Link to="/courses" className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-200">
                <span className="font-medium">Courses</span>
              </Link>
              <Link to="/playground" className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-200">
                <span className="font-medium">Playground</span>
              </Link>
              <Link to="/resources" className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-200">
                <span className="font-medium">Resources</span>
              </Link>
              <Link to="/community" className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-200">
                <span className="font-medium">Community</span>
              </Link>
              
              {/* Mobile search */}
              <div className="px-4 py-2 mt-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-9 pr-4 py-1.5 bg-gray-900/50 border border-gray-800/30 rounded-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}