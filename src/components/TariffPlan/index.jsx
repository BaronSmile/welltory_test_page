import React from 'react';

import './tariffPlan.scss';
import TariffTable from "../TariffTable";
import * as data from "../../assets/data";


const TariffPlan = () => {
  return (
    <div className='tariff'>
      <h3 className='tariff__title'>Choose the best plan for you</h3>
      <ul className='variant'>
        <li>What you get</li>
        <li><span className='other'>for</span> Free</li>
        <li><span className='other'>in</span> Pro</li>
      </ul>

      <h3 className='table__title'>Feel better fast</h3>
      <TariffTable data={data.tariffDescriptionFeel}/>
      <h3 className='table__title'>Gain rich health insights</h3>
      <TariffTable data={data.tariffDescriptionRich}/>
    </div>
  );
};

export default TariffPlan;