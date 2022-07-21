import {useState} from 'react';

const useDnD = (todos, setTodos) => {
  const [current, setCurrent] = useState(null);

  const dragStartHandle = (e, todo) => {
    setCurrent(todo);
  };

  const dragEndHandler = e => {
    e.target.classList.remove('bg-gray-600');
  };

  const dragOverHandler = e => {
    e.preventDefault();
    if (e.target.tagName === 'DIV') {
      e.target.classList.add('bg-gray-600');
    }
  };

  const dropHandler = (e, todo) => {
    e.preventDefault();
    console.log(todos);
    const newTodosArr = todos.map(el => {
      if (el.id === todo.id) {
        return (el = current);
      }
      if (el.id === current.id) {
        return (el = todo);
      }
      return el;
    });
    setTodos(newTodosArr);
    e.target.classList.remove('bg-gray-600');
  };
  return [dragStartHandle, dragEndHandler, dragOverHandler, dropHandler];
};

export default useDnD;
