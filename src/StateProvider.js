import React, { createContext, useReducer, useContext } from "react";

// Prepares the data layer
// This is Data layer used to track basket and user
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
// create the state Provider and wrap the app in the layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
// this is how we access the datalayer within a component
export const useStateValue = () => useContext(StateContext);