import { useState } from "react";
import { Play, BookOpen, BookmarkCheck, Clock, ChevronDown, ChevronUp, CheckCircle, ChevronRight } from "lucide-react";
import { useTheme } from "../context/useTheme";

// CSS Styles for the component
const styles = {
  page: `min-h-screen`,
  container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12`,
  courseHeader: `mb-8 pb-6 border-b`,
  courseTitle: `text-2xl md:text-3xl font-bold mb-3`,
  courseInfo: `flex flex-wrap items-center gap-3 md:gap-4 text-sm`,
  infoItem: `flex items-center gap-1.5`,
  icon: `w-4 h-4`,
  twoColLayout: `flex flex-col lg:flex-row gap-6 lg:gap-8`,
  leftColumn: `w-full lg:w-[35%]`,
  rightColumn: `w-full lg:w-[65%]`,
  sectionCard: `rounded-xl border shadow-sm mb-6 overflow-hidden`,
  cardHeader: `p-4 border-b flex justify-between items-center cursor-pointer`,
  cardTitle: `font-semibold flex items-center gap-2`,
  lectureList: ``,
  lectureItem: `border-b last:border-b-0 transition-colors`,
  lectureButton: `w-full text-left flex items-center p-4 gap-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors`,
  lectureActive: `bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30`,
  lectureTitle: `font-medium grow`,
  lectureMeta: `text-xs text-gray-500 dark:text-gray-400`,
  videoContainer: `aspect-video w-full bg-black rounded-xl overflow-hidden mb-6`,
  videoPlayer: `w-full h-full object-contain`,
  infoCard: `p-5 rounded-xl border shadow-sm`,
  progressBar: `h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-6`,
  progressFill: `h-full bg-indigo-600 rounded-full`,
  completionText: `mb-4 text-sm flex items-center gap-2`,
  completionIcon: `text-green-500`,
  upNext: `font-medium mb-2`,
  lectureInfo: `mb-6`,
  lectureDescription: `text-sm text-gray-600 dark:text-gray-300 mb-4`,
  resources: `text-sm`,
  resourcesTitle: `font-medium mb-2`,
  resourcesList: `space-y-2`,
  resourceItem: `flex items-center gap-2 text-indigo-600 dark:text-indigo-400`,
  completedTag: `ml-auto px-2 py-0.5 rounded text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400`,
  completedIcon: `w-4 h-4 text-green-500`,
  nextSection: `font-semibold text-lg mb-4`,
};

// Mock course data
const courseData = {
  id: "cs-python-101",
  title: "Python Programming",
  instructor: "Dr. Maya Patel",
  totalLectures: 20,
  totalHours: "12 hours",
  progress: 35, // percentage completed
};

// Mock lectures data
const sections = [
  {
    id: "section-1",
    title: "Introduction to Python",
    isOpen: true,
    lectures: [
      {
        id: "lecture-1-1",
        title: "Welcome to Python Programming",
        duration: "12:30",
        videoUrl: "https://example.com/videos/welcome-to-python",
        isCompleted: true,
        description: "Get started with Python programming in this introductory lecture. Learn about the course structure, prerequisites, and what you'll accomplish by the end of the course.",
        resources: [
          { title: "Course Syllabus", url: "#" },
          { title: "Python Installation Guide", url: "#" }
        ]
      },
      {
        id: "lecture-1-2",
        title: "Setting Up Your Development Environment",
        duration: "18:45",
        videoUrl: "https://example.com/videos/python-dev-environment",
        isCompleted: true,
        description: "Learn how to set up a Python development environment on your computer. We'll cover installing Python, choosing an IDE, and configuring your workspace for optimal productivity.",
        resources: [
          { title: "VS Code Setup Guide", url: "#" },
          { title: "Python Documentation", url: "#" }
        ]
      },
      {
        id: "lecture-1-3",
        title: "Variables and Data Types",
        duration: "22:10",
        videoUrl: "https://example.com/videos/python-variables",
        isCompleted: false,
        description: "This lecture covers the fundamental building blocks of Python programming: variables and data types. You'll learn about integers, floats, strings, booleans, and more.",
        resources: [
          { title: "Data Types Cheat Sheet", url: "#" },
          { title: "Practice Exercises", url: "#" }
        ]
      }
    ]
  },
  {
    id: "section-2",
    title: "Control Flow and Functions",
    isOpen: false,
    lectures: [
      {
        id: "lecture-2-1",
        title: "Conditional Statements",
        duration: "19:15",
        videoUrl: "https://example.com/videos/python-conditionals",
        isCompleted: false,
        description: "Learn how to use if, elif, and else statements to control the flow of your Python programs. We'll cover comparison operators and logical operators.",
        resources: [
          { title: "Conditional Exercises", url: "#" },
          { title: "Flow Chart Examples", url: "#" }
        ]
      },
      {
        id: "lecture-2-2",
        title: "Loops in Python",
        duration: "24:30",
        videoUrl: "https://example.com/videos/python-loops",
        isCompleted: false,
        description: "This lecture covers both for and while loops in Python. You'll learn how to iterate through sequences, use loop control statements, and avoid common pitfalls.",
        resources: [
          { title: "Loop Challenge Problems", url: "#" }
        ]
      },
      {
        id: "lecture-2-3",
        title: "Functions and Parameters",
        duration: "28:45",
        videoUrl: "https://example.com/videos/python-functions",
        isCompleted: false,
        description: "Learn how to define and call functions in Python. This lecture covers function parameters, return values, and scope.",
        resources: [
          { title: "Function Examples", url: "#" },
          { title: "Exercise Sheet", url: "#" }
        ]
      }
    ]
  },
  {
    id: "section-3",
    title: "Data Structures",
    isOpen: false,
    lectures: [
      {
        id: "lecture-3-1",
        title: "Lists and Tuples",
        duration: "26:20",
        videoUrl: "https://example.com/videos/python-lists-tuples",
        isCompleted: false,
        description: "This lecture introduces Python's sequence data types: lists and tuples. Learn how to create, access, modify, and iterate through these important data structures.",
        resources: [
          { title: "Lists vs Tuples Comparison", url: "#" },
          { title: "Practice Problems", url: "#" }
        ]
      },
      {
        id: "lecture-3-2",
        title: "Dictionaries and Sets",
        duration: "23:15",
        videoUrl: "https://example.com/videos/python-dicts-sets",
        isCompleted: false,
        description: "Learn about Python's associative data structures: dictionaries and sets. This lecture covers creation, modification, and common operations.",
        resources: [
          { title: "Dictionary Methods Cheat Sheet", url: "#" },
          { title: "Set Operations Guide", url: "#" }
        ]
      }
    ]
  }
];

// Flatten all lectures for easier access
const allLectures = sections.flatMap(section => section.lectures);

export default function CoursePage() {
  // Get theme context
  const { theme } = useTheme();
  
  // State for tracking opened sections and selected lecture
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    return sections.reduce((acc, section) => {
      acc[section.id] = section.isOpen;
      return acc;
    }, {} as Record<string, boolean>);
  });
  
  const [currentLecture, setCurrentLecture] = useState(allLectures[0]);
  
  // Handle section toggle
  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  
  // Handle lecture selection
  type Lecture = {
    id: string;
    title: string;
    duration: string;
    videoUrl: string;
    isCompleted: boolean;
    description: string;
    resources: { title: string; url: string; }[];
  };
  
  const selectLecture = (lecture: Lecture) => {
    setCurrentLecture(lecture);
    
    // Find the section this lecture belongs to and ensure it's open
    const sectionId = sections.find(section => 
      section.lectures.some(lec => lec.id === lecture.id)
    )?.id;
    
    if (sectionId && !openSections[sectionId]) {
      setOpenSections(prev => ({
        ...prev,
        [sectionId]: true
      }));
    }
    
    // Scroll to top on mobile when changing lectures
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Find the next lecture
  const getNextLecture = () => {
    const currentIndex = allLectures.findIndex(lecture => lecture.id === currentLecture.id);
    return currentIndex < allLectures.length - 1 ? allLectures[currentIndex + 1] : null;
  };
  
  // Next lecture to watch
  const nextLecture = getNextLecture();

  return (
    <main className={`${styles.page} ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      <div className={styles.container}>
        {/* Course Header */}
        <header className={`${styles.courseHeader} ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
          <h1 className={styles.courseTitle}>{courseData.title}</h1>
          <div className={styles.courseInfo}>
            <span className={styles.infoItem}>
              <BookOpen className={`${styles.icon} ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
              {courseData.totalLectures} Lectures
            </span>
            <span className={styles.infoItem}>
              <Clock className={`${styles.icon} ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
              {courseData.totalHours}
            </span>
            <span className={styles.infoItem}>
              <BookmarkCheck className={`${styles.icon} ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
              Instructor: {courseData.instructor}
            </span>
          </div>
        </header>
        
        {/* Two-column Layout */}
        <div className={styles.twoColLayout}>
          {/* Left Column - Course Roadmap */}
          <div className={styles.leftColumn}>
            {/* Progress Bar */}
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${courseData.progress}%` }}
              ></div>
            </div>
            
            <div className={styles.completionText}>
              <CheckCircle className={styles.completionIcon} />
              <span>{courseData.progress}% Complete</span>
            </div>
            
            {/* Course Sections */}
            {sections.map((section) => (
              <div 
                key={section.id} 
                className={`${styles.sectionCard} ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
              >
                <div 
                  className={`${styles.cardHeader} ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
                  onClick={() => toggleSection(section.id)}
                >
                  <h3 className={styles.cardTitle}>
                    <BookOpen className={styles.icon} />
                    {section.title}
                  </h3>
                  {openSections[section.id] ? (
                    <ChevronUp className={styles.icon} />
                  ) : (
                    <ChevronDown className={styles.icon} />
                  )}
                </div>
                
                {openSections[section.id] && (
                  <ul className={styles.lectureList}>
                    {section.lectures.map((lecture) => (
                      <li 
                        key={lecture.id} 
                        className={`${styles.lectureItem} ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
                      >
                        <button 
                          className={`${styles.lectureButton} ${currentLecture.id === lecture.id ? styles.lectureActive : ""}`}
                          onClick={() => selectLecture(lecture)}
                        >
                          <Play className={`${styles.icon} ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"}`} />
                          <span className={styles.lectureTitle}>
                            {lecture.title}
                            {lecture.isCompleted && (
                              <span className={styles.completedTag}>
                                Completed
                              </span>
                            )}
                          </span>
                          <span className={styles.lectureMeta}>{lecture.duration}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          
          {/* Right Column - Video Player and Info */}
          <div className={styles.rightColumn}>
            {/* Video Player */}
            <div className={styles.videoContainer}>
              {/* Video element: in a real app, this would connect to the actual video source */}
              <img 
                src="/api/placeholder/800/450" 
                alt="Video placeholder" 
                className={styles.videoPlayer}
              />
            </div>
            
            {/* Lecture Info */}
            <div 
              className={`${styles.infoCard} ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
            >
              <div className={styles.lectureInfo}>
                <h2 className={styles.courseTitle}>{currentLecture.title}</h2>
                <p className={styles.lectureDescription}>
                  {currentLecture.description}
                </p>
                
                {/* Resources */}
                {currentLecture.resources && currentLecture.resources.length > 0 && (
                  <div className={styles.resources}>
                    <h4 className={styles.resourcesTitle}>Lecture Resources</h4>
                    <ul className={styles.resourcesList}>
                      {currentLecture.resources.map((resource, index) => (
                        <li key={index} className={styles.resourceItem}>
                          <ChevronRight className={styles.icon} />
                          <a href={resource.url}>{resource.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Next Lecture */}
              {nextLecture && (
                <div className={`pt-4 mt-4 ${theme === "dark" ? "border-t border-gray-700" : "border-t border-gray-200"}`}>
                  <h3 className={styles.upNext}>Up Next</h3>
                  <button 
                    className={`${styles.lectureButton} ${theme === "dark" ? "bg-gray-700/50 hover:bg-gray-700" : "bg-gray-50 hover:bg-gray-100"} rounded-lg`}
                    onClick={() => selectLecture(nextLecture)}
                  >
                    <Play className={`${styles.icon} ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"}`} />
                    <span className={styles.lectureTitle}>{nextLecture.title}</span>
                    <span className={styles.lectureMeta}>{nextLecture.duration}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}