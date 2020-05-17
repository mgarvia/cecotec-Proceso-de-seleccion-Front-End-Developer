import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/componentsStyles/Input.scss';

const Input = props => {
  const {className, id, labelName, classInput, type, name, placeholder, value, onKeyUp} = props
  return (
    <div className={`Input ${className}`}>
      <label className="Input__label" htmlFor={id}>{labelName}</label>
      <input id={id} className={`Input__input ${classInput}`} type={type} name={name} placeholder={placeholder} defaultValue={value} autoComplete="on" onChange={onKeyUp}/>
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  classInput: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onKeyUp: PropTypes.func.isRequired,
}

Input.defaultProps = {
  className: '',
  labelName: '',
  classInput: '',
  type: 'text',
  placeholder: '',
}

export default Input;