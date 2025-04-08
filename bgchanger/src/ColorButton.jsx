// ColorButton.jsx
import React from "react";

const ColorButton = ({ color, onClick }) => {
  return (
    <button
      onClick={() => onClick(color)}
      className="outline-none px-4 py-1 rounded-full text-white m-1"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
};

export default ColorButton;
