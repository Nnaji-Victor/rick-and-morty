import React from "react";
import styled from "styled-components";
import { media } from "../styles";
import EpisodeCard from "./EpisodeCard";

const Episodes = ({ episodes, loading }) => {
  return (
    <StyledEpisodes>
      <h4 className="title">Appeared on - </h4>
      {episodes && episodes.map((episode) => (
        <EpisodeCard url={episode} key={episode} />
      ))}
    </StyledEpisodes>
  );
};

const StyledEpisodes = styled.div`
  margin-top: 10rem;
  ${media.phablet`margin-top: 5rem`}
  .title {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

export default Episodes;
