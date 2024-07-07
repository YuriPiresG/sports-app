import React from "react";

interface ButtonStyledProps {
  color: string;
  text: string;
  onClick?: () => void;
}

export const ButtonStyled = ({ color, text, onClick }: ButtonStyledProps) => {
  return (
    <button
      className={`bg-${color}-500 text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
