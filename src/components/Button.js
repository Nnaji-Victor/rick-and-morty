import React from "react";
import styled from "styled-components";

const Button = ({ children, className, onClick, active }) => {
  return (
    <StyledButton className={`${active ? "active":""} ${className ? className:""}`} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 1.6rem;
  background-color: transparent;
  border: 1px solid var(--theme-color-white);
  color: var(--theme-color-white);
  cursor: pointer;
  font-weight: 600;
  padding: .8rem 2.4rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 3px;

  &:hover{
    background-color: var(--hover-color);
  }

  &.active{
      background-color: var(--theme-color-white);
      color: var(--theme-background-color);
  }
`;

export default Button;
