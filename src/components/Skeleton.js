import React from "react";
import styled from "styled-components";

const Skeleton = () => {
  return (
    <div>
      <StyledSkeleton />
      <span style={{ marginTop: "1rem", display: "block" }}>...loading</span>
    </div>
  );
};

const StyledSkeleton = styled.div`
  --accent-2:  var(--theme-background-color);
  --accent-1: rgba(17, 35, 64, 0.85);
  --accent-0: #112340;
  border-radius: 5rem;
  height: 16rem;
  width: 100%;
  border-radius: 5px;
  background: linear-gradient(
    110deg,
    var(--accent-1) 8%,
    var(--accent-2) 18%,
    var(--accent-0) 33%
  );
  background-size: 400% 100%;
  animation: loading 4s ease-in-out infinite;

  @keyframes loading {
    100% {
      background-position: -200% 0;
    }
  }
`;

export default Skeleton;
