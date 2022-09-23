import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  multiplicationConnectSelector,
  reloadGrid,
  togglePlayer,
} from "../../../../redux/multiplicationConnectSlice";
import DiceSection from "../../../../components/math/multiplicationConnect/DiceSection";
import GameBoard from "../../../../components/math/multiplicationConnect/GameBoard";
import GameBoardBlock from "../../../../components/math/multiplicationConnect/GameBoardBlock";
import PlayerSection from "../../../../components/math/multiplicationConnect/PlayerSection";
import { calculateWinner } from "../../../api/labs/games/multiplication-connect/gameLogic";

const Index: FC = () => {
  const [newGame, setNewGame] = useState(0);
  const { grid, isPlayerOne } = useSelector(multiplicationConnectSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`newGame: ${newGame}`);
    dispatch(reloadGrid(grid));
    !isPlayerOne ? dispatch(togglePlayer(isPlayerOne)) : "";
  }, [newGame]);

  return (
    <div className="flex flex-col justify-center max-w-5xl gap-4 mx-auto">
      <h1 className="mx-10 mb-3 text-4xl font-bold text-center drop-shadow-lg shadow-black-500">
        Welcome to Multiplication Connect Four 🔴🟡
      </h1>
      <PlayerSection />
      <DiceSection />
      <div className="flex pt-5 pb-3 justify-evenly">
        <button
          type="button"
          className="font-mono font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => setNewGame((prev) => prev + 1)}
        >
          🔄 New Game
        </button>
        <button
          type="button"
          className="font-mono font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => {}}
        >
          📝 Game Rules
        </button>
      </div>
      <GameBoard />
    </div>
  );
};

export default Index;
