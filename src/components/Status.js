import React from "react";
import styled from "styled-components";
import { useApp } from "../utils/context/AppContext";
import Button from "./Button";

const buttonStatus = ["alive", "dead", "unknown"];
const Status = ({ getStatus }) => {
  const [status, setStatus] = React.useState({
    alive: false,
    dead: false,
    unknown: false,
  });

  const handleButtonClick = (id) => {
    buttonStatus.forEach((btnstatus) => {
      if (btnstatus !== id) {
        status[btnstatus] = false;
      }
    });
    setStatus((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const [, setParameter] = useApp();

  React.useEffect(() => {
    const y = Object.keys(status)
        .filter((x) => status[x] === true)
        .join("");
      setParameter({
        status: y,
        page: 1,
      });
  }, [setParameter, status]);

  return (
    <StyledStatus>
      <span>Status: </span>
      {buttonStatus.map((btnstatus) => (
        <Button
          onClick={() => handleButtonClick(btnstatus)}
          key={btnstatus}
          active={status[btnstatus]}
        >
          {btnstatus}
        </Button>
      ))}
    </StyledStatus>
  );
};

const StyledStatus = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  span {
    margin-right: 1.5rem;
    font-weight: 600;
    font-size: 2rem;
  }

  button {
    margin-top: 1rem;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;

const MemoStatus = React.memo(Status);

export default MemoStatus;
