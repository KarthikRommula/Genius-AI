import { useState } from 'react';
import { Search, Filter, ChevronDown, Clock, Users, Star } from 'lucide-react';
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
];

const CATEGORIES = [
  { id: 'all', label: 'All Courses' },
  { id: 'cs', label: 'Computer Science' },
  { id: 'ai', label: 'AI & ML' }
] as const;

const LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
const DURATIONS = ['All Durations', '8 weeks', '10 weeks', '12 weeks', '14 weeks', '16 weeks'];

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    const matchesDuration = selectedDuration === 'All Durations' || course.duration === selectedDuration;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesDuration && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Explore Our Courses
          </h1>
          <p className="mt-4 text-xl text-indigo-200 text-center max-w-3xl mx-auto">
            Comprehensive learning paths designed for BTech students across various engineering disciplines
          </p>
          
          {/* Search Bar */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-500"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* Advanced Filters */}
            {showFilters && (
              <div className="flex flex-wrap gap-4 w-full mt-4">
                <div className="relative min-w-[160px]">
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full appearance-none bg-gray-100 border-0 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {LEVELS.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
                
                <div className="relative min-w-[160px]">
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full appearance-none bg-gray-100 border-0 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {DURATIONS.map(duration => (
                      <option key={duration} value={duration}>{duration}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredCourses.length} courses found
          </h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
                    course.level === 'Beginner' ? 'bg-green-500/90 text-white' :
                    course.level === 'Intermediate' ? 'bg-yellow-500/90 text-white' :
                    'bg-red-500/90 text-white'
                  }`}>
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center mr-4">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} students
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 mr-3">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{course.instructor}</div>
                      <div className="text-xs text-gray-500">Instructor</div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-lg shadow-sm">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600">
              1
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}