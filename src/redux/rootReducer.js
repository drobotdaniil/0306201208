import { combineReducers } from 'redux';
import { feedbackReducer } from './feedbackReducer';

export const rootReducer = combineReducers({
  feedbacks: feedbackReducer,
});
