import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updatenews = async () => {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4a52f92918694a30a6ffb26c0cf4735a&page=${page}&pageSize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    props.setprogress(40);
    let parseddata = await data.json();
    props.setprogress(80);
    console.log(parseddata);

    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    setloading(false);

    props.setprogress(100);
  };
  const titleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    updatenews();
  });

  const fetchMoreData = async () => {
    setpage(page + 1);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4a52f92918694a30a6ffb26c0cf4735a&page=${page}&pageSize=${props.pagesize}`;

    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);

    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
    setloading(false);
  };
  return (
    <div className="container flex mt-3 mb-4 flex-col">
      <h2 className="text-5xl mt-4 text-center">
        NewsMania -Top {titleCase(props.category)} Headlines{" "}
      </h2>
      {loading && <Spinner />}

      {articles.length > 0 && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={page <= Math.ceil(totalResults / props.pagesize)}
          loader={<Spinner />}
        >
          <div className="row flex m-2 justify-evenly">
            {articles.map((element) => {
              return (
                <div className="basis-3" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={
                      element.description
                        ? element.description.slice(0, 85)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 6,
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
};

export default News;
