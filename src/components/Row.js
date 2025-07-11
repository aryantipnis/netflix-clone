import React, { useEffect, useState } from "react";
import './Row.css';
import axios from './axios';

function Row({title, fetchUrl, isLargeRow = false}) {
  const [movies, setMovies] = useState([]);
  // const [open, setOpen] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
        <h2 className="row-title">{title}</h2>
        <div className="row-posters"> 
          {movies.map((movie) =>
              <img
                className={`row-poster row-poster-large`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.poster_path}`}
                alt={movie.name}
              />
          )}
        </div>
    </div>
  );
}

export default Row
