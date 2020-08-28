import React, { useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import { useEffect } from "react";
import axios from "./axios";
import FlipMove from "react-flip-move";
const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios(selectedOption);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [selectedOption]);

  return (
    <div className="Results">
      <FlipMove className = "Results__flipMove">
        {movies.map((movie) => (
          <VideoCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
