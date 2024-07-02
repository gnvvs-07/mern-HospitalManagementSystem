// context is a state management tool for passing props
import { createContext, useEffect, useReducer } from "react";

// initial state
const initialState = {
  user: localStorage.getItem('user') || null, //user details
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
  photo:localStorage.getItem('photo') || null,
};
// create a common context with initial state
export const AuthContext = createContext(initialState);

// reducer function
const authReducer = (state, action) => {
  // console.log("Reducer called with action:", action);
  // action types
  switch (action.type) {
    case "LOGIN_START":
      // login starting
      return {
        user: null,
        role: null,
        token: null,
        photo:null,
      };
    // login success
    case "LOGIN_SUCCESS":
      // console.log("LOGIN_SUCCESS payload:", action.payload);
      return {
        user: action.payload.user, //data will be received as a payload
        token: action.payload.token,
        role: action.payload.role,
        photo:action.payload.photo,
      };
    // logout state
    case "LOGOUT": //data is set to null again
      return {
        user: null,
        role: null,
        token: null,
        photo:null,
      };
    // default
    default:
      return state;
  }
};

// export provider
export const AuthContextProvider = ({ children }) => {
  //all children can access the provider
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(
    ()=>{
      localStorage.setItem("user",state.user);
      localStorage.setItem("token",state.token);
      localStorage.setItem("role",state.role);
      localStorage.setItem("photo",state.photo);
    },[state]
  )
  console.log("Current state:", state);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        photo:state.photo,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
