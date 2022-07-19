import React from 'react';

const MyButton = ({children, addClassName, ...props}) => {
  return (
    <button
      {...props}
      className={`bg-pink-400 p-2 rounded-xl min-w-[40%] text-lg  ${addClassName}`}>
      {children}
    </button>
  );
};

export default MyButton;
