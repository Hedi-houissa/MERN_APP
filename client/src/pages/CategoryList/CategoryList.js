import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { getCategorys } from "../../JS/action/categoryAction";

import "./CategoryList.css";

function CategoryList() {
  
  // need to add where it can the reducer or it will be undefind
  const listCategory = useSelector(
    (state) => state.categoryReducer.listCategory
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    //get all category
    dispatch(getCategorys());
    console.log('category list .js')
  }, [dispatch]);

  return (
    <div >
      
      { 
      listCategory.map( category => 
       <CategoryCard category={category} key={category._id} />
      )}
     
    </div>
  );
}

export default CategoryList;
