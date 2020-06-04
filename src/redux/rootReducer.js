import { combineReducers } from 'redux';
import { feedbackReducer } from './feedbackReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  feedbacks: feedbackReducer,
  app: appReducer,
});
