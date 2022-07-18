import React from 'react';
import {BsTrash} from 'react-icons/bs';

const DeleteIcon = () => {
  return (
    <BsTrash
      size={24}
      className="text-gray-500 hover:text-red-500
		transition-colors duration-300 ease-in-out"
    />
  );
};

export default DeleteIcon;
