import React, { createContext, useReducer } from 'react';

export const AdvertisementContext = createContext();

const initialState = {
  advertisements: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ADVERTISEMENT':
      return { ...state, advertisements: [...state.advertisements, action.payload] };
    case 'REMOVE_ADVERTISEMENT':
      return { ...state, advertisements: state.advertisements.filter(ad => ad.id !== action.payload) };
    default:
      return state;
  }
}

export const AdvertisementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addAdvertisement = ad => dispatch({ type: 'ADD_ADVERTISEMENT', payload: ad });
  const removeAdvertisement = id => dispatch({ type: 'REMOVE_ADVERTISEMENT', payload: id });

  return (
    <AdvertisementContext.Provider value={{ advertisements: state.advertisements, addAdvertisement, removeAdvertisement }}>
      {children}
    </AdvertisementContext.Provider>
  );
};
