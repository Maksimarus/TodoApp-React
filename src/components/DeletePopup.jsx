import React from 'react';

import MyButton from './UI/MyButton';

const DeletePopup = ({deleteTodo, closePopup, addClassName}) => {
  return (
    <div
      className={`popup flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 bg-black/30 ${addClassName}`}>
      <div className="popup-container flex flex-col justify-center items-center p-8 rounded-xl bg-gray-800 text-white max-w-xl w-full min-h-[200px]">
        <p className="mb-10 text-center text-2xl">Удалить задачу?</p>
        <div className="flex justify-center">
          <MyButton onClick={closePopup} addClassName="mr-6 bg-red-500 min-w-[150px]">
            Отмена
          </MyButton>
          <MyButton onClick={deleteTodo} addClassName="bg-green-500 min-w-[150px]">
            Удалить
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
