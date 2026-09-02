import React from "react";
import HeroImage from "../assets/news-app-hero-img.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="w-full lg:h-[calc(100vh-60px)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="px-6 py-12 flex flex-col justify-center max-lg:items-center max-lg:text-center">
          <h4 className="bg-base-200 w-fit py-2 px-4 rounded-full text-sm">
            STAY INFORMED • STAY AHEAD
          </h4>
          <h2 className="text-2xl lg:text-4xl mt-5">Your World. Your News.</h2>
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-semibold mt-2">
            Your Royal Source of Truth.
          </h1>
          <p className="my-5 text-md sm:text-lg lg:text-xl text-neutral-500 leading-7">
            Get the latest breaking news, trusted stories, and important updates
            from around the world — all in one place.
          </p>
          <Link to={"/news"} className="btn btn-neutral w-fit">
            Explore Latest News
          </Link>
        </div>
        <div className="px-6 py-12 flex flex-col justify-center">
          <img src={HeroImage} className="opacity-88" alt="news-image" />
        </div>
      </div>
    </section>
  );
}
