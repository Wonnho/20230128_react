import { useState } from "react";

export function useInputs(initialForm) {
  const [inputs, setInputs] = useState(initialForm);
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
 
};

  return [inputs, handleInputs];
}
export default useInputs;
