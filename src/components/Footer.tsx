import { BookOpen, Github, Twitter, Linkedin, Mail, MapPin, Phone, ExternalLink, Youtube, Instagram, ArrowRight } from 'lucide-react';

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
    <footer className="bg-gradient-to-br from-black via-gray-950/95 to-black border-t border-gray-900 relative overflow-hidden">
      {/* Subtle color accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-violet-950/5 to-transparent pointer-events-none"></div>
      {/* Background decorative elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-4000"></div>
      
      {/* Subtle SVG pattern for extra depth */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#fff" opacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)" />
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2 relative z-10">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 group-hover:from-indigo-600 group-hover:to-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.3)] group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transform group-hover:scale-105">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 group-hover:from-indigo-300 group-hover:to-violet-300 transition-all duration-300">
                Genius
              </span>
            </Link>
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl animate-pulse animate-duration-4000"></div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed relative">
                Empowering BTech students with comprehensive engineering education. Join our community of learners and transform your academic journey.
              </p>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-lg bg-black/60 text-gray-300 hover:bg-indigo-600/20 hover:text-indigo-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] backdrop-blur-sm">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-black/60 text-gray-300 hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-sm">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-black/60 text-gray-300 hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-sm">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-black/60 text-gray-300 hover:bg-red-600/20 hover:text-red-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] backdrop-blur-sm">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-black/60 text-gray-300 hover:bg-pink-600/20 hover:text-pink-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-sm">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -left-2 -top-2 w-12 h-12 bg-indigo-500/10 rounded-full blur-lg animate-pulse animate-duration-5000"></div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400">Quick Links</span>
              </h3>
            </div>
            <ul className="space-y-4">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-indigo-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Courses</span>
                </Link>
              </li>
              <li>
                <Link to="/playground" className="text-gray-300 hover:text-indigo-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Code Playground</span>
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-indigo-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Resources</span>
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-indigo-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Community</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-indigo-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Blog</span>
                  <ExternalLink className="h-3 w-3 group-hover:text-indigo-300 transition-colors duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -left-2 -top-2 w-12 h-12 bg-purple-500/10 rounded-full blur-lg animate-pulse animate-duration-5000 animate-delay-1000"></div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">Support</span>
              </h3>
            </div>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Help Center</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Documentation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">API Reference</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">System Status</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -left-2 -top-2 w-12 h-12 bg-blue-500/10 rounded-full blur-lg animate-pulse animate-duration-5000 animate-delay-2000"></div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">Company</span>
              </h3>
            </div>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Careers</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Press Kit</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Terms of Service</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -left-2 -top-2 w-12 h-12 bg-violet-500/10 rounded-full blur-lg animate-pulse animate-duration-5000 animate-delay-3000"></div>
              <h3 className="text-lg font-bold text-white mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-violet-400">Contact</span>
              </h3>
            </div>
            <ul className="space-y-5">
              <li className="group">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-violet-300 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-black/60 text-violet-400 group-hover:bg-violet-600/20 transition-all duration-300 backdrop-blur-sm group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Bangalore, India</span>
                </a>
              </li>
              <li className="group">
                <a href="tel:+918001234567" className="flex items-center gap-3 text-gray-300 hover:text-violet-300 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-black/60 text-violet-400 group-hover:bg-violet-600/20 transition-all duration-300 backdrop-blur-sm group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">+91 (800) 123-4567</span>
                </a>
              </li>
              <li className="group">
                <a href="mailto:support@genius.edu" className="flex items-center gap-3 text-gray-300 hover:text-violet-300 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-black/60 text-violet-400 group-hover:bg-violet-600/20 transition-all duration-300 backdrop-blur-sm group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">support@genius.edu</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mt-20 pt-10 border-t border-gray-800/30 relative">
          {/* Background decoration */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl animate-pulse animate-duration-6000"></div>
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-violet-500/20 rounded-full blur-lg animate-pulse animate-duration-4000 animate-delay-2000"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-violet-300">Stay updated</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Subscribe to our newsletter for the latest courses, resources, and engineering insights delivered directly to your inbox.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-500/5 rounded-full blur-xl animate-pulse animate-duration-5000"></div>
              <div className="relative flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-lg transition-all duration-300 backdrop-blur-sm"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-violet-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <button className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 font-semibold whitespace-nowrap shadow-[0_0_15px_rgba(79,70,229,0.2)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-2">
                    Subscribe
                    <ArrowRight className="h-4 w-4 animate-pulse-slow" />
                  </span>
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3 text-center sm:text-left">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/30 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-violet-900/5 to-purple-900/5"></div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm group transition-all duration-300 hover:text-gray-300">
              © 2025 <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 font-medium">Genius</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-indigo-300 text-sm transition-all duration-300 relative group">
                <span>Terms</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-300 text-sm transition-all duration-300 relative group">
                <span>Privacy</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-300 text-sm transition-all duration-300 relative group">
                <span>Cookies</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-300 text-sm transition-all duration-300 relative group">
                <span>Sitemap</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
