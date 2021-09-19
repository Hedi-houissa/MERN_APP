import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategoryId } from "../../JS/action/productAction";
import ProductCard from "../../components/ProductCard/ProductCard";

import addButton from '../../assets/add.png'
import deleteButton from '../../assets/delete.jpg'
import editButton from '../../assets/edit.ico'
import "./ProductList.css";
import { Link } from "react-router-dom";

function ProductList({ category ,location}) {
  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );

  const cat = useSelector((state) => state.categoryReducer.category);
  const [showButton, setshowButton] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    if ( location!==undefined && location.pathname==="/products" ){
      setshowButton(true)
    }
    console.log("category list prod :", category);

    if (category !== undefined) {
      console.log("cat id : ", category._id);
      console.log("cat name : ", category.name);
      dispatch(getProductsByCategoryId(category._id));
    }
  }, [dispatch, category]);

  return (
    <div className="prods">
      
      {
        showButton && <div>
        <h2> {cat.name} </h2>
        <div className="box-button">
          

          <Link to="/editCategory" >
          <img className="img_button" src={editButton} alt="editbutton"/>
          </Link>
          <Link to="/addCategory" >
          <img className="img_button" src={addButton} alt="addbutton"/>
          </Link>
          <Link  to="/">
          <img className="img_button" src={deleteButton} alt="deletebutton"/>
          </Link>
          
        </div>
       
      </div>

      }
      
      <ul class="cards">
        {listProducts.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
