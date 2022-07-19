import React from 'react';

const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className="bg-pink-400 p-2 rounded-xl min-w-[40%] text-lg">
      {children}
    </button>
  );
};

export default MyButton;
