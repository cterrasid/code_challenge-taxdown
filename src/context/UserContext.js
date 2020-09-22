import React, { createContext, useContext, useEffect, useReducer } from "react";

const UserContext = createContext({});

const initialState = {
  users:
    localStorage.getItem("users") === null
      ? []
      : JSON.parse(localStorage.getItem("users")),
};

export const ACTION = {
  CREATE: "CREATE_USER",
  DELETE: "DELETE_USER",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.CREATE:
      return { users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state.users));
  }, [state.users]);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  return context;
}

export default useUserContext;
