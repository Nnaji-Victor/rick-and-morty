import React from "react";
import { default as FastMarquee } from "react-fast-marquee";
import styled from "styled-components";

const Marquee = ({ children }) => {
  return <StyledMarquee gradient={false}>{children}</StyledMarquee>;
};

const StyledMarquee = styled(FastMarquee)`
  display: flex;
  max-height: 32rem;
  overflow: hidden;
  align-items: center;
`;

export default Marquee;
