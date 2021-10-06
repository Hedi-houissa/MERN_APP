import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCategory, editCategory } from "../../JS/action/categoryAction";
import "./AddEditCategory.css";

function AddEditCategory() {
  const dispatch = useDispatch("");

  const cat = useSelector((state) => state.categoryReducer.category);
  const edit = useSelector((state) => state.categoryReducer.edit);

  const [category, setcategory] = useState({
    name: "",
    description: "",
    type: "",
  });

  useEffect(() => {
    edit
      ? setcategory(cat)
      : setcategory({
          name: "",
          description: ""
        });
  }, [edit, cat]);

  const handlChange = (e) => {
    setcategory({ ...category, [e.target.name]: e.target.value });
  };

  return (
    <Form className="form_category">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom Category</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter nom"
          value={category.name}
          onChange={handlChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="textarea"
          name="description"
          placeholder="description"
          value={category.description}
          onChange={handlChange}
        />
      </Form.Group>

      {edit ? (
        <Link to="/">
          <Button
            variant="primary"
            type="submit"
            onClick={() => dispatch(editCategory(cat._id, category))}
          >
            Edit
          </Button>
        </Link>
      ) : (
        <Link to="/">
          <Button
            variant="primary"
            type="submit"
            onClick={() => dispatch(addCategory(category))}
          >
            Add
          </Button>
        </Link>
      )}
    </Form>
  );
}

export default AddEditCategory;
