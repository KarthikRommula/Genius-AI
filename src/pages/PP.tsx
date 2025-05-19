import { useState, useEffect } from "react";
import { ArrowLeft, Play, Check, BookOpen, Clock, Users, Award, ChevronLeft } from "lucide-react";
import { useTheme } from "../context/useTheme";
import { Link } from "react-router-dom";

// Define lecture type
interface Lecture {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  isCompleted?: boolean;
}


// Mock data for the Python Programming course
const courseData = {
  id: "cs-5",
  title: "Python Programming",
  instructor: "Dr. Maya Patel",
  description: "Learn Python from basics to advanced concepts with practical projects and applications.",
  thumbnail: "/images/courses/courses1.webp",
  duration: "12 weeks",
  level: "Beginner",
  totalLectures: 48,
  totalHours: 24,
  rating: 4.9,
  students: 2800,
  price: "$99",
  sections: [
    {
      id: "section-1",
      title: "Introduction to Python",
      lectures: [
        {
          id: "lecture-1-1",
          title: "Welcome to Python Programming",
          duration: "10:15",
          videoUrl: "https://example.com/videos/python-intro",
          description: "An overview of the course and introduction to Python programming language.",
          isCompleted: true,
        },
        {
          id: "lecture-1-2",
          title: "Setting Up Your Development Environment",
          duration: "15:30",
          videoUrl: "https://example.com/videos/python-setup",
          description: "Learn how to install Python and set up your development environment for the course.",
          isCompleted: true,
        },
        {
          id: "lecture-1-3",
          title: "Python Syntax Basics",
          duration: "18:45",
          videoUrl: "https://example.com/videos/python-syntax",
          description: "Introduction to Python syntax, variables, and basic data types.",
        },
      ],
    },
    {
      id: "section-2",
      title: "Data Structures in Python",
      lectures: [
        {
          id: "lecture-2-1",
          title: "Lists and Tuples",
          duration: "22:10",
          videoUrl: "https://example.com/videos/python-lists",
          description: "Understanding Python's list and tuple data structures with practical examples.",
        },
        {
          id: "lecture-2-2",
          title: "Dictionaries and Sets",
          duration: "20:35",
          videoUrl: "https://example.com/videos/python-dicts",
          description: "Working with Python dictionaries and sets for efficient data management.",
        },
        {
          id: "lecture-2-3",
          title: "List Comprehensions",
          duration: "16:20",
          videoUrl: "https://example.com/videos/python-list-comp",
          description: "Learn to write concise and efficient code with list comprehensions.",
        },
      ],
    },
    {
      id: "section-3",
      title: "Functions and Modules",
      lectures: [
        {
          id: "lecture-3-1",
          title: "Defining and Using Functions",
          duration: "25:15",
          videoUrl: "https://example.com/videos/python-functions",
          description: "How to define and use functions in Python for code organization and reuse.",
        },
        {
          id: "lecture-3-2",
          title: "Function Arguments and Return Values",
          duration: "19:45",
          videoUrl: "https://example.com/videos/python-func-args",
          description: "Working with function arguments, default parameters, and return values.",
        },
        {
          id: "lecture-3-3",
          title: "Creating and Importing Modules",
          duration: "23:10",
          videoUrl: "https://example.com/videos/python-modules",
          description: "Learn to create your own modules and import standard and third-party libraries.",
        },
      ],
    },
    {
      id: "section-4",
      title: "Object-Oriented Programming",
      lectures: [
        {
          id: "lecture-4-1",
          title: "Classes and Objects",
          duration: "28:30",
          videoUrl: "https://example.com/videos/python-classes",
          description: "Introduction to object-oriented programming concepts with Python classes.",
        },
        {
          id: "lecture-4-2",
          title: "Inheritance and Polymorphism",
          duration: "26:15",
          videoUrl: "https://example.com/videos/python-inheritance",
          description: "Understanding inheritance, method overriding, and polymorphism in Python.",
        },
        {
          id: "lecture-4-3",
          title: "Special Methods and Properties",
          duration: "21:40",
          videoUrl: "https://example.com/videos/python-special-methods",
          description: "Working with special methods, properties, and private attributes in Python classes.",
        },
      ],
    },
  ],
};

export default function PythonProgramming() {
  const { theme } = useTheme();
  const [currentLecture, setCurrentLecture] = useState<Lecture>(courseData.sections[0].lectures[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [completedLectures, setCompletedLectures] = useState<string[]>([]);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Initialize completedLectures from the courseData
  useEffect(() => {
    const initialCompletedLectures = courseData.sections
      .flatMap(section => section.lectures)
      .filter(lecture => lecture.isCompleted)
      .map(lecture => lecture.id);
    
    setCompletedLectures(initialCompletedLectures);
  }, []);

  // Handle lecture selection
  const handleLectureSelect = (lecture: Lecture) => {
    setCurrentLecture(lecture);
    setVideoLoaded(false);
    
    // On mobile, close the sidebar after selecting a lecture
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
    
    // Scroll to top on lecture change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle lecture completion status
  const toggleLectureCompletion = (lectureId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    
    setCompletedLectures(prev => {
      if (prev.includes(lectureId)) {
        return prev.filter(id => id !== lectureId);
      } else {
        return [...prev, lectureId];
      }
    });
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    const totalLectures = courseData.sections.flatMap(section => section.lectures).length;
    return Math.round((completedLectures.length / totalLectures) * 100);
  };

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* Course Header */}
      <div
        className="w-full py-4 px-4 md:px-6 lg:px-8 border-b"
        style={{
          backgroundColor: theme === "dark" ? "rgba(17, 24, 39, 0.8)" : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(8px)",
          borderColor: theme === "dark" ? "rgba(55, 65, 81, 0.5)" : "rgba(229, 231, 235, 0.5)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center">
          <Link
            to="/courses"
            className={`flex items-center text-sm font-medium mr-4 ${
              theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
            } transition-colors`}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Courses
          </Link>
          <h1 className="text-xl font-bold truncate">
            {courseData.title}
          </h1>
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden sticky top-0 z-10 px-4 py-2 flex justify-between items-center border-b" 
        style={{
          backgroundColor: theme === "dark" ? "rgba(17, 24, 39, 0.9)" : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
          borderColor: theme === "dark" ? "rgba(55, 65, 81, 0.5)" : "rgba(229, 231, 235, 0.5)"
        }}>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium ${
            theme === "dark" 
              ? "bg-gray-800 text-gray-200 hover:bg-gray-700" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {isSidebarOpen ? "Hide Syllabus" : "Show Syllabus"}
        </button>
        <div className="text-sm">
          <span className={`font-medium ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}>
            {calculateProgress()}%
          </span> 
          <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}> completed</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col md:flex-row md:overflow-hidden">
        {/* Course Syllabus Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block md:w-1/3 lg:w-[30%] border-r overflow-y-auto h-[calc(100vh-56px)] md:h-[calc(100vh-64px)]`}
          style={{
            borderColor: theme === "dark" ? "rgba(55, 65, 81, 0.5)" : "rgba(229, 231, 235, 0.5)",
          }}
        >
          {/* Course Info Card */}
          <div className="p-4 border-b" style={{
            borderColor: theme === "dark" ? "rgba(55, 65, 81, 0.5)" : "rgba(229, 231, 235, 0.5)",
          }}>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg px-4 py-3 mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">Your Progress</h3>
                <span className="text-white text-sm font-bold">{calculateProgress()}%</span>
              </div>
              <div className="w-full bg-black/30 rounded-full h-2">
                <div
                  className="bg-white rounded-full h-2 transition-all duration-300"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                <Clock className="h-4 w-4 mr-1" />
                {courseData.totalHours} hours
              </div>
              <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                <BookOpen className="h-4 w-4 mr-1" />
                {courseData.totalLectures} lectures
              </div>
              <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                <Users className="h-4 w-4 mr-1" />
                {courseData.students.toLocaleString()} students
              </div>
              <div className={`flex items-center ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                <Award className="h-4 w-4 mr-1" />
                {courseData.level}
              </div>
            </div>
          </div>

          {/* Course Syllabus */}
          <div className="py-2">
            {courseData.sections.map((section, sectionIndex) => (
              <div key={section.id} className="mb-2">
                <div
                  className="px-4 py-3 font-semibold text-sm sticky top-0 z-10"
                  style={{
                    backgroundColor: theme === "dark" ? "rgba(17, 24, 39, 0.9)" : "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  Section {sectionIndex + 1}: {section.title}
                </div>
                <div className="space-y-1">
                  {section.lectures.map((lecture) => (
                    <div
                      key={lecture.id}
                      onClick={() => handleLectureSelect(lecture)}
                      className={`pl-4 pr-3 py-2.5 flex items-center justify-between cursor-pointer group ${
                        currentLecture.id === lecture.id
                          ? theme === "dark"
                            ? "bg-indigo-500/20 border-l-2 border-indigo-500"
                            : "bg-indigo-50 border-l-2 border-indigo-500"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                            completedLectures.includes(lecture.id)
                              ? "bg-green-500"
                              : currentLecture.id === lecture.id
                              ? "bg-indigo-500"
                              : theme === "dark"
                              ? "bg-gray-700"
                              : "bg-gray-200"
                          }`}
                          onClick={(e) => toggleLectureCompletion(lecture.id, e)}
                        >
                          {completedLectures.includes(lecture.id) ? (
                            <Check className="h-3.5 w-3.5 text-white" />
                          ) : currentLecture.id === lecture.id ? (
                            <Play className="h-3.5 w-3.5 text-white" />
                          ) : null}
                        </div>
                        <div>
                          <div
                            className={`text-sm ${
                              currentLecture.id === lecture.id
                                ? theme === "dark"
                                  ? "text-indigo-400 font-medium"
                                  : "text-indigo-700 font-medium"
                                : theme === "dark"
                                ? "text-gray-200"
                                : "text-gray-700"
                            } ${
                              completedLectures.includes(lecture.id)
                                ? "line-through opacity-75"
                                : ""
                            }`}
                          >
                            {lecture.title}
                          </div>
                        </div>
                      </div>
                      <div className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        {lecture.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player and Content */}
        <div className="md:w-2/3 lg:w-[70%] flex-grow overflow-y-auto h-[calc(100vh-56px)] md:h-[calc(100vh-64px)]">
          {/* Video Player */}
          <div className="aspect-video bg-black relative">
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
              </div>
            )}
            <div className={`${videoLoaded ? "" : "opacity-0"}`}>
              {/* This would be a real video player in production */}
              <img
                src="/api/placeholder/1280/720"
                alt="Video placeholder"
                className="w-full h-auto"
                onLoad={() => setTimeout(() => setVideoLoaded(true), 1000)}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-indigo-600/80 flex items-center justify-center">
                  <Play className="h-8 w-8 text-white" fill="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Lecture Content */}
          <div className="p-4 md:p-6 lg:p-8">
            <h1 className="text-2xl font-bold mb-2">{currentLecture.title}</h1>
            <div className="flex items-center gap-x-4 mb-6">
              <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Duration: {currentLecture.duration}
              </div>
              <button
                onClick={(e) => toggleLectureCompletion(currentLecture.id, e)}
                className={`flex items-center text-sm ${
                  completedLectures.includes(currentLecture.id)
                    ? "text-green-500"
                    : theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center mr-1.5 ${
                    completedLectures.includes(currentLecture.id)
                      ? "bg-green-500 text-white"
                      : theme === "dark"
                      ? "border border-gray-600"
                      : "border border-gray-300"
                  }`}
                >
                  {completedLectures.includes(currentLecture.id) && (
                    <Check className="h-3.5 w-3.5" />
                  )}
                </div>
                {completedLectures.includes(currentLecture.id)
                  ? "Completed"
                  : "Mark as Complete"}
              </button>
            </div>

            <div
              className={`prose ${
                theme === "dark" ? "prose-invert" : ""
              } max-w-none mb-8`}
            >
              <h2>About this lecture</h2>
              <p>{currentLecture.description}</p>

              <h2>Learning objectives</h2>
              <ul>
                <li>Understand the core concepts presented in this lecture</li>
                <li>Apply the techniques to practical programming scenarios</li>
                <li>Complete the associated exercises to reinforce learning</li>
              </ul>

              <h2>Additional resources</h2>
              <p>
                Download the lecture materials and source code examples from the
                Resources section below. These materials will help you practice
                and apply what you've learned in this lecture.
              </p>
            </div>

            {/* Resources Section */}
            <div
              className={`rounded-lg border p-4 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <h3 className="font-medium mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className={`flex items-center text-sm ${
                      theme === "dark"
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-700"
                    }`}
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    Lecture Slides (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`flex items-center text-sm ${
                      theme === "dark"
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-700"
                    }`}
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    Source Code
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`flex items-center text-sm ${
                      theme === "dark"
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-700"
                    }`}
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Exercise Files
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Between Lectures */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{
              borderColor: theme === "dark" ? "rgba(55, 65, 81, 0.5)" : "rgba(229, 231, 235, 0.5)",
            }}>
              <div>
                {/* This would calculate the previous lecture in a real implementation */}
                <button
                  className={`flex items-center px-3 py-1.5 rounded text-sm ${
                    theme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous Lecture
                </button>
              </div>
              <div>
                {/* This would calculate the next lecture in a real implementation */}
                <button
                  className={`flex items-center px-3 py-1.5 rounded text-sm ${
                    theme === "dark"
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  Next Lecture
                  <ChevronLeft className="h-4 w-4 ml-1 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}