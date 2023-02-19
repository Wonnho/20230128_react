import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./App.css";
import { counterReducer } from "./redux/counter";
import Counter from "./components/Counter";
import Todos from "./components/Todos.jsx";
const store = configureStore({
  reducer: {
    //속성 이름이 상태값의 이름이 된다.
    counter: counterReducer,
  },
});
function App() {
  return (
    <Provider store={store}>
    <Todos/>
    </Provider>
  );
}

export default App;
