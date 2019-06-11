import React, { createContext, useReducer } from 'react';

export const MarkersContext = createContext();

const initialState = {
  markers: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MARKERS':
      return {
        ...state,
        markers: action.payload
      };

    default:
      throw new Error();
  }
};

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MarkersContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </MarkersContext.Provider>
  );
};
