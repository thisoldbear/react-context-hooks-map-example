import React, { createContext, useReducer } from 'react';

export const FilterContext = createContext();

const initialState = {
  ff_funded: false,
  postcode: '',
};

const reducer = (state, action) => {
  switch (action.type) {

    case 'SET_FF_FUNDED_FILTER':
      return {
        ...state,
        ff_funded: action.payload
      };

    case 'SET_POSTCODE_FILTER':
      return {
        ...state,
        postcode: action.payload
      };

    default:
      throw new Error();
  }
}

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
