import React from 'react';
import welltory from '../../assets/img/welltory.png';
import './titlePage.scss';

const TitlePage = () => {
  return (
    <div className='first'>
      <div className='first__title'>
        <img src={welltory} alt="welltory"/>
        <h2>Take better care of yourself every day</h2>
      </div>
    </div>
  );
};

export default TitlePage;