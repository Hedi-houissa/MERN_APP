import {
  ADD_CATEGORY_FAIL,
  DEL_CATEGORY_FAIL,
  EDIT_CATEGORY_FAIL,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_LOAD,
  GET_CATEGORY_SUCC,
  GET_ONECATEGORY_FAIL,
  GET_ONECATEGORY_LOAD,
  GET_ONECATEGORY_SUCC,
  TOOGLE_FALSE,
  TOOGLE_TRUE,
} from "../actions_type/categoryActionType";


const catLocalstorage = localStorage.getItem("cat") ? JSON.parse(localStorage.getItem("cat")):[]

const initState = {
  listCategory: [],
  category: catLocalstorage,
  load: false,
  errors: null,
  edit: false

};




export const categoryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY_LOAD:
      return { ...state, load: true };
    case GET_CATEGORY_SUCC:
      return { ...state, load: false, listCategory: payload };
    case GET_CATEGORY_FAIL:
      return { ...state, errors: payload };


    case GET_ONECATEGORY_LOAD:
      return { ...state, load: true };
    case GET_ONECATEGORY_SUCC:
      return { ...state, load: false, category: payload };
    case GET_ONECATEGORY_FAIL:
      return { ...state, errors: payload };

    case ADD_CATEGORY_FAIL :
      return {...state,errors:payload}

      case TOOGLE_TRUE:
        return { ...state, edit: true };
      case TOOGLE_FALSE:
        return { ...state, edit: false };
        
        case EDIT_CATEGORY_FAIL :{
          return {...state,errors:payload}
        }

        case DEL_CATEGORY_FAIL : return {...state,errors:payload}
    default:
      return state;
  }
};

export default categoryReducer;
