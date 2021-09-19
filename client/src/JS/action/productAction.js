import axios from 'axios'
import { GET_PRODUCTS_FAIL, GET_PRODUCTS_LOAD, GET_PRODUCTS_SUCC, GET_PRODUCT_LOAD, GET_PRODUCT_SUCC } from '../actions_type/productActionType'





export const getProductsByCategoryId = (id) => async (dispatch) => {
dispatch ({type:GET_PRODUCTS_LOAD})

  try {
let result = await axios.get(`/product/category/${id}`) //http://localhost:7000/product/category/:id

console.log('result productbycategory id',result)
dispatch({type: GET_PRODUCTS_SUCC,payload : result.data.products })

} catch (error) {
  dispatch({type: GET_PRODUCTS_FAIL,payload : error.response.data})

}
};


export const getProductById =(id)=>async(dispatch)=>{
  dispatch ({type:GET_PRODUCT_LOAD})
  try {
    let result = await axios.get(`/product/${id}`)
    console.log('res prod by id :',result)
    dispatch({type: GET_PRODUCT_SUCC,payload : result.data.product})
  } catch (error) {
    dispatch({type: GET_PRODUCTS_FAIL,payload : error.response.data})

  }
}
