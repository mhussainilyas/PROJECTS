import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function Products() {
  const API_URL = "https://fakestoreapi.com/products";
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleFetchData(api_url) {
    setLoading(true);
    const response = await axios.get(api_url);
    setProductData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    handleFetchData(API_URL);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="w-full min-h-[calc(100vh-74px)] border-y border-white/9 p-6">
      <div className="py-6">
        <h1 className="text-4xl text-center uppercase tracking-widest font-bold">
          Trending Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-12">
          {productData.map((prod, index) => (
            <ProductCard prod={prod} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
