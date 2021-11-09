import React from 'react';
import './App.css';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';
import axios from 'axios';
import Loader from './Todo/Loader';
import Modal from './Modal/Modal';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchTodos = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => {
        setIsLoading(true);
        setTimeout(() => {
          setTodos([...response.data]);
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => console.warn(err))
      .finally(console.log('finally'));
  };

  const onToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  React.useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Context.Provider value={{ removeTodo, onSubmitHandler: createTodo }}>
      <div className="wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <h2>TODO List</h2>
            <Modal />
            <AddTodo />
            {todos && todos.length ? (
              <TodoList todos={todos} onToggleComplete={onToggleComplete} />
            ) : (
              <h3 style={{ color: 'red' }}>You have no todos yet!</h3>
            )}
          </div>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
