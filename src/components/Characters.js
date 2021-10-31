import React from "react";
import styled from "styled-components";
import { media } from "../styles";
import { useApp } from "../utils/context/AppContext";
import { useCharacters } from "../utils/hooks/query-hooks";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";
import Skeleton from "./Skeleton";

const Characters = () => {
  const [parameters] = useApp();
  const characters = useCharacters(parameters);

  const data = characters.data?.data;

  if (characters.isError) {
    return <div>there was an error</div>;
  }

  const noOfPage = data?.info.pages;

  return (
    <>
      <StyledCharacters>
        {characters.isLoading
          ? Array.from({ length: 12 }).map((_, idx) => (
              <Skeleton key={`card-${idx}`} />
            ))
          : characters.isSuccess &&
            (data ? (
              data?.results.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))
            ) : (
              <div className="no-result">
                No result found. Please check the name or change the status of
                your search
              </div>
            ))}
      </StyledCharacters>
      {data && <Pagination numberOfPages={noOfPage} />}
    </>
  );
};

const StyledCharacters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  ${media.giant`grid-template-columns: repeat(4, 1fr)`}
  ${media.desktop`grid-template-columns: repeat(3, 1fr)`}
  ${media.tablet`grid-template-columns: repeat(2, 1fr)`}
  ${media.phone`grid-template-columns: 1fr`}
  margin-top: 4rem;
  gap: 3rem;
  .no-result {
    grid-column: 1/-1;
    font-size: 1.4rem;
    text-align: center;
  }
`;

export default Characters;
