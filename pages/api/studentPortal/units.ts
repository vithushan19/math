export interface UnitNode {
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  link: string;
  type: "lesson" | "quiz" | "assignment";
}
export interface Unit {
  title: string;
  nodes: UnitNode[];
}

export const introUnits: Unit[] = [
  {
    title: "Introduction",
    nodes: [
      {
        title: "Lesson",
        description: "Intro to Skillify",
        completed: false,
        locked: false,
        link: "intro/warmups/1",
        type: "lesson",
      },
    ],
  },
  {
    title: "HTML",
    nodes: [
      {
        title: "Lesson",
        description: "HTML Basics",
        completed: false,
        locked: false,
        link: "intro/HTML/1",
        type: "lesson",
      },
      {
        title: "Quiz",
        description: "HTML Basics",
        completed: false,
        locked: false,
        link: "intro/HTML/2",
        type: "quiz",
      },
      {
        title: "Assignment",
        description: "Build an HTML Blog",
        completed: false,
        locked: true,
        link: "intro/HTML/1",
        type: "assignment",
      },
    ],
  },
  {
    title: "CSS",
    nodes: [
      {
        title: "Lesson",
        description: "CSS Basics",
        completed: false,
        locked: true,
        link: "intro/CSS/1",
        type: "lesson",
      },
      {
        title: "Quiz",
        description: "CSS Basics",
        completed: false,
        locked: true,
        link: "intro/CSS/1",
        type: "quiz",
      },
      {
        title: "Assignment",
        description: "Style an HTML Blog",
        completed: false,
        locked: true,
        link: "intro/CSS/1",
        type: "assignment",
      },
    ],
  },
  {
    title: "JavaScript",
    nodes: [
      {
        title: "Lesson 1",
        description: "Variables",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "lesson",
      },
      {
        title: "Lesson 2",
        description: "Functions",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "lesson",
      },
      {
        title: "Lesson 3",
        description: "Conditionals",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "lesson",
      },
      {
        title: "Quiz 1",
        description: "Variables, Functions and Conditionals",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "lesson",
      },
      {
        title: "Lesson 4",
        description: "Arrays",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "lesson",
      },
      {
        title: "Lesson 5",
        description: "Loops",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "lesson",
      },
      {
        title: "Lesson 6",
        description: "Objects",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "lesson",
      },
      {
        title: "Lesson 7",
        description: "Iterators",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "lesson",
      },
      {
        title: "Quiz",
        description: "Arrays, Loops, Objects, Iterators",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "quiz",
      },
      {
        title: "Assignment 1",
        description: "Build a server application",
        completed: false,
        locked: true,
        link: "intro/Javascript/1",
        type: "assignment",
      },
      {
        title: "Assignment 2",
        description: "Build an e-commerce store",
        completed: false,
        locked: true,
        link: "intro/Javascript/Final1",
        type: "assignment",
      },
    ],
  },
];

export const reactUnits: Unit[] = [
  {
    title: "React",
    nodes: [
      {
        title: "Lesson 1",
        description: "Components",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },
      {
        title: "Lesson 2",
        description: "Props",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },
      {
        title: "Quiz 1",
        description: "Components and Props",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },
      {
        title: "Lesson 3",
        description: "Hooks - useState",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },

      {
        title: "Lesson 4",
        description: "Hooks - useEffect",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },
      {
        title: "Lesson 5",
        description: "Conditional Rendering",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },
      {
        title: "Lesson 6",
        description: "Handling Events",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },
      {
        title: "Assignment 1",
        description: "Building a tic tac toe game",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },
      {
        title: "Assignment 2",
        description: "Build a K-12 Math Quiz",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },
      {
        title: "Assignment 3",
        description: "Build a tutorial to a Leetcode question",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "lesson",
      },
    ],
  },
  {
    title: "Backend",
    nodes: [
      {
        title: "Lesson 1",
        description: "Intro to Databases",
        type: "lesson",
        completed: false,
        locked: true,
        link: "react/React/1",
      },
      {
        title: "Lesson 2",
        description: "Database Reads",
        type: "lesson",
        completed: false,
        locked: true,
        link: "react/React/1",
      },
      {
        title: "Lesson 3",
        description: "Database Writes",
        type: "lesson",
        completed: false,
        locked: true,
        link: "react/React/1",
      },
      {
        title: "Assignment 1",
        description: "Capstone Project",
        completed: false,
        locked: true,
        link: "react/React/1",
        type: "assignment",
      },
    ],
  },
];

export const interviewUnits = [
  {
    title: "Data Structures",
    nodes: [
      {
        title: "Lesson 1",
        type: "lesson",
        description: "Arrays",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 2",
        description: "Strings",
        completed: false,
        type: "lesson",
        locked: true,
        link: "",
      },
      {
        title: "Lesson 3",
        description: "Maps",
        completed: false,
        locked: true,
        type: "lesson",
        link: "",
      },
      {
        title: "Lesson 4",
        description: "Linked Lists",
        type: "lesson",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 5",
        type: "lesson",
        description: "Trees",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 6",
        description: "Graphs",
        type: "lesson",
        completed: false,
        locked: true,
        link: "",
      },
      {
        type: "lesson",
        title: "Lesson 7",
        description: "Stacks",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 8",
        type: "lesson",
        description: "Queues",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 9",
        description: "Heaps",
        completed: false,
        type: "lesson",
        locked: true,
        link: "",
      },
    ],
  },
  {
    title: "Algorithms 1",
    nodes: [
      {
        title: "Lesson 1",
        description: "Sliding Window",
        type: "lesson",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 2",
        description: "Two Pointers",
        completed: false,
        locked: true,
        type: "lesson",
        link: "",
      },
      {
        title: "Lesson 3",
        description: "Fast and Slow Pointers",
        completed: false,
        locked: true,
        link: "",
        type: "lesson",
      },

      {
        title: "Lesson 4",
        description: "Binary Search",
        completed: false,
        locked: true,
        type: "lesson",
        link: "",
      },
      {
        title: "Lesson 5",
        description: "Greedy",
        completed: false,
        locked: true,
        type: "lesson",
        link: "",
      },

      {
        title: "Lesson 6",
        description: "In-place reversal of linked list",
        completed: false,
        type: "lesson",
        locked: true,
        link: "",
      },
    ],
  },
  {
    title: "Algorithms 2",
    nodes: [
      {
        title: "Lesson 1",
        description: "Tree BFS",
        completed: false,
        locked: true,
        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 2",
        description: "Tree DFS",
        type: "lesson",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 3",
        type: "lesson",
        description: "Dynamic Programming",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 4",
        type: "lesson",
        description: "Backtracking",
        completed: false,
        locked: true,
        link: "",
      },
    ],
  },
  {
    title: "Algorithms 3",
    nodes: [
      {
        title: "Lesson 1",
        description: "Intervals",
        type: "lesson",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 2",
        type: "lesson",
        description: "Toplogical Sort",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 3",
        type: "lesson",
        description: "Union Find",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 4",
        description: "Cyclic Sort",
        type: "lesson",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 5",
        description: "Two Heaps",
        type: "lesson",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 6",
        description: "Subsets",
        completed: false,
        locked: true,
        type: "lesson",
        link: "",
      },
      {
        title: "Lesson 7",
        description: "Top K Elements",
        type: "lesson",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 8",
        type: "lesson",
        description: "K-way Merge",
        completed: false,
        locked: true,
        link: "",
      },
    ],
  },
];

export const androidUnits = [
  {
    title: "Android",
    nodes: [
      {
        title: "Lesson 1",
        type: "lesson",
        description: "Activities",
        completed: false,
        locked: true,
        link: "",
      },
      {
        title: "Lesson 2",
        description: "Fragments",
        completed: false,
        locked: true,
        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 3",
        description: "Lists and RecyclerViews",
        completed: false,
        locked: true,
        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 4",
        description: "Strings and Resources",
        completed: false,
        locked: true,
        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 5",
        description: "Retrofit and Networking",
        completed: false,
        locked: true,
        link: "",
        type: "lesson",
      },
      {
        title: "Lesson 6",
        description: "MVVM",
        completed: false,
        locked: true,
        link: "",
        type: "lesson",
      },
    ],
  },
];
