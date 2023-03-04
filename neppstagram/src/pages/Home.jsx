import { useCallback, useState, useEffect } from "react";
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
      <ul>
        {data.map((item) => (
          <li>
            <img src={item.img_list[0].url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
