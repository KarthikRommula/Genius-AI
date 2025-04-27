import { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Clock, Users, Star, BookOpen } from 'lucide-react';
import { isMobile, isSlowDevice, useReducedMotion } from '../utils/deviceDetection';
import type { Course } from '../types';

const COURSES: Course[] = [
  {
    id: 'cs-1',
    title: 'Data Structures & Algorithms',
    description: 'Master essential data structures and algorithms with practical implementations.',
    instructor: 'Dr. Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    duration: '12 weeks',
    level: 'Advanced',
    category: 'cs',
    rating: 4.8,
    students: 1200
  },
  {
    id: 'cs-2',
    title: 'Database Management Systems',
    description: 'Learn database design, SQL, and advanced database management techniques.',
    instructor: 'Prof. David Miller',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
    duration: '10 weeks',
    level: 'Intermediate',
    category: 'cs',
    rating: 4.7,
    students: 980
  },
  {
    id: 'ai-1',
    title: 'Machine Learning Fundamentals',
    description: 'Master machine learning algorithms, data preprocessing, and model evaluation.',
    instructor: 'Prof. Alan Turing',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    duration: '12 weeks',
    level: 'Advanced',
    category: 'ai',
    rating: 4.9,
    students: 1500
  },
  {
    id: 'cs-3',
    title: 'Web Development Bootcamp',
    description: 'Build modern web applications with React, Node.js, and MongoDB.',
    instructor: 'Emily Rodriguez',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    duration: '16 weeks',
    level: 'Beginner',
    category: 'cs',
    rating: 4.6,
    students: 2100
  },
  {
    id: 'ai-2',
    title: 'Deep Learning & Neural Networks',
    description: 'Explore advanced deep learning architectures and neural network implementations.',
    instructor: 'Dr. Yann Chen',
    thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b',
    duration: '14 weeks',
    level: 'Advanced',
    category: 'ai',
    rating: 4.8,
    students: 850
  },
  {
    id: 'cs-4',
    title: 'Cloud Computing & DevOps',
    description: 'Master cloud platforms, containerization, and CI/CD pipelines.',
    instructor: 'Alex Thompson',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    duration: '10 weeks',
    level: 'Intermediate',
    category: 'cs',
    rating: 4.7,
    students: 1350
  }
] as const;

const LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const DURATIONS = ['All Durations', '8 weeks', '10 weeks', '12 weeks', '14 weeks', '16 weeks'];

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Use the proper React Hook at the component level
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMobileDevice(isMobile());
    setShouldReduceMotion(isSlowDevice() || prefersReducedMotion);
  }, [prefersReducedMotion]);

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    const matchesDuration = selectedDuration === 'All Durations' || course.duration === selectedDuration;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesDuration && matchesSearch;
  });

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      {/* Header */}
      <section className="relative overflow-hidden pt-24 pb-16" style={{ background: 'var(--header-bg)' }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] opacity-10 bg-cover bg-center"></div>
        {/* Static gradient background on mobile, animated on desktop */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-violet-950/5 to-transparent pointer-events-none"></div>

        {/* Simplified blobs for mobile */}
        {!isMobileDevice && !shouldReduceMotion && (
          <>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animate-delay-400"></div>
          </>
        )}

        <div className="absolute inset-0 bg-[url('/images/courses-bg.webp')] opacity-10 bg-cover bg-center" aria-hidden="true" role="presentation"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center md:text-left max-w-3xl">
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/30 backdrop-blur-sm border border-indigo-400/50 text-indigo-100 mb-6 ${!shouldReduceMotion ? 'animate-fade-in' : ''}`}>
              <span className={`flex h-2 w-2 rounded-full bg-indigo-300 ${!shouldReduceMotion ? 'animate-pulse' : ''} mr-2`}></span>
              <span className="text-sm font-medium">Expert-led curriculum</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight ${!shouldReduceMotion ? 'animate-fade-in animate-delay-100' : ''} drop-shadow-lg`}>Explore Our Courses</h1>
            <p className={`text-xl text-indigo-200/80 max-w-3xl ${!shouldReduceMotion ? 'animate-fade-in animate-delay-200' : ''}`}>Discover comprehensive courses designed to help you master new skills and advance your career.</p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 relative z-10">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
          <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-800/40">
            <div className="flex flex-col sm:flex-row sm:items-stretch">
              <div className="relative flex-grow group/input">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400 group-focus-within/input:text-indigo-300 transition-colors duration-300">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-12 py-5 bg-gray-900/80 text-white focus:outline-none focus:bg-gray-900 placeholder-gray-400 border-b sm:border-b-0 sm:border-r border-gray-800/40 transition-all duration-300"
                />
                {searchQuery && (
                  <button 
                    className="absolute right-5 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600/20 transition-all duration-300"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-6 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium sm:w-auto w-full group/btn relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-pulse-slow transition-opacity"></span>
                <span className="relative flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-gray-900/90 backdrop-blur-lg border-y border-gray-800/30 shadow-xl mt-6 transition-all duration-500 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Filter className="h-5 w-5 mr-2 text-indigo-400" />
                Filter Courses
              </h3>
              <button 
                onClick={() => setShowFilters(false)}
                className="p-2 rounded-full hover:bg-gray-800/70 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Close filters"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-indigo-300">Category</label>
                <div className="flex flex-wrap gap-2">
                  {['all', 'cs', 'ai'].map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:shadow'
                      }`}
                    >
                      {category === 'all' ? 'All Courses' : category === 'cs' ? 'Computer Science' : 'AI & ML'}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Level Filter */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-indigo-300">Experience Level</label>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-20 blur-sm"></div>
                  <div className="relative">
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="w-full appearance-none bg-gray-900/90 border border-gray-700/50 text-white rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    >
                      {LEVELS.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Duration Filter */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-indigo-300">Course Duration</label>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-20 blur-sm"></div>
                  <div className="relative">
                    <select
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                      className="w-full appearance-none bg-gray-900/90 border border-gray-700/50 text-white rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    >
                      {DURATIONS.map(duration => (
                        <option key={duration} value={duration}>{duration}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Course listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results count */}
        <div className="mb-8 flex items-center">
          <BookOpen className="h-6 w-6 text-indigo-400 mr-2" />
          <h2 className="text-2xl font-bold text-white">Found {filteredCourses.length} courses</h2>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
              <div className="relative bg-gray-900/50 border border-gray-800/30 rounded-xl overflow-hidden group-hover:shadow-xl group-hover:shadow-indigo-900/20 transition-all duration-300 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
                      course.level === 'Beginner' ? 'bg-green-500/80 text-white' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/80 text-white' :
                      'bg-red-500/80 text-white'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-black/60 backdrop-blur-md rounded-full px-2 py-1">
                      <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium text-white ml-1">{course.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Clock className="h-4 w-4 mr-1 text-indigo-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-indigo-400" />
                      {course.students.toLocaleString()} students
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/30">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600/80 to-purple-600/80 flex items-center justify-center text-sm font-medium text-white mr-3 shadow-lg shadow-indigo-900/20">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-200">{course.instructor}</div>
                        <div className="text-xs text-gray-500">Instructor</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 shadow-lg group-hover:shadow-indigo-900/30">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center px-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
            <nav className="relative inline-flex flex-wrap justify-center rounded-full overflow-hidden shadow-xl border border-gray-800/40 backdrop-blur-sm w-full sm:w-auto bg-gray-900/80">
              <button className="px-4 sm:px-5 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-all duration-300 flex items-center order-1 relative group/btn">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-indigo-400 group-hover/btn:text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </button>
              
              <div className="flex">
                <button className="w-10 sm:w-12 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 order-2 relative overflow-hidden group/active">
                  <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover/active:opacity-100 transition-opacity"></span>
                  <span className="relative">1</span>
                </button>
                
                <button className="w-10 sm:w-12 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-all duration-300 order-3 relative group/num">
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover/num:opacity-100 transition-opacity"></span>
                  <span className="relative">2</span>
                </button>
                
                <button className="w-10 sm:w-12 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-all duration-300 order-4 hidden sm:block relative group/num">
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover/num:opacity-100 transition-opacity"></span>
                  <span className="relative">3</span>
                </button>
              </div>
              
              <button className="px-4 sm:px-5 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-all duration-300 flex items-center order-5 relative group/btn">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 text-indigo-400 group-hover/btn:text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}