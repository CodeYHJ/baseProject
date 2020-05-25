import { INIT_USER } from "./UserContext";
import { INIT_USER_Type, ActionType } from "./UserTypes";

export const UserReducer = (state: INIT_USER_Type, action: ActionType) => {
  switch (action.type) {
    case "LOGIN_IN":
      return { ...state, ...action.playload };
    case "LOGIN_OUT":
      return { ...state, ...INIT_USER };
    default:
      return state;
  }
};
