import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {AuthContext} from './context';

import Layout from './layout/Layout';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Layout>
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </Layout>
  );
};

export default App;
