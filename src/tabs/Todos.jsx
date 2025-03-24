import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import EditForm from '../components/EditForm/EditForm';
import TodoList from '../components/TodoList/TodoList';
import Text from '../components/Text/Text';

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

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    window.localStorage.setItem('saved-todos', JSON.stringify(todos));
  }, [todos]);

  
  const findTodo = text => todos.some(todo => todo.text === text);

  
  const addNewTodo = inputValue => {
    if (findTodo(inputValue)) {
      alert('This todo already exists!');
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      text: inputValue,
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  
  const deleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

 
  const handleEditTodo = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  
  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  
  const updateTodo = newText => {
    if (findTodo(newText)) {
      alert('This todo already exists!');
      return;
    }

    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text: newText } : todo
      )
    );

    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}

      <TodoList todos={todos} onDelete={deleteTodo} onEdit={handleEditTodo} />

      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
