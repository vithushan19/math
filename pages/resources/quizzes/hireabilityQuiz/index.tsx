import React, { useEffect, useState } from "react";
import HireabilityResults from "../../../../components/resources/quizzes/hirabilityQuiz/HireabilityResults";
import SkillSelections from "../../../../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../../../../components/resources/quizzes/shared/StartQuiz";
import {
  QuizOptionViewState,
  QuizViewState,
} from "../../../../components/resources/quizzes/shared/types";
import QuizTransition from "../../../../components/ui/animations/QuizTransition";
import { quizDataBE } from "../../../api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuizBE";
import { quizDataFE } from "../../../api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuizFE";
import { quizDataGE } from "../../../api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuizGE";
import { quizDataME } from "../../../api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuizME";

export enum Stage {
  START,
  QUESTIONS,
  RESULTS,
}

export default function HireabilityQuiz() {
  const [selectedQuizData, setSelectedQuizData] = useState(quizDataFE);
  const initializeQuizViewState = {
    title: selectedQuizData.title,
    body: selectedQuizData.body,
    questions: selectedQuizData.questions.map((question) => {
      return {
        title: question.title,
        body: question.body,
        maxSelections: question.maxSelections,
        options: question.options.map((option) => {
          return { ...option, isSelected: false };
        }),
      };
    }),
    currentQuestion: 0,
    progress: 0,
  };
  // Step1: useEffect with selectedquizDataFE in the dependency array
  useEffect(() => {
    const initializeQuizViewState = {
      title: selectedQuizData.title,
      body: selectedQuizData.body,
      questions: selectedQuizData.questions.map((question) => {
        return {
          title: question.title,
          body: question.body,
          maxSelections: question.maxSelections,

          options: question.options,
        };
      }),
      currentQuestion: 0,
      progress: 0,
    };
    setQuizViewState(initializeQuizViewState);
  }, [selectedQuizData]);
  // Step2: build handleEngineeringOption to setSelectedquizDataFE to the selected engineering option
  // Step2a: prevent user from navigating forward unless they select an engineering quiz
  const [stage, setStage] = useState<Stage>(Stage.START);
  const [animationComplete, setAnimationComplete] = useState(true);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>(
    initializeQuizViewState
  );
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });

  const handleNextClick = () => {
    setAnimationComplete(false);

    if (
      stage == Stage.QUESTIONS &&
      quizViewState.currentQuestion < quizDataFE.questions.length - 1
    ) {
      setQuizViewState({
        ...quizViewState,
        currentQuestion: quizViewState.currentQuestion + 1,
      });
    } else setStage((prevStage) => prevStage + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleBackClick = () => {
    setAnimationComplete(false);
    if (stage == Stage.QUESTIONS && quizViewState.currentQuestion > 0) {
      setQuizViewState({
        ...quizViewState,
        currentQuestion: quizViewState.currentQuestion - 1,
      });
    } else setStage((prevStage) => prevStage - 1);
  };

  const handleOptionClick = (option: QuizOptionViewState) => {
    if (option.name === "Backend Engineer") {
      setSelectedQuizData(quizDataBE);
    } else if (option.name === "Game Engineer") {
      setSelectedQuizData(quizDataGE);
    } else if (option.name === "Mobile Engineer") {
      setSelectedQuizData(quizDataME);
    }

    setQuizViewState((prevQuizViewState) => {
      const selectedQuizOption = prevQuizViewState.questions.map(
        (question) => ({
          ...question,
          options: question.options.map((questionOption) =>
            questionOption.name === option.name
              ? {
                  ...questionOption,
                  isSelected: !questionOption.isSelected,
                }
              : questionOption
          ),
        })
      );

      return {
        ...prevQuizViewState,
        questions: selectedQuizOption,
      };
    });
  };

  // Render the appropriate component based on the stage
  switch (stage) {
    case Stage.START:
      return (
        <QuizTransition
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
        >
          {animationComplete && (
            <StartQuiz
              onNextClick={handleNextClick}
              title={quizDataFE.title}
              body={quizDataFE.body}
              setUserInput={setUserInput}
              userInput={userInput}
            />
          )}
        </QuizTransition>
      );

    case Stage.QUESTIONS:
      return (
        <QuizTransition
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
        >
          {animationComplete && (
            <SkillSelections
              onNextClick={handleNextClick}
              onBackClick={handleBackClick}
              handleOptionClick={handleOptionClick}
              quizViewState={quizViewState}
            />
          )}
        </QuizTransition>
      );

    case Stage.RESULTS:
      return (
        <QuizTransition
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
        >
          {animationComplete && (
            <HireabilityResults
              onBackClick={handleBackClick}
              quizViewState={quizViewState}
            />
          )}
        </QuizTransition>
      );
    default:
      return (
        <QuizTransition
          animationComplete={animationComplete}
          setAnimationComplete={setAnimationComplete}
        >
          {animationComplete && (
            <StartQuiz
              onNextClick={handleNextClick}
              title={"Career in Tech Personality Quiz"}
              body={
                "Take this free quiz to find out what jobs in tech fit you best!"
              }
              setUserInput={setUserInput}
              userInput={userInput}
            />
          )}
        </QuizTransition>
      );
  }
}

function getLayout(page: React.ReactNode) {
  return <div>{page}</div>;
}

HireabilityQuiz.getLayout = getLayout;
