import React, { createContext, useContext, useState } from 'react';
import { arrivalData, foryouData, BlogData, ProductData } from './data';

export const ProductContext = createContext();



export const ProductContextProvider = ({ children }) => {
  const [newArrival, setNewArrival] = useState(arrivalData);
  const [forYou, setForYou] = useState(foryouData);
  const [blogs, setBlogs] = useState(BlogData);
  const [products, setProducts] = useState(ProductData);

  return (
    <ProductContext.Provider value={{ newArrival, setNewArrival, forYou, setForYou, blogs, setBlogs, products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};


