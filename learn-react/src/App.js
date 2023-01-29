// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Hello title="Seok" color="red" />
      <Hello backgroundColor="yellow" />;
      <Hello>
        <p> 자식요소입니다.</p>
      </Hello>
      ;
      <Hello />;
    </>
  );
}

export default App;
