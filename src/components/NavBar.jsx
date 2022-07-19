import React, {useContext} from 'react';
import {AuthContext} from '../context';
import MyButton from './UI/MyButton';

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const comeOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="font-bold text-3xl">TODO App</h1>
      {isAuth ? (
        <MyButton onClick={comeOut} addClassName="min-w-[150px] bg-red-500 ">
          Выйти
        </MyButton>
      ) : (
        ''
      )}
    </header>
  );
};

export default NavBar;
