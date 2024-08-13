import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BookContext } from "../../context/context";

export const Home = ({}) => {
  const { products, setProducts } = useContext(BookContext);
  return (
    <div className="p-[5%]">
      <button className="px-1 py-2 rounded bg-blue-400">
        call api products
      </button>
      <br />
      <br />
      <button className="px-1 py-2 rounded bg-blue-400">
        Add new products
      </button>

      <ul className="mt-5">
        {products.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};
