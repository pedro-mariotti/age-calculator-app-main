import React from "react";
function TextInput({ setDateHook }) {
  return (
    <input type="text" required onChange={(e) => setDateHook(e.target.value)} />
  );
}

export default TextInput;
