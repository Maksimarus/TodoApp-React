import React, {useState} from 'react';
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
  const [todos, setTodos, changeTodo, deleteTodo, addTodo] = useTodos(data);
  const [currentTodo, setCurrentTodo] = useState(null);

  const dragFns = {
    dragStartHandle(e, todo) {
      setCurrentTodo(todo);
    },
    dragEndHandler(e) {
      e.target.style.boxShadow = '';
    },
    dragOverHandler(e) {
      e.preventDefault();
      if (e.target.tagName === 'DIV') {
        e.target.style.boxShadow = '7px 25px 23px 4px rgb(75 85 99)';
      }
    },
    dropHandler(e, todo) {
      e.preventDefault();
      setTodos(
        todos.map(el => {
          if (el._id === todo._id) {
            return (el = currentTodo);
          }
          if (el._id === currentTodo._id) {
            return (el = todo);
          }
          return el;
        }),
      );
      e.target.style.boxShadow = '';
    },
  };

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-center font-bold text-3xl mb-8">TODO App</h1>
        <AddNewTodo addTodo={addTodo} />
        {todos.map(todo => (
          <TodoItem
            dragFns={dragFns}
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
