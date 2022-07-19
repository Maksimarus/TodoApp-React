import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './layout/Layout';
import Main from './pages/Main';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
