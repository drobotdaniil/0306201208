import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createFeedback } from '../../redux/actions';
import './style.scss';

const FormBlock = (props) => {
  const [feedback, setFeedback] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!feedback.trim()) return;

    const newFeedback = {
      name: 'Anonymus',
      feedback,
      date: new Date().toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      id: Date.now().toString(),
    };
    props.createFeedback(newFeedback);
    setFeedback('');
  };

  const submitOnKey = (e) => {
    if (e.ctrlKey && e.keyCode === 13) submitHandler(e);
  };

  const changeInputHandler = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className='form' onKeyUp={submitOnKey}>
      <textarea
        className='textarea'
        type='text'
        id='feedback'
        name='feedback'
        value={feedback}
        onChange={changeInputHandler}
      />
      <button className='btn'>Написать консультанту</button>
    </form>
  );
};

const mapDispatchToProps = {
  createFeedback,
};

export default connect(null, mapDispatchToProps)(FormBlock);
