import React from 'react';
import '../stylesheets/componentsStyles/FormTab.scss'

const FormTab = props=> {
  const {tabClass, tabName} = props;  
  return (
  <h2 className={`formTab ${tabClass}`}>{tabName}</h2>
  )
}

export default FormTab;