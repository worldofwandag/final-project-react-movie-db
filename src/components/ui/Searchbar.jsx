import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Searchbar = () => {
    const [query, setQuery] = useState('');

    async function fetchMovies() {
        const { data } = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=e11ddac9`);
        setQuery(data);
        console.log(data)
    };

    useEffect(() => {
        if (query !== "") {
            fetchMovies()
        };
    }, [])
    

  return (
    <>
      <div className="search__element">
        <input
          type="text"
          className="form__control"
          placeholder="Search Media Title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSubmit={fetchMovies}
          id="movie-search-box"
        />
        <div className="search__glass">
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            id="magnifying--glass"
            onClick={fetchMovies}
          />
        </div>
        
      </div>
      
    </>
  );
};

export default Searchbar;
