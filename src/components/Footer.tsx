import { BookOpen, Github, Twitter, Linkedin, Mail, MapPin, Phone, ExternalLink, Youtube, Instagram } from 'lucide-react';

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

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main footer content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                Genius
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Empowering BTech students with comprehensive engineering education. Join our community of learners and transform your academic journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/playground" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  Code Playground
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  Blog
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span>+91 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>support@genius.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay updated</h3>
              <p className="text-slate-400">
                Subscribe to our newsletter for the latest courses, resources, and engineering insights.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Genius. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
                Cookies
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
