/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProduct, toogleTrue } from "../../JS/action/productAction";
import { addToCart, onSubmit } from "../../JS/action/cartAction";
import { currentUser } from "../../JS/action/UserAction";

import deleteButton from "../../assets/delete.jpg";
import editButton from "../../assets/edit.ico";

import "./ProductPage.css";

function ProductPage() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userReducer.user.type);
  const Product = useSelector((state) => state.productReducer.product);

  const [offset, setoffset] = useState(false);
  const [grand, setgrand] = useState(false);
  const [perso, setperso] = useState(false);
  const [btDisabled, setbtDisabled] = useState(true);

  useEffect(() => {
    if (role === "A") {
      setadmin(true);
    }
    if (role === "C") {
      setcontroller(true);
    }
    if (role === "U") {
      setperso(true);
    }

    if (Product.type === "A") {
      setoffset(true);
      console.log(offset);
    }
    if (Product.type === "B") {
      setgrand(true);
    }
    if (Product.type === "C") {
      setperso(true);
    }

    dispatch(currentUser());
  }, [Product, dispatch, role, offset]);

  const [qty, setqty] = useState(0);
  const [admin, setadmin] = useState(false);
  const [controller, setcontroller] = useState(false);

  const [dimention, setdimention] = useState({
    width: 0,
    heith: 0,
    qty: 1,
  });

  const category = useSelector((state) => state.categoryReducer.category);

  const [total, settotal] = useState(0);

  const handlChange = (e) => {
    if (e.target.value >= 0) {
      setqty(e.target.value);

      if (offset) {
        settotal(e.target.value * Product.price);
      }
      if (grand) {
        // settotal(((qty * (dimention.width * dimention.heith) )* Product.price )/10000);
        settotal((dimention.width * dimention.heith * Product.price) / 10000);
      }
    }
  };

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  // const [uploadedFile, setUploadedFile] = useState({});
  // const [message, setMessage] = useState("");
  // const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    console.log("e :", e.target.files.length);
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
      setbtDisabled(false);
    } else {
      setbtDisabled(true);
    }
  };
  const execut = () => {
    dispatch(onSubmit(file));
    dispatch(addToCart(Product._id, qty, role));
  };

  return (
    <div>
      <div className="box_button">
        <span className="title_prod"> {Product.name} </span>
        {/* //button de modifier  */}
        {admin && (
          <div className="cat_button">
            <Link to="/editProduct">
              <img
                className="img_button"
                src={editButton}
                alt="editbutton"
                onClick={() => dispatch(toogleTrue())}
              />
            </Link>

            <Link to="/" onClick={() => dispatch(deleteProduct(Product._id))}>
              <img
                className="img_button"
                src={deleteButton}
                alt="deletebutton"
              />
            </Link>
          </div>
        )}
        {/* fin button  */}
      </div>
      <div className="cont">
        {/* part left img and title */}
        <div className="left">
          <img className="img-box" src={Product.picture} alt="not " />
        </div>

        {/* part right img and title */}
        <div className="box-text">
          <Form className="form ">
            {(offset || grand) && (
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text_prod">Grammage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={Product.grammage}
                  disabled
                />
              </Form.Group>
            )}

            {offset && (
              <>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text_prod">Impression</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Quadri recto/verso"
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text_prod">Pelliculage</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="pelliculage recto/verso"
                    disabled
                  />
                </Form.Group>
              </>
            )}

            {grand && (
              <>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text_prod">Hauteur </Form.Label>
                  <span> par CM</span>
                  <Form.Control
                    type="number"
                    name="heith"
                    onChange={handlChange}
                    placeholder="0"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text_prod">Largeur </Form.Label>
                  <span> par CM</span>
                  <Form.Control
                    type="number"
                    name="width"
                    onChange={handlChange}
                    placeholder="0"
                  />
                </Form.Group>
              </>
            )}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text_prod">Quantité</Form.Label>
              <Form.Control
                type="number"
                name="qty"
                onChange={handlChange}
                placeholder="0"
                min="0"
                max="20"
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label>Format du fichier : PDF , AI , PSD</Form.Label>
              <Form.Control
                type="file"
                onChange={onChange}
                accept=" .pdf , .psd , .ai"
              />
            </Form.Group>
            <Form.Group className="mb-3 box_tot" controlId="formBasicPassword">
              <Form.Label className="text_prod tot">Prix Total :</Form.Label>
              <Form.Label className="text_prod">{total} </Form.Label>
            </Form.Group>

            {Product.dispo ? (
              <h4 style={{ color: "green" }}>Disponible </h4>
            ) : (
              <h4 style={{ color: "red" }}>Non disponible </h4>
            )}

            <Button
              variant="primary"
              onClick={()=>dispatch(addToCart(Product._id, qty, role))}
            >
              Ajouter
            </Button>

            {/* {!admin && !controller && (
              <Button
                variant="primary"
                onClick={dispatch(addToCart(Product._id, qty, role))}
              >
                Ajouter
              </Button>
            )} */}
          </Form>
        </div>
        <div className="box-text">
          <div className="desc_box">
            <h2>Description</h2>
            <p> {category.description}</p>
          </div>
          <div className="desc_box marge_box">
            <h2>{Product.price} DT</h2>
            <p>{Product.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
