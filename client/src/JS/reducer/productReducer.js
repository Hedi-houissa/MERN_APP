import {
  ADD_PRODUCT_FAIL,
  DELETE_PRODUCTBYCATEGORY_FAIL,
  DELETE_PRODUCT_FAIL,
  EDIT_PRODUCT_FAIL,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOAD,
  GET_PRODUCTS_SUCC,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCC,
  TOOGLE_FALSE,
  TOOGLE_TRUE,
} from "../actions_type/productActionType";

const listProd = localStorage.getItem("listProd") ? JSON.parse(localStorage.getItem("listProd")):[]
const prod = localStorage.getItem("prod") ? JSON.parse(localStorage.getItem("prod")):[]

const initState = {
  listProducts: listProd,
  product: prod,
  load: false,
  errors: null,
  edit: false,
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOAD:
      return { ...state, load: true };
    case GET_PRODUCTS_SUCC:
      return { ...state, load: false, listProducts: payload };
    case GET_PRODUCTS_FAIL:
      return { ...state, load: false, errors: payload };

    case GET_PRODUCT_LOAD:
      return { ...state, load: true };
    case GET_PRODUCT_SUCC:
      return { ...state, load: false, product: payload };
    case GET_PRODUCT_FAIL:
      return { ...state, load: false, errors: payload };

    case ADD_PRODUCT_FAIL:
      return { ...state, errors: payload };
    case TOOGLE_TRUE:
      return { ...state, edit: true };
    case TOOGLE_FALSE:
      return { ...state, edit: false };

    case EDIT_PRODUCT_FAIL:
      return { ...state, errors: payload };

    case DELETE_PRODUCT_FAIL:
      return { ...state, errors: payload };

    case DELETE_PRODUCTBYCATEGORY_FAIL:
      return {...state,errors:payload}

    default:
      return { ...state };
  }
};

export default productReducer;
