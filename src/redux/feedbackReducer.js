import { CREATE_FEEDBACK } from './types';

const initialState = {
  feedbacks: [
    {
      id: 1,
      name: 'Самуил',
      feedback: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ',
      date: '13 октября 2011 г.',
    },
    {
      id: 2,
      name: 'Лилия Семёновна',
      feedback:
        'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
      date: '13 октября 2011 г.',
    },
    {
      id: 3,
      name: 'Лилия Семёновна',
      feedback:
        'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
      date: '13 октября 2011 г.',
    },
  ],
};

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FEEDBACK:
      return { ...state, feedbacks: [...state.feedbacks, action.payload] };
    default:
      return state;
  }
};
