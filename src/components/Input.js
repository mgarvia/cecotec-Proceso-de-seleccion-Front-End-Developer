import React from 'react';
import '../stylesheets/componentsStyles/Input.scss';

const Input = props => {
  const {id, className, inputName, placeholder, type, name} = props
  return (
    <div className={`Input ${className}`}>
      <label className="Input__label" htmlFor={id}>{inputName}</label>
      <input id={id} className="Input__input" type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default Input;