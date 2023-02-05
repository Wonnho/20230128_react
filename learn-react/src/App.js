import Todos from "./todos/Todos";
import { createContext, useContext, useState } from "react";
import { TodoProvider } from "./context/todos";
// 전역에 공유하고 싶은 값을 전달하는 컨텍스트 생성
//=> 기본값은 Provier 밖에서 usecontext했을 때 반환되는 값

export const CountContext = createContext(0);

function App() {
  // const [count, setCount] = useState(10);

  // const value = useContext(CountContext);
  // console.log(value);

  return (
    <TodoProvider>
      <Todos />;
    </TodoProvider>
  );
}

export default App;
