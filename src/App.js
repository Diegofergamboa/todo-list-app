import react from "react";


function App() {
  // La construcción de los componentes de da a través del análisis previo de funcionalidades.
  
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        <TodoItem />
      <TodoList />
      <CreateTodoButton />
    </>
  );
};

export default App;
