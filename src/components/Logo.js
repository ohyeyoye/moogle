import React from "react";
import styled from "styled-components";

const Logo = props => {
  const { className } = props;

  return <h1 className={`${className} logo`}>Moogle</h1>;
};

export default styled(Logo)`
  font-family: "Noto Serif KR", serif;
  font-weight: lighter;
  font-size: 3em;
  text-align: center;
  user-select: none;
`;
