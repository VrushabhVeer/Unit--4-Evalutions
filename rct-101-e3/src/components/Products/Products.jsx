import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let res = await fetch ("http://localhost:8080/products")
      let data = await res.json();
      setProducts(data);
      console.log(data)
    }
    getProducts();
  }, []);


  return (
    <div className="">
      {products.map((e) => (

        <div key={e.id}>
          <Link to={`/products/${e.id}`}>
          <h4>{e.name}</h4>
          <p>{e.description}</p>
          </Link>
        </div>
        
      ))}

    </div>
  )
}

export default Products;
