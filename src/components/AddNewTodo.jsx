import React, {useState} from 'react';
import {Transition} from 'react-transition-group';
import Confirm from './Confirm';
import MyInput from './UI/MyInput';
import PlusBtn from './UI/PlusBtn';

const AddNewTodo = ({addTodo}) => {
  const [value, setValue] = useState('');
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [visibleError, setVisibleError] = useState(false);

  const addNewTodo = () => {
    if (value) {
      addTodo(value);
      setValue('');
      setVisibleConfirm(true);
      setTimeout(() => {
        setVisibleConfirm(false);
      }, 2000);
    } else {
      setVisibleError(true);
      setTimeout(() => {
        setVisibleError(false);
      }, 2000);
    }
  };

  return (
    <div className="mb-10">
      <div className="flex bg-gray-800 rounded-xl mb-3">
        <PlusBtn onClick={addNewTodo} />
        <MyInput
          type="text"
          placeholder="Добавить новую задачу"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyUp={e => e.key === 'Enter' && addNewTodo()}
        />
      </div>
      <Transition in={visibleConfirm} timeout={500} mountOnEnter unmountOnExit>
        {state => (
          <Confirm addClassName={`bg-green-700 ${state}`}>
            Задача успешно добавлена
          </Confirm>
        )}
      </Transition>
      <Transition in={visibleError} timeout={500} mountOnEnter unmountOnExit>
        {state => (
          <Confirm addClassName={`bg-red-500 ${state}`}>Введите текст задачи</Confirm>
        )}
      </Transition>
    </div>
  );
};

export default AddNewTodo;
