import React from 'react';
import '../stylesheets/componentsStyles/Button.scss'

const Button = props => {
  const {className, type, onClick, icon, name} = props;
  return (
    <button className={`Button ${className}`} type={type} onClick={onClick} > 
      <i className={icon}></i>
      {name}
    </button>
  )
}

export default Button;