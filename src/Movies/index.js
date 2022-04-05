import { useEffect, useRef, useState } from "react";

import Movie from "./Movie";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const timeoutRef = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${searchText}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
        );

        const data = await response.json();

        setMovies(data.Search);
      } catch (e) {
        console.log(e);
      }
      clearTimeout(timeoutRef.current);
    };

    timeoutRef.current = setTimeout(fetchMovies, 5000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [searchText]);

  return (
    <div>
      <h1>Movies</h1>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      {movies.map((m) => (
        <Movie key={m.imdbID} movie={m} />
      ))}
    </div>
  );
}

export default Movies;
