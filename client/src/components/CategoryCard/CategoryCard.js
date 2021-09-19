import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsByCategoryId } from "../../JS/action/productAction";
import ProductList from "../../pages/ProductList/ProductList";
import "./CategoryCard.css";
import { getOneCategory } from "../../JS/action/categoryAction";

function CategoryCard({ category }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Link
        to="/products"
        className="link-to"
        onClick={() => dispatch(getOneCategory(category._id))}
      >
        <h2>{category.name} </h2>
      </Link>
      <div className="ligne">
        <div>
          <ProductList category={category} key={category._id} />
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
