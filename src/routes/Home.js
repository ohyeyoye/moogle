import React, { useState, useRef } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { SearchBar } from "../components";

const Home = props => {
  const { className } = props;

  return (
    <div className={className}>
      <SearchBar />
    </div>
  );
};

export default styled(Home)``;
