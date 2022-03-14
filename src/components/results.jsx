import React from "react";
import _ from "lodash";

const Results = (props) => {
  const { searchInfo, totalHits } = props;
  if (_.isEmpty(searchInfo)) return null;

  return (
    <div className="results">
      {totalHits ? (
        <p className="text-center text-light">Search result : {totalHits}</p>
      ) : (
        ""
      )}

      {searchInfo.map((item) => {
        const url = `https://en.wikipedia.org/?curid=${item.pageId}`;
        return (
          <div key={Math.random()} className="result">
            <h1 className="resultHeader">{item.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
            <a href={url} className="btn" target="_blank" rel="noreferrer">
              Read more...
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
