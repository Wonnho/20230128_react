import { findAllByDisplayValue } from "@testing-library/react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/post";
import styled from "styled-components";
import UserProfileBox from "../components/common/UserProfileBox";
function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const [index, setIndex] = useState(0);

  const { data, isLoading, error } = post;

  const fetchData = useCallback(async () => {
    const data = await getPostById(id);
    setPost({
      data,
      isLoading: false,
      error: null,
    });
  }, [id]);

  const handleIndex = (operand) => {
    if (!(operand + index < 0) && !(operand + index > data.img_list.length - 1))
      setIndex(index + operand);
  };

  useEffect(() => {
    fetchData(); // dependency
  }, [fetchData]);

  if (isLoading) return <div>is loading...</div>;
  return (
    <Container>
      <Wrapper>
        {/* <img src={data.img_list[0].url} alt="" /> */}
        <SlideBox>
          <SlideList index={index}>
            {data.img_list.map((img) => (
              <SlideItem>
                <img src={img.url} alt="" />
              </SlideItem>
            ))}
          </SlideList>
        </SlideBox>
        <button onClick={handleIndex(-1)}>-1</button>
        <button onClick={handleIndex(+1)}>+1</button>
        <UserProfileBox user={data.author} />
        <p>{data.body}</p>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    padding: 5px;
  }
`;

const Wrapper = styled.div``;

const SlideBox = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
  /* border: 3px solid black; */
`;

const SlideList = styled.ul`
  display: flex;
  /* border: 3px solid red; */
  transform: translateX(${({ index }) => index * -100}%);
  transition: transform 0.4s;
`;

const SlideItem = styled.li`
  width: 100%;
  height: 500px;
  flex-shrink: 0;
  /* border: 3px solid green; */

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export default Post;
