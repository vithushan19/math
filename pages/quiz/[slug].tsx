import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalTransition } from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import { CREATE_GUESS } from "../../graphql/createGuess";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER_SKILLS } from "../../graphql/updateUserSkills";
import { FETCH_USER_SKILLS } from "../../graphql/fetchUserSkills";
import { FETCH_USER_SKILL } from "../../graphql/fetchUserSkill";
import { UNLOCK_NEXT_SKILL } from "../../graphql/unlockNextSkill";
import { generateQuestions } from "../api/quiz/quizQuestionGenerator";
import { v4 as uuidv4 } from "uuid";
import { getSkillIdFromSlug, userId } from "../../graphql/utils/constants";
import { useSession } from "next-auth/client";
import QuestionSet from "../../components/stories/QuestionSet";
import { QuestionType } from "../api/questionTypes";
import { GuessData } from "../api/guessData";
import { AnswerType, Question } from "../api/question";
import { Skill } from "../api/skill";
import { UNLOCK_BADGE } from "../../graphql/unlockBadge";
import { AdditionDoubleDigitWS } from "../../components/stories/WorksheetsObj";
import { FETCH_USER_BADGES } from "../../graphql/fetchUserBadge";
import { getBadgeId } from "../api/badgeHelper";

const Quiz = ({ slug }) => {
  const { query } = useRouter();
  const [session] = useSession();
  const [index, setIndex] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [interval, setMyInterval] = useState(null);
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
      skill: Skill.ADDITION_SINGLE,
    },
  ]);
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const inputElement = useRef(null);
  const length = questionData.length;
  const [sessionId, setSessionId] = React.useState("");

  useEffect(() => {
    const level = Number.parseInt(query.level as string);
    setCurrentLevel(level);
    setQuestionData(generateQuestions(slug, level));
    setSessionId(uuidv4());
  }, []);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  useEffect(() => {
    var newInterval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    setMyInterval(newInterval);

    return () => clearInterval(interval);
  }, []);

  const [createFlashcardGuess, createGuessData] = useMutation(CREATE_GUESS);
  const userSkillResult = useQuery(FETCH_USER_SKILL, {
    variables: {
      skillId: getSkillIdFromSlug(slug),
      userId: userId(session),
    },
  });
  const userSkillsResult = useQuery(FETCH_USER_SKILLS, {
    variables: {
      userId: userId(session),
    },
  });
  const [unlockNextSkill, unlockNextSkillData] = useMutation(
    UNLOCK_NEXT_SKILL,
    {
      refetchQueries: [
        {
          query: FETCH_USER_SKILLS,
          variables: {
            userId: userId(session),
          },
        },
      ],
    }
  );

  const [unlockBadge, unlockBadgeData] = useMutation(UNLOCK_BADGE, {
    refetchQueries: [
      {
        query: FETCH_USER_BADGES,
        variables: {
          userId: userId(session),
        },
      },
    ],
  });

  const submitGuess = (currentGuess: GuessData) => {
    if (currentGuess.isCorrect) {
      setCorrectGuesses(correctGuesses + 1);
    }
    createFlashcardGuess({
      variables: {
        userId: userId(session),
        question: questionData[index].text,
        guess: currentGuess.toString(),
        timeTaken: 3,
        sessionId: sessionId,
        is_correct: currentGuess.isCorrect,
        skillId: getSkillIdFromSlug(slug),
      },
    });
    if (index < length - 1) {
      setIndex(index + 1);
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      clearInterval(interval);
      setMyInterval(null);
      setGameOver(true);

      if (correctGuesses / length >= 0.8) {
        unlockBadge({
          variables: {
            userId: userId(session),
            badgeId: getBadgeId(slug, currentLevel),
          },
        });
      }
    }
  };

  const onCloseGameOver = () => {
    setIndex(0);
    setCorrectGuesses(0);
    setGameOver(false);
    setSecondsElapsed(0);
    setQuestionData(generateQuestions(slug, currentLevel));
    var newInterval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    setMyInterval(newInterval);
  };

  const getAccuracy = () => {
    return Math.round((100 * correctGuesses) / length);
  };

  return (
    <div>
      <Navbar />
      <QuestionSet
        title={slug}
        questionData={questionData}
        index={index}
        inputElement={inputElement}
        submitGuess={submitGuess}
        score={correctGuesses}
        practice={false}
      />
      <Modal
        id="game-over-model"
        isOpen={isGameOver}
        transition={ModalTransition.SCALE}
      >
        <div className="py-16 m-8 space-y-8 bg-white flex flex-col justify-center items-center">
          <p className="text-2xl">Speed </p> {secondsElapsed} seconds
          <p className="text-2xl">Accuracy</p>
          {getAccuracy()}%
          <button
            type="submit"
            className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onCloseGameOver}
          >
            Replay
          </button>
          <Link href="/">
            <button className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Home
            </button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "addition", level: "1" } },
      { params: { slug: "subtraction" } },
      { params: { slug: "multiplication" } },
      { params: { slug: "division" } },
    ],
    fallback: true,
  };
}

export default Quiz;
