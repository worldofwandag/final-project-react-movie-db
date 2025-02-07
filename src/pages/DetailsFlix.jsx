import { useState } from "react";
import { useParams } from "react-router-dom";
// import Movie from '../components/ui/Movie';

const DetailsFlix = ( {movies} ) => {
  const { imdbID } = useParams();
  const movie = movies.find((movie) => +movie.imdbID === +imdbID);
  // const [movies, setMovies] = useState([movie])


  return (
    <div>
      <div className="flix__details">
        <h1>UNDER CONSTRUCTION</h1>
    <img src="{movie.Poster}" alt="" />
        <h1>{movie.Title}</h1>
      </div>
    </div>
  );
};

export default DetailsFlix;
