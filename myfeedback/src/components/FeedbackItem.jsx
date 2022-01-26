import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ rating, text, id, handleDelete }) => {
  return (
    <Card className="card">
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

FeedbackItem.defaultProps = {
  rating: 10,
  text: "",
};

FeedbackItem.propTypes = {
  rating: PropTypes.number,
  text: PropTypes.string,
  id: PropTypes.number,
};
export default FeedbackItem;
