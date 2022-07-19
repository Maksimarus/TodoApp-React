import React from 'react';

import TodoItem from '../components/TodoItem';
import AddNewTodo from '../components/AddNewTodo';

import useTodos from '../hooks/useTodos';
import useDnD from '../hooks/useDnD';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Main = () => {
  const data = [
    {
      _id: 'gfg133',
      title: 'Finish the essay collaboration',
      isCompleted: false,
    },
    {
      _id: 'gfgf111',
      title: 'Send collaboration files to Jerusha',
      isCompleted: false,
    },
    {
      _id: '88ytt',
      title: 'Read next chapter of the book',
      isCompleted: false,
    },
  ];
  const [todos, setTodos, changeTodo, deleteTodo, addTodo] = useTodos(data);
  const [dragStartHandle, dragEndHandler, dragOverHandler, dropHandler] = useDnD(
    todos,
    setTodos,
  );

  return (
    <section>
      <AddNewTodo addTodo={addTodo} />
      <TransitionGroup component="ul">
        {todos.map(todo => (
          <CSSTransition key={todo._id} timeout={500} classNames="todo">
            <TodoItem
              dragStartHandle={dragStartHandle}
              dragEndHandler={dragEndHandler}
              dragOverHandler={dragOverHandler}
              dropHandler={dropHandler}
              todo={todo}
              changeTodo={changeTodo}
              deleteTodo={deleteTodo}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};

export default Main;
