/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  currentUser, editPassword } from "../../JS/action/UserAction";
import { Form, Button } from "react-bootstrap";
import "./EditUsernamePassword.css";


function EditUsernamePassword() {

    const dispatch = useDispatch();
  const profile = useSelector((state) => state.userReducer.user);

  const [user, setuser] = useState({
    password: "",
    Npassword:""
    
  });
 

  const role = useSelector((state) => state.userReducer.user.type);
  const [admin, setadmin] = useState(false);

  const errors = useSelector((state) => state.userReducer.error);

  const handlChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (role === "A") {
      setadmin(true);
    }
    dispatch(currentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="style_div">
      <Form className="styleform">
      <h3>  Mise à jour vos information  </h3>

       

        <div className="ligne">
          <Form.Group className="mb-3 space" controlId="formBasicEmail">
            {errors
              .filter((err) => err.param === "password")
              .map((err, i) => (
                <h6 style={{ color: "red" }} key={i}>
                  {err.msg}
                </h6>
              ))}
            <Form.Label>Ancien Mot de passe</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="password"
              onChange={handlChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {errors
              .filter((err) => err.param === "Npassword")
              .map((err, i) => (
                <h6 style={{ color: "red" }} key={i}>
                  {err.msg}
                </h6>
              ))}
            <Form.Label>Nouveau Mot de Passe</Form.Label>
            <Form.Control
              type="text"
              placeholder="mot de passe "
              name="Npassword"
              onChange={handlChange}
            />
          </Form.Group>
        </div>
       

             
        
        <div className="ligne">
        
              <Button
                className="btn btn-success"
                variant="primary"
                onClick={() => dispatch(editPassword(profile._id,user))}
              >
                Enregistrer
              </Button>
             
            
        </div>
      </Form>
    </div>
  );
}

export default EditUsernamePassword
