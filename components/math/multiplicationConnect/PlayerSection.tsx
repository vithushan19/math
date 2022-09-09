import React, { FC } from 'react'
import { Input } from '../../ui/Input'

const PlayerSection:FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-24">
        <input
          className="bg-inherit placeholder:text-inherit max-w-[200px] h-12 text-center cursor-pointer rounded-xl enabled:bg-[#F20000]/40"
          placeholder="Player 1"
        ></input>
        <input
          className="bg-inherit placeholder:text-inherit max-w-[200px] h-12 text-center cursor-pointer rounded-xl enabled:bg-[#FFDB00]/40"
          placeholder="Player 2 (*WIP)"
        ></input>
        <p className="text-md align-middle">👈🏼 Click to rename</p>
      </div>
    </div>
  );
}

export default PlayerSection