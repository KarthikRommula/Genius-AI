import { BookOpen, Code, Video, Users, Award, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED_COURSES = [
  {
    id: '1',
    title: 'Advanced Data Structures & Algorithms',
    description: 'Master complex algorithms and data structures with hands-on practice and real-world applications.',
    instructor: 'Dr. Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    duration: '12 weeks',
    level: 'Advanced',
    students: 1200,
    rating: 4.9,
    price: '$199'
  },
  {
    id: '2',
    title: 'Machine Learning & Neural Networks',
    description: 'Deep dive into ML algorithms, neural networks, and practical AI applications.',
    instructor: 'Prof. Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1527430253228-e93688616381',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 950,
    rating: 4.8,
    price: '$179'
  },
  {
    id: '3',
    title: 'Modern Full Stack Development',
    description: 'Build scalable web applications using cutting-edge technologies and best practices.',
    instructor: 'Emily Rodriguez',
    thumbnail: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8',
    duration: '14 weeks',
    level: 'Intermediate',
    students: 1500,
    rating: 4.7,
    price: '$249'
  }
];

const STATS = [
  { label: 'Active Students', value: '50K+' },
  { label: 'Expert Instructors', value: '200+' },
  { label: 'Course Completion', value: '94%' },
  { label: 'Student Satisfaction', value: '4.8/5' },
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse mr-2"></span>
              Trusted by 50,000+ BTech students worldwide
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mt-2">
                Engineering Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Access world-class engineering education with interactive courses, AI-powered learning, and a global community of peers and mentors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold text-lg hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="relative bg-black/20 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-indigo-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
              A Revolutionary Learning Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with proven pedagogical methods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 blur-3xl group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Video className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">HD Video Lectures</h3>
                <p className="text-gray-600 leading-relaxed">
                  Crystal-clear explanations from world-class professors with interactive transcripts
                </p>
              </div>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 blur-3xl group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Live Coding Labs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Interactive coding environments with AI-powered feedback and assistance
                </p>
              </div>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 blur-3xl group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalized learning paths that adapt to your pace and style
                </p>
              </div>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 blur-3xl group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Peer Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Study groups, discussion forums, and real-time collaboration tools
                </p>
              </div>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 blur-3xl group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Industry Certifications</h3>
                <p className="text-gray-600 leading-relaxed">
                  Earn recognized certificates to showcase your expertise
                </p>
              </div>
            </div>
            
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50 blur-3xl group-hover:opacity-75 transition-opacity"></div>
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rich Resources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive study materials, notes, and project templates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Popular Courses</h2>
              <p className="text-xl text-gray-600">Start your learning journey with our most sought-after programs</p>
            </div>
            <Link 
              to="/courses" 
              className="hidden md:inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group"
            >
              View All Courses 
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_COURSES.map(course => (
              <div key={course.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-indigo-600 text-sm font-medium rounded-full">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium rounded-full">
                      {course.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 mr-2">
                        {course.instructor.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-600">{course.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-indigo-600">{course.price}</div>
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link 
              to="/courses" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group"
            >
              View All Courses 
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied learners who've transformed their careers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6">
                "Genius transformed my understanding of complex algorithms. The interactive labs make learning both fun and effective."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium mr-4">
                  RS
                </div>
                <div>
                  <div className="font-semibold">Rahul Sharma</div>
                  <div className="text-sm text-gray-600">CS Student, IIT Delhi</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6">
                "The AI-powered feedback helped me identify gaps in my knowledge. I've improved drastically in just 3 months."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium mr-4">
                  PK
                </div>
                <div>
                  <div className="font-semibold">Priya Kapoor</div>
                  <div className="text-sm text-gray-600">ECE Student, BITS Pilani</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="text-yellow-400 text-xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-6">
                "The community support is amazing. I found study partners and mentors who helped me excel in my courses."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium mr-4">
                  AV
                </div>
                <div>
                  <div className="font-semibold">Amit Verma</div>
                  <div className="text-sm text-gray-600">ME Student, NIT Trichy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join 50,000+ students who are already mastering engineering with Genius
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold text-lg hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-indigo-500/20 backdrop-blur-sm text-white font-semibold text-lg hover:bg-indigo-500/30 transition-all transform hover:scale-105 shadow-lg"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}