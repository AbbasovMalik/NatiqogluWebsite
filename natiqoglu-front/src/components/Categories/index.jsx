import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ctg.scss"
import { useParams } from "react-router-dom";

function Categories() {
  const [news, setNews] = useState([]);
  // const { category } = useParams();
  const [category, setCategory] = useState(news.category);


  useEffect(() => {
    getNewsByCategory();
  }, []);

  const getNewsByCategory = async () => {
    const data = await fetch(`http://localhost:3400/news/${category}`);
    const res = await data.json();
    setNews(res);
  };
  console.log(news.category);


  const filteredProducts =
    category === "All"
      ? news
      : news.filter((item) => item.category === category);

  return (
    <div>
        <div>
            <p>{news.category}</p>
            <img src={news.image} alt="" />
        </div>
      {filteredProducts.map((x) => (
        <div>
          <p>{x.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
