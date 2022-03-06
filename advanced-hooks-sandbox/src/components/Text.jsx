import React from "react";

function Text({ text, onClick }) {
  return (
    <div onClick={onClick} style={{ height: "100vh" }}>
      <p>{text[0]}</p>
      <p>- {text[1]}</p>
    </div>
  );
}

export default Text;
