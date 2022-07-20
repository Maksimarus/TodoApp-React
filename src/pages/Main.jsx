import React, {useEffect, useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import TodoItem from '../components/TodoItem';
import AddNewTodo from '../components/AddNewTodo';

import useTodos from '../hooks/useTodos';
import useDnD from '../hooks/useDnD';
import TodoService from '../api/TodoService';
import Pagination from '../components/UI/Pagination';
import {usePagination} from '../hooks/usePagination';
import {getPagesCount} from '../utils';

const Main = () => {
  const [pagesCount, setPagesCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const fetchTodos = async () => {
    const response = await TodoService.getTodos(limit, page);
    const totalCount = response.headers['x-total-count'];
    setTodos([...response.data]);
    setPagesCount(getPagesCount(totalCount, limit));
  };

  const pagesArray = usePagination(pagesCount);
  const [todos, setTodos, changeTodo, deleteTodo, addTodo] = useTodos([]);
  const [dragStartHandle, dragEndHandler, dragOverHandler, dropHandler] = useDnD(
    todos,
    setTodos,
  );

  useEffect(() => {
    fetchTodos();
  }, [page]);

  return (
    <section>
      <AddNewTodo addTodo={addTodo} />
      <TransitionGroup component="ul">
        {todos.map(todo => (
          <CSSTransition key={todo.id} timeout={500} classNames="todo">
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
      <Pagination
        current={page}
        setPage={pageNum => setPage(pageNum)}
        pagesArray={pagesArray}
      />
    </section>
  );
};

export default Main;
