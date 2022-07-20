import React from 'react';

const Layout = ({children}) => {
  return (
    <div className="mx-auto bg-gray-900 text-white min-h-screen">
      <div className="container max-w-5xl mx-auto p-5">{children}</div>
    </div>
  );
};

export default Layout;
