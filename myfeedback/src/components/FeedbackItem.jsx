import React, { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ rating, text, id }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card className="card">
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button
        className="edit"
        onClick={() => editFeedback({ id, rating, text })}
      >
        <FaEdit color="purple" />
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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default FeedbackItem;
