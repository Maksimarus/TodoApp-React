import React, {useState} from 'react';
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
      <input
        className="w-full p-3 b-6 bg-gray-800 rounded-xl"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && addNewTodo()}
      />
    </div>
  );
};

export default AddNewTodo;
