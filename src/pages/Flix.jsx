import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Movie from "../components/ui/Movie";

const Flix = ({ searchResults, setSearchResults }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(searchResults);

  async function fetchMovies(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=e11ddac9`
      );
      if (data.Search) {
        setSearchResults(data.Search);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  function applyFilter(filter) {
    console.log(filter);
    let filteredMovies = [...searchResults]; // Make sure to start with searchResults

    if (filter === "Oldest_To_Newest") {
      filteredMovies.sort((a, b) => a.Year - b.Year);
    } else if (filter === "Newest_To_Oldest") {
      filteredMovies.sort((a, b) => b.Year - a.Year);
    } else if (filter === "A_To_Z") {
      filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (filter === "Z_To_A") {
      filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    setMovies(filteredMovies); // Set to the new sorted array!
  }

  useEffect(() => {
    setMovies(searchResults);
  }, [searchResults]);

  return (
    <div className="flix__container">
      <div className="flix__searchfilter--wrapper">
        <form onSubmit={fetchMovies} className="search__element--flix">
          <input
            type="text"
            className="form__control"
            placeholder="Search Media Title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="flix-search-box"
          />
          <div className="search__glass">
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              id="magnifying--glass"
              onClick={fetchMovies}
            />
          </div>
        </form>
        <select
          id="filter"
          className="filter__class"
          onChange={(event) => applyFilter(event.target.value)}
        >
          <option value="" selected disabled class="filter__option">
            Sort Your Flix (click)
          </option>
          <option value="Oldest_To_Newest" class="filter__option">
            Old to New
          </option>
          <option value="Newest_To_Oldest" class="filter__option">
            New to Old
          </option>
          <option value="A_To_Z" class="filter__option">
            Alphabetically A to Z
          </option>
          <option value="Z_To_A" class="filter__option">
            Alphabetically Z to A
          </option>
        </select>
      </div>

      <div className="results__grid">
        {movies && movies.length > 0 ? (
          movies.map((movie) => <Movie movie={movie} key={movie.imdbID} />)
        ) : (
          <div className="no-results">
            <h2 className="text__center white">
              <span className="light__purple">Search</span> for a{" "}
              <span className="yellow__text">FLIX </span>to see results
            </h2>
          </div>
        )}
      </div>

      {/* 
      <div className="results__grid">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))
        ) : (
          <div className="no-results">
            <h2 className="text__center white">
              <span className="light__purple">Search</span> for a{" "}
              <span className="yellow__text">FLIX </span>to see results
            </h2>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Flix;
