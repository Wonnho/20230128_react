import { useState } from "react";
/*  useState:상태값을 만드는 훅
 =>첫 번재 인자는 초기값.
 =>반환값 배열 [상태값, 업데이트 함수]
 => 업데이트 함수를 실행시키면 전달된 인자가 새로운 상태가 된다.
 */

function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // 콜백함수의 첫번재 인자로 치신 상태값이 전달된다.
    // useCallback의 의존성을 제거하는데 효과적이다.
  };

  return (
    <div>
      <p>{count}</p>
      {/* 이벤트바인딩 함수를 값으로 전달해야 한다(함수 호출이 아니다) */}
      <button onClick={handleCount}>+1</button>
      {/* 상태가 업데이트 자동으로 렌더링이 된다. */}
      <button onClick={() => setCount(count - 1)}> -1</button>
    </div>
  );
}

export default Counter;
