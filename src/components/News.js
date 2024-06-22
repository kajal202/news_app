import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

function News({ category = "general" }) {
  const [article, setArticle] = useState([]);
  let [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState("");

  async function updateNews(page){
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=374c7e341ef94df7a0cd80b5019ba7c5&page=${page}&pageSize=15`
    const data = await fetch(url);
    const json = await data.json();
    setArticle(json.articles);
    setTotalResults(json.totalResults);
    setLoading(false);
  }

  useEffect(() => {
    updateNews(page)
  }, []);

  const handleNextClick = async () => {
    page += 1;
    setPage(page);
    updateNews(page)
  };
  const handlePrevClick = async () => {
    page -= 1;
    setPage(page);
    updateNews(page)
  };

  return (
    <>
    <div className="container pt-3">
      {category === "general" ? (
        <h1 className="pt-3 text-center fw-semibold">News Articles</h1>
      ) : (
        <h2 className="pt-3 text-center font-weight-normal">
          Category- <span className="pt-4 ">{category}</span>
        </h2>
      )}
      {loading === true ? (
        <div
          className="d-flex pt-5 justify-content-center"
          style={{ minHeight: "36vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}

    <div className="row p-3 ">
      {article?.map((element) => {
        return (
          <div
            className=" col-md-4 justify-content-center d-flex "
            key={element?.url}
          >
            <NewsItems
              title={element ? element.title?.slice(0, 40) : ""}
              description={element?.description?.slice(0, 107)}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
            />
          </div>
        );
      })}
    </div>

      <div className="p-4  d-flex  justify-content-center">
        <button
          disabled={page <= 1}
          type="button"
          onClick={handlePrevClick}
          className="btn btn-dark me-5 text-uppercase"
        >
          &larr;Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / 15)}
          type="button"
          onClick={handleNextClick}
          className="btn btn-dark text-uppercase"
        >
          next &rarr;
        </button>
      </div>
      </div>
    </>
  );
}

export default News;
