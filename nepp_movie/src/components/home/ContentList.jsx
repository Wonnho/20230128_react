import { useState } from "react";
import styled, { css } from "styled-components";

function ContentList({ title, initalState }) {
  const [filters, setFilters] = useState(initalState);

  const handleToggle = (id) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );
  };

  return (
    <div>
      <Container>
        <ContentHeader>
          <h3>{title}</h3>
          <FilterList>
            {filters.map((filter) => (
              <FilterItem
                key={filter.id}
                active={filter.active}
                onClick={() => handleToggle(filter.id)}
              >
                {filter.text}
              </FilterItem>
            ))}
          </FilterList>
        </ContentHeader>
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding: 20px 0;
`;

const ContentHeader = styled.div`
  display: flex;
`;

const FilterList = styled.ul`
  display: flex;
  border: 1px solid black;
  margin-left: 20px;
`;

const FilterItem = styled.li`
  padding: 0 5px;
  cursor: pointer;
  user-select: none;
  //border-radius: 5px;
  ${({ active }) =>
    active &&
    css`
      //함수안에 비구조할당한거다
      background-color: black;
      color: #fff;
    `}
`;

export default ContentList;
