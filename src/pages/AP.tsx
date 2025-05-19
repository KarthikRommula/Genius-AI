import { useState } from "react";
import {
  Play,
  CheckCircle,
  Lock,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  BookOpen,
  Clock,
  BarChart3,
  Star,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useTheme } from "../context/useTheme";

// Example lecture data for Applied Physics
const COURSE_DATA = {
  id: "science-1",
  title: "Applied Physics",
  description:
    "Explore real-world applications of physics principles through experiments and simulations.",
  instructor: "Prof. Richard Feynman",
  thumbnail: "/images/courses/courses2.webp",
  duration: "14 weeks",
  level: "Intermediate",
  category: "science",
  rating: 4.7,
  students: 950,
  lectures: [
    {
      id: 1,
      title: "Introduction to Applied Physics",
      description: "Overview of the course and basic physics concepts.",
      duration: "32:15",
      videoUrl: "https://example.com/videos/lecture1.mp4", // Placeholder URL
      isLocked: false,
    },
    {
      id: 2,
      title: "Forces and Motion",
      description: "Understanding Newton's laws in practical applications.",
      duration: "45:30",
      videoUrl: "https://example.com/videos/lecture2.mp4",
      isLocked: false,
    },
    {
      id: 3,
      title: "Energy & Work",
      description: "Exploring energy transformations and conservation principles.",
      duration: "38:45",
      videoUrl: "https://example.com/videos/lecture3.mp4",
      isLocked: false,
    },
    {
      id: 4,
      title: "Laboratory Techniques",
      description: "Essential methods for physics experimentation.",
      duration: "51:20",
      videoUrl: "https://example.com/videos/lecture4.mp4",
      isLocked: false,
    },
    {
      id: 5,
      title: "Waves and Oscillations",
      description: "Understanding periodic motion and wave behavior.",
      duration: "40:15",
      videoUrl: "https://example.com/videos/lecture5.mp4",
      isLocked: false,
    },
    {
      id: 6,
      title: "Thermodynamics",
      description: "Heat transfer and energy states in physical systems.",
      duration: "48:30",
      videoUrl: "https://example.com/videos/lecture6.mp4",
      isLocked: true,
    },
    {
      id: 7,
      title: "Electricity & Magnetism",
      description: "Fundamentals of electrical and magnetic phenomena.",
      duration: "55:10",
      videoUrl: "https://example.com/videos/lecture7.mp4",
      isLocked: true,
    },
    {
      id: 8,
      title: "Optics & Light",
      description: "Properties of light and optical systems.",
      duration: "42:25",
      videoUrl: "https://example.com/videos/lecture8.mp4",
      isLocked: true,
    },
    {
      id: 9,
      title: "Modern Physics Applications",
      description: "Quantum mechanics and relativity in today's technology.",
      duration: "59:40",
      videoUrl: "https://example.com/videos/lecture9.mp4",
      isLocked: true,
    },
    {
      id: 10,
      title: "Final Project & Review",
      description: "Consolidation of concepts and practical application.",
      duration: "63:15",
      videoUrl: "https://example.com/videos/lecture10.mp4",
      isLocked: true,
    },
  ],
  sections: [
    {
      id: 1,
      title: "Fundamentals",
      lectureIds: [1, 2, 3],
      isExpanded: true,
    },
    {
      id: 2,
      title: "Practical Applications",
      lectureIds: [4, 5],
      isExpanded: true,
    },
    {
      id: 3,
      title: "Advanced Concepts",
      lectureIds: [6, 7, 8, 9, 10],
      isExpanded: true,
    },
  ],
};

export default function AppliedPhysics() {
  const { theme } = useTheme();

  const [selectedLectureId, setSelectedLectureId] = useState(
    COURSE_DATA.lectures.length > 0 ? COURSE_DATA.lectures[0].id : -1
  );

  const [expandedSections, setExpandedSections] = useState(
    COURSE_DATA.sections.map((section) => section.id)
  );

  const selectedLecture = COURSE_DATA.lectures.find(
    (lecture) => lecture.id === selectedLectureId
  );

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };



  // Determine if a section is expanded
  const isSectionExpanded = (sectionId: number) => expandedSections.includes(sectionId);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* Header with course title */}
      <header
        className="relative py-10 md:py-16"
        style={{ background: "var(--header-bg)" }}
      >
        <div className="absolute inset-0 bg-[url('/images/courses/courses_hero.webp')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="mb-6">
            <a
              href="/courses"
              className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Courses
            </a>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div
                className={`inline-flex items-center px-3 py-1.5 rounded-full ${
                  theme === "dark"
                    ? "bg-emerald-500/20 border border-emerald-400/40 text-emerald-100"
                    : "bg-emerald-500/10 border border-emerald-400/30 text-emerald-700"
                } mb-2`}
              >
                <span
                  className={`flex h-2 w-2 rounded-full bg-emerald-300 mr-2`}
                ></span>
                <span className="text-xs font-medium">Science</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {COURSE_DATA.title}
              </h1>
              <p
                className={`mt-2 text-lg max-w-3xl ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {COURSE_DATA.description}
              </p>
            </div>
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              } self-start`}
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                {COURSE_DATA.instructor.charAt(0)}
              </div>
              <div>
                <div className="font-medium">{COURSE_DATA.instructor}</div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{COURSE_DATA.rating}</span>
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    ({COURSE_DATA.students} students)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div
              className={`flex items-center gap-1 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <Clock className="h-4 w-4" />
              <span>{COURSE_DATA.duration}</span>
            </div>
            <div
              className={`flex items-center gap-1 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>{COURSE_DATA.lectures.length} lectures</span>
            </div>
            <div
              className={`flex items-center gap-1 text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>{COURSE_DATA.level}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content area with two-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Course roadmap/syllabus (30-35% width) */}
          <div className="w-full lg:w-1/3">
            <div
              className={`sticky top-4 ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              } border ${
                theme === "dark" ? "border-gray-800" : "border-gray-200"
              } rounded-xl overflow-hidden shadow-sm`}
            >
              <div
                className={`p-4 border-b ${
                  theme === "dark" ? "border-gray-800" : "border-gray-200"
                }`}
              >
                <h2 className="text-lg font-bold">Course Content</h2>
                <p
                  className={`text-sm mt-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {COURSE_DATA.lectures.length} lectures •{" "}
                  {COURSE_DATA.lectures.reduce(
                    (acc, lecture) =>
                      acc +
                      parseInt(lecture.duration.split(":")[0]) * 60 +
                      parseInt(lecture.duration.split(":")[1]),
                    0
                  ) /
                    60}{" "}
                  hours total
                </p>
              </div>

              {/* Scrollable lecture list */}
              <div
                className="overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 300px)" }}
              >
                {COURSE_DATA.sections.map((section) => (
                  <div key={section.id}>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className={`w-full p-4 flex justify-between items-center text-left border-b ${
                        theme === "dark" ? "border-gray-800" : "border-gray-200"
                      } hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors`}
                    >
                      <h3 className="font-medium">
                        Section {section.id}: {section.title}
                      </h3>
                      {isSectionExpanded(section.id) ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {/* Lectures in this section */}
                    {isSectionExpanded(section.id) && (
                      <div>
                        {section.lectureIds.map((lectureId) => {
                          const lecture = COURSE_DATA.lectures.find(
                            (l) => l.id === lectureId
                          );
                          if (!lecture) return null;
                          return (
                            <button
                              key={lecture.id}
                              onClick={() => {
                                if (!lecture.isLocked) {
                                  setSelectedLectureId(lecture.id);
                                }
                              }}
                              disabled={lecture.isLocked}
                              className={`w-full flex items-start p-4 gap-3 border-b ${
                                theme === "dark"
                                  ? "border-gray-800"
                                  : "border-gray-200"
                              } text-left ${
                                selectedLectureId === lecture.id
                                  ? theme === "dark"
                                    ? "bg-indigo-900/20"
                                    : "bg-indigo-50"
                                  : ""
                              } ${
                                !lecture.isLocked
                                  ? theme === "dark"
                                    ? "hover:bg-gray-800/70"
                                    : "hover:bg-gray-50"
                                  : ""
                              } transition-colors`}
                            >
                              <div
                                className={`flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full ${
                                  selectedLectureId === lecture.id
                                    ? "bg-indigo-100 text-indigo-600"
                                    : lecture.isLocked
                                    ? theme === "dark"
                                      ? "bg-gray-800 text-gray-500"
                                      : "bg-gray-200 text-gray-500"
                                    : theme === "dark"
                                    ? "bg-gray-800 text-indigo-400"
                                    : "bg-gray-100 text-indigo-600"
                                }`}
                              >
                                {lecture.isLocked ? (
                                  <Lock className="h-3 w-3" />
                                ) : selectedLectureId === lecture.id ? (
                                  <Play className="h-3 w-3" />
                                ) : (
                                  <CheckCircle className="h-3 w-3" />
                                )}
                              </div>
                              <div className="flex-grow min-w-0">
                                <div
                                  className={`font-medium text-sm truncate ${
                                    lecture.isLocked
                                      ? theme === "dark"
                                        ? "text-gray-500"
                                        : "text-gray-500"
                                      : selectedLectureId === lecture.id
                                      ? theme === "dark"
                                        ? "text-indigo-400"
                                        : "text-indigo-700"
                                      : ""
                                  }`}
                                >
                                  {lecture.title}
                                </div>
                                <p
                                  className={`text-xs mt-1 ${
                                    theme === "dark"
                                      ? "text-gray-500"
                                      : "text-gray-500"
                                  } truncate`}
                                >
                                  {lecture.description}
                                </p>
                              </div>
                              <div
                                className={`flex-shrink-0 text-xs ${
                                  theme === "dark"
                                    ? "text-gray-500"
                                    : "text-gray-500"
                                }`}
                              >
                                {lecture.duration}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Video player (65-70% width) */}
          <div className="w-full lg:w-2/3">
            <div
              className={`${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              } border ${
                theme === "dark" ? "border-gray-800" : "border-gray-200"
              } rounded-xl overflow-hidden shadow-sm`}
            >
              {/* Video player */}
              <div className="relative pb-[56.25%] bg-black">
                {selectedLecture ? (
                  <>
                    {/* This is a placeholder for the actual video player. 
                        In a real implementation, you would use a video component here. */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <div className="text-center">
                        <Play className="mx-auto h-16 w-16 text-indigo-500 opacity-80" />
                        <p className="mt-4 text-white text-lg font-medium">
                          Now Playing: {selectedLecture?.title}
                        </p>
                        <p className="mt-2 text-gray-300 text-sm">
                          {selectedLecture.description}
                        </p>
                        <p className="mt-4 text-gray-400 text-xs">
                          Video URL: {selectedLecture.videoUrl}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <p className="text-white">
                      Select a lecture to start watching
                    </p>
                  </div>
                )}
              </div>

              {/* Video details and description */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  {selectedLecture?.title}
                </h2>
                <div
                  className={`flex items-center gap-2 text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } mb-4`}
                >
                  <Clock className="h-4 w-4" />
                  <span>{selectedLecture?.duration}</span>
                </div>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {selectedLecture?.description}
                </p>

                {/* Additional resources or notes can be added here */}
                <div
                  className={`mt-6 p-4 rounded-lg ${
                    theme === "dark"
                      ? "bg-gray-800/50"
                      : "bg-gray-100"
                  } flex items-start gap-3`}
                >
                  <BookOpen className={`h-5 w-5 mt-0.5 ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"}`} />
                  <div>
                    <h3 className="font-medium mb-1">Lecture Resources</h3>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                      Download lecture materials, practice problems, and additional reading recommendations related to this topic.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                        theme === "dark" 
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      } transition-colors`}>
                        Lecture Slides
                      </button>
                      <button className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                        theme === "dark" 
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      } transition-colors`}>
                        Problem Set
                      </button>
                      <button className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                        theme === "dark" 
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      } transition-colors`}>
                        Further Reading
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation between lectures */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
              <button
                onClick={() => {
                  const currentIndex = COURSE_DATA.lectures.findIndex(
                    (lecture) => lecture.id === selectedLectureId
                  );
                  if (currentIndex > 0) {
                    const prevLecture = COURSE_DATA.lectures[currentIndex - 1];
                    if (!prevLecture.isLocked) {
                      setSelectedLectureId(prevLecture.id);
                    }
                  }
                }}
                disabled={
                  selectedLectureId === 1 ||
                  COURSE_DATA.lectures.find(
                    (lecture) => lecture.id === selectedLectureId - 1
                  )?.isLocked
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  theme === "dark"
                    ? selectedLectureId === 1
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                    : selectedLectureId === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                } transition-colors`}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous Lecture
              </button>

              <button
                onClick={() => {
                  const currentIndex = COURSE_DATA.lectures.findIndex(
                    (lecture) => lecture.id === selectedLectureId
                  );
                  if (
                    currentIndex < COURSE_DATA.lectures.length - 1 &&
                    !COURSE_DATA.lectures[currentIndex + 1].isLocked
                  ) {
                    setSelectedLectureId(COURSE_DATA.lectures[currentIndex + 1].id);
                  }
                }}
                disabled={
                  selectedLectureId === COURSE_DATA.lectures.length ||
                  COURSE_DATA.lectures.find(
                    (lecture) => lecture.id === selectedLectureId + 1
                  )?.isLocked
                }
                className={`flex items-center justify-center sm:justify-end gap-2 px-4 py-2 rounded-lg ${
                  selectedLectureId === COURSE_DATA.lectures.length ||
                  COURSE_DATA.lectures.find(
                    (lecture) => lecture.id === selectedLectureId + 1
                  )?.isLocked
                    ? theme === "dark"
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : theme === "dark"
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                } transition-colors`}
              >
                Next Lecture
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section (you can reuse the existing Footer component here) */}
      <footer
        className={`py-12 mt-16 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        } border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About this course</h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } text-sm`}
              >
                {COURSE_DATA.description}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{COURSE_DATA.rating}</span>
                <span
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  ({COURSE_DATA.students} students)
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Instructor</h3>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                  {COURSE_DATA.instructor.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{COURSE_DATA.instructor}</div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Professor of Physics
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Get Help</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-700"
                    }`}
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-700"
                    }`}
                  >
                    Discussion Forum
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-indigo-400 hover:text-indigo-300"
                        : "text-indigo-600 hover:text-indigo-700"
                    }`}
                  >
                    Contact Instructor
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`mt-8 pt-8 text-center text-sm ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            } border-t ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            © 2025 Learning Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}