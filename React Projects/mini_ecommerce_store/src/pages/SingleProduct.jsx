import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

export default function SingleProduct() {
  const API_URL = "https://fakestoreapi.com/products";
  const [singleProd, setSingleProd] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  async function handleFetchProduct(api_url) {
    setLoading(true);
    const response = await axios.get(`${api_url}/${id}`);
    setSingleProd(response.data);
    setLoading(false);
  }

  useEffect(() => {
    handleFetchProduct(API_URL);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="w-full min-h-[calc(100vh-74px)] border-y border-white/9 p-6 lg:py-12">
      <div className="flex items-center gap-2 mb-10">
        <Link to={"/"}>Home</Link> / <Link to={"/products"}>Products</Link> /{" "}
        <span className="text-orange-400 font-bold">{singleProd?.id}</span>
      </div>

      <div className="grid grid-col-1 sm:grid-cols-2 rounded-2xl overflow-hidden border border-white/10">
        <div className="bg-transparent p-10 flex items-center">
          <img
            src={singleProd?.image}
            alt="product_image"
            className="w-60 aspect-square object-contain mx-auto"
          />
        </div>
        <div className="bg-neutral-900 p-6 sm:py-10 sm:px-15 lg:px-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-15 font-normal">
            {singleProd?.title}
          </h2>
          <p className="text-white/40 mt-1 mb-6 sm:my-5">
            {singleProd?.description}
          </p>

          <p className="bg-neutral-800 w-fit py-2 px-3 rounded-lg">
            Category - {singleProd?.category}
          </p>

          <p className="font-bold text-lg mt-5">
            Rating - {singleProd?.rating?.rate}
          </p>
          <p className="text-3xl text-orange-400 my-5">${singleProd?.price}</p>

          <Link
            to={"/"}
            className="block w-full py-3 px-6 bg-white text-black font-bold text-center rounded-lg"
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </section>
  );
}
