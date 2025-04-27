import { useEffect, useState } from 'react';
import { BookOpen, Code, Video, Users, Award, Brain, ArrowRight, Star, Check, Target, Medal, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED_COURSES = [
  {
    id: '1',
    title: 'Advanced Data Structures & Algorithms',
    description: 'Master complex algorithms and data structures with hands-on practice and real-world applications.',
    instructor: 'Dr. Sarah Johnson',
    thumbnail: '/images/PF1.jpg',
    duration: '12 weeks',
    level: 'Advanced',
    students: 1200,
    rating: 4.9,
    price: '$199',
    category: 'Computer Science',
    tags: ['Algorithms', 'Data Structures', 'Problem Solving'],
    features: ['24/7 Support', 'Certificate', 'Live Sessions']
  },
  {
    id: '2',
    title: 'Machine Learning & Neural Networks',
    description: 'Deep dive into ML algorithms, neural networks, and practical AI applications.',
    instructor: 'Prof. Michael Chen',
    thumbnail: '/images/PF2.jpg',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 950,
    rating: 4.8,
    price: '$179',
    category: 'Artificial Intelligence',
    tags: ['Machine Learning', 'AI', 'Neural Networks'],
    features: ['Projects', 'Mentorship', 'Career Guidance']
  },
  {
    id: '3',
    title: 'Modern Full Stack Development',
    description: 'Build scalable web applications using cutting-edge technologies and best practices.',
    instructor: 'Emily Rodriguez',
    thumbnail: '/images/PF1.jpg',
    duration: '14 weeks',
    level: 'Intermediate',
    students: 1500,
    rating: 4.7,
    price: '$249',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB'],
    features: ['Portfolio Projects', 'Code Reviews', 'Job Prep']
  }
];

const STATS = [
  { label: 'Active Students', value: '50K+', icon: Users },
  { label: 'Expert Instructors', value: '200+', icon: Star },
  { label: 'Course Completion', value: '94%', icon: Target },
  { label: 'Student Satisfaction', value: '4.8/5', icon: Medal },
];

export function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['hero']));
  
  // Handle initial fade-in animation
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    // Mark component as loaded after initial animation
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    return () => {
      document.body.classList.remove('animate-fade-in');
      clearTimeout(timer);
    };
  }, []);
  
  // Intersection Observer for lazy loading sections
  useEffect(() => {
    if (!isLoaded) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id));
        }
      });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      sectionObserver.observe(section);
    });
    
    return () => sectionObserver.disconnect();
  }, [isLoaded]);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-black via-gray-900/95 to-gray-900/90 overflow-hidden">
        {/* Skip to main content link for accessibility */}
        <a href="#courses" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md">
          Skip to main content
        </a>
        {/* Subtle color accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-violet-950/5 to-transparent pointer-events-none"></div>
        {/* Animated background blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animate-delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animate-delay-400"></div>
        
        <div className="absolute inset-0 bg-[url('/images/HERO.avif')] opacity-10 bg-cover bg-center" aria-hidden="true" role="presentation"></div>
        
        {/* Subtle SVG pattern for extra depth */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#fff" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20 md:py-32 flex flex-col items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/30 backdrop-blur-sm border border-indigo-400/50 text-indigo-100 mb-8 animate-fade-in sm:mt-10">
              <span className="flex h-2 w-2 rounded-full bg-indigo-300 animate-pulse mr-2"></span>
              Trusted by 50,000+ BTech students worldwide
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight animate-fade-in animate-delay-100 drop-shadow-lg">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mt-2 animate-pulse-slow leading-[1.2] py-1">
                Engineering Journey
              </span>
            </h1>
            <div className="flex justify-center mt-8 mb-3 animate-fade-in animate-delay-200">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white font-semibold shadow-lg backdrop-blur-sm text-base md:text-lg animate-float">
                Empowering Future Engineers
              </span>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animate-delay-200">
              Access world-class engineering education with interactive courses, AI-powered learning, and a global community of peers and mentors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animate-delay-300">
              <Link
                to="/courses"
                className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
                aria-label="Explore all available courses"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl transition-all duration-300"
                aria-label="Start your free trial"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="relative bg-gradient-to-r from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl border-y border-gray-800/30 shadow-lg" aria-labelledby="stats-bar-heading">
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-glow"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-glow animation-delay-700"></div>
            <svg width="100%" height="100%" className="w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="stats-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.5" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stats-dots)" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
            <h2 id="stats-bar-heading" className="text-3xl font-bold mb-4 text-white">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-8 lg:gap-x-12">
              {STATS.map((stat, index) => (
                <div key={index} className={`text-center group animate-count-up-delay-${index}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 mb-4 group-hover:from-indigo-500/30 group-hover:to-violet-500/20 transition-all duration-300 backdrop-blur-sm border border-indigo-500/10 group-hover:border-indigo-500/30 shadow-lg group-hover:shadow-indigo-500/10">
                    <stat.icon className="w-7 h-7 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100 mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm sm:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden" aria-labelledby="features-heading">
        {/* Background decorative elements */}
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-2000"></div>
        <div className="absolute bottom-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        
        {/* Subtle SVG pattern for extra depth */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="features-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#fff" opacity="0.05" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#features-dots)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 id="features-heading" className="text-4xl font-bold mb-6 text-white">A Revolutionary Learning Experience</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Our platform combines cutting-edge technology with proven pedagogical methods</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HD Video Lectures */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/40 backdrop-blur-xl border border-gray-800/30 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_-15px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[24px] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 -z-10"></div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Video className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">HD Video Lectures</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Crystal-clear explanations from world-class professors with interactive transcripts</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-blue-400 mr-3" />
                    4K quality videos
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-blue-400 mr-3" />
                    Downloadable content
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-blue-400 mr-3" />
                    Closed captions
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Live Coding Labs */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/40 backdrop-blur-xl border border-gray-800/30 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_-15px_rgba(168,85,247,0.2)] hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-[24px] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 -z-10"></div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-3 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Code className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Live Coding Labs</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Interactive coding environments with AI-powered feedback and assistance</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    Real-time compilation
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    AI code analysis
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    Instant feedback
                  </li>
                </ul>
              </div>
            </div>

            {/* AI-Powered Learning */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/40 backdrop-blur-xl border border-gray-800/30 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_-15px_rgba(6,182,212,0.2)] hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-[24px] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 -z-10"></div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Brain className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Learning</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Personalized learning paths that adapt to your pace and style</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                    Adaptive learning
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                    Smart recommendations
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-cyan-400 mr-3" />
                    Progress tracking
                  </li>
                </ul>
              </div>
            </div>

            {/* Peer Collaboration */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/40 backdrop-blur-xl border border-gray-800/30 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_-15px_rgba(34,197,94,0.2)] hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-[24px] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 -z-10"></div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-3 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Users className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Peer Collaboration</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Study groups, discussion forums, and real-time collaboration tools</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Study groups
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Live discussions
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Project collaboration
                  </li>
                </ul>
              </div>
            </div>

            {/* Industry Certifications */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/40 backdrop-blur-xl border border-gray-800/30 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_-15px_rgba(234,179,8,0.2)] hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-[24px] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 -z-10"></div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 p-3 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Award className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Industry Certifications</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Earn recognized certificates to showcase your expertise</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-yellow-400 mr-3" />
                    Verified certificates
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-yellow-400 mr-3" />
                    Industry recognized
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-yellow-400 mr-3" />
                    LinkedIn integration
                  </li>
                </ul>
              </div>
            </div>

            {/* Rich Resources */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/40 backdrop-blur-xl border border-gray-800/30 hover:border-rose-500/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_-15px_rgba(225,29,72,0.2)] hover:shadow-[0_20px_40px_-15px_rgba(225,29,72,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-[24px] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 -z-10"></div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-3 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <BookOpen className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Rich Resources</h3>
                <p className="text-gray-300 leading-relaxed mb-6">Comprehensive study materials, notes, and project templates</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-rose-400 mr-3" />
                    Study materials
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-rose-400 mr-3" />
                    Cheat sheets
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-rose-400 mr-3" />
                    Project templates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Popular Courses Section */}
    <section id="courses" className="py-32 relative bg-gradient-to-br from-black via-gray-950/90 to-black overflow-hidden" aria-labelledby="courses-heading">
      {/* Background decorative elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-4000"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-1000"></div>
      
      {/* Subtle SVG pattern for extra depth */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="courses-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#fff" opacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#courses-dots)" />
        </svg>
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 mb-6">
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Popular Courses</span>
              </div>
              <h2 id="courses-heading" className="text-4xl font-bold mb-4 text-white">Start Your Learning Journey</h2>
              <p className="text-xl text-slate-300">Begin with our most sought-after programs</p>
            </div>
            <Link 
              to="/courses" 
              className="hidden md:inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold group"
              aria-label="View all available courses"
            >
              View All Courses 
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_COURSES.map(course => (
              <div key={course.id} className="group relative rounded-3xl overflow-hidden bg-black/70 backdrop-blur-xl border border-gray-800/50 hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-indigo-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {course.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {course.level}
                      </span>
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      {course.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-indigo-500/10 text-indigo-300 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-300 mb-6 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold mr-3">
                          {course.instructor.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{course.instructor}</div>
                          <div className="text-xs text-slate-400">Instructor</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-medium">{course.rating}</span>
                        <span className="text-slate-400 text-sm">({course.students})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-slate-400 text-sm">
                          <Check className="w-4 h-4 text-indigo-400 mr-1" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text">
                        {course.price}
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-indigo-500/25">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gradient-to-br from-black via-gray-950/95 to-black section-padding relative overflow-hidden" aria-labelledby="testimonials-heading">
          {/* Background decorative elements */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-2000"></div>
          
          {/* Subtle SVG pattern for extra depth */}
          <div className="absolute inset-0 pointer-events-none">
            <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="testimonial-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#fff" opacity="0.05" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#testimonial-dots)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 text-indigo-100 mb-6 animate-fade-in">
                <span className="flex h-2 w-2 rounded-full bg-indigo-300 animate-pulse mr-2"></span>
                <span className="text-sm font-medium">Student Testimonials</span>
              </div>
              <h2 id="testimonials-heading" className="text-4xl font-bold mb-4 text-white">What Our Students Say</h2>
              <p className="text-xl text-indigo-200/80 max-w-2xl mx-auto">Join thousands of satisfied learners who've transformed their careers with our comprehensive courses</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative rounded-3xl p-10 transition-transform duration-500 hover:scale-105 hover:shadow-indigo-500/30 animate-fade-in group overflow-hidden bg-black/60 backdrop-blur-xl border border-indigo-500/20 shadow-xl">
                <div className="absolute -top-8 -left-8 opacity-10 group-hover:opacity-30 transition-all duration-500">
                  <svg width="80" height="80" fill="none"><circle cx="40" cy="40" r="40" fill="url(#grad1)" /><defs><linearGradient id="grad1" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse"><stop stopColor="#6366f1"/><stop offset="1" stopColor="#a21caf"/></linearGradient></defs></svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="flex items-center mb-6 relative z-10">
                  <div className="p-2 rounded-lg bg-indigo-500/20 backdrop-blur-sm mr-3">
                    <svg className="text-indigo-300 w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A5.001 5.001 0 0 0 2 11.5C2 15.09 6.47 17.82 7.17 18.22c.18.1.39.1.57 0C9.53 17.82 14 15.09 14 11.5a5.001 5.001 0 0 0-5.17-5.33zM7 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10-6.83A5.001 5.001 0 0 0 16 11.5c0 3.59 4.47 6.32 5.17 6.72.18.1.39.1.57 0 .7-.4 5.17-3.13 5.17-6.72a5.001 5.001 0 0 0-5.17-5.33zM17 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
                  </div>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-slate-300 mb-8 italic text-lg relative z-10 leading-relaxed">
                  "Genius transformed my understanding of complex algorithms. The interactive labs make learning both fun and effective."
                </p>
                <div className="flex items-center relative z-10">
                  <div className="relative mr-4">
                    <img src="/images/testimonials/user1.webp" alt="Rahul Sharma" className="h-16 w-16 rounded-full object-cover border-4 border-indigo-500/50 shadow-lg group-hover:border-indigo-400 transition-colors duration-300" />
                    <span className="absolute -bottom-1 -right-1 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-slate-800"></span>
                  </div>
                  <div>
                    <div className="font-bold text-indigo-300 text-lg">Rahul Sharma</div>
                    <div className="text-sm text-slate-400">CS Student, IIT Delhi</div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-3xl p-10 transition-transform duration-500 hover:scale-105 hover:shadow-purple-500/30 animate-fade-in animate-delay-150 group overflow-hidden bg-black/60 backdrop-blur-xl border border-purple-500/20 shadow-xl">
                <div className="absolute -top-8 -right-8 opacity-10 group-hover:opacity-30 transition-all duration-500">
                  <svg width="80" height="80" fill="none"><circle cx="40" cy="40" r="40" fill="url(#grad2)" /><defs><linearGradient id="grad2" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse"><stop stopColor="#a21caf"/><stop offset="1" stopColor="#6366f1"/></linearGradient></defs></svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="flex items-center mb-6 relative z-10">
                  <div className="p-2 rounded-lg bg-purple-500/20 backdrop-blur-sm mr-3">
                    <svg className="text-purple-300 w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A5.001 5.001 0 0 0 2 11.5C2 15.09 6.47 17.82 7.17 18.22c.18.1.39.1.57 0C9.53 17.82 14 15.09 14 11.5a5.001 5.001 0 0 0-5.17-5.33zM7 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10-6.83A5.001 5.001 0 0 0 16 11.5c0 3.59 4.47 6.32 5.17 6.72.18.1.39.1.57 0 .7-.4 5.17-3.13 5.17-6.72a5.001 5.001 0 0 0-5.17-5.33zM17 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
                  </div>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-slate-300 mb-8 italic text-lg relative z-10 leading-relaxed">
                  "The AI-powered feedback helped me identify gaps in my knowledge. I've improved drastically in just 3 months."
                </p>
                <div className="flex items-center relative z-10">
                  <div className="relative mr-4">
                    <img src="/images/testimonials/user2.webp" alt="Priya Kapoor" className="h-16 w-16 rounded-full object-cover border-4 border-purple-500/50 shadow-lg group-hover:border-purple-400 transition-colors duration-300" />
                    <span className="absolute -bottom-1 -right-1 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-slate-800"></span>
                  </div>
                  <div>
                    <div className="font-bold text-purple-300 text-lg">Priya Kapoor</div>
                    <div className="text-sm text-slate-400">ECE Student, BITS Pilani</div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-3xl p-10 transition-transform duration-500 hover:scale-105 hover:shadow-pink-500/30 animate-fade-in animate-delay-300 group overflow-hidden bg-black/60 backdrop-blur-xl border border-pink-500/20 shadow-xl">
                <div className="absolute -bottom-8 -left-8 opacity-10 group-hover:opacity-30 transition-all duration-500">
                  <svg width="80" height="80" fill="none"><circle cx="40" cy="40" r="40" fill="url(#grad3)" /><defs><linearGradient id="grad3" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse"><stop stopColor="#ec4899"/><stop offset="1" stopColor="#6366f1"/></linearGradient></defs></svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="flex items-center mb-6 relative z-10">
                  <div className="p-2 rounded-lg bg-pink-500/20 backdrop-blur-sm mr-3">
                    <svg className="text-pink-300 w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A5.001 5.001 0 0 0 2 11.5C2 15.09 6.47 17.82 7.17 18.22c.18.1.39.1.57 0C9.53 17.82 14 15.09 14 11.5a5.001 5.001 0 0 0-5.17-5.33zM7 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10-6.83A5.001 5.001 0 0 0 16 11.5c0 3.59 4.47 6.32 5.17 6.72.18.1.39.1.57 0 .7-.4 5.17-3.13 5.17-6.72a5.001 5.001 0 0 0-5.17-5.33zM17 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
                  </div>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-slate-300 mb-8 italic text-lg relative z-10 leading-relaxed">
                  "The community support is amazing. I found study partners and mentors who helped me excel in my courses."
                </p>
                <div className="flex items-center relative z-10">
                  <div className="relative mr-4">
                    <img src="/images/testimonials/user3.webp" alt="Amit Verma" className="h-16 w-16 rounded-full object-cover border-4 border-pink-500/50 shadow-lg group-hover:border-pink-400 transition-colors duration-300" />
                    <span className="absolute -bottom-1 -right-1 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-slate-800"></span>
                  </div>
                  <div>
                    <div className="font-bold text-pink-300 text-lg">Amit Verma</div>
                    <div className="text-sm text-slate-400">ME Student, NIT Trichy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* CTA Section */}
      <section id="cta" className="py-20 md:py-28 bg-gradient-to-br from-black via-gray-950/95 to-black relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Subtle color accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-violet-950/5 to-transparent pointer-events-none" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-[url('/images/cta-background.webp')] opacity-10 bg-cover bg-center" aria-hidden="true"></div>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#fff" opacity="0.05" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            {visibleSections.has('cta') && (
              <>
                <div className="inline-flex items-center px-4 md:px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-indigo-400/30 text-indigo-100 mb-6 animate-fade-in">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 8v4m8-8h-4m-8 0H4" /></svg>
                  <span className="font-medium tracking-wide text-sm md:text-base">Ready to unlock your potential?</span>
                </div>
                <h2 id="cta-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight animate-fade-in animate-delay-100 drop-shadow-xl">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 md:mb-10 animate-fade-in animate-delay-200">
                  Join 50,000+ students mastering engineering with Genius. Take the first step toward your dream career today!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 animate-fade-in animate-delay-300">
                  <Link
                    to="/register"
                    className="px-8 md:px-10 py-4 md:py-5 bg-white text-indigo-700 rounded-xl text-base md:text-lg font-bold hover:bg-indigo-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                    aria-label="Start your free trial"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    to="/courses"
                    className="px-8 md:px-10 py-4 md:py-5 bg-transparent text-white border-2 border-white rounded-xl text-base md:text-lg font-bold hover:bg-white/10 transition-all duration-300"
                    aria-label="Browse all courses"
                  >
                    Browse Courses
                  </Link>
                </div>
              </>
            )}
          </div>  
        </div>
      </section>
    </main>
  );
}