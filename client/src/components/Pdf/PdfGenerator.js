import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../../JS/action/UserAction";
import Pdf from "react-to-pdf";
import "./PdfGenerator.css";

function PdfGenerator() {
  const ref = React.createRef();

  const listProd = useSelector((state) => state.cartReducer.cartItems);
  const user = useSelector((state) => state.userReducer.user);
  const [date, setdate] = useState("");

  const getCurrentDate = (separator = "-") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    setdate(getCurrentDate());
  }, [dispatch]);

  const getCartSubTotal = () => {
    return listProd
      .reduce((price, item) => price + item.prod.price * item.qty, 0)
      .toFixed(3);
  };
  return (
    <div className="pdf">
      <React.Fragment>
      <div className="Content" ref={ref}>
        <div className="title_pdf">
          <div className="societe">
            <h2 style={{color: "red"}}>Splash Print </h2>
            <h4 style={{color: "red"}}>Print For All </h4>
            <h4>50.447.085 </h4>
            <h4>Rue hedi bayoudh </h4>
            <h4>Nabeul 8000</h4>
          </div>
          <div className="client">
            <h2>{user.firstname} {user.lastname}</h2>
            <h3>{user.phone} </h3>
            <h3>{user.adresse} </h3>
          </div>
        </div>
        <h3> Devis </h3>
        <h4>Date : {date}</h4>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Qté</th>
                <th>Prix U</th>
                <th>Prix T</th>
              </tr>
            </thead>
            <tbody>
              {listProd.map((item) => (
                <tr>
                  <td>{item.prod.name}</td>
                  <td> {item.qty}</td>
                  <td> {item.prod.price}</td>
                  <td>{item.prod.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table table-bordered price">
            <tr>
             
              <th>Total HT :</th>
              <th>{getCartSubTotal()}</th>
            </tr>
            <tr>
             
              <th>TVA :</th>
              <th>{getCartSubTotal()*0.19}</th>
            </tr>
            <tr>
              
              <th>Total TTC :</th>
              <th>{getCartSubTotal()*1.19}</th>
            </tr>
          </table>
        </div>
      </div>
      </React.Fragment>
      <Pdf targetRef={ref} filename="devis.pdf">
        {({ toPdf }) => 
        <button  onClick={toPdf} type="button" class="btn btn-success">télécharger</button>

        }
      </Pdf>
    </div>
  );
}

export default PdfGenerator;
