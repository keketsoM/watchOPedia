import { useState } from "react";

const AddMovies = (props) => {
  const [nameState, setName] = useState(() => {
    return "";
  });

  function submitAddMovieForm(e, props) {
    console.log(e);
    e.preventDefault();
    props.handleAddMovies(nameState);
    setName("");
  }
  return (
    <form
      onSubmit={(e) => {
        submitAddMovieForm(e, props);
      }}
    >
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">
          Add Movies
        </div>
        <diV className="col-8 offset-1">
          <input
            className="form-control"
            type="text"
            placeholder="Movie name..."
            value={nameState}
            onChange={(e) => setName(e.target.value.trim())}
          ></input>
        </diV>
        <div className="col-2">
          <button className="btn btn-success" type="submit">
            submit
          </button>
        </div>
        <hr className="mt-3" />
      </div>
    </form>
  );
};
export default AddMovies;
