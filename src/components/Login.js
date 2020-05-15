import React from 'react';
import Input from './Input';
import Button from './Button';
import FormTab from './FormTab';
import '../stylesheets/componentsStyles/Login.scss';

const Login = (props) => {
  return (
    <div className="Login">
      <div className="Login__tabs">
        <FormTab
          tabName={'Iniciar sesión'}
          tabClass={'Login__tabs--login activeTab'}
        />
        <FormTab
          tabName={'Nuevo usuario'}
          tabClass={'Login__tabs--register inactiveTab'}
        />
      </div>
      <form className="Login__form" action="">
        <Input
          inputName={'Nombre y apellidos'}
          placeholder={''}
          type={'text'}
        />
        <Input
          inputName={'Dirección de correo electrónico'}
          placeholder={''}
          type={'email'}
        />
        <Input
          inputName={'Contraseña'}
          placeholder={''}
          type={'password'}
        />
        {/* <a className="ForgetPass" href="#">¿Olvidó su contraseña?</a> */}
        <Button
          type={'submit'}
          name={'Iniciar sesión'}
          icon={'fas fa-lock'}
          className={''}
        />
        <Button
          type={'submit'}
          name={'Registrarse'}
          icon={'fas fa-lock'}
          className={'hidden'}
        />
      </form>
    </div>
  )
}

export default Login;