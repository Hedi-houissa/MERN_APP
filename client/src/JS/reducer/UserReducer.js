import {
  CURRENT_USER,
  LOGOUT,
  USERFAIL,
  USERLOAD,
  USERSUCC,
  LOGINUSERSUCC,
  EDITUSERFAIL,
  TOOGLE_TRUE,
  TOOGLE_FALSE,
} from "../actions_type/UserActionType";

const initState = {
  listUser: [],
  user: [],
  load: false,
  error: [],
  edit:false
};

export const UserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USERLOAD:
      return { ...state, load: true };
    case USERSUCC:
      return { ...state, load: false, user: payload.userToAdd };
    case LOGINUSERSUCC:
      return { ...state, load: false, user: payload.userToFind };

    case USERFAIL:
      return { ...state, load: false, error: payload.errors };
      
      case TOOGLE_TRUE:
        return { ...state, edit: true };
      case TOOGLE_FALSE:
        return { ...state, edit: false };
        
    case EDITUSERFAIL:
      return { ...state, error: payload.errors };

    case CURRENT_USER:
      return { ...state, load: false, user: payload };
    case LOGOUT:
      return { ...state };

    default:
      return { ...state };
  }
};

export default UserReducer;
