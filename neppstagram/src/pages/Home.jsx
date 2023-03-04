import { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPosts } from "../api/post";

function Home() {
  const [posts, setPosts] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = posts;
  console.log(data);

  const fetchData = useCallback(async () => {
    const data = await getPosts(1);

    setPosts({
      data,
      error: null,
      isLoading: false,
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) return <div>is loading...</div>;
  return (
    <div>
      <PostList>
        {data.map((item) => (
          <PostItem>
            <Link to={`/posts/${item.id}`}>
              <img src={item.img_list[0].url} alt="" />
            </Link>
          </PostItem>
        ))}
      </PostList>
    </div>
  );
}

const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap; //넘어가는 영역을 줄바꿈함
`;

const PostItem = styled.li`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
`;

export default Home;
