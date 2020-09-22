export const ACTION = {
  CREATE_USER: "create_user",
  CREATED: "CREATED",
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case ACTION.CREATE_USER:
      return { users: [...state.users, action.payload], isCreated: true };

    case ACTION.CREATED:
      return { ...state, isCreated: false };

    default:
      throw new Error(`Action ${action.type} is not supported`);
  }
};
