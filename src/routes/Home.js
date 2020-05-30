import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";

const GET_MOVIES = gql`
  {
    movies {
      id
    }
  }
`;

const Home = props => {
  const { className } = props;
  return <div className={className}>Home</div>;
};

export default styled(Home)``;
