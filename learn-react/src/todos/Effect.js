import { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  //디펜던시 배열이 비어있을 때: 렌더링 이후에 실행됨
  //즉 화면이 다 끝나고 서 useEffect가 실행됨.
  //useEffect() 생명주기에 따라서 실행될 사이드 이펙트를 콜백함수로 전달한다.
  useEffect(() => {
    console.log("렌더링");
  });

  //의존성 배열이 비었을 때: 화면에 처음 나타날 때 한번만 실행된다.
  //=>초기값 설정할 때, 라이브러리 연동, 예 setTimeout 등
  useEffect(() => {
    console.log("마운트");

    //뒷정cleanup함수;라이브러리 연동 해제, 스케줄 취소
    return () => {
      console.log("언마운트");
    };
  }, []);

  useEffect(() => {
    //변경된 후 실행
    console.log(count);

    //변경 직전에 실행=>값이 변경되어 다음렌터링되기 직전
    return () => console.log(count);
  }, [count]);

  console.log("render");

  return (
    <div>
      <h1>useEffect 사용</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>

      <div>
        <h2>{input}</h2>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
    </div>
  );
}

export default Effect;
