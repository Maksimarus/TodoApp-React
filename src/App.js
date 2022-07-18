import React from 'react';
import TodoItem from './components/TodoItem';
import Layout from './layout/Layout';
import AddNewTodo from './components/AddNewTodo';
import useTodos from './hooks/useTodos';

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
  const [todos, changeTodo, deleteTodo, addTodo] = useTodos(data);

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-center font-bold text-3xl mb-8">TODO App</h1>
        <AddNewTodo addTodo={addTodo} />
        {todos.map(todo => (
          <TodoItem
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
