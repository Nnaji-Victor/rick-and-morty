import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { media } from "../styles";

const NotFoundScreen = () => {
  return (
    <Styled404>
      <div className="text">You've hit a 404</div>
      <div className="cta">
        <Link to="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </Styled404>
  );
};

const Styled404 = styled.div`
  color: var(--theme-color-white);
  height: calc(100vh - 10rem);
  width: 100vw;
  display: flex;
  place-content: center;
  place-items: center;
  font-size: 5rem;
  flex-direction: column;
  ${media.phablet`font-size: 3rem;`}
  .cta{
      display: block;
      margin-top: 1rem;
  }
`;

export default NotFoundScreen;
