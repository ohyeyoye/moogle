import React from "react";
import styled from "styled-components";
import { MdSentimentVeryDissatisfied } from "react-icons/md";
import { getYear, getRatingColor } from "../utils";
const MovieCard = props => {
  const { className, movie } = props;
  const { id, title, overview, rating, release_date, poster_path } = movie;
  return (
    <a
      className={`${className} btn`}
      href={`https://www.themoviedb.org/movie/${id}`}
      rel="noopener noreferrer"
      target="_blank"
    >
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
    </a>
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
    transform: skewY(-10deg) translateY(-2rem);
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
    top: calc(60% + 1.25rem);
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
    padding: 0.5rem 1.5rem;
    .title-date-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      .movie-title {
        flex: 1;
        font-size: 1.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .release-date {
        font-size: 1em;
        width: 5rem;
        text-align: center;
      }
    }
    .overview {
      position: relative;
      height: 5rem;
      font-size: 0.8em;
      line-height: 1.5em;
      word-wrap: break-word;
      overflow: hidden;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 3rem;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1)
        );
      }
    }
  }
`;
