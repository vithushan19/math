import { QuizViewState } from "../../../../../components/resources/quizzes/shared/types";
export type QuizDataHire = {
  title: string;
  body: string;
  questions: QuizQuestionHire[];
  currentQuestion: number;
  progress: number;
};

export type QuizQuestionHire = {
  title: string;
  body: string;
  maxSelections?: number;
  options: QuizOptionHire[];
};

export type QuizOptionHire = {
  name: string;
  weight: number;
  isSelected: boolean;
  isCorrect: boolean;
};
export const quizData: QuizViewState = {
  title: "How hireable are you?",
  body: "Take this free quiz to reveal your hireability score for software engineering, product, or design roles.",
  questions: [
    {
      title: "What role are you interested in?",
      body: "Select the most relevant role.",
      maxSelections: 1,

      options: [
        {
          name: "Frontend Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Backend Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Game Engineer",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Mobile Engineer",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};

export const quizDataBE: QuizViewState = {
  title: "How hireable are you?",
  body: "Take this free quiz to reveal your hireability score for software engineering, product, or design roles.",
  questions: [
    {
      title: "BE Question 1",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "BE Question 2",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "BE Question 3",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "BE Question 4",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "BE Question 5",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};

export const quizDataFE: QuizViewState = {
  title: "How hireable are you?",
  body: "Take this free quiz to reveal your hireability score for software engineering, product, or design roles.",
  questions: [
    {
      title: "FE Question 1",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "FE Question 2",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "FE Question 3",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "FE Question 4",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "FE Question 5",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};
export const quizDataGE: QuizViewState = {
  title: "How hireable are you?",
  body: "Take this free quiz to reveal your hireability score for software engineering, product, or design roles.",
  questions: [
    {
      title: "GE Question 1",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "GE Question 2",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "GE Question 3",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },

        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "GE Question 4",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "GE Question 5",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};
export const quizDataME: QuizViewState = {
  title: "How hireable are you?",
  body: "Take this free quiz to reveal your hireability score for software engineering, product, or design roles.",
  questions: [
    {
      title: "ME Question 1",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "ME Question 2",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "ME Question 3",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "ME Question 4",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
    {
      title: "ME Question 5",
      body: "Select the most relevant options for this question",
      options: [
        {
          name: "Option 1",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 2",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 3",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 4",
          weight: 0,
          isSelected: false,
        },
        {
          name: "Option 5",
          weight: 0,
          isSelected: false,
        },
      ],
    },
  ],
  currentQuestion: 0,
  progress: 0,
};
