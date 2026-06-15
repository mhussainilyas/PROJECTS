import React from "react";
import data from "../api/questions.json";
import { useState } from "react";

function Question({ setScore, setIsOver, setIndex, index }) {
  function handleOptionClick(option) {
    if (option === data[index].answer) {
      setScore((prev) => prev + 1);
    }

    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  }

  return (
    <div className="mt-8">
      <p className="text-sm mb-2 font-medium border border-white/10 py-2 px-4 rounded w-fit">
        Question {index + 1} / {data.length}
      </p>
      <h2 className="text-xl">{data[index].question}</h2>
      <div className="flex flex-col gap-3 mt-8">
        {data[index].options.map((opt, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(opt)}
            className="w-full p-4 bg-neutral-900 text-neutral-500 font-semibold rounded cursor-pointer transition-all duration-200 active:scale-98 hover:text-white"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
