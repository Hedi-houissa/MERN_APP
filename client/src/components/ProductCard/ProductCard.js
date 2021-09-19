import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";

import "./ProductCard.css";
import { getProductById } from "../../JS/action/productAction";

function ProductCard({ product }) {

  const dispatch = useDispatch();
  


  return (
    <div className="link-to">
        <Link to='/product' class="card"
        onClick={()=>dispatch(getProductById(product._id))}
        
        >
          <img
            src="https://i.imgur.com/oYiTqum.jpg"
            class="card__image"
            alt=""
          />
          <div class="card__overlay">
            <div class="card__header">
              <div class="card__header-text">
                <h3 class="card__title">{product.name}</h3>
                <span class="card__status">1 hour ago</span>
              </div>
            </div>
            <p class="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis?
            </p>
          </div>
        </Link>
   
    </div>
  );
}

export default ProductCard;
