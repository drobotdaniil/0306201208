import React from 'react';
import { connect } from 'react-redux';
import FeedbackBlock from './FeedbackBlock/FeedbackBlock';

const FeedbackContainer = ({ feedbacks }) => {
  if (!feedbacks.length) {
    return <p>No feedbacks yet!</p>;
  }

  return feedbacks.map((feedback) => {
    return <FeedbackBlock feedback={feedback} key={feedback.id} />;
  });
};

const mapStateToProps = (state) => {
  return {
    feedbacks: state.feedbacks.feedbacks,
  };
};

export default connect(mapStateToProps, null)(FeedbackContainer);
