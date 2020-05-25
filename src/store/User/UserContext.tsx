import React, { createContext, useReducer } from "react";
import ReactDom from "react-dom";
import { INIT_USER_Type, IContextProps } from "./UserTypes";
import { UserReducer } from "./UserReducer";

export const INIT_USER: INIT_USER_Type = {
  name: "",
  isLogin: false,
};

export const UserContext = createContext({} as IContextProps);

const UserProvider: React.SFC = (props) => {
  const [userStore, dispatchUser] = useReducer(UserReducer, INIT_USER);
  return (
    <UserContext.Provider value={{ userStore, dispatchUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
