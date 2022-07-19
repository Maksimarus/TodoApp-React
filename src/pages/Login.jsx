import React, {useContext} from 'react';
import MyButton from '../components/UI/MyButton';

import MyInput from '../components/UI/MyInput';
import {AuthContext} from '../context';

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
  const login = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-center mb-8">Авторизация</h2>
      <form className="max-w-lg text-center" onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" addClassName="mb-7" />
        <MyInput type="password" placeholder="Введите пароль" addClassName="mb-7" />
        <MyButton type="submit">Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
