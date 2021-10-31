import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import Episodes from "../components/Episodes";
import InfoPill from "../components/InfoPill";
import PlaceHolder from "../components/PlaceHolder";
import { media } from "../styles";
import { useCharacter } from "../utils/hooks/query-hooks";

const CharacterProfile = () => {
  const { characterId } = useParams();

  let history = useHistory();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const character = useCharacter(characterId);

  const data = character?.data?.data;
  return (
    <StyledCharacterProfile>
      <div className="white-section">
        <div onClick={history.goBack} className="back-button">
          ← Back
        </div>

        <div className="character-bio">
          <div className="name">
            {character.isLoading ? (
              <span>loading</span>
            ) : (
              <span>{data?.name}</span>
            )}
          </div>

          <div className="specie">
            {character.isLoading ? (
              <span>loading</span>
            ) : (
              <span>{data?.species}</span>
            )}
          </div>
        </div>

        <div className="character-grid">
          <div className="image-column">
            {character.isLoading ? (
              <PlaceHolder />
            ) : (
              <img src={data.image} alt={data.name} />
            )}
          </div>
          <div className="text-column">
            <div className="other-info">
              <InfoPill
                loading={character.isLoading}
                text={"Gender"}
                value={data?.gender}
              />
              <InfoPill
                loading={character.isLoading}
                text={"Status"}
                value={data?.status}
              />
              <InfoPill
                loading={character.isLoading}
                text={"Origin"}
                value={data?.origin.name}
              />
              <InfoPill
                loading={character.isLoading}
                text={"Location"}
                value={data?.location.name}
              />
            </div>
          </div>
        </div>

        <div className="episodes">
          <Episodes episodes={data?.episode} loading={character.isLoading} />
        </div>
      </div>
    </StyledCharacterProfile>
  );
};

const StyledCharacterProfile = styled.div`
  .white-section {
    background-color: var(--theme-color-white);
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 5rem;
    padding-bottom: 10rem;

    .character-bio {
      text-align: center;
      font-size: 4rem;
      font-weight: 600;
      margin-top: 3rem;

      .specie {
        font-size: 1.5rem;
        display: inline-block;
        font-weight: 400;
      }
    }

    .character-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 5rem;
      ${media.phablet`grid-template-columns: 1fr; grid-template-rows: 1fr 1fr`}

      .image-column {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 30rem;
        width: 40rem;
        justify-self: center;
        ${media.tablet`width: auto`}
        &::before {
          content: "";
          display: block;
          padding-top: 56.25%;
          border: 4px solid var(--hover-color);
          position: relative;
          height: 10rem;
          width: 30rem;
          ${media.phablet`display: none;`}
        }
        img {
          display: block;
          right: 0;
          object-fit: cover;
          object-position: top center;
          opacity: 1;
          position: absolute;
          top: 0;
          transition: opacity 0.1s ease-in-out;
          z-index: 1;
          height: 100%;
          ${media.phablet`position: relative; width: 100%`}
        }
      }

      .text-column {
        ${media.tablet`display: flex; justify-content: center; align-items: center`}
      }
    }
  }
  .back-button {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default CharacterProfile;
