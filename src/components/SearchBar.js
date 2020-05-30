import React, { useState, useRef } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const SEARCH_MOVIES = gql`
  query searchMovie($keyword: String!) {
    movies(keyword: $keyword) {
      id
      title
      overview
      rating
      release_date
      poster_path
    }
  }
`;

const SearchBar = props => {
  const { className } = props;
  const [keyword, setKeyword] = useState("");
  const onChange = e => {
    setKeyword(e.target.value);
  };
  const { error, loading, data } = useQuery(SEARCH_MOVIES, {
    variables: {
      keyword,
    },
  });
  if (error) console.log(error.message);
  return (
    <div className={className}>
      <TextField onChange={onChange} value={keyword} />
      <Suggestions>
        {data &&
          data.movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </Suggestions>
    </div>
  );
};

const TextField = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Search...",
}))`
  background-color: rgba(80, 80, 80, 1);
  color: white;
  font-size: 1em;
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
  padding: 0 0.5rem;
`;

const Suggestions = styled.ul`
  list-style: none;
`;

export default styled(SearchBar)``;
