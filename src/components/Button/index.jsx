import React from 'react';
import classNames from "classnames";

import './button.scss'

const Button = (props) => {
  const csn = classNames(props.btnText === 'go with the free version' ? 'none_gradient' : 'gradient')
  return (
    <>
      <button className={csn}>
        {props.btnText}
      </button>
    </>
  );
};

export default Button;