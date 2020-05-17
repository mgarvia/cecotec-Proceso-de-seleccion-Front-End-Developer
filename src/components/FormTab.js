import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/componentsStyles/FormTab.scss'

const FormTab = props => {
  const { className, title } = props;
  return (
    <h2 className={`formTab ${className}`}>{title}</h2>
  )
}

FormTab.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

FormTab.defaultProps = {
  className: 'formTab__standard',
  title: ''
}

export default FormTab;