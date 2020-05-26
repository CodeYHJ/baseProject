import React, { createContext, useReducer } from "react";
import { INIT_USER_Type, IContextProps } from "./UserTypes";
import { UserReducer } from "./UserReducer";

export const INIT_USER: INIT_USER_Type = {
  name: "",
  isLogin: false,
};

export const UserContext = createContext({} as IContextProps);

const UserProvider: React.SFC = (props) => {
  const [userStore, dispatchForUser] = useReducer(UserReducer, INIT_USER)
  return (
    <UserContext.Provider value={{ userStore, dispatchForUser }}>
      {props.children}
    </UserContext.Provider>
  )
};

export default UserProvider;
