import { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Clock, Users, Star, BookOpen } from 'lucide-react';
import { isSlowDevice, useReducedMotion } from '../utils/deviceDetection';
import { useTheme } from '../context/useTheme';
import type { Course } from '../types';
import './Courses.css'; // Import the CSS file with animations

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

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  
  // Get theme context
  const { theme } = useTheme();

  // Use the proper React Hook at the component level
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setShouldReduceMotion(isSlowDevice() || prefersReducedMotion);
  }, [prefersReducedMotion]);

  // Simplified toggle filter panel with smoother animation
  const toggleFilters = () => {
    if (showFilters) {
      // Simply toggle the state - the CSS transition will handle the animation
      setIsFilterOpen(false);
      // Use a single timeout with appropriate duration
      setTimeout(() => {
        setShowFilters(false);
      }, 300);
    } else {
      // For opening, show the panel immediately
      setShowFilters(true);
      // Then trigger the opening animation in the next frame
      requestAnimationFrame(() => {
        setIsFilterOpen(true);
      });
    }
  };

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    const matchesDuration = selectedDuration === 'All Durations' || course.duration === selectedDuration;
    const matchesSearch = searchQuery === '' || 
                         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesDuration && matchesSearch;
  });

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      {/* Header */}
      <section className="relative overflow-hidden pt-24 pb-16" style={{ background: 'var(--header-bg)' }}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] opacity-10 bg-cover bg-center"></div>
        {/* Static gradient background on mobile, animated on desktop */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center md:text-left max-w-3xl">
            <div className={`inline-flex items-center px-4 py-2 rounded-full ${theme === 'dark' ? 'bg-indigo-500/30 border border-indigo-400/50 text-indigo-100' : 'bg-indigo-500/20 border border-indigo-400/30 text-indigo-700'} backdrop-blur-sm mb-6 ${!shouldReduceMotion ? 'animate-fade-in' : ''}`}>
              <span className={`flex h-2 w-2 rounded-full bg-indigo-300 ${!shouldReduceMotion ? 'animate-pulse' : ''} mr-2`}></span>
              <span className="text-sm font-medium">Expert-led curriculum</span>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'} mb-4 tracking-tight ${!shouldReduceMotion ? 'animate-fade-in animate-delay-100' : ''} drop-shadow-lg`}>Explore Our Courses</h1>
            <p className={`text-xl ${theme === 'dark' ? 'text-indigo-200/80' : 'text-slate-700'} max-w-3xl ${!shouldReduceMotion ? 'animate-fade-in animate-delay-200' : ''}`}>Discover comprehensive courses designed to help you master new skills and advance your career.</p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-4 sm:-mt-8 md:-mt-10 lg:-mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {/* Search Bar - Now completely separate from filter button */}
          <div className="sm:col-span-4 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 hover:opacity-40 blur transition-all duration-300"></div>
            <div className={`relative ${theme === 'dark' ? 'bg-gray-900/90 border border-gray-800/40' : 'bg-white/90 border border-slate-200/60'} backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden h-full`}>
              <div className="relative h-full">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400 transition-colors duration-300">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full h-full py-4 pl-12 pr-4 bg-transparent ${theme === 'dark' ? 'text-white placeholder-gray-400' : 'text-slate-800 placeholder-slate-500'} focus:outline-none focus:ring-0 border-0 text-base`}
                />
                {/* X button removed as requested */}
              </div>
            </div>
          </div>
          
          {/* Filter Button - Now completely separate from search */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 hover:opacity-40 blur transition-all duration-300"></div>
            <button
              onClick={toggleFilters}
              className={`relative w-full h-full flex items-center justify-center px-5 py-4 ${showFilters ? 'bg-indigo-700' : 'bg-indigo-600 hover:bg-indigo-700'} ${theme === 'dark' ? 'border border-indigo-700/50' : 'border border-indigo-500/30'} text-white transition-all duration-300 rounded-2xl shadow-xl overflow-hidden group`}
              aria-expanded={showFilters}
              aria-controls="filters-panel"
            >
              <span className="absolute inset-0 w-full h-full bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="flex items-center relative z-10">
                <Filter className={`h-5 w-5 mr-2 ${showFilters ? 'animate-float' : ''}`} />
                <span className="font-medium">{showFilters ? 'Hide Filters' : 'Filters'}</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Improved Filter Panel with Smooth Animation */}
      <div 
        id="filters-panel" 
        className={`${theme === 'dark' ? 'bg-gray-900/95 border-t border-gray-800/40' : 'bg-slate-100/95 border-t border-slate-200/60'} backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${showFilters ? 'border-b border-indigo-500/10' : 'border-b-0'}`}
        style={{ 
          maxHeight: isFilterOpen ? '800px' : '0px',
          opacity: isFilterOpen ? 1 : 0,
          visibility: showFilters ? 'visible' : 'hidden'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-30 blur-sm animate-pulse-glow"></div>
              <h3 className="relative text-xl font-bold text-white flex items-center bg-gray-900/70 px-4 py-2 rounded-lg border border-indigo-500/40 shadow-md shadow-indigo-500/10">
                <Filter className="h-5 w-5 mr-2 text-indigo-400" />
                Filter Courses
              </h3>
            </div>
            <button 
              onClick={toggleFilters}
              className="p-2.5 rounded-full hover:bg-gray-800/70 text-gray-400 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transform hover:scale-105 active:scale-95 filter-button relative overflow-hidden group"
              aria-label="Close filters"
            >
              <span className="absolute inset-0 w-full h-full bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category Filter */}
            <div className={`space-y-4 transition-all duration-300 delay-100 ${isFilterOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}>
              <label className="block text-sm font-medium text-indigo-300 uppercase tracking-wider">Category</label>
              <div className="flex flex-wrap gap-2 transform transition-all duration-300">
                {['all', 'cs', 'ai'].map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:shadow hover:scale-105 active:scale-95 hover:border-indigo-500/30'
                    }`}
                  >
                    {category === 'all' ? 'All Courses' : category === 'cs' ? 'Computer Science' : 'AI & ML'}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Level Filter */}
            <div className={`space-y-4 transition-all duration-300 delay-200 ${isFilterOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}>
              <label className="block text-sm font-medium text-indigo-300 uppercase tracking-wider">Experience Level</label>
              <div className="relative transform transition-all duration-300 hover:scale-[1.02] select-container">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-20 blur-sm transition-opacity duration-300 hover:opacity-40"></div>
                <div className="relative group">
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full appearance-none bg-gray-900/90 border border-gray-700/50 text-white rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500/50 shadow-sm hover:shadow-md hover:shadow-indigo-500/10 cursor-pointer"
                  >
                    {LEVELS.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400 pointer-events-none transition-all duration-300 chevron-icon" />
                </div>
              </div>
            </div>

            {/* Duration Filter */}
            <div className={`space-y-4 transition-all duration-300 delay-300 ${isFilterOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}>
              <label className="block text-sm font-medium text-indigo-300 uppercase tracking-wider">Course Duration</label>
              <div className="relative transform transition-all duration-300 hover:scale-[1.02] select-container">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-20 blur-sm transition-opacity duration-300 hover:opacity-40"></div>
                <div className="relative group">
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full appearance-none bg-gray-900/90 border border-gray-700/50 text-white rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:border-indigo-500/50 shadow-sm hover:shadow-md hover:shadow-indigo-500/10 cursor-pointer"
                  >
                    {DURATIONS.map(duration => (
                      <option key={duration} value={duration}>{duration}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400 pointer-events-none transition-all duration-300 chevron-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="mb-8 flex items-center">
          <BookOpen className="h-6 w-6 text-indigo-400 mr-2" />
          <h2 className="text-2xl font-bold text-white">Found {filteredCourses.length} courses</h2>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
              <div className={`group relative rounded-xl overflow-hidden ${theme === 'dark' ? 'border border-gray-800/40 bg-gray-900/30 hover:border-gray-700/60' : 'border border-slate-200/60 bg-white hover:border-slate-300'} backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:shadow-indigo-500/10`}>
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