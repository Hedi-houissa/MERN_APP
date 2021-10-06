import axios from "axios";
import { ADD_ORDER_FAIL, ADD_ORDER_SUCC } from "../actions_type/orderActionType";

export const addOrder = (newOrder,id)=>async(dispatch)=>{
    console.log('user id order : ',id)
    newOrder.userId=id;
    console.log('new order : ',newOrder)
    try {
        await axios.post("/order/",newOrder);
        dispatch({type: ADD_ORDER_SUCC})
        localStorage.removeItem("cart");
        window.location = "/";
        window.alert("Votre commande a été enregistrer avec succ et sera traitrer dans le bref delais");


    } catch (error) {
        dispatch({type:ADD_ORDER_FAIL, payload: error.response.data})
        window.alert(
            "Merci de réessayer à nouveau "
          );
    }
}



