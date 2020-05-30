import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { SearchBar, MovieCard } from "../components";

const Home = props => {
  const { className } = props;
  const movie = useSelector(state => state.movie);
  return (
    <div className={className}>
      <form className="search-form" onSubmit={e => e.preventDefault()}>
        <SearchBar />
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
