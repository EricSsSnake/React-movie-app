import React from "react";

const Cards = (props) => {
  const movieImg = "https://image.tmdb.org/t/p/w1280/";

  return (
    <div className="container">
      {props.cardInfo.map((e) => (
        <div
          className="movie-box"
          key={e.id}
          onClick={() => props.overview([e.title, e.overview, e.poster_path])}>
          <img src={movieImg + e.poster_path} alt="" />

          <div className="movie-info">
            <h3 className="movie-title">{e.title}</h3>

            <p
              className="movie-score"
              style={{
                color:
                  e.vote_average >= 8
                    ? "lightgreen"
                    : e.vote_average >= 5
                    ? "orange"
                    : "red",
              }}>
              {e.vote_average}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
