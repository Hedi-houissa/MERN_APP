import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOAD,
  GET_PRODUCTS_SUCC,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCC,
} from "../actions_type/productActionType";

const initState = {
  listProducts: [],
  product:[],
  load: false,
  errors: null,
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



    default:
      return { ...state };
  }
};

export default productReducer ;