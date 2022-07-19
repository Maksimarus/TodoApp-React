import {useState} from 'react';

const useTodos = initialState => {
  const [todos, setTodos] = useState(initialState);

  const changeTodo = id => {
    const copy = [...todos];
    const current = copy.find(el => el._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const deleteTodo = id => {
    setTodos([...todos.filter(el => el._id !== id)]);
  };

  const addTodo = title => {
    const newTodo = {
      _id: new Date().getTime(),
      title,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
  };
  return [todos, setTodos, changeTodo, deleteTodo, addTodo];
};

export default useTodos;
