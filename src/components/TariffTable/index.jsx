import React from 'react';

import './tariffTable.scss';
import check from "../../assets/img/Check.png";
import minus from "../../assets/img/minus.png";

const TariffTable = ({data}) => {
  const trFeel = data.map(({text, free, pro}, index) => {
    return (
      <li key={index}>
        <p className='table_text'>{text}</p>
        <p><img src={free ? check : minus} alt=""/></p>
        <p><img src={pro ? check : minus} alt=""/></p>
      </li>
    )
  })

  return (
    <>
      <ul className='tariff__table'>
        {trFeel}
      </ul>
    </>
  );
};

export default TariffTable;