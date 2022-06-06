import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  return (
    <div>
      <form>
        <input type="text" data-cy="login-email" placeholder="Enter Email" />
        <input type="password" data-cy="login-password" placeholder="Enter Password" />
        <button type="submit" data-cy="login-submit"></button>
      </form>
    </div>
  );
};

export default Login;
