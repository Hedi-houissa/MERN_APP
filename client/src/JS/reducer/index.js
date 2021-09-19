import { combineReducers } from "redux"
import productReducer from './productReducer'
import categoryReducer from './categoryreducer'


const rootReducer = combineReducers({ productReducer,categoryReducer})



export default rootReducer