import React from "react";

function Loader() {
  return (
    <div className="w-full py-25">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold">Loading</h2>
        <div className="flex justify-center items-center">
          <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500"></div>
          <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-orange-500 ml-3"></div>
          <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
        </div>
        <p className="text-lg text-base-content/50">
          Please wait for a while ...
        </p>
      </div>
    </div>
  );
}

export default Loader;
