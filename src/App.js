import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from "./TodoItem";



function App() {
  // La construcción de los componentes se da a través del análisis previo de funcionalidades.
  const todos = [
    {text: 'First ToDo', completed : true},
    {text: 'Second ToDo', completed : true},
    {text: 'Third ToDo', completed : true},
  ];

  
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
          {todos.map(todo => <TodoItem key={todos.text} text={todo.text}/>)}
      </TodoList >
      {/*  <CreateTodoButton /> */}
    </>
  );
};

export default App;
