import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  createFeedback,
  showAlert,
  hideAlert,
  incrementCounter,
} from '../../redux/actions';
import './style.scss';
import { Alert } from '../Alert/Alert';

const FormBlock = (props) => {
  const [feedback, setFeedback] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!feedback.trim()) {
      return props.showAlert('Длина сообщения должна быть более 1 символа.');
    }

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

    props.incrementCounter();
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
      {props.alert && <Alert text={props.alert} />}
      <button className='btn'>Написать консультанту</button>
    </form>
  );
};

const mapDispatchToProps = {
  createFeedback,
  incrementCounter,
  showAlert,
  hideAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormBlock);
