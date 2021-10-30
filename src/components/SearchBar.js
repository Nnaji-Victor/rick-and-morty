import React from "react";
import styled from "styled-components";
import { media } from "../styles";
import { useApp } from "../utils/context/AppContext";

const SearchBar = ({ id = "search" }) => {
  const [, setParameter] = useApp();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.search.value;
    setParameter({
      name: query,
    });
  };

  return (
    <StyledSearchBar>
      <form onSubmit={handleSearchSubmit}>
        <label className="hidden" htmlFor={id}>
          Search
        </label>
        <input id={id} placeholder="Search characters..." autoComplete="off" />
        <div className="icon-container">
          <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
        </div>
      </form>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  border: 1px solid var(--theme-color-white);
  position: relative;
  border-radius: 5px;

  ${media.phablet`margin-top: 3rem`}

  .hidden {
    display: none;
  }

  input {
    background-color: transparent;
    padding: 1.5rem 4rem 1.5rem 1.2rem;
    width: 100%;
    box-sizing: border-box;
    appearance: none;
    border: none;
    color: var(--theme-color-white);
    font-weight: 600;
    font-size: 1.5rem;

    &::placeholder {
    }
  }

  .icon-container {
    display: flex;
    align-items: center;
    padding-right: 0.75rem;
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;

    .icon {
      height: 2.4rem;
      width: 2.4rem;
    }
  }
`;

export default SearchBar;
