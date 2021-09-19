import axios from "axios";
import { GET_CATEGORY_FAIL, GET_CATEGORY_LOAD, GET_CATEGORY_SUCC, GET_ONECATEGORY_FAIL, GET_ONECATEGORY_LOAD, GET_ONECATEGORY_SUCC } from "../actions_type/categoryActionType";

export const getCategorys = () => async (dispatch) => {
  
dispatch({type: GET_CATEGORY_LOAD})


  try {
    let result = await axios.get("/category/"); //http://localhost:7000/category/
    console.log('result getcategorys ' , result);
    dispatch({type: GET_CATEGORY_SUCC, payload : result.data.listCategory})
  } catch (error) {
    dispatch({type: GET_CATEGORY_FAIL,payload : error.response.data})
  }
};

export const getOneCategory =(id)=> async (dispatch)=>{
  console.log('get one category')
  dispatch({type:GET_ONECATEGORY_LOAD})
  try {
    let result = await axios.get(`/category/${id}`) //http://localhost:7000/category/
    console.log('result getonecategory ' , result)
    dispatch({type:GET_ONECATEGORY_SUCC, payload:result.data.category})
  } catch (error) {
    dispatch({type:GET_ONECATEGORY_FAIL,payload:error.response.data})
  }
}


