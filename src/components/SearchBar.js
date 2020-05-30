import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import isEmpty from "is-empty";
import { getYear } from "../utils";

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
  const { className, onSuggestionClick } = props;
  const [keyword, setKeyword] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const textField = useRef();
  const onChange = e => {
    setKeyword(e.target.value);
    setShowSuggestions(true);
  };
  const onClick = e => {
    const index = Number(e.target.dataset.index);
    onSuggestionClick(data.movies[index]);
    setShowSuggestions(false);
  };
  const { error, loading, data } = useQuery(SEARCH_MOVIES, {
    variables: {
      keyword,
    },
  });
  const renderSuggestion = () =>
    data.movies.map((movie, index) => (
      <li
        className="suggestion"
        key={movie.id}
        onClick={onClick}
        data-index={index}
      >
        <span className="suggestion-title">{movie.title}</span>
        <span className="suggestion-release-date">
          {getYear(movie.release_date)}
        </span>
      </li>
    ));
  useEffect(() => {
    document.addEventListener("mousedown", e => {
      if (
        !e.target.classList.contains("suggestion") &&
        !isEmpty(keyword) &&
        e.target !== textField.current
      )
        setShowSuggestions(false);
    });
  });
  if (error) console.log(error.message);
  return (
    <div className={className}>
      <TextField onChange={onChange} value={keyword} ref={textField} />
      <Suggestions>{showSuggestions && data && renderSuggestion()}</Suggestions>
    </div>
  );
};

const TextField = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Search...",
}))`
  width: 100%;
  background-color: rgba(80, 80, 80, 1);
  font-size: 1em;
  color: white;
  height: 2rem;
  border: none;
  padding: 0 0.5rem;
  &:focus {
    outline: none;
  }
`;

const Suggestions = styled.ul`
  list-style: none;
  width: 100%;
  background-color: rgba(80, 80, 80, 1);
  user-select: none;
  max-height: 20rem;
  overflow: scroll;
  opacity: 0.8;
  .suggestion {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    &:hover {
      background-color: rgba(120, 120, 120, 1);
    }
  }
`;

export default styled(SearchBar)`
  background-color: transparent;
  border-radius: 0.25rem;
  color: white;
`;
