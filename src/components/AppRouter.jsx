import React, {useContext, useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import Main from '../pages/Main';
import Login from '../pages/Login';
import {AuthContext} from '../context';

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  });

  return (
    <Routes>
      {!isAuth ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
