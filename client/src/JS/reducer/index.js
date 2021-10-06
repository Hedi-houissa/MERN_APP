import { combineReducers } from "redux"
import productReducer from './productReducer'
import categoryReducer from './categoryreducer'
import userReducer from "./UserReducer"
import cartReducer  from "./carteReducer"
import orderReducer  from "./orderReducer"


const rootReducer = combineReducers({ productReducer,categoryReducer,cartReducer,userReducer,orderReducer})



export default rootReducer