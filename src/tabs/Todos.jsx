import Text from '../components/Text/Text';
import Form from "../components/Form/Form";
import TodoList from '../components/TodoList/TodoList';
import { useState, useEffect } from 'react';



const Todos = () => {
 const [todos, setTodos] = useState(() => {
   const savedTodos = window.localStorage.getItem('saved-todos');
   return savedTodos
     ? JSON.parse(savedTodos)
     : [
         { id: '1', text: 'Practice more' },
         { id: '2', text: 'Get all tasks done on time' },
       ];
 });
useEffect(() => {
  window.localStorage.setItem('saved-todos', todos);
}, [todos]);
 
  const addNewTodo = inputValue => {
    setTodos((prevTodos) => {
      return[...prevTodos, inputValue]
    })
  };
  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })

  }

  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
export default Todos;