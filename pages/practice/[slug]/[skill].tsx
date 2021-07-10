import React, { useEffect, useRef, useState } from "react";
import QuestionSet from "../../../components/stories/QuestionSet";
import { QuestionType } from "../../api/questionTypes";
import { GuessData } from "../../api/guessData";
import { AnswerType, Question } from "../../api/question";
import { Skill } from "../../api/skill";
import { generatePracticeQuestions } from "../../api/practice/practiceQuestionGenerator";
import { Button } from "../../../components/stories/Button";
import ReactCardFlip from "react-card-flip";
import Card from "../../../components/stories/Card";
import Hint from "../../../components/stories/Hint";
import EmojiSlider from "../../../components/stories/EmojiSlider";
import Link from "next/link";
import { delay } from "lodash";
import { UPDATE_USER_SKILL_EMOJI } from "../../../graphql/updateUserEmoji";
import { useMutation } from "@apollo/client";
import { userId } from "../../../graphql/utils/constants";
import { useSession } from "next-auth/client";
import { FETCH_USER_EMOJIS } from "../../../graphql/fetchUserEmojis";
import DiagnosticNavbar from "../../../components/DiagnosticNavbar";

const PracticeQuiz = ({ slug, skill }) => {
  enum STAGE {
    QUESTION,
    EMOJI,
    END_SESSION,
  }
  const [session, user] = useSession();
  const [isFlipped, setIsFlipped] = useState(false);
  const [display, setDisplay] = useState("flex");
  const [continueFaded, setContinueFaded] = useState(0);
  const [isFaded, setIsFaded] = useState(1);
  const [index, setIndex] = useState(0);
  const [emoji, setEmoji] = useState(0);
  const [guessAttempt, setGuessAttempt] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [indexCap, setIndexCap] = useState(false);
  const [nextQuestionButton, setNextQuestionButton] = useState(false);
  const [continueButton, setContinueButton] = useState(false);
  const [interval, setMyInterval] = useState(null);
  const [stage, setStage] = useState(STAGE.QUESTION);
  const [correctGuess, setCorrectGuess] = useState(0);
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
      skill: Skill.ADDITION_SINGLE,
    },
  ]);

  let getSkillId = (skill: any, slug: any) => {
    //Note: The skill Ids are determined based of the values save in the skills table with graph
    switch (slug) {
      case "addition":
        switch (skill) {
          case "add-one-digit":
            return 1;
          case "add-two-digit":
            return 2;
          case "add-three-digit":
            return 3;
          case "addition-properties":
            return 4;
        }
      case "subtraction":
        switch (skill) {
          case "subtract-single-digit":
            return 34;
          case "subtract-double-digit":
            return 35;
          case "subtract-triple-digit":
            return 36;
        }
      case "multiplication":
        switch (skill) {
          case "total-items-equal-groups":
            return 37;
          case "multiply-5x5":
            return 38;
          case "multiply-10x10":
            return 39;
        }
      case "division":
        switch (skill) {
          case "share-8-equally":
            return 40;
          case "divide-12-equally":
            return 41;
          case "divide-100-equally":
            return 42;
        }
    }
  };

  const [updateUserEmoji, updateUserEmojiMutation] = useMutation(
    UPDATE_USER_SKILL_EMOJI,
    {
      refetchQueries: [
        {
          query: FETCH_USER_EMOJIS,
          variables: {
            userId: userId(session),
            skillId: [getSkillId(skill, slug)],
          },
        },
      ],
    }
  );
  const inputElement = useRef(null);

  function getComponent() {
    const sessionEnd = (
      <div>
        <div>
          <img src="/images/goodWork.png" className="w-96 mt-12"></img>
        </div>

        <div className="flex flex-row space-x-16">
          <Link href={`/practice`}>
            <Button label="Home" backgroundColor="purple"></Button>
          </Link>
          <Button
            label="Practice again"
            backgroundColor="green"
            onClick={() => window.location.reload()}
          ></Button>
        </div>
      </div>
    );

    const emojiFeedback = (
      <div>
        <Card size="large">
          <div
            className={`grid-cols-1 grid justify-items-center space-y-8 z-10 transition-opacity duration-150 ease-in`}
          >
            <p className="font-bold mt-12">
              How confident were you with those practice questions?
            </p>
            <EmojiSlider callback={setEmojiCallback} />
            <Button
              label="Submit"
              backgroundColor="blue"
              onClick={saveEmoji}
            ></Button>
          </div>
        </Card>
      </div>
    );

    const questionSet = (
      <QuestionSet
        title={slug}
        questionData={questionData}
        index={index}
        inputElement={inputElement}
        submitGuess={submitGuess}
        score={correctGuess}
        HUDEnabled={false}
      />
    );
    let stageLevel = stage;

    switch (stageLevel) {
      case STAGE.QUESTION:
        return questionSet;
      case STAGE.EMOJI:
        return emojiFeedback;
      case STAGE.END_SESSION:
        return sessionEnd;
    }
  }

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setQuestionData(generatePracticeQuestions(slug, skill));
  }, []);

  const applyNextQuestion = () => {
    toggleFlip();

    setNextQuestionButton(false);
    setGuessAttempt("");
    setCorrectAnswer(false);
    setWrongAnswer(false);
    nextQuestion();
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const applyContinuePage = async () => {
    setIsFaded(0);
    await delay(150);
    setDisplay("hidden");
    setContinueFaded(100);
    setStage(STAGE.END_SESSION);
  };

  const nextQuestion = () => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      setIndex(index + 1);
      clearInterval(interval);
      setMyInterval(null);
    }
  };

  const saveEmoji = () => {
    updateUserEmoji({
      variables: {
        userId: userId(session),
        skillId: getSkillId(skill, slug),
        emoji: emoji,
      },
    });
    setStage(STAGE.END_SESSION);
    applyContinuePage;
  };

  const setEmojiCallback = (val: number) => {
    setEmoji(val);
  };

  const reviewPage = () => {
    setStage(STAGE.EMOJI);
    toggleFlip();
  };

  const submitGuess = (guess: GuessData) => {
    if (isFlipped && index <= questionData.length - 1) {
      if (index == questionData.length - 1) {
        reviewPage();
      } else {
        applyNextQuestion();
      }
    } else {
      toggleFlip();
      if (index < questionData.length && !indexCap) {
        if (guess.guess != "") {
          setGuessAttempt(guess.guess.toString());
        }
        if (index >= questionData.length - 1) {
          setIndexCap(true);
        }
        if (guess.isCorrect) {
          setCorrectGuess(correctGuess + 1);
          setCorrectAnswer(true);
        } else {
          setWrongAnswer(true);
        }
        if (index < questionData.length - 1) {
          setNextQuestionButton(true);
        } else {
          setContinueButton(true);
        }
      }
    }
  };
  return (
    <div className="bg-blue-100 heropattern-architect-blue-50 h-md">
      <DiagnosticNavbar />
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex flex-row w-96 p-4 justify-between bg-gray-400 shadow-lg rounded-lg ">
          <p className="font-semibold">
            Question: {index + 1} / {questionData.length}
          </p>
          <p className="font-semibold">
            Score: {correctGuess} / {questionData.length}
          </p>
        </div>
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          infinite={true}
        >
          <div className="align-middle w-50">{getComponent()}</div>
          <div
            className={`${display} flex-col justify-center items-center gap-8 transition-opacity duration-150 ease-in-out opacity-${isFaded}`}
          >
            <div className={"justify-items-center align-middle w-50 mt-8"}>
              <Card size="large">
                {correctAnswer ? (
                  <p className="font-bold text-gray-400 text-xl">
                    Correct,
                    <span className="font-bold text-green-400">
                      {" " + guessAttempt + " "}
                    </span>
                    was the answer!
                  </p>
                ) : wrongAnswer ? (
                  <div className="italic text-gray-400 font-bold space-y-8">
                    <span>The correct answer was </span>
                    <span className="font-bold text-green-400">
                      {questionData[index].answer.toString()}&nbsp;
                    </span>
                    <br></br>

                    <span>
                      {guessAttempt != "" ? (
                        <span>
                          <span>Your answer was </span>
                          <span className="font-bold text-red-500">
                            {guessAttempt}
                          </span>
                        </span>
                      ) : (
                        <span className="font-bold">
                          Don't forget to answer next time!
                        </span>
                      )}
                    </span>
                  </div>
                ) : (
                  ""
                )}
                {nextQuestionButton && (
                  <Button
                    label="Next Question"
                    backgroundColor="yellow"
                    onClick={applyNextQuestion}
                  ></Button>
                )}
                {continueButton && (
                  <Button
                    label="Continue"
                    backgroundColor="green"
                    onClick={reviewPage}
                  ></Button>
                )}
              </Card>
            </div>
          </div>
        </ReactCardFlip>
      </div>
      {/* {!continueButton &&
        !nextQuestionButton &&
        stage == STAGE.QUESTION &&
        questionData[index] && <Hint skill={questionData[index].skill}></Hint>}
    </div> */}
      {/* might be useful later */}
    </div>
  );
};
export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
      skill: params.skill,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "addition", skill: "add-one-digit" } },
      { params: { slug: "addition", skill: "add-two-digit" } },
      { params: { slug: "addition", skill: "add-three-digit" } },
      { params: { slug: "addition", skill: "addition-properties" } },
      { params: { slug: "subtraction", skill: "subtract-single-digit" } },
      { params: { slug: "subtraction", skill: "subtract-double-digit" } },
      { params: { slug: "subtraction", skill: "subtract-triple-digit" } },
      { params: { slug: "multiplication", skill: "total-items-equal-groups" } },
      { params: { slug: "multiplication", skill: "multiply-5x5" } },
      { params: { slug: "multiplication", skill: "multiply-10x10" } },
      { params: { slug: "division", skill: "share-8-equally" } },
      { params: { slug: "division", skill: "divide-12-equally" } },
      { params: { slug: "division", skill: "divide-100-equally" } },
    ],
    fallback: true,
  };
}

export default PracticeQuiz;
