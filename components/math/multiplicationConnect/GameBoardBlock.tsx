import React, {useState} from 'react'
import { calculateWinner } from '../../../pages/studentPortal/labs/multiplication-connect/Index';


const blockClick = (block, grid) => {
    (block.isSelected===false) ? block.isSelected=true : block.isSelected=false;
    calculateWinner(grid);
    return {...block};
}

const GameBoardBlock = ({ gridData, blockData}) => {
  const [block, setBlock] = useState(blockData);

  return (
    <div
      onClick={()=>setBlock(blockClick(block, gridData))}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full    
            ${block.isSelected===false ? "hover:bg-[#F20000]/40 hover:animate-pulse" : "bg-[#F20000]/60"}`}
    >
      <p>{block.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock