import React from 'react';

const Confirm = ({children, addClassName}) => {
  return (
    <div className={`confirm p-3 rounded-xl ${addClassName}`}>
      <p className="text-center">{children}</p>
    </div>
  );
};

export default Confirm;
