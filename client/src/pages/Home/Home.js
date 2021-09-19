import React from "react";
import Carrosell from "../../components/Carrosell/Carrosell";
import CategoryList from "../CategoryList/CategoryList";
import "./Home.css";

function Home() {
  return (
    <div className="grid">
      <div className="carrosell">
        <Carrosell />
      </div>
        <CategoryList/>
    </div>
  );
}

export default Home;
