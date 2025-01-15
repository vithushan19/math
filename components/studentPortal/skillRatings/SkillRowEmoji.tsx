import React from "react";
import { useDispatch } from "react-redux";

export interface EmojiSliderProps {
  userSkillId: string;
  studentRating: number;
  isEditable: boolean;
}

const EmojiSlider = ({
  userSkillId,
  studentRating,
  isEditable,
}: EmojiSliderProps) => {
  const dispatch = useDispatch();

  function handleChange(e) {
    const newStudentRating = Number(e.target.value) || 0;
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        onChange={handleChange}
        className="w-44"
        value={studentRating}
        disabled={!isEditable}
      />
    </div>
  );
};

export default EmojiSlider;
