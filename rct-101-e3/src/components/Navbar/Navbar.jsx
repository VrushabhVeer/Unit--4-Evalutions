import React from "react";
import { Link } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  return (
    <div className={styles.navbar} data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Navbar</Link>
      <span data-cy="navbar-cart-items-count">Cart {/* count here */}</span>
      <button data-cy="navbar-login-logout-button">login</button>
    </div>
  );
};

export default Navbar;
