import { BookOpen, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Genius
              </span>
            </Link>
            <div className="hidden md:flex items-center ml-8 space-x-8">
              <Link to="/courses" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Courses
              </Link>
              <Link to="/playground" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Code Playground
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Resources
              </Link>
              <Link to="/community" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Community
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <User className="h-6 w-6 text-gray-600" />
            </Link>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/courses" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Courses
              </Link>
              <Link to="/playground" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Code Playground
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Resources
              </Link>
              <Link to="/community" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Community
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}