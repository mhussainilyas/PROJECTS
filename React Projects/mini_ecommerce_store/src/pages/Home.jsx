import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { MdCollections } from "react-icons/md";

function Home() {
  return (
    <section
      className={`w-full min-h-[calc(100vh-74px)] bg-[url('store-hero-image.jpg')] bg-no-repeat bg-center bg-cover relative`}
    >
      <div className="absolute top-0 left-0 bg-black/68 w-full h-full p-6 flex justify-center items-center">
        <div className="flex flex-col items-center max-w-xl text-white">
          <h4 className="text-sm bg-orange-400 py-2 px-4 font-bold">
            Women Fashion
          </h4>
          <h1 className="uppercase font-bold tracking-widest text-5xl my-5 max-sm:my-3 max-sm:text-[32px] text-center leading-12">
            New Colection
          </h1>
          <p className="text-center mb-5 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quas
            mollitia repellat hic ducimus ipsam?
          </p>
          <div className="flex gap-4">
            <Link
              to={"/products"}
              className="py-3 px-6 bg-black flex gap-2 items-center"
            >
              <FaCartShopping /> Shop Now
            </Link>
            <Link
              to={"/products"}
              className="py-3 px-6 bg-white text-black flex gap-2 items-center"
            >
              <MdCollections /> Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
