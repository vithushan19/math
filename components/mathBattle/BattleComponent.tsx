import React, { useEffect, useRef, useState } from "react";
import { Button } from "../stories/Button";
import * as Colyseus from "colyseus.js";
import Link from "next/link";
import { Player } from "../../pages/games/MathBattle";
import QuestionSet from "../stories/QuestionSet";
import { AnswerType, Question } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import { generateQuestions } from "../../pages/api/quiz/quizQuestionGenerator";
import { Skill } from "../../pages/api/skill";
import { GuessData } from "../../pages/api/guessData";

export interface BattleComponentProps {
  questions: Question[];
  room: Colyseus.Room;
}

const BattleComponent = ({ questions, room }: BattleComponentProps) => {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);
  const inputElement = useRef(null);
  const [winnerId, setWinnerId] = useState("");

  React.useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const submitGuess = (currentGuess: GuessData) => {
    console.log("currentGuess", currentGuess);
    if (!currentGuess.isCorrect) {
      setTime((time) => time + 10000);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      // notify colyseus that this player submitted a guess
    } else {
      // TODO currently whoever calls this is declared the winner
      room.send("requestGameOver", { id: room.sessionId, score: time });
    }
  };
  room.onMessage("showGameOver", (message) => {
    setWinnerId(message);
  });
  return (
    <div>
      {winnerId === "" ? (
        <QuestionSet
          title={"Battle"}
          questionData={questions}
          index={index}
          inputElement={inputElement}
          submitGuess={submitGuess}
          score={1}
        />
      ) : winnerId === room.sessionId ? (
        "Winner"
      ) : (
        "Loser"
      )}
      <p>{time}</p>
    </div>
  );
};
export default BattleComponent;
