import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneCategory } from "../../JS/action/categoryAction";
import { getAllProd } from "../../JS/action/productAction";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryCard.css";

function CategoryCard({ category }) {
  const dispatch = useDispatch();

  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );

  useEffect(()=>{
    dispatch(getAllProd());

  },[dispatch])

  return (
    <div>
      <Link
        to="/products"
        className="link-to"
        onClick={() => dispatch(getOneCategory(category._id))}
      >
        <span className="cat_title">{category.name} </span>
      </Link>
      <div className="colon">
        
        {listProducts
        .filter(prod=>prod.categoryId===category._id)
        .map((product) => (
            
          <ProductCard product={product} key={product._id} />
        ))}
          {/* <ProductList category={category} key={category._id} /> */}
        
      </div>
    </div>
  );
}

export default CategoryCard;
