import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/counter";

function getState(state) {
  return state.counter;
}

function Counter() {
  // 관리되고 있는 여려개의 상태 중에 선택한다.
  //상태값을 선택하는 콜백함수를 전달

  const count = useSelector(getState);
  //selector 함수로는 순수함수가 전달되어야 한다.

  const dispatch = useDispatch();

  console.log(count);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increase(10))}>+1</button>
      <button onClick={() => dispatch(decrease(10))}>-1</button>
    </div>
  );
}

export default Counter;
