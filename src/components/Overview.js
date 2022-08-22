import React from "react";
import { FaTimes } from "react-icons/fa";

const Overview = (props) => {
  const movieImg = "https://image.tmdb.org/t/p/w1280/";
  return (
    <div className="overview">
      <FaTimes className="x-mark" onClick={props.hideOverview} />
      <h3>{props.content[0]}</h3>

      <div className="info-container">
        <img src={movieImg + props.content[2]} alt="" />
        <p>{props.content[1]}</p>
      </div>
    </div>
  );
};

export default Overview;
