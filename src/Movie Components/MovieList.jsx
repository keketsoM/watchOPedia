const MovieList = (props) => {
  return (
    <div className="text-white text-center">
      {props.MovieList.map((movieList, index) => {
        return <div key={index}>{movieList}</div>;
      })}
    </div>
  );
};
export default MovieList;
