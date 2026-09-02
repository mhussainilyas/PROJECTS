import React from "react";

export default function Loader() {
  return (
    <section className="w-full">
      <div class="flex justify-center items-center h-[calc(100vh-60px)]">
        <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-orange-500"></div>
        <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
        <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
      </div>
    </section>
  );
}
