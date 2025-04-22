"use client";

import {
  Accordion,
  AccordionItem,
  Card,
  Chip,
  Progress,
  Avatar,
  Button,
} from "@heroui/react";
import {
  BookA,
  ChevronRight,
  Clock,
  User,
  FileText,
  Code,
  Video,
  BookOpen,
  CheckCircle,
  FileQuestion,
  FileCode,
  Terminal,
  ClipboardCheck,
} from "lucide-react";
import { useMemo, useState } from "react";

type LessonContent = {
  title: string;
  type: "video" | "reading" | "quiz" | "assignment" | "lab";
  duration?: string;
  completed?: boolean;
  description?: string;
  resources?: {
    title: string;
    url: string;
  }[];
};

type Lesson = {
  title: string;
  description?: string;
  contents: LessonContent[];
};

type Week = {
  week: number;
  title: string;
  lessons: Lesson[];
  progress?: number;
};

type Course = {
  id: number;
  title: string;
  tags: string[];
  assigned: number;
  lastEdited: string;
  progress: number;
  instructor?: string;
  roadmap: Week[];
};

const sampleCourses: Course[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    tags: ["Programming", "Beginner"],
    assigned: 25,
    lastEdited: "1h",
    progress: 20,
    instructor: "Dr. Sarah Johnson",
    roadmap: [
      {
        week: 1,
        title: "Getting Started",
        progress: 30,
        lessons: [
          {
            title: "Programming Fundamentals",
            description: "Learn the core concepts of programming",
            contents: [
              {
                title: "What is Programming?",
                type: "video",
                duration: "12 min",
                completed: true,
                description: "Introduction to programming concepts",
                resources: [{ title: "Slides", url: "#" }],
              },
              {
                title: "Variables and Data Types",
                type: "reading",
                duration: "15 min",
                completed: true,
                description: "Understanding basic data structures",
              },
              {
                title: "Quiz: Basic Concepts",
                type: "quiz",
                duration: "10 min",
                description: "Test your understanding of programming basics",
              },
            ],
          },
          {
            title: "Python Basics",
            description: "Your first steps with Python",
            contents: [
              {
                title: "Installing Python",
                type: "video",
                duration: "8 min",
                completed:true,
                description: "Setting up your development environment",
              },
              {
                title: "Hello World Program",
                type: "lab",
                duration: "20 min",
                description: "Write and execute your first Python program",
              },
              {
                title: "Assignment: Simple Calculator",
                type: "assignment",
                duration: "30 min",
                description: "Build a basic calculator program",
              },
            ],
          },
        ],
      },
      {
        week: 2,
        title: "Control Structures",
        progress: 10,
        lessons: [
          {
            title: "Conditional Logic",
            description: "Making decisions in your code",
            contents: [
              {
                title: "If/Else Statements",
                type: "video",
                duration: "15 min",
                description: "Understanding conditional execution",
              },
              {
                title: "Practice: Grade Calculator",
                type: "lab",
                duration: "25 min",
                description: "Implement a grade evaluation system",
              },
            ],
          },
          {
            title: "Loops",
            description: "Repeating actions efficiently",
            contents: [
              {
                title: "For and While Loops",
                type: "video",
                duration: "18 min",
                description: "Different types of loops in Python",
              },
              {
                title: "Assignment: Number Guesser",
                type: "assignment",
                duration: "40 min",
                description: "Build a number guessing game",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Frontend Web Development",
    tags: ["HTML", "CSS", "JS"],
    assigned: 18,
    lastEdited: "2h",
    progress: 45,
    instructor: "Jane Patel",
    roadmap: [
      {
        week: 1,
        title: "HTML & CSS Basics",
        progress: 60,
        lessons: [
          {
            title: "Building Your First Webpage",
            description: "Intro to HTML structure",
            contents: [
              {
                title: "HTML Tags Overview",
                type: "video",
                duration: "10 min",
                completed:true,
                description: "Learn about headings, lists, and paragraphs",
              },
              {
                title: "Practice: Resume Page",
                type: "lab",
                duration: "25 min",
                description: "Build your own resume in HTML",
              },
            ],
          },
          {
            title: "CSS Fundamentals",
            description: "Styling your HTML",
            contents: [
              {
                title: "Selectors and Properties",
                type: "reading",
                duration: "15 min",
                description: "Learn about how to apply styles",
              },
              {
                title: "Flexbox Layout",
                type: "video",
                duration: "18 min",
                description: "Responsive layout techniques",
              },
            ],
          },
        ],
      },
      {
        week: 2,
        title: "JavaScript Foundations",
        progress: 20,
        lessons: [
          {
            title: "Variables & Functions",
            description: "Get started with JS syntax",
            contents: [
              {
                title: "Declaring Variables",
                type: "reading",
                duration: "12 min",
                description: "var vs let vs const",
              },
              {
                title: "Function Basics",
                type: "lab",
                duration: "20 min",
                description: "Write your first functions",
              },
            ],
          },
          {
            title: "DOM Manipulation",
            description: "Bring pages to life",
            contents: [
              {
                title: "getElementById and Events",
                type: "video",
                duration: "15 min",
                description: "Interactive user input handling",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Data Science Essentials",
    tags: ["Python", "Data", "Pandas"],
    assigned: 12,
    lastEdited: "3d",
    progress: 35,
    instructor: "Prof. Kevin Yang",
    roadmap: [
      {
        week: 1,
        title: "Working with Data",
        progress: 50,
        lessons: [
          {
            title: "Intro to Pandas",
            description: "Analyze tabular data easily",
            contents: [
              {
                title: "DataFrames 101",
                type: "video",
                duration: "14 min",
                completed:true,
                description: "Creating and manipulating DataFrames",
              },
              {
                title: "Lab: Movie Ratings",
                type: "lab",
                duration: "25 min",
                completed:true,
                description: "Analyze a dataset of movie reviews",
              },
            ],
          },
          {
            title: "Cleaning Data",
            description: "Make your data usable",
            contents: [
              {
                title: "Handling Null Values",
                type: "video",
                duration: "10 min",
                description: "Dealing with missing data",
              },
              {
                title: "Practice: Cleaning Survey Data",
                type: "assignment",
                duration: "35 min",
                description: "Tidy up a messy CSV",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Machine Learning Basics",
    tags: ["ML", "AI", "Scikit-learn"],
    assigned: 30,
    lastEdited: "5h",
    progress: 3,
    instructor: "Dr. Emily Carter",
    roadmap: [
      {
        week: 1,
        title: "Intro to Machine Learning",
        progress: 10,
        lessons: [
          {
            title: "ML Concepts",
            description: "Understanding how ML works",
            contents: [
              {
                title: "Supervised vs Unsupervised",
                type: "video",
                duration: "15 min",
                completed:true,
                description: "Different ML problem types",
              },
              {
                title: "Quiz: ML Basics",
                type: "quiz",
                duration: "10 min",
                description: "Test your knowledge of core ideas",
              },
            ],
          },
        ],
      },
      {
        week: 2,
        title: "Regression Models",
        progress: 5,
        lessons: [
          {
            title: "Linear Regression",
            description: "Predicting values using input features",
            contents: [
              {
                title: "Scikit-learn Basics",
                type: "video",
                duration: "12 min",
                description: "Train your first model",
              },
              {
                title: "Lab: Predict Housing Prices",
                type: "lab",
                duration: "30 min",
                description: "Apply linear regression to real data",
              },
            ],
          },
        ],
      },
    ],
  },
];

const getIconForType = (type: string) => {
  switch (type) {
    case "video":
      return <Video className="w-4 h-4" />;
    case "reading":
      return <BookOpen className="w-4 h-4" />;
    case "quiz":
      return <FileQuestion className="w-4 h-4" />;
    case "assignment":
      return <FileCode className="w-4 h-4" />;
    case "lab":
      return <Terminal className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

export default function CourseRoadmapPage({ courseId }: { courseId: string }) {
  const [activeWeek, setActiveWeek] = useState<number | null>(1);
  const course = useMemo(
    () => sampleCourses.find((c) => c.id === Number(courseId)),
    [courseId]
  );

  if (!course) return <div className="p-4 text-red-500">Course not found</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 bg-white border-r border-gray-200 min-h-screen">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Avatar
              size="lg"
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Instructor"
            />
            <div>
              <h2 className="font-bold text-lg">{course.title}</h2>
              <p className="text-sm text-gray-500">
                By {course.instructor || "Unknown Instructor"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {course.tags.map((tag, i) => (
              <Chip key={i} color="secondary" variant="dot">
                {tag}
              </Chip>
            ))}
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <User className="text-gray-400 w-4 h-4" />
              <span>{course.assigned} students enrolled</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="text-gray-400 w-4 h-4" />
              <span>Last updated: {course.lastEdited} ago</span>
            </div>
          </div>

          <div className="mt-4">
            <Progress value={course.progress} size="sm" color="primary" />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
          </div>
        </div>

        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <BookA className="text-gray-400 w-4 h-4" />
          <span>Course Curriculum</span>
        </h3>
        <ul className="space-y-2">
          {course.roadmap.map((week) => (
            <li key={week.week}>
              <Button
                variant="ghost"
                fullWidth
                className={`flex justify-between items-center py-3 px-2 rounded-lg ${
                  activeWeek === week.week ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveWeek(week.week)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        week.progress === 100
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {week.progress === 100 ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        week.week
                      )}
                    </div>
                    {week.progress && week.progress < 100 && (
                      <div className="absolute -bottom-1 -right-1">
                        <Progress
                          value={week.progress}
                          size="sm"
                          color="primary"
                        />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Week {week.week}</div>
                    <div className="text-xs text-gray-500">{week.title}</div>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 w-4 h-4" />
              </Button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 py-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <p className="text-gray-600">
            Complete roadmap for your learning journey
          </p>
        </div>

        <Accordion
          variant="splitted"
          defaultValue={activeWeek ? `week-${activeWeek}` : undefined}
        >
          {course.roadmap.map((week) => (
            <AccordionItem
              key={week.week}
              value={`week-${week.week}`}
              title={
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold">Week {week.week}:</span>{" "}
                    {week.title}
                  </div>
                  {week.progress && (
                    <Chip
                      color={week.progress === 100 ? "success" : "primary"}
                      size="sm"
                    >
                      {week.progress === 100 ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Completed
                        </span>
                      ) : (
                        `${week.progress}%`
                      )}
                    </Chip>
                  )}
                </div>
              }
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            >
              <div className="space-y-4 p-4">
                {week.lessons.map((lesson, lessonIndex) => (
                  <Accordion
                    key={lessonIndex}
                    variant="splitted"
                    className="space-y-2"
                  >
                    <AccordionItem
                      value={`lesson-${lessonIndex}`}
                      title={
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 text-blue-600 p-1 rounded-full">
                              <ClipboardCheck className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="font-medium">{lesson.title}</h3>
                              {lesson.description && (
                                <p className="text-xs text-gray-500">
                                  {lesson.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {lesson.contents.length} items
                          </div>
                        </div>
                      }
                    >
                      <div className="space-y-3 pl-4 pt-2">
                        {lesson.contents.map((content, contentIndex) => (
                          <Card
                            key={contentIndex}
                            shadow="none"
                            className={`p-3 transition-colors border-l-4 ${
                              content.completed
                                ? "border-green-500 bg-green-50"
                                : "border-blue-500 hover:bg-blue-50"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1 flex-shrink-0">
                                <div
                                  className={`p-1.5 rounded-full ${
                                    content.completed
                                      ? "bg-green-100 text-green-600"
                                      : "bg-blue-100 text-blue-600"
                                  }`}
                                >
                                  {getIconForType(content.type)}
                                </div>
                              </div>
                              <div className="flex-grow">
                                <div className="font-medium flex justify-between">
                                  <span>{content.title}</span>
                                  {content.duration && (
                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                      {content.duration}
                                    </span>
                                  )}
                                </div>
                                {content.description && (
                                  <p className="text-sm text-gray-600 mt-1">
                                    {content.description}
                                  </p>
                                )}
                                {content.resources &&
                                  content.resources.length > 0 && (
                                    <div className="mt-2">
                                      <p className="text-xs text-gray-500 mb-1">
                                        Resources:
                                      </p>
                                      <div className="flex flex-wrap gap-2">
                                        {content.resources.map(
                                          (resource, i) => (
                                            <a
                                              key={i}
                                              href={resource.url}
                                              className="text-xs text-blue-600 hover:underline"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              {resource.title}
                                            </a>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  )}
                              </div>
                              {content.completed && (
                                <div className="text-green-500">
                                  <CheckCircle className="w-4 h-4" />
                                </div>
                              )}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
