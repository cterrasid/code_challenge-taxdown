import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext({});

const initialState = { users: [], loading: false, error: null };

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
