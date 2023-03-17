export type UnitNode =
  | {
      title: string;
      description: string;
      completed: boolean;
      locked: boolean;
      link: string;
      type: "lesson" | "quiz" | "assignment";
    }
  | {
      type: "grayedOut";
    }
  | {
      type: "freemiumMessage";
      description: string;
      link: string;
    };
export interface Unit {
  title: string;
  nodes: UnitNode[];
}

// Database Layer
export const introUnit: Unit = {
  title: "Introduction",
  nodes: [
    {
      title: "Lesson",
      description: "Intro to Web Development",
      type: "lesson",
      completed: false,
      locked: false,
      link: "web/introduction",
    },
  ],
};

export const githubUnit: Unit = {
  title: "Github",
  nodes: [
    {
      title: "Lesson",
      description: "Deploying a Project on Github & Vercel",
      completed: false,
      locked: false,
      link: "web/React/github",
      type: "lesson",
    },
  ],
};

export const tailwindUnit: Unit = {
  title: "TailwindCSS",
  nodes: [
    {
      title: "Lesson",
      description: "TailwindCSS - Grid & Flexbox",
      completed: false,
      locked: false,
      link: "web/React/tailwindcss-gridflex",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "TailwindCSS - General Styling",
      completed: false,
      locked: false,
      link: "web/React/tailwindcss-colourstyling",
      type: "lesson",
    },
    {
      title: "Assignment 1",
      description: "TailwindCSS Assignment",
      completed: false,
      locked: false,
      link: "web/React/assignments/tailwindAssignment",
      type: "lesson",
    },
  ],
};

export const reactUnit: Unit = {
  title: "React",
  nodes: [
    {
      title: "Lesson",
      description: "Components",
      completed: false,
      locked: false,
      link: "web/React/components",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Props",
      completed: false,
      locked: false,
      link: "web/React/props",
      type: "lesson",
    },
    {
      title: "Assignment 2",
      description: "Components and Props",
      completed: false,
      locked: false,
      link: "web/React/assignments/componentsAssignment",
      type: "lesson",
    },

    {
      title: "Lesson",
      description: "Hooks - useState",
      completed: false,
      locked: true,
      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Hooks - useEffect",
      completed: false,
      locked: true,
      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Conditional Rendering",
      completed: false,
      locked: true,
      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Lesson",
      description: "Handling Events",
      completed: false,
      locked: true,
      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Assignment 3",
      description: "Building a tic tac toe game",
      completed: false,
      locked: true,
      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Assignment 4",
      description: "Build a K-12 Math Quiz",
      completed: false,
      locked: true,
      link: "react/React/1",
      type: "lesson",
    },
    {
      title: "Assignment 5",
      description: "Build a tutorial to a Leetcode question",
      completed: false,
      locked: true,
      link: "react/React/1",
      type: "lesson",
    },
  ],
};

export const backendUnit: Unit = {
  title: "Backend",
  nodes: [
    {
      title: "Lesson",
      description: "Intro to Databases",
      type: "lesson",
      completed: false,
      locked: true,
      link: "react/React/1",
    },
    {
      title: "Lesson",
      description: "Database Reads",
      type: "lesson",
      completed: false,
      locked: true,
      link: "react/React/1",
    },
    {
      title: "Lesson",
      description: "Database Writes",
      type: "lesson",
      completed: false,
      locked: true,
      link: "react/React/1",
    },
    {
      title: "Assignment 6",
      description: "Capstone Project",
      completed: false,
      locked: true,
      link: "react/React/1",
      type: "assignment",
    },
  ],
};

export const reactUnits: Unit[] = [
  introUnit,
  githubUnit,
  tailwindUnit,
  reactUnit,
  backendUnit,
];

export const interviewUnits: Unit[] = [
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
