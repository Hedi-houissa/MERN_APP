import axios from "axios";
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCC,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCC,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOAD,
  GET_PRODUCTS_SUCC,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCC,
  TOOGLE_TRUE,
  TOOGLE_FALSE,
  DELETE_PRODUCT_SUCC,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCTBYCATEGORY_SUCC,
  DELETE_PRODUCTBYCATEGORY_FAIL
} from "../actions_type/productActionType";

export const getAllProd =()=>async (dispatch,getState)=>{


  try {
    let result = await axios.get('/product'); //http://localhost:7000/product/category/:id

    console.log("result productbycategory id", result);
    dispatch({ type: GET_PRODUCTS_SUCC, payload: result.data.products });
    localStorage.setItem('listProd',JSON.stringify(getState().productReducer.listProducts))

  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.response.data });
  }
};





export const getProductsByCategoryId = (id) => async (dispatch,getState) => {
  dispatch({ type: GET_PRODUCTS_LOAD });

  try {
    let result = await axios.get(`/product/category/${id}`); //http://localhost:7000/product/category/:id

    console.log("result productbycategory id", result);
    dispatch({ type: GET_PRODUCTS_SUCC, payload: result.data.products });
    localStorage.setItem('listProd',JSON.stringify(getState().productReducer.listProducts))

  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.response.data });
  }
};

export const getProductById = (id) => async (dispatch,getState) => {
  dispatch({ type: GET_PRODUCT_LOAD });
  try {
    let result = await axios.get(`/product/${id}`);
    console.log("res prod by id :", result);
    dispatch({ type: GET_PRODUCT_SUCC, payload: result.data.product });
    localStorage.setItem('prod',JSON.stringify(getState().productReducer.product))
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.response.data });
  }
};

export const addProduct = (newProd) => async (dispatch) => {
  try {
    await axios.post("/product/", newProd);
    console.log("prod add succ");
    window.alert("Produit ajouter avec success");
    dispatch({ type: ADD_PRODUCT_SUCC });
  } catch (error) {
    window.alert(
      "Merci de réessayer à nouveau tous les champs sont obligatoir "
    );
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error.response.data });
  }
};
//toogle true
export const toogleTrue = ()=>{
  return {
    type : TOOGLE_TRUE
  }
}
//toogle false
export const toogleFalse = ()=>{
  return {
    type : TOOGLE_FALSE
  }
}
export const editProduct = (id,newProduct) => async (dispatch) => {
  try {
    await axios.put(`/product/${id}/`,newProduct);
    console.log("prod edit succ");
    window.alert("Produit modifier avec success");
    dispatch({type:EDIT_PRODUCT_SUCC});
  } catch (error) {
    dispatch({type:EDIT_PRODUCT_FAIL,payload:error.response.data})
    window.alert(
      "Merci de réessayer à nouveau tous les champs sont obligatoir "
    );
  }
}

export const deleteProduct = (id)=>async (dispatch)=>{
try {
  await axios.delete(`/product/${id}/`);
  window.alert("Produit supprimer avec success");
  dispatch({type:DELETE_PRODUCT_SUCC})
} catch (error) {
  dispatch({type:DELETE_PRODUCT_FAIL,payload:error.response.data})
    window.alert(
      "Merci de réessayer à nouveau tous les champs sont obligatoir "
    );
}
}

export const deleteProductByCategory = (id)=>async (dispatch)=>{
  console.log('delet by category ',id)
try {
  await axios.delete(`/product/category/${id}/`);
  window.alert("tous Produits supprimer avec success");
  dispatch({type:DELETE_PRODUCTBYCATEGORY_SUCC})
} catch (error) {
  dispatch({type:DELETE_PRODUCTBYCATEGORY_FAIL,payload:error.response.data})
    window.alert(
      "Merci de réessayer à nouveau tous les champs sont obligatoir "
    );
}
}