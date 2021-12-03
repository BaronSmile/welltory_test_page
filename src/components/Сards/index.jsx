import React from 'react';
import classNames from 'classnames';
import './cards.scss';

const Card = ({data}) => {
  const card = data.map(({discount, date, newPrice, oldPrice, info}, index) => {
      const cardTag = classNames('card__tag', (discount === '-25%' ? 'yellow' : 'blue'));
      const colorPrice = classNames(discount === '-25%' ? 'yellow_text' : 'blue_text');
      return (
        <ul key={index} className='card'>
          <li className={cardTag}>
            {discount}
          </li>
          <li className='card__title'>
            <p className='card__name'>{date}</p>
            <p className='price'>
              <span className={colorPrice}>$ {newPrice}</span>
              <span>$ {oldPrice}</span>
            </p>
          </li>
          <li className='card__footer'>{info}</li>
        </ul>
      )

    }
  )
  return (
    <div className='cards'>
      {card}
    </div>
  );
};

export default Card;