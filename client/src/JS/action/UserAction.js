import axios from "axios";
import { ADDUSERFAIL, ADDUSERSUCC } from "../actions_type/UserActionType";

export const addUser = (newUser) => async(dispatch)=>{
    console.log('in add user')
try {
    await axios.post("/user/",newUser) //http://localhost:7000/user/
    dispatch({type:ADDUSERSUCC})
window.alert('utilisateur enregistrer')
} catch (error) {
    console.log('bad request')
    window.alert('utilisateur no enregistrer verfier vos donnés')
    dispatch({type:ADDUSERFAIL,payload:error.response.data})
}
}