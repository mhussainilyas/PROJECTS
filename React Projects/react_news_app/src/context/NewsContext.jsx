import { createContext, useContext, useState } from "react";
import axiosApi from "../config/axiosConfig";

// ==================
//   Create Context
// ==================

const NewsContext = createContext();

// ===================
//   Provide Context
// ===================

export function NewsContextProvider({ children }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchNewsData(url = "/everything?q=pakistan") {
    setLoading(true);

    try {
      const response = await axiosApi.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );

      setLoading(false);
      return response.data;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  const value = {
    news,
    setNews,
    fetchNewsData,
    loading,
  };

  return (
    <>
      <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
    </>
  );
}

// ===============
//   Use Context
// ===============

export function useNewsContext() {
  return useContext(NewsContext);
}
