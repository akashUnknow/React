import { useState } from "react";

import "./App.css";
import ColorButton from "./ColorButton";

function App() {
  const [color, Setcolor] = useState("olive");
  const colorArr = [
    "red",
    "Tomato",
    "Orange",
    "MediumSeaGreen",
    "DodgerBlue",
    "Gray",
    "SlateBlue",
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          {colorArr.map((color, index) => (
            <ColorButton key={index} color={color} onClick={Setcolor} />
          ))}
          {/* {colorArr.map((color, index) => (
            <button
              key={index}
              onClick={() => Setcolor(color)}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: color }}
            >
              {color}
            </button>
          ))} */}

          {/* <button
            onClick={() => Setcolor("red")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => Setcolor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Green
          </button>

          <button
            onClick={() => Setcolor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Yellow
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
