import React, { useState } from 'react'
import DiceSection from '../../../../components/math/multiplicationConnect/DiceSection';
import GameBoard from '../../../../components/math/multiplicationConnect/GameBoard';
import PlayerSection from '../../../../components/math/multiplicationConnect/PlayerSection';
import { getRandomItemFromArray } from '../../../api/random';

const createGrid = () => {
  let arr = [];
  let grid = [];
  for (let i = 4; i < 25; i++) {
    (i%2===0) ? arr.push(i) : "";
  }
  for (let i = 0; i < 35; i++) {
    let gridNumber = getRandomItemFromArray(arr);
    grid.push({
      id: i,
      gridNumber: gridNumber,
      isSelected: false,
    });
  }
  return grid;
}; 

export const calculateWinner = (grid) => {
  // on block press log grid to console
  // on block press run calculateWinner algo
  console.log(grid);
}

const Index = () => {
  //Extractd to App level State to determine Winner here
  const [grid, setGrid] = useState(createGrid);

  return (
    <div className='flex flex-col gap-10 max-w-5xl'>
        <h1 className='text-3xl text-center'>Welcome to Multiplication Connect Four 🔴🟡</h1>
        <PlayerSection />
        <DiceSection />
        <GameBoard grid={grid}/>
        {/* Send grid to GameBoardBlock as prop and call this function on block click {logFunction(grid)} */}
    </div>
  )
}

export default Index;