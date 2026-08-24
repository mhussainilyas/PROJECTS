import React from "react";

function ColorBox({ selectedColors }) {
  return (
    <div
      style={{ backgroundColor: selectedColors }}
      className="w-full sm:w-sm rounded-2xl content-center text-center aspect-square border-2 mb-7"
    >
      <p className="text-xl font-semibold">{selectedColors.toUpperCase()}</p>
    </div>
  );
}

export default ColorBox;
