import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import isEmpty from "is-empty";
import { SearchBar, MovieCard } from "../components";

const Home = props => {
  const { className } = props;
  const [movie, setMovie] = useState(null);
  const onSuggestionClick = data => {
    setMovie(data);
  };
  return (
    <div className={className}>
      <form className="search-form" onSubmit={e => e.preventDefault()}>
        <SearchBar onSuggestionClick={onSuggestionClick} />
      </form>
      <div className="search-result">
        {movie && <MovieCard movie={movie} />}
      </div>
    </div>
  );
};

export default styled(Home)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .search-form {
    width: 100%;
    display: flex;
    justify-content: center;
    ${SearchBar} {
      width: 70%;
      position: absolute;
      z-index: 2;
    }
  }
  .search-result {
    position: relative;
    top: 4rem;
  }
`;
