import { Action } from "history";
import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState("");
  

  const startApp = {
    isAuth: false
  }


  function reduce(action, state) {
    switch (action.type) {
      case "login": {
        return {
          ...state,
          isAuth: true,

        };
      }

      case "logout": {
        return {
          ...state,
          isAuth: false,
        }
      };

      case "login fail": {
        return {
          ...state,
          isAuth: false,
        }
      };

      default:{
        return state;
      }
    };

   
}

return <AuthContext.Provider>{children}</AuthContext.Provider>;

};
