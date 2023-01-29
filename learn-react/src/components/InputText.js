import { useState } from "react";

function InputText() {
  const [text, setText] = useState("write");
  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>{text}</p>
      <input type="text" onChange={handleText} />
    </div>
  );
}

export default InputText;
