import { useState } from "react";

function InputText() {
  const [Inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const { name, email } = Inputs;

  const handleInputs = (e) => {
    const { name, value } = e.target;
    //상태 업데이트할 때에는 기존 객체를 변경해서는 안된다.=>불변성 원칙
    setInputs({
      //기존의 inputs 값을 펼치고, 일부분만 수정.
      ...Inputs,
      //[e.target.name]: e.target.value,
      [name]: value,
    });
  };

  return (
    <div>
      <p>
        {name}({email})
      </p>
      <input type="text" onChange={handleInputs} name="name" />
      <input type="text" onChange={handleInputs} name="email" />
    </div>
  );
}

export default InputText;
