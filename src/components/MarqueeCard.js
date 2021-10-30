import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles";

const MarqueeCard = ({ character }) => {
  return (
    <StyledMarqueeCard to={`/character/${character.id}`}>
      <div className="marquee-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="marquee-text">{character.name}</div>
    </StyledMarqueeCard>
  );
};

const StyledMarqueeCard = styled(Link)`
  position: relative;
  padding: 0 10rem;
  margin-right: 20rem;
  width: 100%;
  ${media.phablet`padding: 0 7rem; margin-right: 8rem;`}
  .marquee-image {
    max-width: 80%;
    img {
      object-fit: cover;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(17, 35, 64, 0.35);
      }
    }
  }
  .marquee-text {
    position: absolute;
    background-color: rgba(17, 35, 64, 0.75);
    right: -10rem;
    top: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    padding: 2rem;
    color: var(--theme-color-white);
    font-size: 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
  }
`;

export default MarqueeCard;
