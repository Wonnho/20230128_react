import { findAllByDisplayValue } from "@testing-library/react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/post";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = post;

  const fetchData = useCallback(async () => {
    const data = await getPostById(id);
    setPost({
      data,
      isLoading: false,
      error: null,
    });
  }, [id]);

  useEffect(() => {
    fetchData(); // dependency
  }, [fetchData]);

  if (isLoading) return <div>is loading...</div>;
  return (
    <div>
      <img src={data.img_list[0].url} alt="" />
      {data.author.name}
      <p>{data.body}</p>
    </div>
  );
}

export default Post;
