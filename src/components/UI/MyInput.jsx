import React from 'react';

const MyInput = ({addClassName, ...props}) => {
  return (
    <input
      className={`w-full p-3 b-6 bg-gray-800 rounded-xl ${addClassName}`}
      {...props}
    />
  );
};

export default MyInput;
