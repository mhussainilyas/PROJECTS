import React from "react";
import { FaStar } from "react-icons/fa";

function Products({ dataList }) {
  return (
    <div className="min-h-[calc(100vh-135px)] py-10 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 flex flex-col gap-8">
      {dataList.map((item, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr] max-sm:gap-10 gap-5 bg-neutral-900 p-8 rounded-xl">
          <div className="flex items-center justify-center">
            <img
              src={item.image}
              alt="image loading..."
              className="w-48 rounded-lg"
            />
          </div>

          <div className="sm:border-x max-sm:border-y border-white/5 max-sm:py-8 sm:px-6 lg:px-8">
            <h2 className="text-lg lg:text-xl font-medium">{item.title}</h2>

            <p className="flex items-center gap-2 text-white/50 my-2 max-lg:text-sm">
              <FaStar className="text-yellow-400" /> {item.rating} |{" "}
              {item.reviews}
            </p>

            <ul className="list-disc ml-5 max-lg:text-[12px]">
              {item.details.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>

            <div className="mt-2 max-lg:text-sm">
              <p className="text-red-500">{item.offers.exchangeOffer}</p>
              <p className="text-orange-400 mt-2">{item.offers.bankOffer}</p>
            </div>
          </div>

          <div className="flex flex-col sm:items-center justify-center">
            <h2 className="text-2xl font-bold">{item.price}</h2>
            <p className="my-2 text-white/40 line-through">
              {item.originalPrice}
            </p>
            <p className="text-green-500">{item.discount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
