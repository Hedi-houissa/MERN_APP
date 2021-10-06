/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCarte } from "../../JS/action/cartAction";
import { Link } from "react-router-dom";
import { currentUser } from "../../JS/action/UserAction";
import { addOrder } from "../../JS/action/orderAction";

import deleteButton from "../../assets/delete.jpg";

import "./Basket.scss";
import "./Basket.css";

function Basket({ location }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const change = (e) => {
    setQt(e.target.value);
    
  };
  const listProd = useSelector((state) => state.cartReducer.cartItems);
  const user = useSelector((state) => state.userReducer.user);
  console.log('user : ',user._id)

  const [qt, setQt] = useState(0);

  const getCartSubTotal = () => {
    return listProd
      .reduce((price, item) => price + item.prod.price * item.qty, 0)
      .toFixed(3);
  };
  const getCurrentDate = (separator = "-") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  };

  const [order, setorder] = useState({
    date: getCurrentDate(),
    avance: 0,
    situation: "en cours",
    userId: user._id,
    listeProduct: listProd,
    total: getCartSubTotal(),
  });

  return (
    <div className="box_basket">
      <div className="contain">
        <span className="title_basket">Votre Panier d'Achat</span>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Img</div>
            <div className="col col-2">Nom</div>
            <div className="col col-3">Prix Unite</div>
            <div className="col col-4">Quantite</div>
            <div className="col col-3">Prix Total</div>
            <div className="col col-5">Actions</div>
          </li>
          {listProd.map((item) => (
            <li className="table-row">
              <div className="col col-1" data-label="Job Id">
                <img
                  src={item.prod.picture}
                  alt="produt"
                  className="img_prod"
                />
              </div>
              <div className="col col-2" data-label="Customer Name">
                {item.prod.name}
              </div>
              <div className="col col-3" data-label="Amount">
                {item.prod.price}
              </div>
              <div className="col col-4" data-label="Payment Status">
                <input
                  type="number"
                  placeholder={item.qty}
                  
                  className="numberInput"
                  onChange={change}
                  // onChange={()=>{change();dispatch(addToCart(item.prod._id, qt, user.type))}}
                />
              </div>
              <div className="col col-3" data-label="Amount">
                {item.prod.price * item.qty}
              </div>
              <div className="col col-5">
                {/* <Link
                  to={location.pathname}
                  onClick={() =>
                    dispatch(addToCart(item.prod._id, qt, user.type))
                  }
                >
                  <img
                    className="imgbutton"
                    src={editButton}
                    alt="editbutton"
                  />
                </Link> */}
                <Link
                  to={location.pathname}
                  onClick={() =>
                    dispatch(removeFromCarte(item.prod._id)) &&
                    window.location.reload(false)
                  }
                >
                  <img
                    className="imgbutton"
                    src={deleteButton}
                    alt="deletebutton"
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="box_text">
        <div className="desc_box">
          <h2>Total a payer</h2>
          <p className="total_price"> {getCartSubTotal()} DT</p>
        </div>
        <div className="desc_box marge_box">
          <h5>Frais de laivraison</h5>
          <p> 8 DT</p>
        </div>

        <button type="button" class="btn btn-success"
        onClick={()=>{dispatch(addOrder(order,user._id))}}
        >
          Commander
        </button>
        <Link to="/pdf">
          <button type="button" class="btn btn-info">
            Devis
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Basket;
