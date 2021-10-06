import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, currentUser } from "../../JS/action/UserAction";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AddEditUser.css";

function AddEditUser() {
  const dispatch = useDispatch();
 

  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    adresse: "",
    city: "",
    postal_code: "",
    type: "",
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
    <div className="style-div">
      <Form className="styleform">
        <div className="ligne">
          <Form.Group className="mb-3 space" controlId="formBasicEmail">
            {errors
              .filter((err) => err.param === "firstname")
              .map((err, i) => (
                <h6 style={{ color: "red" }} key={i}>
                  {err.msg}
                </h6>
              ))}
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="firstna
              
            
              =$e"
              value={user.firstname}
              onChange={handlChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {errors
              .filter((err) => err.param === "lastname")
              .map((err, i) => (
                <h6 style={{ color: "red" }} key={i}>
                  {err.msg}
                </h6>
              ))}
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              placeholder="prénom"
              name="lastname"
              value={user.lastname}
              onChange={handlChange}
            />
          </Form.Group>
        </div>
       
          <div className="ligne">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {errors
                .filter((err) => err.param === "username")
                .map((err, i) => (
                  <h6 style={{ color: "red" }} key={i}>
                    {err.msg}
                  </h6>
                ))}

              <Form.Label>Nom d'utilisateur</Form.Label>
              <Form.Control
                type="text"
                placeholder="nom utilisateur"
                name="username"
                value={user.username}
                onChange={handlChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {errors
                .filter((err) => err.param === "password")
                .map((err, i) => (
                  <h6 style={{ color: "red" }} key={i}>
                    {err.msg}
                  </h6>
                ))}
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter mot de passe"
                name="password"
                value={user.password}
                onChange={handlChange}
              />
            </Form.Group>
          </div>
        <div className="ligne">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {errors
              .filter((err) => err.param === "email")
              .map((err, i) => (
                <h6 style={{ color: "red" }} key={i}>
                  {err.msg}
                </h6>
              ))}
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email "
              name="email"
              value={user.email}
              onChange={handlChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {errors
              .filter((err) => err.param === "phone")
              .map((err, i) => (
                <h6 style={{ color: "red" }} key={i}>
                  {err.msg}
                </h6>
              ))}
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter num de téléphone"
              name="phone"
              value={user.phone}
              onChange={handlChange}
            />
          </Form.Group>
        </div>
        <div className="ligne">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {errors
              .filter((err) => err.param === "adresse")
              .map((err, i) => (
                <h6 style={{ color: "red" }} key={i}>
                  {err.msg}
                </h6>
              ))}
            <Form.Label>Adress</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter adresse "
              name="adresse"
              value={user.adresse}
              onChange={handlChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {errors
              .filter((err) => err.param === "city")
              .map((err, i) => (
                <h6 style={{ color: "red" }} key={i}>
                  {err.msg}
                </h6>
              ))}
            <Form.Label>Ville</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter ville "
              name="city"
              value={user.city}
              onChange={handlChange}
            />
          </Form.Group>
        </div>
        <div className="ligne">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {errors
              .filter((err) => err.param === "postal_code")
              .map((err, i) => (
                <h6 style={{ color: "red" }} key={i}>
                  {err.msg}
                </h6>
              ))}
            <Form.Label>Code postal</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter code postal"
              name="postal_code"
              value={user.postal_code}
              onChange={handlChange}
            />
          </Form.Group>
          {admin  && (
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {errors
                .filter((err) => err.param === "type")
                .map((err, i) => (
                  <h6 style={{ color: "red" }} key={i}>
                    {err.msg}
                  </h6>
                ))}
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter code postal"
                name="type"
                value={user.type}
                onChange={handlChange}
              />
            </Form.Group>
          )}
        </div>
        <div className="ligne">
         
            
              <Button
                className="btn btn-success"
                variant="primary"
                onClick={() => dispatch(addUser(user))}
              >
                Register
              </Button>
              <Link to="/login">
                <Button className="btn btn-success" variant="primary">
                  Connection
                </Button>
              </Link>
            
          
        </div>
      </Form>
    </div>
  );
}

export default AddEditUser;
