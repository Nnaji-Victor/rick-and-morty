import React from "react";
import styled from "styled-components";
import { useMainCharacters } from "../utils/hooks/query-hooks";
import Marquee from "./Marquee";
import MarqueeCard from "./MarqueeCard";

const Hero = () => {
  const { data, isLoading, isError, isSuccess, error } = useMainCharacters();
  // console.log(data);

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (isError) {
    return <div>${error.message}</div>;
  }

  if (isSuccess) {
    return (
      <StyledHero>
        <Marquee>
          {data &&
            data.data.map((character) => (
              <MarqueeCard character={character} key={character.id} />
            ))}
        </Marquee>
      </StyledHero>
    );
  }
};

const StyledHero = styled.div`
  border-bottom: 1px solid var(--theme-background-color);
  padding: 2rem 0;
  background-color: var(--theme-color-white);;
`;

export default Hero;
