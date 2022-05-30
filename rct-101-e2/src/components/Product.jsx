import React from "react";
import styles from "./product.module.css"

const Product = (props) => {
  return (
    <div className={styles.main}>
      {props.products.map((products) => (
        <div className={styles.div}>
          <img src={products.imageSrc} />

          <div className={styles.innerDiv}>
            <p>{products.category}</p>
            <p>{products.gender}</p>
          </div>

          <h2 className={styles.title}>{products.title}</h2>
          <p>Rs.{products.price} /unit</p>
        </div>
      ))}
    </div>
  )
};

export default Product;