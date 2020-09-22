import useUserContext from "context/UserContext";
import { ACTION } from "reducers/UsersReducer";

export default function useUsers() {
  const { state, dispatch } = useUserContext();
  const { users, isCreated } = state;

  return {
    users,
    isCreated,
    userCreated: (isCreated) =>
      dispatch({ type: ACTION.CREATED, payload: isCreated }),
    createUserSuccessfully: (user) =>
      dispatch({
        type: ACTION.CREATE_USER,
        payload: user,
      }),
  };
}
