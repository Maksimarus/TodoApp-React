import React from 'react';
import {BsCheck} from 'react-icons/bs';
import cn from 'classnames';

const Check = ({isCompleted}) => {
  return (
    <div
      className={cn(
        'border-2 border-pink-400 w-6 h-6 rounded-lg mr-4 ' +
          'flex justify-center align-middle',
        {'bg-pink-400': isCompleted},
      )}>
      {isCompleted && <BsCheck size={22} className="text-gray-900" />}
    </div>
  );
};

export default Check;
