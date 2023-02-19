export const counterReducer = (state = 0, action) => {
  // if (action.type==="add") return state+1;
  // if (action.type==="minus") return state-1;

  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }

  // 16 reducer 비교
};

export default counterReducer;
