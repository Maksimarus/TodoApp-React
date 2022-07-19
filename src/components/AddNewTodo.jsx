import React, {useState} from 'react';
import MyInput from './UI/MyInput';
import PlusIcon from './UI/PlusIcon';

const AddNewTodo = ({addTodo}) => {
  const [value, setValue] = useState('');

  const addNewTodo = () => {
    addTodo(value);
    setValue('');
  };

  return (
    <div className="flex bg-gray-800 rounded-xl mb-10">
      <button onClick={addNewTodo}>
        <PlusIcon />
      </button>
      <MyInput
        type="text"
        placeholder="Добавить новую задачу"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && addNewTodo()}
      />
    </div>
  );
};

export default AddNewTodo;
