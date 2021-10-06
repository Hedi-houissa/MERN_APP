import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions_type/cartActionType";


const cartLocalstorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[]

const initState = {
  cartItems: cartLocalstorage,
};
export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.prod._id === item.prod._id);
      console.log('item',item)
      console.log('exit',existItem)

      if (existItem) {
        item.qty=Number(item.qty)+Number(existItem.qty);
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.prod._id === existItem.prod._id ?(console.log('ok'), item): x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
case REMOVE_FROM_CART : return {
    ...state, cartItems: state.cartItems.filter((x => x.prod._id !== payload))
}
    default:
      return state;
  }
};

export default cartReducer