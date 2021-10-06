import axios from "axios";
import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_SUCC,
  DEL_CATEGORY_FAIL,
  DEL_CATEGORY_SUCC,
  EDIT_CATEGORY_FAIL,
  EDIT_CATEGORY_SUCC,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_LOAD,
  GET_CATEGORY_SUCC,
  GET_ONECATEGORY_FAIL,
  GET_ONECATEGORY_LOAD,
  GET_ONECATEGORY_SUCC,
  TOOGLE_FALSE,
  TOOGLE_TRUE,
} from "../actions_type/categoryActionType";
import { deleteProductByCategory } from "./productAction";

export const getCategorys = () => async (dispatch) => {

  dispatch({ type: GET_CATEGORY_LOAD }); 
  try {
    let result = await axios.get("/category/"); //http://localhost:7000/category/
    console.log("result getcategorys ", result);
    dispatch({ type: GET_CATEGORY_SUCC, payload: result.data.listCategory });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAIL, payload: error.response.data });
  }
};

export const getOneCategory = (id) => async (dispatch,getState) => {
  console.log("get one category");
  dispatch({ type: GET_ONECATEGORY_LOAD });
  try {
    let result = await axios.get(`/category/${id}`); //http://localhost:7000/category/
    console.log("result getonecategory ", result);
    dispatch({ type: GET_ONECATEGORY_SUCC, payload: result.data.category });
    localStorage.setItem('cat',JSON.stringify(getState().categoryReducer.category))
  } catch (error) {
    dispatch({ type: GET_ONECATEGORY_FAIL, payload: error.response.data });
  }
};

export const addCategory = (newCategory) => async (dispatch) => {
  console.log("in add category");
  try {
    await axios.post("/category/", newCategory);
    dispatch({ type: ADD_CATEGORY_SUCC });
    window.alert("Category ajouter avec success");
  } catch (error) {
    dispatch({ type: ADD_CATEGORY_FAIL, payload: error.response.data });
    window.alert(
      "Merci de réessayer à nouveau tous les champs sont obligatoir "
    );
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  console.log("delete id :", id);
  try {
    if (
      window.confirm(
        "la supprission de categorie suprimer tous produit sous cette category"
      )
    ) {
      await axios.delete(`/category/${id}`);
      dispatch({ type: DEL_CATEGORY_SUCC });
      dispatch(deleteProductByCategory(id));
      console.log("dispatch action delete");
      window.alert("supprission category avec success");
    }
  } catch (error) {
    dispatch({ type: DEL_CATEGORY_FAIL, payload: error.response.data });
    window.alert(
      "Merci de réessayer à nouveau tous les champs sont obligatoir "
    );
  }
};

//toogle true
export const toogleTrue = () => {
  return {
    type: TOOGLE_TRUE,
  };
};
//toogle false
export const toogleFalse = () => {
  return {
    type: TOOGLE_FALSE,
  };
};

export const editCategory = (id, newCategory) => async (dispatch) => {
  console.log("edit id :", id);
  console.log("edit cat : ", newCategory);
  try {
    await axios.put(`/category/${id}`, newCategory);
    dispatch({ type: EDIT_CATEGORY_SUCC });
    window.alert("Modification enregistrer avec success  ");
  } catch (error) {
    dispatch({ type: EDIT_CATEGORY_FAIL });
    window.alert(
      "Merci de réessayer à nouveau tous les champs sont obligatoir "
    );
  }
};
