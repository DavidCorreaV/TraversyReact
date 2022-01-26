import React, { useState } from "react";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <Card>
      <form action="">
        <h2>How would you rate our service?</h2>
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            className="form-control"
            placeholder="Write a review"
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
