import React from 'react';
import './style.scss';

export default ({ feedback }) => {
  return (
    <div className='item'>
      <div className='item__top'>
        <h4 className='participant'>{feedback.name}</h4>
        <span className='date'>{feedback.date}</span>
      </div>
      <div className='item__content'>
        <span className='triangle'></span>
        {feedback.feedback}
      </div>
    </div>
  );
};
