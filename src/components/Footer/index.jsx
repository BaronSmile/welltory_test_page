import React from 'react';
import './footer.scss';

const Index = () => {
  return (
    <ul className='footer'>
      <li>
        <span className='footer__text'>Get the mobile app</span>
        <div className='mob_app'>
          <span className='mobile apple'/>
          <span className='mobile google_play'/>
        </div>

      </li>
      <li>
        <a href='!#' className='footer__text'>Terms of use</a>
        <a href='!#' className='footer__text'> Privacy policy</a>
      </li>
      <li>
        <a href='!#' className='social twitter'/>
        <a href='!#' className='social fb'/>
        <a href='!#' className='social instagram'/>
        <a href='!#' className='social link'/>
      </li>
    </ul>
  );
};

export default Index;