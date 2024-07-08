import React from "react";

interface ButtonStyledProps {
  color: string;
  text: string;
  onClick?: () => void;
}

function defineColor(color: string) {
  switch (color) {
    case "blue":
      return "bg-blue-500";
    case "red":
      return "bg-red-500";
    case "green":
      return "bg-green-500";
    case "yellow":
      return "bg-yellow-500";
    default:
      return "bg-blue-500";
  }
}

const ButtonStyled = React.forwardRef<HTMLButtonElement, ButtonStyledProps>(
  ({ color, text, onClick }, ref) => {
    const bgColor = defineColor(color);
    return (
      <button
        ref={ref}
        className={`${bgColor} text-white font-bold py-2 px-4 rounded`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
);

ButtonStyled.displayName = "ButtonStyled";
export { ButtonStyled };
