import React from "react";

function Button({ children, color, func }) {
  return (
    <button
      onClick={func}
      style={{ backgroundColor: color }}
      className={`py-2 sm:py-3 px-6 sm:px-8 font-semibold rounded-lg text-lg text-white cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:rounded-none active:scale-97`}
    >
      {children}
    </button>
  );
}

export default Button;
