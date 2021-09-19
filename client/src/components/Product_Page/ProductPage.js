import React from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";

import "./ProductPage.css";

function ProductPage() {
  const Product = useSelector((state) => state.productReducer.product);
  const category = useSelector((state) => state.categoryReducer.category);
  return (
    <div>
      <div className="cont">
        {/* part left img and title */}
        <div className="left">
          <h2> {Product.name} </h2>
          <img className="img-box" src="https://i.imgur.com/oYiTqum.jpg" alt="not " />
        </div>

        {/* part right img and title */}
        <div className="box-text">
          <Form className="form">
            <h5> PAPIER </h5>
            <select aria-label="Default select example">
              <option>--Choix--</option>
              <option value="1">300gr</option>
              <option value="2">350gr</option>
            </select>
            <h5> Impression </h5>

            <select aria-label="Default select example">
              <option>--Choix--</option>
              <option value="1">Quadri recto</option>
              <option value="2">Quadri recto/verso</option>
              <option value="3">Three</option>
            </select>
            <h5> Pelliculage </h5>

            <select aria-label="Default select example">
              <option>--Choix--</option>
              <option value="1">pelliculage recto/verso</option>
              <option value="2">sans pelliculage</option>
            </select>

            <h5> Quantité </h5>
            <select aria-label="Default select example">
              <option>--Choix--</option>
              <option value="1">100</option>
              <option value="2">500</option>
              <option value="3">1000</option>
            </select>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Format du fichier : PDF , AI , PSD</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ajouter
            </Button>
          </Form>
        </div>
        <div className="box-text">
          <h2>Description</h2>
          <p> {category.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
