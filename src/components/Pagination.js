import React from "react";
import styled from "styled-components";
import PaginateCore from "react-paginate";
import { useApp } from "../utils/context/AppContext";

const Pagination = ({ currentPage, numberOfPages }) => {
  const [, setParameter] = useApp();
  const onPageChange = (page) => {
    setParameter({
      page: page.selected,
    });
  };
  return (
    <StyledPagination>
      <PaginateCore
        pageCount={numberOfPages}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={(page) => {
          onPageChange({ ...page, selected: page.selected + 1 });
        }}
        forcePage={currentPage}
      />
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  margin-top: 2rem;
  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    cursor: pointer;
    & > *:not(:last-child) {
      margin-right: 1rem;
    }

    li {
      height: 4.4rem;
      min-width: 4.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      border: 1px solid rgba(58, 88, 204, 0.39);
      margin-top: 5px;

      &.disabled {
        display: none;
      }

      &.selected {
        border: 1px solid var(--theme-color-white);
      }
    }
  }
`;

export default Pagination;
