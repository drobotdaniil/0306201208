import { CREATE_FEEDBACK } from '../redux/types';
import { showAlert } from '../redux/actions';

const forbiddenWords = ['дибил', 'лох', 'дурак'];

export function forbiddentWordsMiddleWare({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_FEEDBACK) {
        const found = forbiddenWords.filter((w) => action.payload.feedback.includes(w));

        if (found.length) {
          return dispatch(showAlert('Пожалуйста, не используйте оскорбительную речь.'));
        }
      }
      return next(action);
    };
  };
}
