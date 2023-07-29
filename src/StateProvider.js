import React, { createContext, useContext, useReducer } from "react";

// Create the data layer context
export const StateContext = createContext();

// Define the StateProvider component to wrap the app
export const StateProvider = ({ reducer = (state) => state, initialState = {}, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Define a custom hook to access the state and dispatch functions
export const useStateValue = () => useContext(StateContext);
