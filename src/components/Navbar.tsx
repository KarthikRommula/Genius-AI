import { BookOpen, User, Menu, Bell, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

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
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main navigation */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 group-hover:from-indigo-600 group-hover:to-violet-700 transition-all duration-300">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                Genius
              </span>
            </Link>
            
            <div className="hidden lg:flex items-center ml-12 space-x-1">
              <Link 
                to="/courses" 
                className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                Courses
                <ChevronDown className="w-4 h-4" />
              </Link>
              <Link 
                to="/playground" 
                className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all duration-200"
              >
                Code Playground
              </Link>
              <Link 
                to="/resources" 
                className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all duration-200"
              >
                Resources
              </Link>
              <Link 
                to="/community" 
                className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all duration-200"
              >
                Community
              </Link>
            </div>
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-3">
            {/* Search bar - hidden on mobile */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-64"
                />
              </div>
            </div>
            
            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-slate-800/80 transition-colors">
              <Bell className="h-6 w-6 text-slate-300" />
              <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
            </button>
            
            {/* Profile dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-800/80 transition-colors"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <ChevronDown className={`h-4 w-4 text-slate-300 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-xl shadow-lg py-1 border border-slate-700">
                  <Link to="/profile" className="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white">
                    Your Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-slate-300 hover:bg-slate-700 hover:text-white">
                    Settings
                  </Link>
                  <hr className="my-1 border-slate-700" />
                  <button className="block w-full text-left px-4 py-2 text-red-400 hover:bg-slate-700">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-800/80 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-slate-300" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-2">
              <Link to="/courses" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all duration-200">
                Courses
              </Link>
              <Link to="/playground" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all duration-200">
                Code Playground
              </Link>
              <Link to="/resources" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all duration-200">
                Resources
              </Link>
              <Link to="/community" className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all duration-200">
                Community
              </Link>
              {/* Mobile search */}
              <div className="px-4 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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