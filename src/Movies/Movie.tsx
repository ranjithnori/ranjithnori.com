import { API } from "../types";

interface MovieProps {
  movie: API.Movie;
}

function Movie({ movie }: MovieProps) {
  return <p>{movie.Title}</p>;
}

export default Movie;
