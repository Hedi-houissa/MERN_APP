import { ADD_ORDER_FAIL } from "../actions_type/orderActionType";

const cartLocalstorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initState = {
  ListProd: cartLocalstorage,
};

export const orderReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER_FAIL:
      return { ...state, errors: payload };
    default:
      return { ...state };
  }
};

export default orderReducer;