import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import SelectNewsCategory from "../components/SelectNewsCategory";
import { useNewsContext } from "../context/NewsContext";
import Loader from "../components/Loader";

export default function NewsPage() {
  const { news, setNews, fetchNewsData, loading } = useNewsContext();

  let timer;
  function handleNewsInput(e) {
    let value = e.target.value.trim();

    if (value) {
      clearTimeout(timer);

      timer = setTimeout(async () => {
        const data = await fetchNewsData(`everything?q=${value}`);
        setNews(data.articles);
      }, 2000);
    }
  }

  useEffect(() => {
    (async () => {
      const data = await fetchNewsData();
      setNews(data.articles);
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="w-full lg:min-h-[calc(100vh-60px)]">
      <div className="flex max-sm:flex-col max-sm:gap-3 justify-between items-center p-6">
        <input
          type="text"
          onChange={handleNewsInput}
          placeholder="search recent news..."
          className="border border-black/10 px-4 py-2 rounded-lg outline-none focus:border-warning w-75"
        />
        <div className="border border-black/10 rounded-lg overflow-hidden">
          <SelectNewsCategory />
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((newsDetail, index) => (
          <NewsCard key={index} newsDetail={newsDetail} />
        ))}
      </div>
    </section>
  );
}
