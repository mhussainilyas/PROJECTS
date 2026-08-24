import React from "react";
import Button from "../utilities/Button";

function Buttons({ setSelectedColors }) {
  const colorArr = [
    "lightcoral",
    "blue",
    "orange",
    "lightseagreen",
    "red",
    "tomato",
  ];

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap my-10">
      {colorArr.map((col, index) => (
        <Button key={index} color={col} func={() => setSelectedColors(col)}>
          {col}
        </Button>
      ))}
    </div>
  );
}

export default Buttons;
