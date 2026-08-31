import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function ProductCard({ prod }) {
  return (
    <div className="border border-white/9 p-8 rounded-xl group">
      <img
        src={prod.image}
        alt="product_image"
        className="w-[70%] mx-auto aspect-square object-contain group-hover:scale-95 transition-all duration-300"
      />
      <div className="mt-5">
        <h3 className="text-xl line-clamp-1">{prod.title}</h3>

        <p className="line-clamp-3 text-white/40 text-sm mt-2">
          {prod.description}
        </p>

        <p className="text-orange-400 text-xl my-2">
          ${Math.round(prod.price)} /{" "}
          <span className="text-white/40 line-through text-sm">
            {Math.round(prod.price + 50)}
          </span>
        </p>

        <p className="flex items-center gap-1">
          <CiStar /> {prod.rating.rate}
        </p>

        <Link
          to={`/products/${prod.id}`}
          className="bg-neutral-900 w-full block py-2 px-3 text-center rounded-md mt-3 group-hover:bg-orange-400"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}
