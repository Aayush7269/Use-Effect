import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = ({}) => {
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
        {products.length > 0 ? (
          products.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
};
