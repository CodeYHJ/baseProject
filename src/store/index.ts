import React, { createContext } from "react";

const INIT_USER = {
  name: "",
  isLogin: false,
};

const UserContext = createContext({});

const UserProvider: React.SFC = (props) => {
  return <UserContext.Provider>{props.children}</UserContext.Provider>;
};

export default UserProvider;
