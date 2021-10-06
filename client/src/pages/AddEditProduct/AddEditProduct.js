import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, editProduct } from "../../JS/action/productAction";


function AddEditProduct() {
    const dispatch = useDispatch("");

    const cat = useSelector((state) => state.categoryReducer.category);
    const edit = useSelector((state) => state.productReducer.edit);
    const product = useSelector(state => state.productReducer.product)


    const [prod, setprod] = useState({
        categoryId:cat._id,
        name:"",
        picture :"",
        price:"",
        dispo:0,
        grammage:"",
        type:"",
        description:""
    }
    )
useEffect(() => {
  edit ? setprod(product) 
  : setprod({
    categoryId:cat._id,
    name:"",
    picture :"",
    price:"",
    dispo:0,
    grammage:"",
    type:"",
    description:""
})
}, [edit,product,cat])

    const handlChange = (e) => {
        setprod({ ...prod, [e.target.name]: e.target.value });
      };
    return (
        <Form className="form_category">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom produit</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter nom"
            value={prod.name}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label >Lien photo</Form.Label>
          <Form.Control
            type="text"
            name="picture"
            placeholder="description"
            value={prod.picture}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Type Papier</Form.Label>
          <Form.Check
          type="radio"
          name="grammage"
          value="80 GR"
          label="80 GR"
          onChange={handlChange}
        />
          <Form.Check
          type="radio"
          name="grammage"
          value="130 GR"
          label="130 GR"
          onChange={handlChange}
        />
          <Form.Check
          type="radio"
          name="grammage"
          value="170 GR"
          label="170 GR"
          onChange={handlChange}
        />
          <Form.Check
          type="radio"
          name="grammage"
          value="250 GR"
          label="250 GR"
          onChange={handlChange}
        />
        
          <Form.Check
          type="radio"
          name="grammage"
          value="300 GR"
          label="300 GR"
          onChange={handlChange}
        />
          <Form.Check
          type="radio"
          name="grammage"
          value="350 GR"
          label="350 GR"
          onChange={handlChange}
        />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Type impression</Form.Label>
        <Form.Check
          type="radio"
          name="type"
          value="A"
          label="A: Offset"
          onChange={handlChange}
        />
        <Form.Check
          type="radio"
          name="type"
          value="B"
          label="B: Grand format "
          onChange={handlChange}
        />
        <Form.Check
          type="radio"
          name="type"
          value="C"
          label="C: Personaliser"
          onChange={handlChange}
        />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description du produit</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter le description de produit"
            value={prod.description}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prix </Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder="Prix en DT"
            value={prod.price}
            onChange={handlChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="radio"
          name="dispo"
          value="1"
          label="Disponible"
          onChange={handlChange}
        />
        <Form.Check
          type="radio"
          name="dispo"
          value="0"
          label="Non disponible "
          onChange={handlChange}
        />
        
      </Form.Group>
       
        {edit ? (
          <Link to="/">
            <Button
              variant="primary"
              type="submit"
              onClick={() => dispatch(editProduct(product._id,prod))}
            >
              Edit
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button
              variant="primary"
              type="submit"
              onClick={() => dispatch(addProduct(prod))}
            >
              Add
            </Button>
          </Link>
        )}
      </Form>
    )
}

export default AddEditProduct
