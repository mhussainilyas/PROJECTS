import React from "react";

export default function Loader() {
  return (
    <section className="w-full min-h-[calc(100vh-74px)] border-y border-white/9 p-6">
      <div className="mx-auto max-sm:w-full w-125 bg-neutral-950 rounded-xl overflow-hidden drop-shadow-xl">
        <div className="bg-neutral-700 flex items-center p-2 text-whitec relative">
          <div className="flex absolute left-3">
            <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
            <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
          </div>
          <div className="flex-1 text-center text-white uppercase">status</div>
        </div>
        <div className="px-6 py-12">
          <div className="text-center">
            <div className="w-11 aspect-square border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto mb-4"></div>
            <div className="text-white/90 font-semibold">
              <span className="mr-2 text-xl">Loading</span>
              <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">
                .
              </span>
              <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">
                .
              </span>
              <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">
                .
              </span>
            </div>
            <p className="text-white/40 mt-2">Please! wait for a while</p>
          </div>
        </div>
      </div>
    </section>
  );
}
