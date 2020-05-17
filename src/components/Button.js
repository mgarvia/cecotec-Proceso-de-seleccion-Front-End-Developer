import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/componentsStyles/Button.scss'

const Button = props => {
  const {className, type, title, onClick, icon, btnTitle} = props;
  return (
    <button className={`Button ${className}`} type={type} title={title} onClick={onClick} > 
      <i className={icon}></i>
      {btnTitle}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  btnTitle: PropTypes.string
}

Button.defaultProps = {
  className: '',
  type: 'button',
  title: 'Enviar',
  icon: '',
  btnTitle: 'Enviar'
}

export default Button;