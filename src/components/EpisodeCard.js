import React from "react";
import styled from "styled-components";
import { useEpisode } from "../utils/hooks/query-hooks";

const EpisodeCard = (url) => {
  const episode = useEpisode(url.url);
  return (
    <StyledEpisode>
      <div className="episode-name">
        {episode.isLoading ? (
          <div>loading</div>
        ) : (
          episode.isSuccess && episode.data.data.name
        )}
      </div>
      <div className="episode">
        {episode.isLoading ? (
          <div>loading</div>
        ) : (
          episode.isSuccess && episode.data.data.episode
        )}
      </div>
    </StyledEpisode>
  );
};

const StyledEpisode = styled.div`
  margin-bottom: 3rem;
  .episode-name {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .episode {
    opacity: 0.6;
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`;

export default EpisodeCard;
