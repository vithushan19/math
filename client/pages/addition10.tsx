import React, { useEffect, useRef, useState } from "react";
import apiData from "../pages/api/addition10.json";

const Addition10 = () => {
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [isGameOver, setGameOver] = useState(false);
  const inputElement = useRef(null);

  const data = apiData["questions"];
  const length = data.length;

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const submitGuess = () => {
    if (index < length - 1) {
      if (Number.parseInt(guess) == data[index].answer) {
        setCorrectGuesses(correctGuesses + 1);
      }
      setIndex(index + 1);
      setGuess("");
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      setGameOver(true);
    }
  };

  let component;
  if (isGameOver) {
    component = <div>Game Over</div>;
  } else {
    component = (
      <div className="py-16 space-y-8 flex flex-col shadow-lg justify-center items-center">
        <p>
          Question {index + 1} / {length}
        </p>
        <div className="p-16 bg-purple-300 text-2xl">{data[index].text}</div>
        <input
          id="guess"
          type="text"
          autoComplete="off"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Enter Answer"
          ref={inputElement}
        />
        <button
          type="submit"
          className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={submitGuess}
        >
          Submit
        </button>
      </div>
    );
  }

  return component;
};

export default Addition10;
