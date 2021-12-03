import React from 'react';

import logo from '../assets/img/logo.svg'
import './app.scss';
import TitlePage from "../components/TitlePage";
import Card from "../components/Сards";
import * as data from '../assets/data';
import Button from "../components/Button";
import TariffPlan from "../components/TariffPlan";
import Footer from "../components/Footer";


const App = () => {
  const {cards} = data
  return (
    <div className='app'>
      <header className='header'>
        <img src={logo} alt="logo"/>
      </header>
      <div className="container">
        <TitlePage/>
        <Card data={cards}/>
        <Button btnText={'continue'}/>
        <span className='btn_comments'>No commitments. Cancel anytime</span>
        <TariffPlan/>
        <div className='btns'>
          <Button btnText={'go with the free version'}/>
          <Button btnText={'upgrade now'}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;