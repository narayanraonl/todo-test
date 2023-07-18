import React, { useState } from 'react';

const StoreContext = React.createContext({
  todos: [],
  setTodosHandler: ()=>{}
});

export const StoreContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const setTodosHandler = (data)=>{
    setTodos(data);
  }
  return (
    <StoreContext.Provider
      value={{
        todos:todos,
        setTodosHandler:setTodosHandler
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;