import React from "react";
import styled from "styled-components";
import { media } from "../styles";
import Characters from "./Characters";
import SearchBar from "./SearchBar";
import Status from "./Status";

const HomeContents = () => {
  return (
    <StyledHomeContents>
      <Status />
      <SearchBar />
      <div className="characters">
        <Characters />
      </div>
    </StyledHomeContents>
  );
};

const StyledHomeContents = styled.section`
  ${media.phablet`padding-top: 2.5rem`}
  padding-top: 3.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 5rem;
  background-color: var(--theme-background-color);
  min-height: 30rem;
  height: 100%;
  color: var(--theme-color-white);
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr) 0.5fr;
  grid-template-rows: auto 1fr;
  ${media.phablet`grid-template-columns: 1fr`}

  .characters {
    grid-row: 3/-1;
    grid-column: 1/-1;
  }
`;

export default HomeContents;
