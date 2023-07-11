import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const MyContext = createContext();

// Crear el hook personalizado para acceder al contexto
const useMyContext = () => useContext(MyContext);

// Componente Proveedor
const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

// Componente Consumidor
const Counter = () => {
  const { count, increment, decrement } = useMyContext();

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

// Componente principal
const App = () => {
  return (
    <MyContextProvider>
      <Counter />
    </MyContextProvider>
  );
};

export default App;

// TODO: Hacer el ejercicio de Tasklist
