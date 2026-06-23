import React from "react";

function Button({ bgColor, children, func }) {
  return (
    <button
      onClick={func}
      className={`${bgColor} py-2 px-6 max-sm:text-sm sm:text-lg font-bold rounded-lg cursor-pointer active:scale-99 capitalize flex-1`}
    >
      {children}
    </button>
  );
}

export default Button;
