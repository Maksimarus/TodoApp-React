import React, {useContext, useState} from 'react';
import MyButton from '../components/UI/MyButton';

import MyInput from '../components/UI/MyInput';
import {AuthContext} from '../context';

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const login = e => {
    e.preventDefault();
    if (loginValue === 'admin' && passwordValue === 'admin') {
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-center mb-8">Авторизация</h2>
      <form className="max-w-lg text-center" onSubmit={login}>
        <MyInput
          value={loginValue}
          onChange={e => setLoginValue(e.target.value)}
          type="text"
          placeholder="Введите логин (admin)"
          addClassName="mb-7"
          required
        />
        <MyInput
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
          type="password"
          placeholder="Введите пароль (admin)"
          addClassName="mb-7"
          required
        />
        <div className="text-red-500"></div>
        <MyButton type="submit" addClassName="bg-pink-400 min-w-[40%]">
          Войти
        </MyButton>
      </form>
    </div>
  );
};

export default Login;
