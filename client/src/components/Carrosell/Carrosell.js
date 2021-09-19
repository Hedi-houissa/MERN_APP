import React from "react";

import im1 from "../../assets/mug.jpg";
import im2 from "../../assets/oneway.jpg";
import im3 from "../../assets/transfert.jpg";

import "./Carrosell.css";

function Carrosell() {
  return (
    <div className="carrosell">
      <div className="pic-ctn">
        <img src={im1} alt="aa" className="pic" />
        <img src={im2} alt="aa" className="pic" />
        <img src={im3} alt="aa" className="pic" />
        <img src={im2} alt="aa" className="pic" />
        <img src={im3} alt="aa" className="pic" />
      </div>
      <div className="pic-ctn">
        <img src={im1} alt="aa" className="pic" />
        <img src={im2} alt="aa" className="pic" />
        <img src={im3} alt="aa" className="pic" />
        <img src={im2} alt="aa" className="pic" />
        <img src={im3} alt="aa" className="pic" />
      </div>
      <div className="pic-ctn">
        <img src={im1} alt="aa" className="pic" />
        <img src={im2} alt="aa" className="pic" />
        <img src={im3} alt="aa" className="pic" />
        <img src={im2} alt="aa" className="pic" />
        <img src={im3} alt="aa" className="pic" />
      </div>
    </div>
  );
}

export default Carrosell;
