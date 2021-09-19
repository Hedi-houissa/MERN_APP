import { ADDUSERFAIL, ADDUSERSUCC } from "../actions_type/UserActionType";

const initState = {
  listUser: [],
  user: {},
  load: false,
  error: "",
};

export const UserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    
    case ADDUSERFAIL:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export default UserReducer ;