import React from 'react';

const Layout = ({children}) => {
  return (
    <div className="mx-auto bg-gray-900 h-screen text-white">
      <div className="container mx-auto py-6">
        <h1 className="font-bold text-3xl mb-8">TODO App</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
