import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { tmdbAxios } from "../../api/tmdb";
import ContentItem from "./ContentItem";

function ContentList({ title, initalState }) {
  //filters의 값이 바꾸리 때마다 get 요청 다시
  //=>active가 true인 filter의 url 이용
  //=>특정 값이 바뀔 때 마다 실행

  const [filters, setFilters] = useState(initalState);

  const [items, setItems] = useState([]);

  const handleToggle = (id) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );
  };

  const fetchData = async (url) => {
    //  const res = await tmdbAxios.get("/trending/movie/week");

    //const results=res.data.results

    const {
      data: { results },
    } = await tmdbAxios.get(url);

    //const { results } = res.data;

    setItems(results);
    //  console.log(results);
  };

  useEffect(() => {
    const { url } = filters.find((filter) => filter.active);
    fetchData(url);
  }, [filters]);

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
        <ContentWrapper>
          {items.map((item) => (
            <li>
              <ContentItem key={item.id} item={item} />
            </li>
          ))}
        </ContentWrapper>
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

const ContentWrapper = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 0;
`;

export default ContentList;
