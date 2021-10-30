import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CharacterCard = ({ character }) => {
  return (
    <StyledCharacterCard to={`/character/${character.id}`}>
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <span className="character-text">
        <h3 className="name">{character.name}</h3>
        <p className="specie">{character.species}</p>
      </span>
    </StyledCharacterCard>
  );
};

const StyledCharacterCard = styled(Link)`
  text-decoration: none;
  color: var(--theme-color-white);
  &:hover {
    opacity: 0.8;
    transition: none;
    color: var(--hover-color);

    .character-image {
      background: var(--hover-color);
    }
  }
  .character-image {
    background-clip: padding-box;
    background-color: black;
    border: 4px solid transparent;
    color: white;
    margin-left: -4px;
    margin-right: -4px;
    position: relative;
    max-height: 30rem;
    &::before {
      content: "";
      display: block;
      padding-top: 56.25%;
    }
    img {
      display: block;
      height: 100%;
      left: 0;
      object-fit: cover;
      object-position: top center;
      opacity: 1;
      position: absolute;
      top: 0;
      transition: opacity 0.1s ease-in-out;
      width: 100%;
      z-index: 1;
    }
  }

  .character-text {
    display: block;
    margin-top: 1rem;
    .name {
      font-weight: 600;
      font-size: 2rem;
      text-decoration: none;
    }
    .specie {
      font-size: 1.3rem;
      margin-top: 0.5rem;
    }
  }
`;

export default CharacterCard;
