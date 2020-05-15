import React from 'react';
import Input from './Input';
import Button from './Button';
import FormTab from './FormTab';
import fetchData from '../services/fetchData';
import '../stylesheets/componentsStyles/Login.scss';

const Login = (props) => {
  const login = document.querySelector('.Login');
  const { data } = props;
  const changeTab = () => {
    login.querySelectorAll('.formTab').forEach(tab => tab.classList.toggle('activeTab'));
    login.querySelectorAll('.register').forEach(input => input.classList.toggle('show'));
  }

  const submit = e => {
    console.log(data)
    e.preventDefault();
    const email = login.querySelector('#email');
    const password = login.querySelector('#password');
    data.users.map(user => user.email === email && user.password === password ? console.log(true) : console.log(false))
  }

  return (
    <div className="Login">
      <div className="Login__tabs" onClick={changeTab} >
        <FormTab
          tabName={'Iniciar sesión'}
          tabClass={'Login__tabs--login activeTab'}
        />
        <FormTab
          tabName={'Nuevo usuario'}
          tabClass={'Login__tabs--register'}
        />
      </div>
      <form className="Login__form" action="">
        <Input
          id={'name'}
          className={'register'}
          inputName={'Nombre y apellidos'}
          placeholder={''}
          type={'text'}
          name={'name'}
        />
        <Input
          id={'email'}
          className={''}
          inputName={'Dirección de correo electrónico'}
          placeholder={''}
          type={'email'}
          name={'email'}
        />
        <Input
          id={'password'}
          className={''}
          inputName={'Contraseña'}
          placeholder={''}
          type={'password'}
          name={'password'}
        />
        {/* <a className="ForgetPass" href="#">¿Olvidó su contraseña?</a> */}
        <Button
          type={'submit'}
          name={'Iniciar sesión'}
          icon={'fas fa-lock'}
          className={'register show'}
          onClick={submit}
        />
        <Button
          type={'submit'}
          name={'Registrarse'}
          icon={'fas fa-lock'}
          className={'register'}
        // onClick={register}
        />
      </form>
    </div>
  )
}

export default Login;