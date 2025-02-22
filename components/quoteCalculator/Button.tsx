import React from "react";

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      type="button"
      className={`px-4 text-white hover:bg-white hover:text-black-500 border-white border-2 font w-32 h-16 rounded-full `}
    >
      <p>{label}</p>
    </button>
  );
};

export default Button;
