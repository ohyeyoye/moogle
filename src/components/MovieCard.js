import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MdSentimentVeryDissatisfied } from "react-icons/md";
import { getYear, getRatingColor } from "../utils";
const MovieCard = props => {
  const { className, movie } = props;
  const { title, overview, rating, release_date, poster_path } = movie;
  return (
    <div className={className}>
      <div className="img-container">
        <img src={poster_path} alt={`${title}`} draggable="false" />
        {!poster_path && (
          <div className="error-message">
            <MdSentimentVeryDissatisfied className="error-icon" />
            <span>Poster Not Found.</span>
          </div>
        )}
      </div>
      <span className="rating">{rating}</span>
      <div className="movie-info">
        <div className="title-date-container">
          <span className="movie-title">{title}</span>
          <span className="release-date">
            {isNaN(release_date) ? getYear(release_date) : "Unknown"}
          </span>
        </div>
        <p className="overview">{overview}</p>
      </div>
    </div>
  );
};

export default styled(MovieCard)`
  position: relative;
  width: 300px;
  height: 500px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  .img-container {
    position: relative;
    height: 70%;
    overflow: hidden;
    transform: skewY(-10deg) translateY(-3.5rem);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    img {
      height: 20rem;
      object-fit: cover;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .error-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      font-size: 2em;
      .error-icon {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .rating {
    display: block;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => getRatingColor(props.movie.rating).bg};
    color: ${props => getRatingColor(props.movie.rating).text};
    font-weight: bold;
    text-align: center;
    line-height: 4rem;
    width: 4rem;
    height: 4rem;
    font-size: 1.2em;
    border-radius: 50%;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  }
  .movie-info {
    position: relative;
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    .title-date-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      .movie-title {
        flex: 1;
        font-size: 1.5em;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .release-date {
        font-size: 1.2em;
        width: 5rem;
        text-align: center;
      }
    }
    .overview {
      position: relative;
      height: 4.8em;
      line-height: 1.2em;
      font-size: 1em;
      word-wrap: break-word;
      overflow: hidden;
      &:after {
        content: "";
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 50%;
        height: 1.2em;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1) 50%
        );
      }
    }
  }
`;
