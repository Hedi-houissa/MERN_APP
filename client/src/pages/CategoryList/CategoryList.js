import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategorys } from "../../JS/action/categoryAction";

import CategoryCard from "../../components/CategoryCard/CategoryCard";
import addButton from "../../assets/add.png";

import "./CategoryList.css";
import { useState } from "react";

function CategoryList() {
  // need to add where it can the reducer or it will be undefind
  const listCategory = useSelector(
    (state) => state.categoryReducer.listCategory
  );

  const role = useSelector((state) => state.userReducer.user.type);
  const [showButton, setshowButton] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategorys());

    if ((listCategory.length === 0)&&(role==="A")) {
      setshowButton(true);
    }
  }, [dispatch,listCategory,role]);

  return (
    <div>
      {showButton ? (
        <>
          <h3>add categorie </h3>
          <Link to="/addCategory">
            <img className="img_button" src={addButton} alt="addbutton" />
          </Link>
        </>
      ) : (
        listCategory.map((category) => (
          <CategoryCard category={category} key={category._id} />
        ))
      )}
    </div>
  );
}

export default CategoryList;
