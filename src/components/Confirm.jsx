import React from 'react';

const Confirm = ({children, addClassName}) => {
  return (
    <div className={`p-3 rounded-xl animate-[opacity_2s_ease-in-out] ${addClassName}`}>
      <p className="text-center">{children}</p>
    </div>
  );
};

export default Confirm;
