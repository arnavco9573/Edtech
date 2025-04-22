"use client";

import EventCalendar from "@/app/components/EventCalender";
import CourseCard from "./components/CourseCard";

const sampleCourses = [
  {
    id: 1,
    title: "Introduction to Programming",
    tags: ["Programming", "Beginner"],
    assigned: 5,
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
    assigned: 6,
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
    assigned: 8,
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
                description: "Creating and manipulating DataFrames",
              },
              {
                title: "Lab: Movie Ratings",
                type: "lab",
                duration: "25 min",
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
    assigned: 10,
    lastEdited: "5h",
    progress: 15,
    instructor: "Dr. Emily Carter",
    roadmap: [
      {
        week: 1,
        title: "Intro to Machine Learning",
        progress: 20,
        lessons: [
          {
            title: "ML Concepts",
            description: "Understanding how ML works",
            contents: [
              {
                title: "Supervised vs Unsupervised",
                type: "video",
                duration: "15 min",
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


const SubjectListPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-[67%]">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Courses</h1>
          <div className="flex flex-wrap gap-6 mt-3">
            {sampleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-[33%] flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default SubjectListPage;
