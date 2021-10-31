import React from "react";
import styled from "styled-components";
import { useCharacterLocation } from "../utils/hooks/query-hooks";

const LocationInfo = ({ locationInfo }) => {
  if (!locationInfo) {
    return <div>...loading</div>;
  }
  return locationInfo && <Location info={locationInfo} />;
};

const Location = ({ info }) => {
  const result = useCharacterLocation(info.url);
  const data = result && result?.data?.data;
  return (
    <StyledLocation>
      <li className="location-info">
        <span>Dimension</span> - {data?.dimension}
      </li>
      <li className="location-info">
        <span>Type</span> - {data?.type}
      </li>
      <li className="location-info">
        <span>No of Residents</span> - {data?.residents.length}
      </li>
    </StyledLocation>
  );
};

const StyledLocation = styled.ul`
  margin-top: 1.2rem;
  margin-left: 4rem;

  .location-info {
    font-size: 2rem;
    margin-bottom: 1.3rem;
    font-weight: 600;
    span {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`;

export default LocationInfo;
