import { BookOpen, Github, Twitter, Linkedin, Mail, MapPin, Phone, ExternalLink, Youtube, Instagram, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { isMobile } from '../utils/deviceDetection';

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
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  
  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);
  
  return (
    <footer className="bg-gradient-to-br from-black via-gray-950/95 to-black border-t border-gray-900 relative overflow-hidden">
      {/* Subtle color accents for desktop only */}
      {!isMobileDevice && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-violet-950/5 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-4000"></div>
        </>
      )}
      
      {/* SVG pattern for desktop only */}
      {!isMobileDevice && (
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
      )}
      
      {/* Main footer content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2 relative z-10">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className={`p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 ${!isMobileDevice ? 'group-hover:from-indigo-600 group-hover:to-violet-700 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transform group-hover:scale-105' : ''}`}>
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 ${!isMobileDevice ? 'group-hover:from-indigo-300 group-hover:to-violet-300 transition-all duration-300' : ''}`}>
                Genius
              </span>
            </Link>
            <div className="relative">
              {!isMobileDevice && (
                <div className="absolute -left-6 -top-6 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl animate-pulse animate-duration-4000"></div>
              )}
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed relative">
                Empowering BTech students with comprehensive engineering education. Join our community of learners and transform your academic journey.
              </p>
            </div>
            <div className="flex space-x-3">
              {[
                { icon: Github, href: "#", color: "indigo" },
                { icon: Twitter, href: "#", color: "blue" },
                { icon: Linkedin, href: "#", color: "blue" },
                { icon: Youtube, href: "#", color: "red" },
                { icon: Instagram, href: "#", color: "pink" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`p-2 rounded-lg bg-black/60 text-gray-300 ${!isMobileDevice ? `hover:bg-${social.color}-600/20 hover:text-${social.color}-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] backdrop-blur-sm` : ''}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {[
            {
              title: "Quick Links",
              color: "indigo",
              links: [
                { title: "Courses", to: "/courses" },
                { title: "Code Playground", to: "/playground" },
                { title: "Resources", to: "/resources" },
                { title: "Community", to: "/community" },
                { title: "Blog", to: "/blog", external: true }
              ]
            },
            {
              title: "Support",
              color: "purple",
              links: [
                { title: "Help Center", to: "#" },
                { title: "Documentation", to: "#" },
                { title: "API Reference", to: "#" },
                { title: "System Status", to: "#" },
                { title: "Contact Us", to: "#" }
              ]
            },
            {
              title: "Company",
              color: "blue",
              links: [
                { title: "About Us", to: "#" },
                { title: "Careers", to: "#" },
                { title: "Press Kit", to: "#" },
                { title: "Terms of Service", to: "#" },
                { title: "Privacy Policy", to: "#" }
              ]
            }
          ].map((section, index) => (
            <div key={index} className="relative z-10">
              <div className="relative">
                {!isMobileDevice && (
                  <div className={`absolute -left-2 -top-2 w-12 h-12 bg-${section.color}-500/10 rounded-full blur-lg animate-pulse animate-duration-5000`}></div>
                )}
                <h3 className="text-lg font-bold text-white mb-6 relative">
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-${section.color}-200 to-${section.color}-400`}>{section.title}</span>
                </h3>
              </div>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.to} 
                      className={`text-gray-300 ${!isMobileDevice ? `hover:text-${section.color}-300 transition-all duration-300` : ''} flex items-center gap-2 group`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full bg-${section.color}-500 opacity-0 ${!isMobileDevice ? 'group-hover:opacity-100 transition-all duration-300' : ''}`}></span>
                      <span className={!isMobileDevice ? 'group-hover:translate-x-1 transition-transform duration-300' : ''}>{link.title}</span>
                      {link.external && <ExternalLink className={`h-3 w-3 ${!isMobileDevice ? 'group-hover:text-indigo-300 transition-colors duration-300' : ''}`} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="relative z-10">
            <div className="relative">
              {!isMobileDevice && (
                <div className="absolute -left-2 -top-2 w-12 h-12 bg-violet-500/10 rounded-full blur-lg animate-pulse animate-duration-5000 animate-delay-3000"></div>
              )}
              <h3 className="text-lg font-bold text-white mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-200 to-violet-400">Contact</span>
              </h3>
            </div>
            <ul className="space-y-5">
              {[
                { icon: MapPin, text: "Bangalore, India", href: "https://maps.google.com" },
                { icon: Phone, text: "+91 (800) 123-4567", href: "tel:+918001234567" },
                { icon: Mail, text: "support@genius.edu", href: "mailto:support@genius.edu" }
              ].map((contact, index) => (
                <li key={index} className="group">
                  <a 
                    href={contact.href} 
                    target={contact.href.startsWith('http') ? "_blank" : undefined}
                    rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-3 text-gray-300 ${!isMobileDevice ? 'hover:text-violet-300 transition-all duration-300' : ''}`}
                  >
                    <div className={`p-2 rounded-lg bg-black/60 text-violet-400 ${!isMobileDevice ? 'group-hover:bg-violet-600/20 transition-all duration-300 backdrop-blur-sm group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]' : ''}`}>
                      <contact.icon className="h-5 w-5" />
                    </div>
                    <span className={!isMobileDevice ? 'group-hover:translate-x-1 transition-transform duration-300' : ''}>{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mt-20 pt-10 border-t border-gray-800/30 relative">
          {!isMobileDevice && (
            <>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl animate-pulse animate-duration-6000"></div>
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-violet-500/20 rounded-full blur-lg animate-pulse animate-duration-4000 animate-delay-2000"></div>
            </>
          )}
          
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
              {!isMobileDevice && (
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-500/5 rounded-full blur-xl animate-pulse animate-duration-5000"></div>
              )}
              <div className="relative flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-lg ${!isMobileDevice ? 'transition-all duration-300' : ''} backdrop-blur-sm`}
                  />
                  {!isMobileDevice && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-violet-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  )}
                </div>
                <button className={`px-6 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl ${!isMobileDevice ? 'hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.2)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transform hover:-translate-y-1' : ''} font-semibold whitespace-nowrap`}>
                  <span className="flex items-center justify-center gap-2">
                    Subscribe
                    <ArrowRight className={`h-4 w-4 ${!isMobileDevice ? 'animate-pulse-slow' : ''}`} />
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
        {!isMobileDevice && (
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-violet-900/5 to-purple-900/5"></div>
        )}
        
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-gray-400 text-sm group ${!isMobileDevice ? 'transition-all duration-300 hover:text-gray-300' : ''}`}>
              © 2025 <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 font-medium">Genius</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {["Terms", "Privacy", "Cookies", "Sitemap"].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`text-gray-400 ${!isMobileDevice ? 'hover:text-indigo-300' : ''} text-sm ${!isMobileDevice ? 'transition-all duration-300' : ''} relative group`}
                >
                  <span>{item}</span>
                  {!isMobileDevice && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}