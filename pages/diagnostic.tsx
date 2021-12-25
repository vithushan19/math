import React, { useEffect, useRef, useState } from "react";
import DiagnosticResults from "../components/assessment/DiagnosticResults";
import DiagnosticTestForm from "../components/assessment/DiagnosticTestForm";
import QuestionSet from "../components/stories/QuestionSet";
import { GuessData } from "./api/guessData";
import { Question } from "./api/question";
import { DiagnosticState, setDiagnostic } from "../redux/diagnosticSlice";
import { useAppDispatch } from "../redux/store";
import { Grade, Skill, Unit } from "./api/skill";
import { getNextQuestion } from "./api/diagnostic/diagnosticQuestionGenerator";
import { getWorkSheets } from "./api/worksheets";
import {
  getCalculatedGrade,
  getGradeLevelForUnit,
  getResultForSkill,
} from "./api/diagnostic/diagnosticGrader";
import { generateQuestionForSkill } from "./api/questionGenerator";
import Navbar from "../components/Navbar";
import getFourthGradeQuestion, {
  getFifthGradeQuestion,
  getSixthGradeQuestion,
} from "./api/diagnostic/juniorDiagnosticQuestionGenerator";
import Head from "next/head";

enum STAGE {
  CREATE,
  TEST,
  RESULTS,
}

const Diagnostic = () => {
  const TOTAL_QUESTIONS = 12;
  const QUESTIONS_PER_UNIT = 3;

  const dispatch = useAppDispatch();
  const [opacity, setOpacity] = useState(1);
  const [isShaking, setIsShaking] = useState(false);
  const [grade, setGrade] = useState<string>( "Grade 1");
  const [stage, setStage] = useState(STAGE.CREATE);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [guesses, setGuesses] = useState<Array<string>>([]);
  const [guessAns, setGuessAns] = useState<Array<string>>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<Question[]>([]);
  const [juniorDiagnosticQuestions, setJuniorDiagnosticQuestions] = useState<Question[]>([]);
  const [currentJuniorQuestion, setCurrentJuniorQuestion] = useState<number>(0)
  const [gradeLevel, setGradeLevel] = useState<String>("Grade 4")

  const getGradeRange: () => string = () => {
    return ["Grade 1", "Grade 2", "Grade 3"].includes(grade)
      ? "Primary"
      : "Junior";
  };

  const [questionsLeftInUnit, setQuestionsLeftInUnit] = useState<number>(
    QUESTIONS_PER_UNIT
  );
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const inputElement = useRef(null);

  // create this in the backend and then call into the frontend

  const requestEmail = async () => {

    const url = "https://math-app-1.herokuapp.com/email";

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    await fetch(url, options);

  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // looks at gradeLevel and returns questions
  const getGradeList = (gradeLevel) => {

    if (gradeLevel == "Grade 4") {
      return getFourthGradeQuestion()
    } else if (gradeLevel == "Grade 5") {
      return getFifthGradeQuestion()
    } else if (gradeLevel == "Grade 6") {
      return getSixthGradeQuestion()
    }
  };

  // Tells us whether we need to move to the next unit
  const shouldMoveToNextUnit = () => {
    const lastQuestionsInUnit = [2, 5, 8];
    if (lastQuestionsInUnit.includes(currentJuniorQuestion)) {
      return true;
    } else {
      return false;
    }
  };

  const submitGuess = async (guessData: GuessData) => {
    if (guessData.guess == "" || guessData.guess == " groups of ") {
      setIsShaking(true);
      return;
    }

    // Save if they guessed the question correctly or not
    let updateGuessAns;
    if (guessData.isCorrect) {
      setCorrectGuesses(correctGuesses + 1);
      updateGuessAns = guessAns.concat("Correct");
    } else {
      updateGuessAns = guessAns.concat("Incorrect");
    }
    setGuessAns(updateGuessAns);

    // Save the actual guess for reporting
    let updateGuess;
    updateGuess = guesses.concat(guessData.guess.toString());
    setGuesses(updateGuess);
    const newAnsweredQuestions = [...answeredQuestions, currentQuestion];
    setAnsweredQuestions(newAnsweredQuestions);

    // If user is not at the end of the test
    if (newAnsweredQuestions.length < TOTAL_QUESTIONS) {
      setOpacity(0);
      await delay(150);
      setOpacity(1);

      if (getGradeRange() == "Junior") {
        setCurrentJuniorQuestion(currentJuniorQuestion + 1);

        if (shouldMoveToNextUnit()) {
          setJuniorDiagnosticQuestions(getFourthGradeQuestion())
        } else if (guessData.isCorrect) {
          if (gradeLevel == "Grade 4") {
            const fifthGradeList = getGradeList("Grade 5")
            setJuniorDiagnosticQuestions(fifthGradeList)
            setGradeLevel("Grade 5")
          } else if (gradeLevel == "Grade 5") {
            const sixthGradeList = getGradeList("Grade 6")
            setJuniorDiagnosticQuestions(sixthGradeList)
            setGradeLevel("Grade 6")
          }
        } else if (!guessData.isCorrect && juniorDiagnosticQuestions == getFifthGradeQuestion()) {
          setJuniorDiagnosticQuestions(getFourthGradeQuestion())
        }
      } else {
        // Primary grades questions
        const newQuestionsLeftInUnit =
          questionsLeftInUnit == 0
            ? QUESTIONS_PER_UNIT - 1
            : questionsLeftInUnit - 1;
        const nextQuestion = getNextQuestion(
          currentQuestion,
          guessData.isCorrect,
          newQuestionsLeftInUnit
        );
        setCurrentQuestion(nextQuestion);
        setQuestionsLeftInUnit(newQuestionsLeftInUnit);
      }
    }

    // If user is at the end of the test
    if (newAnsweredQuestions.length >= TOTAL_QUESTIONS) {
      const results: DiagnosticState = {
        questions: newAnsweredQuestions,
        guessAns: updateGuessAns,
        guesses: updateGuess,
        grade: grade,
        email: email,
        firstName: name,
        lastName: lastName,
      };
      dispatch(setDiagnostic(results));
      requestEmail();
      setStage(STAGE.RESULTS);
    }
  };

  const createDiagnostic = (grade: string) => {
    setGrade(grade);
    setStage(STAGE.TEST);
  };

  const onIDontKnowClick = () => {
    submitGuess({
      guess: "I don't know",
      isCorrect: false,
    });
  };

  useEffect(() => {
    setJuniorDiagnosticQuestions(getFourthGradeQuestion());
  }, []);

  useEffect(() => {
    setCurrentQuestion(generateQuestionForSkill(Skill.ADDITION_SINGLE));
  }, [grade]);

  let component;
  switch (stage) {
    case STAGE.CREATE:
      component = (
        <DiagnosticTestForm
          onClick={createDiagnostic}
          email={email}
          setEmail={setEmail}
          firstName={name}
          setFirstName={setName}
          lastName={lastName}
          setLastName={setLastName}
          grade={grade}
          setGrade={setGrade}
        />
      );
      break;
    case STAGE.TEST:
      component = (
        <div>
          <div className="flex justify-between pt-4 px-8 items-center">
            <p className="font-semibold text-gray-500">
              Question: {answeredQuestions.length} / 12
            </p>
            <p
              onClick={onIDontKnowClick}
              className="bg-gray-200 hover:bg-blue-200 cursor-pointer p-2 rounded-xl shadow-md font-semibold text-gray-500"
            >
              I don't know 🤔
            </p>
          </div>
          <div
            className={isShaking ? "animate-shake" : ""}
            onAnimationEnd={() => setIsShaking(false)}
          >
            {(getGradeRange() == "Primary" && (
              <QuestionSet
                title=""
                questionData={[currentQuestion]}
                index={0}
                inputElement={inputElement}
                submitGuess={submitGuess}
                score={correctGuesses}
                diagnostic={{ isDiagnostic: true, opacityVal: opacity }}
              />
            )) ||
              (getGradeRange() == "Junior" && (
                <QuestionSet
                  title=""
                  questionData={juniorDiagnosticQuestions}
                  index={currentJuniorQuestion}
                  inputElement={inputElement}
                  submitGuess={submitGuess}
                  score={correctGuesses}
                  diagnostic={{ isDiagnostic: true, opacityVal: opacity }}
                />
              ))}
          </div>
        </div>
      );
      break;
    case STAGE.RESULTS:
      component = (
        <DiagnosticResults
          correctGuesses={correctGuesses}
          numberOfQuestions={TOTAL_QUESTIONS}
        />
      );
      break;
  }
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100 h-screen">
      <Head>
        <title>Diagnostic Test</title>
      </Head>
      <Navbar />
      <div className="p-4 flex flex-col items-center justify-center">
        {component}
      </div>
    </div>
  );
};

export default Diagnostic;
