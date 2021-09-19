import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_LOAD,
  GET_CATEGORY_SUCC,
  GET_ONECATEGORY_FAIL,
  GET_ONECATEGORY_LOAD,
  GET_ONECATEGORY_SUCC,
} from "../actions_type/categoryActionType";

const initState = {
  listCategory: [],
  category: [],
  load: false,
  errors: null,
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

    default:
      return state;
  }
};

export default categoryReducer;
