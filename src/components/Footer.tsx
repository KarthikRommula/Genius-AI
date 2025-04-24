import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">Genius</span>
            </Link>
            <p className="text-gray-400">
              Empowering BTech students with comprehensive engineering education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="hover:text-indigo-500 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/playground" className="hover:text-indigo-500 transition-colors">
                  Code Playground
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-indigo-500 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-indigo-500 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and new courses.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Genius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}