import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Products from "./components/Products";
import data from "./data/data.json";

function App() {
  const [dataList, setDataList] = useState(data);

  return (
    <div>
      <Header setDataList={setDataList} />
      <Layout>
        <Products dataList={dataList} />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
