import { useState } from "react";

function Edit() {
  const [inputs, setInputs] = useState({
    files: [],
    body: "",
  });

  const handleBody = (e) => {
    setInputs({
      ...inputs,
      body: e.target.value,
    });
  };

  const handleFiles = (e) => {
    setInputs({
      ...inputs,
      files: e.target.value,
    });
  };

  //console.log(e);



  return (
    <div>
      <div>
        <input type="file" accept="image/*" multiple onChange={handleFiles} />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        row="10"
        onChange={handleBody}
      ></textarea>
      <button>등록</button>
    </div>
  );
}

export default Edit;
