import { Link, useOutlet, useOutletContext } from "react-router-dom";

function PostList() {
  //  const context = useOutlet();
  const { posts } = useOutletContext();

  const { data, isLoading } = posts;

  if (isLoading) return;
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={"post/" + item.id}>
            <Link to={"post/" + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
