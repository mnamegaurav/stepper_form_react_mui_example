import React from "react";
import { reducer, initialState } from "./reducer";

// Create a context with initial state
export const Context = React.createContext(initialState);

// useStore hook
export const useStore = () => {
  // Below line will return -> [state, dispatch]
  return React.useContext(Context);
};

// State Provider to wrap the whole application
const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { children } = props;

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

// Default export the StoreProvider
export default StoreProvider;
