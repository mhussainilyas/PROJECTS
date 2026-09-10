import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer border-2 border-base-300 rounded-lg hover:bg-base-300 active:scale-95 flex items-center justify-center w-8.75 aspect-square"
    >
      {children}
    </button>
  );
}

export default Button;
