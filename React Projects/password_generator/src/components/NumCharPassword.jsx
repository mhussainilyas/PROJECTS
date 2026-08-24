import React from "react";

function NumCharPassword({
  isNumAllow,
  setIsNumAllow,
  isCharAllow,
  setIsCharAllow,
}) {
  return (
    <div className="select-none flex max-sm:flex-col sm:items-center gap-5">
      <label
        htmlFor="numberAllow"
        className="flex items-center gap-2 text-lg cursor-pointer"
      >
        <input
          type="checkbox"
          id="numberAllow"
          checked={isNumAllow}
          onChange={(e) => setIsNumAllow(e.target.checked)}
          className="w-5 h-5 accent-green-500"
        />{" "}
        Number Allowed
      </label>

      <label
        htmlFor="characterAllow"
        className="flex items-center gap-2 text-lg cursor-pointer"
      >
        <input
          type="checkbox"
          id="characterAllow"
          checked={isCharAllow}
          onChange={(e) => setIsCharAllow(e.target.checked)}
          className="w-5 h-5 accent-green-500"
        />{" "}
        Character Allowed
      </label>
    </div>
  );
}

export default NumCharPassword;
