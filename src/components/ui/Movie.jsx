import React, { useEffect, useRef, useState } from "react";
import placeholder from "../../assets/placeholder.png";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const [img, setImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = movie.Poster;

    image.onerror = () => {
      setImg(placeholder); // Fallback to placeholder if there's an error loading the poster
    };

    image.onload = () => {
      // Only set the image if the component is still mounted
      if (mountedRef.current) {
        setTimeout(() => setImg(image), 50);
      }
    };
  }, [movie]);

  return (
    <div key={movie.imdbID} className="movie__card">
      <Link to={`/flix/${movie.imdbID}`}>
        {img ? (
          <>
            <img
              src={
                movie.Poster && movie.Poster !== "N/A"
                  ? movie.Poster
                  : placeholder
              }
              alt={movie.Title}
              className="movie__poster"
            />
            <div className="movie__info">
              <h3>{movie.Title}</h3>
              <p className="movie__info--year">{movie.Year}</p>
            </div>
          </>
        ) : (
          <>
            <div className="spinner__wrapper">
              <div className="spinner__loader"></div>
              <p className="white flixing">flixing</p>
            </div>
          </>
        )}
      </Link>
    </div>
  );
};

export default Movie;
