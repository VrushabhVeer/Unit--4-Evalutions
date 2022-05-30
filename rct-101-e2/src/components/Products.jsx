import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import products from "../db.json";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Grid = () => <div />;

  return (
    <>
      {/*  AddProduct */}
      <Product key={products.id}{...products} />
      {<Pagination/>}
    </>
  );
};

export default Products;