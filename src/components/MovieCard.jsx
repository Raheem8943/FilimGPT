import React from "react";
import { IMG_CDN_URL } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-64 pr-5">
      <img src={IMG_CDN_URL + posterPath} alt="moviecard" />
    </div>
  );
};

export default MovieCard;
