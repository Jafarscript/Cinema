import React, { useState, useEffect } from 'react';
import axios from "./axios";
import './Movies.css'

const Movies = () => {
  const [searchItem, SetSearchItem] = useState('');

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        "https://omdbapi.com/?apikey=507fecc9&type=movie&s=blade"
      );
      setMovies(req.data.Search);
      console.log(req.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        "https://omdbapi.com/?apikey=507fecc9&type=series&s=god"
      );
      setSeries(req.data.Search);
      console.log(req.data);
    }
    fetchData();
  }, []);

  return (
    <div className="moviesTab">
      <div className="searchTab">
        <h4>Search</h4>
        <input
          onChange={(e) => {
            SetSearchItem(e.target.value);
          }}
        />
      </div>
      <div className="movies">
        <div className="action">
          <h3 className="cate">Action</h3>
          <div className="movieFlex">
            {movies
              .filter((movie) => {
                if (searchItem === "") {
                  return movie;
                } else if (
                  movie.Title.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return movie;
                }
              })
              .map((movie) => (
                <div key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                </div>
              ))}
          </div>
        </div>
        <div className="action">
          <h3 className="cate">Series</h3>
          <div className="movieFlex">
            {series
              .filter((serie) => {
                if (searchItem === "") {
                  return serie;
                } else if (
                  serie.Title.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return serie;
                }
              })
              .map((serie) => (
                <div key={serie.imdbID}>
                  <h3>{serie.Title}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies