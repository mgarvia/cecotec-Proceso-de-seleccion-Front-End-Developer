import React from 'react';
import Input from './Input';
import Button from './Button';
import FormTab from './FormTab';
import { Link } from 'react-router-dom';
import '../stylesheets/componentsStyles/Login.scss';

const Login = (props) => {
  const { setData, submit } = props;

  const getUserInfo = e => setData(e);
  const getEvt = e => submit(e)

  return (
    <div className="Login">
      <div>
        <FormTab
          title={'Iniciar sesión'}
          className={'activeTab'}
        />
      </div>
      <form className="Login__form" autoComplete="on" method="post">
        <Input
          id={'login__email'}
          labelName={'Dirección de correo electrónico'}
          type={'email'}      
          name={'email'}
          onKeyUp={getUserInfo}    
        />
        <Input
          id={'login__password'}
          labelName={'Contraseña'}
          type={'password'} 
          name={'password'}
          onKeyUp={getUserInfo} 
        />
        <p className="login__err errorMsg hidden">Email o contraseña incorrectos. Por favor inténtalo de nuevo.</p>
        <Link to={"/productos"}>
          <Button
            type={'submit'}
            title={'Iniciar sesión'}
            btnTitle={'Iniciar sesión'}
            icon={'fas fa-lock'}
            onClick={getEvt}
          />
        </Link>
      </form>
    </div>
  )
}

export default Login;