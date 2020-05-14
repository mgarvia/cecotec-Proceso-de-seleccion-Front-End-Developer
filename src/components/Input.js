import React from 'react';
import '../stylesheets/componentsStyles/Input.scss';

const Input = props => {
  const {inputName, placeholder, type} = props
  return (
    <div className="Input">
      <label className="Input__label" htmlFor="input__name">{inputName}</label>
      <input className="Input__input" type={type} name="email" placeholder={placeholder}/>
    </div>
  )
}

export default Input;