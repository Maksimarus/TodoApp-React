import React from 'react';

import Layout from './layout/Layout';
import TodoItem from './components/TodoItem';
import AddNewTodo from './components/AddNewTodo';

import useTodos from './hooks/useTodos';
import useDnD from './hooks/useDnD';

const App = () => {
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
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-center font-bold text-3xl mb-8">TODO App</h1>
        <AddNewTodo addTodo={addTodo} />
        {todos.map(todo => (
          <TodoItem
            dragStartHandle={dragStartHandle}
            dragEndHandler={dragEndHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
            key={todo._id}
            todo={todo}
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </Layout>
  );
};

export default App;
