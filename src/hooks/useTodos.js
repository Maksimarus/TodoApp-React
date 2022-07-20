import {useState} from 'react';

const useTodos = initialState => {
  const [todos, setTodos] = useState(initialState);

  const changeTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const deleteTodo = id => {
    setTodos([...todos.filter(el => el.id !== id)]);
  };

  const addTodo = title => {
    const newTodo = {
      id: new Date().getTime(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };
  return [todos, setTodos, changeTodo, deleteTodo, addTodo];
};

export default useTodos;
