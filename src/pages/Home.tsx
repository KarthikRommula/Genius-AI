import { useEffect, useState } from 'react';
import { BookOpen, Code, Video, Users, Award, Brain, ArrowRight, Star, Check, Target, Medal, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { isMobile, isSlowDevice, useReducedMotion } from '../utils/deviceDetection';

const FEATURED_COURSES = [
  {
    id: '1',
    title: 'Advanced Data Structures & Algorithms',
    description: 'Master complex algorithms and data structures with hands-on practice and real-world applications.',
    instructor: 'Dr. Sarah Johnson',
    thumbnail: '/images/PF1.webp',
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
    thumbnail: '/images/PF2.webp',
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
    thumbnail: '/images/PF1.webp',
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
  // State for controlling animations and device-specific behavior
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  
  // Use the proper React Hook at the component level
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    setIsMobileDevice(isMobile());
    setShouldReduceMotion(isSlowDevice() || prefersReducedMotion);
    // Initialize component based on device capabilities
  }, [prefersReducedMotion]);
  
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-black via-gray-900/95 to-gray-900/90 overflow-hidden">
        <a href="#courses" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md">
          Skip to main content
        </a>
        
        {/* Static gradient background on mobile, animated on desktop */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-violet-950/5 to-transparent pointer-events-none"></div>
        
        {/* Simplified blobs for mobile */}
        {!isMobileDevice && !shouldReduceMotion && (
          <>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animate-delay-200"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animate-delay-400"></div>
          </>
        )}
        
        <div className="absolute inset-0 bg-[url('/images/HERO.avif')] opacity-10 bg-cover bg-center" aria-hidden="true" role="presentation"></div>
        
        {/* Remove pattern on mobile */}
        {!isMobileDevice && (
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
        )}
        
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20 md:py-32 flex flex-col items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/30 backdrop-blur-sm border border-indigo-400/50 text-indigo-100 mb-8 ${!shouldReduceMotion ? 'animate-fade-in' : ''} sm:mt-10`}>
              <span className={`flex h-2 w-2 rounded-full bg-indigo-300 ${!shouldReduceMotion ? 'animate-pulse' : ''} mr-2`}></span>
              Trusted by 50,000+ BTech students worldwide
            </div>
            <h1 className={`text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight ${!shouldReduceMotion ? 'animate-fade-in animate-delay-100' : ''} drop-shadow-lg`}>
              Transform Your
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mt-2 ${!shouldReduceMotion ? 'animate-pulse-slow' : ''} leading-[1.2] py-1`}>
                Engineering Journey
              </span>
            </h1>
            <div className={`flex justify-center mt-8 mb-3 ${!shouldReduceMotion ? 'animate-fade-in animate-delay-200' : ''}`}>
              <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-white font-semibold shadow-lg backdrop-blur-sm text-base md:text-lg ${!shouldReduceMotion ? 'animate-float' : ''}`}>
                Empowering Future Engineers
              </span>
            </div>
            <p className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed ${!shouldReduceMotion ? 'animate-fade-in animate-delay-200' : ''}`}>
              Access world-class engineering education with interactive courses, AI-powered learning, and a global community of peers and mentors.
            </p>
            <div className={`flex flex-col sm:flex-row justify-center gap-6 ${!shouldReduceMotion ? 'animate-fade-in-up animate-delay-300' : ''}`}>
              <Link
                to="/courses"
                className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
                aria-label="Explore all available courses"
              >
                Explore Courses
                <ArrowRight className={`ml-2 h-5 w-5 ${!shouldReduceMotion ? 'group-hover:translate-x-1 transition-transform' : ''}`} />
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
        
        {/* Stats Bar - simplified for mobile */}
        <div className="relative bg-gradient-to-r from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl border-y border-gray-800/30 shadow-lg" aria-labelledby="stats-bar-heading">
          {!isMobileDevice && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-glow"></div>
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse-glow animation-delay-700"></div>
            </div>
          )}
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
            <h2 id="stats-bar-heading" className="text-3xl font-bold mb-4 text-white">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-8 lg:gap-x-12">
              {STATS.map((stat, index) => (
                <div key={index} className={`text-center group ${!shouldReduceMotion ? (index === 0 ? 'animate-count-up-delay-0' : index === 1 ? 'animate-count-up-delay-1' : index === 2 ? 'animate-count-up-delay-2' : 'animate-count-up-delay-3') : ''}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 mb-4 ${!isMobileDevice ? 'group-hover:from-indigo-500/30 group-hover:to-violet-500/20 transition-all duration-300' : ''} backdrop-blur-sm border border-indigo-500/10 shadow-lg`}>
                    <stat.icon className={`w-7 h-7 text-indigo-400 ${!isMobileDevice ? 'group-hover:text-indigo-300 transition-colors duration-300' : ''}`} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100 mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm sm:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - optimized for mobile */}
      <section id="features" className="py-32 relative bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden" aria-labelledby="features-heading">
        {!isMobileDevice && (
          <>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-2000"></div>
            <div className="absolute bottom-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
          </>
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 id="features-heading" className="text-4xl font-bold mb-6 text-white">A Revolutionary Learning Experience</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Our platform combines cutting-edge technology with proven pedagogical methods</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: 'HD Video Lectures',
                description: 'Crystal-clear explanations from world-class professors with interactive transcripts',
                features: ['4K quality videos', 'Downloadable content', 'Closed captions'],
                gradient: 'from-blue-500 to-indigo-600',
                bgHover: 'from-blue-500/10 to-purple-500/10',
                iconColor: 'text-blue-400'
              },
              {
                icon: Code,
                title: 'Live Coding Labs',
                description: 'Interactive coding environments with AI-powered feedback and assistance',
                features: ['Real-time compilation', 'AI code analysis', 'Instant feedback'],
                gradient: 'from-purple-500 to-pink-600',
                bgHover: 'from-purple-500/10 to-pink-500/10',
                iconColor: 'text-purple-400'
              },
              {
                icon: Brain,
                title: 'AI-Powered Learning',
                description: 'Personalized learning paths that adapt to your pace and style',
                features: ['Adaptive learning', 'Smart recommendations', 'Progress tracking'],
                gradient: 'from-cyan-500 to-blue-600',
                bgHover: 'from-cyan-500/10 to-blue-500/10',
                iconColor: 'text-cyan-400'
              },
              {
                icon: Users,
                title: 'Peer Collaboration',
                description: 'Study groups, discussion forums, and real-time collaboration tools',
                features: ['Study groups', 'Live discussions', 'Project collaboration'],
                gradient: 'from-green-500 to-emerald-600',
                bgHover: 'from-green-500/10 to-emerald-500/10',
                iconColor: 'text-green-400'
              },
              {
                icon: Award,
                title: 'Industry Certifications',
                description: 'Earn recognized certificates to showcase your expertise',
                features: ['Verified certificates', 'Industry recognized', 'LinkedIn integration'],
                gradient: 'from-yellow-500 to-orange-600',
                bgHover: 'from-yellow-500/10 to-orange-500/10',
                iconColor: 'text-yellow-400'
              },
              {
                icon: BookOpen,
                title: 'Rich Resources',
                description: 'Comprehensive study materials, notes, and project templates',
                features: ['Study materials', 'Cheat sheets', 'Project templates'],
                gradient: 'from-rose-500 to-pink-600',
                bgHover: 'from-rose-500/10 to-pink-500/10',
                iconColor: 'text-rose-400'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`group relative p-8 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/40 backdrop-blur-xl border border-gray-800/30 ${!isMobileDevice ? 'hover:border-blue-500/50 hover:-translate-y-2' : ''} transition-all duration-500`}
              >
                {!isMobileDevice && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgHover} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                )}
                <div className="relative z-10">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 mb-8 ${!isMobileDevice ? 'group-hover:scale-110' : ''} transition-transform duration-500 shadow-lg`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <Check className={`w-5 h-5 ${feature.iconColor} mr-3`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section - optimized */}
      <section id="courses" className="py-32 relative bg-gradient-to-br from-black via-gray-950/90 to-black overflow-hidden" aria-labelledby="courses-heading">
        {!isMobileDevice && (
          <>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-4000"></div>
            <div className="absolute bottom-0 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-1000"></div>
          </>
        )}
        
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
              <ArrowRight className={`ml-2 h-5 w-5 ${!shouldReduceMotion ? 'transform group-hover:translate-x-1 transition-transform' : ''}`} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_COURSES.map(course => (
              <div key={course.id} className={`group relative rounded-3xl overflow-hidden bg-black/70 backdrop-blur-xl border border-gray-800/50 ${!isMobileDevice ? 'hover:border-indigo-500/50' : ''} transition-all duration-300 shadow-lg`}>
                {!isMobileDevice && (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className={`w-full h-full object-cover ${!isMobileDevice ? 'transform group-hover:scale-110 transition-transform duration-700' : ''}`}
                      loading="lazy"
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
                    
                    <h3 className={`text-xl font-bold text-white mb-3 ${!isMobileDevice ? 'group-hover:text-indigo-400' : ''} transition-colors`}>
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
                      <button className={`px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl ${!isMobileDevice ? 'hover:from-indigo-700 hover:to-violet-700' : ''} transition-all duration-300 font-semibold shadow-lg`}>
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

      {/* Testimonials Section - simplified for mobile */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-black via-gray-950/95 to-black section-padding relative overflow-hidden" aria-labelledby="testimonials-heading">
        {!isMobileDevice && (
          <>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
            <div className="absolute bottom-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animate-delay-2000"></div>
          </>
        )}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 text-indigo-100 mb-6 ${!shouldReduceMotion ? 'animate-fade-in' : ''}`}>
              <span className={`flex h-2 w-2 rounded-full bg-indigo-300 ${!shouldReduceMotion ? 'animate-pulse' : ''} mr-2`}></span>
              <span className="text-sm font-medium">Student Testimonials</span>
            </div>
            <h2 id="testimonials-heading" className="text-4xl font-bold mb-4 text-white">What Our Students Say</h2>
            <p className="text-xl text-indigo-200/80 max-w-2xl mx-auto">Join thousands of satisfied learners who've transformed their careers with our comprehensive courses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Genius transformed my understanding of complex algorithms. The interactive labs make learning both fun and effective.",
                name: "Rahul Sharma",
                role: "CS Student, IIT Delhi",
                avatar: "/images/testimonials/user1.webp",
                gradientId: "grad1",
                gradientColors: ["#6366f1", "#a21caf"],
                cardColor: "indigo"
              },
              {
                quote: "The AI-powered feedback helped me identify gaps in my knowledge. I've improved drastically in just 3 months.",
                name: "Priya Kapoor",
                role: "ECE Student, BITS Pilani",
                avatar: "/images/testimonials/user2.webp",
                gradientId: "grad2",
                gradientColors: ["#a21caf", "#6366f1"],
                cardColor: "purple"
              },
              {
                quote: "The community support is amazing. I found study partners and mentors who helped me excel in my courses.",
                name: "Amit Verma",
                role: "ME Student, NIT Trichy",
                avatar: "/images/testimonials/user3.webp",
                gradientId: "grad3",
                gradientColors: ["#ec4899", "#6366f1"],
                cardColor: "pink"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`relative rounded-3xl p-10 ${!isMobileDevice ? 'transition-transform duration-500 hover:scale-105' : ''} group overflow-hidden bg-black/60 backdrop-blur-xl border ${testimonial.cardColor === 'indigo' ? 'border-indigo-500/20' : testimonial.cardColor === 'purple' ? 'border-purple-500/20' : 'border-pink-500/20'} shadow-xl`}
              >
                {!isMobileDevice && (
                  <div className="absolute -top-8 -left-8 opacity-10 group-hover:opacity-30 transition-all duration-500">
                    <svg width="80" height="80" fill="none">
                      <circle cx="40" cy="40" r="40" fill={`url(#${testimonial.gradientId})`} />
                      <defs>
                        <linearGradient id={testimonial.gradientId} x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                          <stop stopColor={testimonial.gradientColors[0]}/>
                          <stop offset="1" stopColor={testimonial.gradientColors[1]}/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                <div className="flex items-center mb-6 relative z-10">
                  <div className={`p-2 rounded-lg ${testimonial.cardColor === 'indigo' ? 'bg-indigo-500/20' : testimonial.cardColor === 'purple' ? 'bg-purple-500/20' : 'bg-pink-500/20'} backdrop-blur-sm mr-3`}>
                    <svg className={`${testimonial.cardColor === 'indigo' ? 'text-indigo-300' : testimonial.cardColor === 'purple' ? 'text-purple-300' : 'text-pink-300'} w-6 h-6`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.17 6.17A5.001 5.001 0 0 0 2 11.5C2 15.09 6.47 17.82 7.17 18.22c.18.1.39.1.57 0C9.53 17.82 14 15.09 14 11.5a5.001 5.001 0 0 0-5.17-5.33zM7 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10-6.83A5.001 5.001 0 0 0 16 11.5c0 3.59 4.47 6.32 5.17 6.72.18.1.39.1.57 0 .7-.4 5.17-3.13 5.17-6.72a5.001 5.001 0 0 0-5.17-5.33zM17 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                  </div>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-slate-300 mb-8 italic text-lg relative z-10 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center relative z-10">
                  <div className="relative mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className={`h-16 w-16 rounded-full object-cover border-4 ${testimonial.cardColor === 'indigo' ? 'border-indigo-500/50' : testimonial.cardColor === 'purple' ? 'border-purple-500/50' : 'border-pink-500/50'} shadow-lg`}
                      loading="lazy"
                    />
                    <span className="absolute -bottom-1 -right-1 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-slate-800"></span>
                  </div>
                  <div>
                    <div className={`font-bold ${testimonial.cardColor === 'indigo' ? 'text-indigo-300' : testimonial.cardColor === 'purple' ? 'text-purple-300' : 'text-pink-300'} text-lg`}>{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - simplified */}
      <section id="cta" className="py-20 md:py-28 bg-gradient-to-br from-black via-gray-950/95 to-black relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-violet-950/5 to-transparent pointer-events-none" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-[url('/images/cta-background.webp')] opacity-10 bg-cover bg-center" aria-hidden="true"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className={`inline-flex items-center px-4 md:px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-indigo-400/30 text-indigo-100 mb-6 ${!shouldReduceMotion ? 'animate-fade-in' : ''}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 8v4m8-8h-4m-8 0H4" />
              </svg>
              <span className="font-medium tracking-wide text-sm md:text-base">Ready to unlock your potential?</span>
            </div>
            <h2 id="cta-heading" className={`text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight ${!shouldReduceMotion ? 'animate-fade-in animate-delay-100' : ''} drop-shadow-xl`}>
              Ready to Start Your Journey?
            </h2>
            <p className={`text-xl md:text-2xl text-indigo-100 mb-8 md:mb-10 ${!shouldReduceMotion ? 'animate-fade-in animate-delay-200' : ''}`}>
              Join 50,000+ students mastering engineering with Genius. Take the first step toward your dream career today!
            </p>
            <div className={`flex flex-col sm:flex-row justify-center gap-4 md:gap-6 ${!shouldReduceMotion ? 'animate-fade-in animate-delay-300' : ''}`}>
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
          </div>  
        </div>
      </section>
    </main>
  );
}