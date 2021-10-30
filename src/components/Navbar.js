import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../styles";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <StyledNavBar className="grid">
      <Link to="/">
        <Logo />
      </Link>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  min-height: 7.4rem;
  background-color: var(--theme-background-color);
  padding-left: 3rem;
  padding-right: 3rem;
  svg {
    width: 15rem;
    ${media.tablet`width: 12rem`}
  }
`;

export default Navbar;
