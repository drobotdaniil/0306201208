import React from 'react';
import FeedbackContainer from './components/FeedbackContainer';
import FormBlock from './components/FormBlock/FormBlock';
import './styles/App.scss';
function App() {
  return (
    <div className='wrapper'>
      <div className='main'>
        <section className='about'>
          <div className='left-block'>
            <img src='/images/photo.png' alt='manager' />
          </div>
          <div className='right-block'>
            <div className='person'>
              <h3 className='person__name'>Вероника Ростова</h3>
              <h5 className='person__role'>Менеджер по продажам</h5>
              <p className='person__desc'>
                Подберу для вас самые лучшие предложения. Мои услуги абсолютно
                бесплатны
              </p>
            </div>
            <div className='service'>
              <p className='title'>Услуг</p>
              <div className='services'>
                <div className='service__item'>
                  <div className='chart'>
                    <div className='chart-name'>Ручное бронирование</div>
                  </div>
                  <span className='count'>11</span>
                </div>
                <div className='service__item'>
                  <div className='chart'>
                    <div className='chart-name'>Пакетные туры</div>
                  </div>
                  <span className='count'>3</span>
                </div>
                <div className='service__item'>
                  <div className='chart'>
                    <div className='chart-name'>Отели</div>
                  </div>
                  <span className='count'>1</span>
                </div>
              </div>
              <div className="result">
                <h4 className="result-title">Всего</h4>
                <span className="result-counter">15</span>
              </div>
            </div>
          </div>
        </section>
        <section className='feedbacks'>
          <div className='feedbacks__header'>
            <div className='left-part'>
              <h3 className='title'>Последние отзывы</h3>
              <a href='/' className='link'>
                Все отзывы
              </a>
            </div>
            <div className='counters'>
              <div className='counters__item'>
                <img src='/images/like.png' alt='like' /> 131
              </div>
              <div className='counters__item'>
                <img src='/images/comment.png' alt='comment' /> 13
              </div>
            </div>
          </div>
          <div className='feedbacks__content'>
            <FeedbackContainer />
          </div>
        </section>
      </div>
      <footer className='footer'>
        <FormBlock />
      </footer>
    </div>
  );
}

export default App;
