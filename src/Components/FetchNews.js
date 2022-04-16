import React, { useState } from 'react';
import axios from 'axios';

function FetchNews() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=93eeda8526a2476f8061b2084e40ecee'
      )
      .then((response) => {
        console.log(setNews);
        setNews(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchNews}>
              FetchNews
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {news.map((values) => {
            return (
              <div className="col-3">
                <div class="card" style={{ width: '18rem' }}>
                  <img
                    src={values.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{values.title}</h5>
                    <p className="card-text">{values.description}</p>
                    <a href="#" className="btn btn-primary">
                      Main
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchNews;
