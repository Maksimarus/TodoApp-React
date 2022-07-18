import {useState} from 'react';

const useDnD = (todos, setTodos) => {
  const [current, setCurrent] = useState(null);

  const dragStartHandle = (e, todo) => {
    setCurrent(todo);
  };

  const dragEndHandler = e => {
    e.target.style.boxShadow = '';
  };

  const dragOverHandler = e => {
    e.preventDefault();
    if (e.target.tagName === 'DIV') {
      e.target.style.boxShadow = '7px 25px 23px 4px rgb(75 85 99)';
    }
  };

  const dropHandler = (e, todo) => {
    e.preventDefault();
    const newTodosArr = todos.map(el => {
      if (el._id === todo._id) {
        return (el = current);
      }
      if (el._id === current._id) {
        return (el = todo);
      }
      return el;
    });
    setTodos(newTodosArr);
    e.target.style.boxShadow = '';
  };
  return [dragStartHandle, dragEndHandler, dragOverHandler, dropHandler];
};

export default useDnD;
