import axios from "axios";
import {
  USERFAIL,
  USERSUCC,
  USERLOAD,
  CURRENT_USER,
  LOGOUT,
  LOGINUSERSUCC,
  EDITUSERSUCC,
  EDITUSERFAIL,
  TOOGLE_TRUE,
  TOOGLE_FALSE,
} from "../actions_type/UserActionType";

export const addUser = (newUser) => async (dispatch) => {
  console.log("in add user");
  dispatch({ type: USERLOAD });

  try {
    if (newUser.type === "") {
      newUser.type = "U";
    }
    let result = await axios.post("/user/", newUser); //http://localhost:7000/user/
    dispatch({ type: USERSUCC, payload: result.data }); // result : msg , userToAdd , token
    localStorage.setItem("token", result.data.token);
    dispatch(currentUser());
    window.location = "http://localhost:3000/";
  } catch (error) {
    console.log("bad request");
    dispatch({ type: USERFAIL, payload: error.response.data });
  }
};

export const loginUser = (user) => async (dispatch) => {
  console.log("in login");
  console.log("username",user.username)

  dispatch({ type: USERLOAD });
  try {
    const result = await axios.post("/user/login", user);
    console.log('try login')
    dispatch({ type: LOGINUSERSUCC, payload: result.data });
    localStorage.setItem("token", result.data.token);

    window.location = "http://localhost:3000/";

  } catch (error) {
  
    dispatch({ type: USERFAIL, payload:error.response.data });
  }
};

export const currentUser = () => async (dispatch) => {
  dispatch({ type: USERLOAD });
  try {
    let config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    let result = await axios.get("/user/current", config); // user detail
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: USERFAIL, payload: error });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("cart");
  window.location = "/";
  return { type: LOGOUT };
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

export const editUser = (id, newUser) => async (dispatch) => {
  console.log("id user : ", id);
  console.log("new user : ", newUser);
  try {
    await axios.put(`/user/${id}`, newUser);
    dispatch({ type: EDITUSERSUCC });
    window.alert("Modification enregistrer avec success  ");
    window.location = "http://localhost:3000/profile";

  } catch (error) {
    dispatch({ type: EDITUSERFAIL,payload:error.response.data });
    window.alert(
      "Merci de réessayer à nouveau tous les champs sont obligatoir "
    );
  }
 
};

export const editPassword = (id, newUser) => async (dispatch) => {
  console.log("id user : ", id);
  console.log("new user : ", newUser);
  try {
    await axios.put(`/user/one/${id}`, newUser);
    dispatch({ type: EDITUSERSUCC });
    window.alert("Modification enregistrer avec success  ");
    window.location = "http://localhost:3000/profile";

  } catch (error) {
    dispatch({ type: EDITUSERFAIL,payload:error.response.data });
    window.alert(
      "Merci de réessayer à nouveau tous les champs sont obligatoir "
    );
  }
 
};
