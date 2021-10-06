import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";

import "./ProductCard.css";
import { getProductById } from "../../JS/action/productAction";

function ProductCard({ product }) {

  const dispatch = useDispatch();  
  
  return (
    <div className="link-to">
        <Link to='/product' className="card"
        onClick={()=>dispatch(getProductById(product._id))}
        >
          <img
            src={product.picture}
            class="card__image"
            alt="product"
          />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">{product.name}    <span class="card__status">{product.price} DT</span></h3>
                
              </div>
            </div>
            <p class="card__description">
              {product.description}
            </p>
          </div>
        </Link>
   
    </div>
  );
}

export default ProductCard;
