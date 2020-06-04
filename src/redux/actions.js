import { CREATE_FEEDBACK, HIDE_ALERT, SHOW_ALERT } from './types';

export function createFeedback(feedback) {
  return {
    type: CREATE_FEEDBACK,
    payload: feedback,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
