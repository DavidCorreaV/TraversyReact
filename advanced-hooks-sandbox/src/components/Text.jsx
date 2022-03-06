import React from "react";

function Text({ text, onClick }) {
  return (
    <div onClick={onClick}>
      <p>{text[0]}</p>
      <p>- {text[1]}</p>
    </div>
  );
}

export default Text;
