import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategoryId } from "../../JS/action/productAction";
import { Link } from "react-router-dom";
import { deleteCategory, toogleTrue } from "../../JS/action/categoryAction";
import { currentUser } from "../../JS/action/UserAction";

import ProductCard from "../../components/ProductCard/ProductCard";
import addButton from "../../assets/add.png";
import deleteButton from "../../assets/delete.jpg";
import editButton from "../../assets/edit.ico";

import "./ProductList.css";

// function ProductList({ category, location }) {
function ProductList({ location }) {
  //list product
  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  //if id admin
  const [admin, setadmin] = useState(false);
  // role of user
  const role = useSelector((state) => state.userReducer.user.type);

  const cat = useSelector((state) => state.categoryReducer.category);
  const [showButton, setshowButton] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (location !== undefined && location.pathname === "/products") {
      console.log("uses effect if", cat._id);
      dispatch(getProductsByCategoryId(cat._id));
      setshowButton(true);
    }
    // console.log("category list prod :", category);

    // if (category !== undefined) {
    //   console.log("cat id : ", category._id);
    //   console.log("cat name : ", category.name);
    //   dispatch(getProductsByCategoryId(category._id));
    // }

    if (role === "A") {
      setadmin(true);
    }

    dispatch(currentUser());
  }, [dispatch, location, cat, role]);

  return (
    <div className="prods">
      <div>
        {showButton && <span className="title_cat"> {cat.name} </span>}
        {showButton && admin && (
          <div className="box_button">
            <div className="cat_button">
              <h4> Category button </h4>
              <Link to="/editCategory" onClick={() => dispatch(toogleTrue())}>
                <img className="img_button" src={editButton} alt="editbutton" />
              </Link>
              <Link to="/addCategory">
                <img className="img_button" src={addButton} alt="addbutton" />
              </Link>
              <Link to="/" onClick={() => dispatch(deleteCategory(cat._id))}>
                <img
                  className="img_button"
                  src={deleteButton}
                  alt="deletebutton"
                />
              </Link>
            </div>
            <div className>
              <h4> Product button </h4>
              <Link to="/addProduct">
                <img className="img_button" src={addButton} alt="addbutton" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <ul class="cards">
        {listProducts.map((product) => (
          <div className="ligne">
            <ProductCard product={product} key={product._id} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
