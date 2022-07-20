import React, {useState} from 'react';
import Check from './UI/Check';
import cn from 'classnames';
import DeleteBtn from './UI/DeleteBtn';
import DeletePopup from './DeletePopup';
import {Transition} from 'react-transition-group';

const TodoItem = ({
  todo,
  changeTodo,
  deleteTodo,
  dragStartHandle,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
}) => {
  const [visibleDeletePopup, setVisibleDeletePopup] = useState(false);

  const deletePopupHandle = () => {
    deleteTodo(todo.id);
    setVisibleDeletePopup(false);
  };

  return (
    <>
      <div
        draggable={true}
        onDragStart={e => dragStartHandle(e, todo)}
        onDragLeave={e => dragEndHandler(e)}
        onDragEnd={e => dragEndHandler(e)}
        onDragOver={e => dragOverHandler(e)}
        onDrop={e => dropHandler(e, todo)}
        className={cn('todo flex p-4 bg-gray-800 rounded-2xl mb-6 cursor-grab', {
          'line-through': todo.completed,
        })}>
        <div onClick={() => changeTodo(todo.id)} className="flex grow">
          <Check isCompleted={todo.completed} />
          <p className="mr-3 text-bold">{todo.id}.</p>
          <p>{todo.title}</p>
        </div>
        <DeleteBtn onClick={() => setVisibleDeletePopup(true)} />
      </div>
      <Transition in={visibleDeletePopup} timeout={500} mountOnEnter unmountOnExit>
        {state => (
          <DeletePopup
            addClassName={state}
            deleteTodo={deletePopupHandle}
            closePopup={() => setVisibleDeletePopup(false)}
          />
        )}
      </Transition>
    </>
  );
};

export default TodoItem;
