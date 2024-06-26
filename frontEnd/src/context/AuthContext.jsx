// context is a state management tool for passing props
import { createContext, useReducer } from "react";

// initial state
const initialState = {
  user: null, //user details
  role: null,
  token: null,
};
// create a common context with initial state
export const authContext = createContext(initialState);

// reducer function
const authReducer = (state, action) => {
  // action types
  switch (action.type) {
    case "LOGIN_START":
      // login starting
      return {
        user: null,
        role: null,
        token: null,
      };
    // login success
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user, //data will be recieved as a payload
        role: action.payload.role,
        token: action.payload.token,
      };
    // logout state
    case "LOGOUT": //data is set to null again
      return {
        user: null,
        role: null,
        token: null,
      };
    // default
    default:
      return state;
  }
};

// export provider
export const AuthContextPrivider = ({ children }) => {
  //all children can access the provider
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <authContext.Provider
      value={{
        user: state,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
