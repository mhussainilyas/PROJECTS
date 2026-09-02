import React, { useEffect, useState } from "react";
import { useNewsContext } from "../context/NewsContext";

function SelectNewsCategory() {
  const { setNews, fetchNewsData } = useNewsContext();

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  async function handleSelectNewsCategory(e) {
    const data = await fetchNewsData(`/everything?q=${e.target.value}`);
    setNews(data.articles);
  }

  return (
    <select
      onChange={handleSelectNewsCategory}
      className="border-none outline-none py-2 px-4 appearance-none w-75 text-center capitalize"
    >
      <option value="">--- Select Category ---</option>
      {categories.map((category, index) => (
        <option value={category} key={index}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default SelectNewsCategory;
