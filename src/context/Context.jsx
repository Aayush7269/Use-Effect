import React, { createContext, useContext, useState, useEffect } from "react";
export const BookContext = createContext();
import axios from "axios";

const context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const api = "https://api.escuelajs.co/api/v1/categories";

    axios
      .get(api)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <BookContext.Provider value={{ products, setProducts }}>
      {children}
    </BookContext.Provider>
  );
};

export default context;
