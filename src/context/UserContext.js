import React, { createContext, useContext, useMemo, useReducer } from "react";
import { usersReducer } from "reducers/UsersReducer";

const UserContext = createContext({});

const initialState = {
  users:
    localStorage.getItem("users") === null
      ? []
      : JSON.parse(localStorage.getItem("users")),
  isCreated: false,
};

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  localStorage.setItem("users", JSON.stringify(state.users));

  const values = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);

  return context;
}

export default useUserContext;
