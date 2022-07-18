import React from 'react';
import Check from './UI/Check';
import cn from 'classnames';
import DeleteIcon from './UI/DeleteIcon';

const TodoItem = ({
  todo,
  changeTodo,
  deleteTodo,
  dragStartHandle,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) => {
  return (
    <div
      draggable={true}
      onDragStart={e => dragStartHandle(e, todo)}
      onDragLeave={e => dragEndHandler(e)}
      onDragEnd={e => dragEndHandler(e)}
      onDragOver={e => dragOverHandler(e)}
      onDrop={e => dropHandler(e, todo)}
      className={cn(
        'flex p-4 bg-gray-800 rounded-2xl mb-6 justify-between align-middle cursor-grab',
        {'line-through': todo.isCompleted},
      )}>
      <button onClick={() => changeTodo(todo._id)} className="flex">
        <Check isCompleted={todo.isCompleted} />
        <p>{todo.title}</p>
      </button>
      <button onClick={() => deleteTodo(todo._id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default TodoItem;
