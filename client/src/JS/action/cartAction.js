/* eslint-disable no-unused-vars */
import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions_type/cartActionType";

export const addToCart = (id, qty, role) => async (dispatch, getState) => {
  
    const { data } = await axios.get(`/product/${id}`)
    console.log("data card : ", data)
    dispatch({
      type: ADD_TO_CART,
      payload: { prod: data.product, qty },
    });
    localStorage.setItem(
      "cart",
      JSON.stringify(getState().cartReducer.cartItems)
    )
     window.location = "http://localhost:3000/basketProduct";

};

export const removeFromCarte = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem(
    "cart",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const onSubmit =(file)=> async () => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      
    })

    // Clear percentage

    const { fileName, filePath } = res.data;
   
  } catch (err) {
    if (err.response.status === 500) {
      console.log("There was a problem with the server");
    } else {
      console.log(err.response.data.msg);
    }
    
  }
}