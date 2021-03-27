import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalTransition } from "react-simple-hook-modal";
import apiData from "../api/practice.json";
import "react-simple-hook-modal/dist/styles.css";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";

const Quiz = ({ slug }) => {
  const { query } = useRouter();
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const inputElement = useRef(null);
  const [interval, setMyInterval] = useState(null);

  let currentLevel = 0;
  let levelString = "Easy";

  let data = [{ text: "", answer: 0 }];
  if (apiData[slug] != null && apiData[slug] != undefined) {
    if (query.level != null && query.level != undefined) {
      currentLevel = Number.parseInt(query.level as string) - 1;
      data = apiData[slug].levels[currentLevel].questions;
      if (currentLevel == 1) {
        levelString = "Medium";
      } else if (currentLevel == 2) {
        levelString = "Hard";
      }
    }
  }

  const length = data.length;

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

  const submitGuess = (e) => {
    e.preventDefault();
    if (Number.parseInt(guess) == data[index].answer) {
      setCorrectGuesses(correctGuesses + 1);
    }
    if (index < length - 1) {
      setIndex(index + 1);
      setGuess("");
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      clearInterval(interval);
      setMyInterval(null);
      setGameOver(true);
    }
  };

  const onCloseGameOver = () => {
    setIndex(0);
    setCorrectGuesses(0);
    setGuess("");
    setGameOver(false);
    setSecondsElapsed(0);
    var newInterval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
    }, 1000);
    setMyInterval(newInterval);
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      submitGuess(e);
    }
  };

  const getAccuracy = () => {
    return Math.round((100 * correctGuesses) / length);
  };

  const component = (
    <div className="py-16 m-8 space-y-8 bg-gray-100 flex flex-col shadow-lg justify-center items-center">
      <p className="text-lg m-4">Level: {levelString}</p>
      <p className="text-lg m-4">
        Question: {index + 1} / {length}
      </p>
      <div className="p-16 bg-purple-300 text-2xl">{data[index].text}</div>
      <input
        id="guess"
        type="number"
        autoComplete="off"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Enter Answer"
        ref={inputElement}
        onKeyPress={handleKeypress}
      />
      <form onSubmit={submitGuess}>
        <button
          type="submit"
          className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );

  return (
    <div>
      <Navbar />

      <div className="pt-4">{component}</div>
      <Modal
        id="game-over-model"
        isOpen={isGameOver}
        transition={ModalTransition.SCALE}
      >
        <div className="py-16 m-8 space-y-8 bg-white flex flex-col justify-center items-center">
          <div className="flex m-4">
            {getAccuracy() > 0 && (
              <img src={"/images/bronze-star.png"} className="w-16" />
            )}
            {getAccuracy() > 30 && (
              <img src={"/images/silver-star.png"} className="w-16" />
            )}
            {getAccuracy() > 70 && (
              <img src={"/images/gold-star.png"} className="w-16" />
            )}
          </div>
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
    ],
    fallback: true,
  };
}

export default Quiz;
