import { useParams, useSearchParams } from "react-router-dom";

const list = [
  { id: 1, text: "게시글" },
  { id: 2, text: "리액트" },
  { id: 3, text: "액시오스" },
  { id: 4, text: "REST API" },
];
function Detail() {
  // const params=useParams();
  const { id } = useParams(); //path parameter를 가져올 수 있다. 문자열로 넘어온다.
  // console.log(params);

  const [searchParams] = useSearchParams();

  const post = list.find((item) => item.id === parseInt(id));

  console.log(searchParams.get("name"));

  //반복 가능한 객체
  for (let key of searchParams.keys()) {
    console.log(key);
  }

  return (
    <div>
      <h2>상세보기 {id}</h2>
      {post.text}
    </div>
  );
}

export default Detail;
