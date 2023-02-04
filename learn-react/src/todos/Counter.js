import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + state.amount };
    case "decrease":
      return { ...state, count: state.count - state.amount };
    case "change_amount":
      return { ...state, amount: action.amount };
    default:
      return state;
  }

  //   if (action.type === "increase") return state + 1;
  //   else if (action.type === "decrease") return state - 1;
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    amount: 3,
  });

  const handleAmount = (e) =>
    dispatch({ type: "change_amount", amount: parseInt(e.target.value) });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-1</button>
      {/* <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "change_amount", amount: parseInt(e.target.value) })
        } */}

      <input type="number" onChange={handleAmount} />
    </div>
  );
}

export default Counter;
