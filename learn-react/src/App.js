import Todos from "./todos/Todos";
import { createContext, useContext, useState } from "react";

export const CountContext = createContext(0);

function App() {
  const [count, setCount] = useState(10);

  const value = useContext(CountContext);
  console.log(value);

  return (
    <CountContext.Provider value={count}>
      <Todos />;
    </CountContext.Provider>
  );
}

export default App;
