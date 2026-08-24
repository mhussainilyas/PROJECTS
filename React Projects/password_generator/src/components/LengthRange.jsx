import React from "react";

function LengthRange({ length, setLength }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <p className="sm:text-lg">0</p>
        <input
          type="range"
          min={0}
          max={48}
          className={`cursor-pointer ${length < 16 ? "accent-red-400" : length < 32 ? "accent-green-400" : "accent-b;ue-500"} flex-1`}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <p className="sm:text-lg">48</p>
      </div>
      <p className="">
        Password Length ={" "}
        <span className="font-bold">{length.toString().padStart(2, "0")}</span>
      </p>
    </div>
  );
}

export default LengthRange;
