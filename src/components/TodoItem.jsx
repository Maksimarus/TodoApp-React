import React from 'react';
import Check from './UI/Check';
import cn from 'classnames';
import DeleteIcon from './UI/DeleteIcon';

const TodoItem = ({todo, changeTodo, deleteTodo, dragFns}) => {
  return (
    <div
      draggable={true}
      onDragStart={e => dragFns.dragStartHandle(e, todo)}
      onDragLeave={e => dragFns.dragEndHandler(e)}
      onDragEnd={e => dragFns.dragEndHandler(e)}
      onDragOver={e => dragFns.dragOverHandler(e)}
      onDrop={e => dragFns.dropHandler(e, todo)}
      className={cn(
        'flex p-4 bg-gray-800 rounded-2xl mb-6 justify-between align-middle',
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
