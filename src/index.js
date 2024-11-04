import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import Header from "./Header";
import MoviePage from "./Movie Components/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Counter />
    <MoviePage/>
  </div>
);
