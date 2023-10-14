import React, { createContext, useContext, useState } from 'react';
import { arrivalData, foryouData } from './data';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [newArrival, setNewArrival] = useState(arrivalData);
  const [forYou, setForYou] = useState(foryouData);

  return (
    <ProductContext.Provider value={{ newArrival, setNewArrival, forYou, setForYou }}>
      {children}
    </ProductContext.Provider>
  );
};


