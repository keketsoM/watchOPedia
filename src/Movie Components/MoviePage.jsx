import { useState } from "react";
import AddMovies from "./AddMovies";
import MovieList from "./MovieList";
const MoviePage = () => {
  const [moveListState, setMoveList] = useState(() => {
    return { movieList: ["Die hard", "Harry Potter"] };
  });

  function handleAddMovies(MovieName) {
    console.log(MovieName);
    setMoveList((previous) => {
      return {
        movieList: previous.movieList.concat(MovieName),
      };
    });
  }
  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovies handleAddMovies={handleAddMovies} />
      <MovieList MovieList={moveListState.movieList} />
    </div>
  );
};
export default MoviePage;
