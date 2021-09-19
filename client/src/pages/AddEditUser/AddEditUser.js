import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../JS/action/UserAction";
import { Form, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './AddEditUser.css'

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
  });

  const handlChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="stylediv">
      <Form className="styleform">
        <div className='ligne'>
        <Form.Group className="mb-3 space" controlId="formBasicEmail">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="firstname"
            value={user.firstname}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter food"
            name="lastname"
            value={user.lastname}
            onChange={handlChange}
          />
        </Form.Group>
       </div>
        <div className='ligne'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter age"
            name="username"
            value={user.age}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter age"
            name="password"
            value={user.password}
            onChange={handlChange}
          />
        </Form.Group>
          </div>
       
       <div className='ligne'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="email"
            value={user.email}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter food"
            name="phone"
            value={user.phone}
            onChange={handlChange}
          />
        </Form.Group>
         </div>
         <div className='ligne'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Adress</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter age"
            name="adresse"
            value={user.adresse}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ville</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter age"
            name="city"
            value={user.city}
            onChange={handlChange}
          />
        </Form.Group>
        </div>
        <div className='ligne'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Code postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter age"
            name="postal_code"
            value={user.postal_code}
            onChange={handlChange}
          />
        </Form.Group>
        

        {/* {edit ? (
          <Link to="/">
            <Button
              variant="primary"
              type="submit"
              onClick={() => dispatch(editContact(contact._id,contact))}
            >
              Edit
            </Button>
          </Link>
        ) : ( */}
         <Link to='/'>
            <Button
            className="btn btn-success"
              variant="primary"
              type="submit"
              onClick={() => dispatch(addUser(user))}
            >
              Add
            </Button>
         </Link>
        {/* )} */}
        </div>
      </Form>
    </div>
  );
}

export default AddEditUser;
