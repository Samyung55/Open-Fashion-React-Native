import React, { createContext, useContext, useState } from 'react';
import { arrivalData, foryouData, BlogData } from './data';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [newArrival, setNewArrival] = useState(arrivalData);
  const [forYou, setForYou] = useState(foryouData);
  const [blogs, setBlogs] = useState(BlogData);

  return (
    <ProductContext.Provider value={{ newArrival, setNewArrival, forYou, setForYou, blogs, setBlogs }}>
      {children}
    </ProductContext.Provider>
  );
};


