import React from 'react';
import '../stylesheets/componentsStyles/Button.scss'

const Button = props => {
  const {className, type, icon, name} = props;
  return (
    <button className={`Button ${className}`} type={type}> 
      <i className={icon}></i>
      {name}
    </button>
  )
}

export default Button;