import React from 'react';

const buttonStyle = {
  marginRight: '10px',
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button key={option} onClick={() => onLeaveFeedback(option)} style={buttonStyle}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
