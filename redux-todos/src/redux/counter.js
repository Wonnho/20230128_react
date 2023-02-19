//action의 타입정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션 생성 함수
export const decrease = (amount) => {
  return {
    type: DECREASE,
    amount,
  };
};

export const increase = (amount) => {
  return {
    type: INCREASE,
    amount,
  };
};

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return state + action.amount;
    case DECREASE:
      return state - action.amount;
    default:
      return state;
  }

  //    16 reducer 비교
};

export default counterReducer;
