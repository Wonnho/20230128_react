import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/practice/About";
import Home from "./components/practice/Home";
import Headers from "./components/practice/Header";
//import Todos from "./components/practice/Todos";

function App() {
  return (
    <>
      <Headers />

      <Routes>
        {/* Routes와 Route를 통해서 주소에 따라 보여줄 컴포넌트를 나눈다. */}
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<div> 나타납니다.</div>} />
        </Route>
        <Route path="about/*" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
