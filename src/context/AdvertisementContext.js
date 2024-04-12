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
    case 'UPDATE_ADVERTISEMENT':
      return {
        ...state,
        advertisements: state.advertisements.map(ad => ad.id === action.payload.id ? action.payload : ad)
      };
    default:
      return state;
  }
}

export const AdvertisementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addAdvertisement = ad => dispatch({ type: 'ADD_ADVERTISEMENT', payload: ad });
  const removeAdvertisement = id => dispatch({ type: 'REMOVE_ADVERTISEMENT', payload: id });
  const updateAdvertisement = ad => dispatch({ type: 'UPDATE_ADVERTISEMENT', payload: ad });

  return (
    <AdvertisementContext.Provider value={{ advertisements: state.advertisements, addAdvertisement, removeAdvertisement, updateAdvertisement }}>
      {children}
    </AdvertisementContext.Provider>
  );
};
