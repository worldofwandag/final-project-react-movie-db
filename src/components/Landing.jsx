import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Landing = () => {
  return (
    <div>
      <div className="search__container">
        <h1>Type Your Flix</h1>
        <div class="search__element">
          <input
            type="text"
            class="form__control"
            placeholder="Search Media Title..."
            id="movie-search-box"
            onkeyup="findMovies()"
            onclick="findMovies()"
          />
          <div class="search__glass">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
