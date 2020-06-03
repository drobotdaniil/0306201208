import { CREATE_FEEDBACK } from './types';

export function createFeedback(feedback) {
  return {
    type: CREATE_FEEDBACK,
    payload: feedback,
  };
}
