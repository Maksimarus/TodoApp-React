import React from 'react';

const MyButton = ({children, addClassName, ...props}) => {
  return (
    <button className={`p-2 rounded-xl text-lg ${addClassName}`} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
