import { Link, useParams } from "react-router-dom";
import placeholder from "../assets/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailsFlix = ({ movies }) => {
  const [movie, setMovie] = useState({});
  const { imdbID } = useParams();
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      const data = await axios.get(
        `https://www.omdbapi.com/?apikey=e11ddac9&i=${imdbID}`
      );

      setMovie(data.data);
      setLoading(false);
    }
    getMovieDetails(movies.find((movie) => movie.imdbID === imdbID));
  }, []);

  return (
    <>
      <div className="flix__details">
        <div className="back__wrapper">
          <Link to="/flix">
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-left"
              size="2xl"
              id="back__arrow"
            />
          </Link>
          <Link to="/flix">
            <h2 className="white back__text">BACK</h2>
          </Link>
        </div>

        {loading ? (
          <>
            <div class="loading__card">
              <div class="flix__poster--loading">
                <div className="spinner__wrapper">
                  <div className="spinner__loader--gray"></div>
                  <p className="gray flixing blinking">flixing</p>
                </div>
              </div>
              <div class="flix__info">
                <p class="flix__title blinking">loading...</p>

                <ul class="flix__misc--info">
                  {/* <li class="year blinking"></li> */}
                  {/* <li class="rated blinking">Ratings: loading...</li>
                  <li class="released blinking">Released: loading...</li> */}
                </ul>
                <div className="flix__main--info">
                  {/* <p class="genre blinking">
                    <b>loading</b>
                  </p>
                  <p class="writer blinking">
                    <b>loading</b>
                  </p>
                  <p class="actors blinking">
                    <b>loading </b>
                    
                  </p>
                  <p class="plot blinking">
                    <b>loading</b>
                  </p>
                  <p class="language blinking">
                    <b>loading</b>
                  </p>
                  <p class="awards blinking">
                    <FontAwesomeIcon icon="fas fa-award" /> {movie.Awards}
                  </p> */}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div class="flixpick__grid">
            <div class="flix__poster">
              <img
                src={
                  movie.Poster && movie.Poster !== "N/A"
                    ? movie.Poster
                    : placeholder
                }
                alt={movie.Title}
                className="flix__poster"
              />
            </div>
            <div class="flix__info">
              <h3 class="flix__title">{movie.Title}</h3>

              <ul class="flix__misc--info">
                <li class="year">Year: {movie.Year}</li>
                <li class="rated">Ratings: {movie.Rated}</li>
                <li class="released">Released: {movie.Released}</li>
              </ul>
              <div className="flix__main--info">
                <p class="genre">
                  <b>Genre:</b> {movie.Genre}
                </p>
                <p class="writer">
                  <b>Writer:</b> {movie.Writer}
                </p>
                <p class="actors">
                  <b>Actors: </b>
                  {movie.Actors}
                </p>
                <p class="plot">
                  <b>Plot:</b> {movie.Plot}
                </p>
                <p class="language">
                  <b>Language:</b> {movie.Language}
                </p>
                <p class="awards">
                  <FontAwesomeIcon icon="fas fa-award" /> {movie.Awards}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailsFlix;
