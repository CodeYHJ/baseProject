export interface INIT_USER_Type {
  name: string;
  isLogin: boolean;
}

export type ActionType =
  | { type: "LOGIN_IN"; playload: INIT_USER_Type }
  | { type: "LOGIN_OUT" };

export interface IContextProps {
  userStore: INIT_USER_Type;
  dispatchForUser: (Action:ActionType) => void;
}
