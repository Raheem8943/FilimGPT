import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="-mt-70 relative z-20 ">
      <MovieList
        title={"Now Playing Movies"}
        movies={movies?.nowPlayingMovies}
      />
      <MovieList title={"Trending Movies"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Up Coming Movies"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
