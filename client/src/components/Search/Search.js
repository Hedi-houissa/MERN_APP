import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProd } from "../../JS/action/productAction";
import ProductCard from "../ProductCard/ProductCard";
import './Search.css'

function Search() {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const  inputChange = (e) => {
        // console.log('star ',star);
        setText(e.target.value);
      }

  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );

  useEffect(()=>{
    dispatch(getAllProd());

  },[dispatch])

  return (
    
      <div className="div_products">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              {" "}
              <i className="fa fa-search" />{" "}
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search anything..."
                onChange = {inputChange}
              />{" "}
              <span className="left-pan">
                <i className="fa fa-microphone" />
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="products">
        {listProducts
        .filter(prod=>prod.name.toUpperCase().includes(text.toUpperCase()))
        .map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
          {/* <ProductList category={category} key={category._id} /> */}
        
      </div>
      </div>




  );
}

export default Search;
