import { useState } from "react";
function TodoCreate({ onSubmit }) {
  const [text, setText] = useState("");
  const handleText = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleText} text={text} />
        <button> 등록</button>
      </form>
    </div>
  );
}

export default TodoCreate;
