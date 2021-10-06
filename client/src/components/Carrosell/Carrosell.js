import React from "react";

import im1 from "../../assets/mug.jpg";
import im2 from "../../assets/oneway.jpg";
import im3 from "../../assets/transfert.jpg";
import im4 from "../../assets/batman.jpg" ;
import im5 from "../../assets/deco.jpg" 
import im6 from "../../assets/mugdore.jpg" 
import im7 from "../../assets/tableau.jpg" 
import im8 from "../../assets/agenda.jpg" 
import im9 from "../../assets/pull.jpg" 
import im10 from "../../assets/tshirt.jpg" 

import "./Carrosell.css";

function Carrosell() {
  return (
    <div className="carrosell">
      <div className="pic-ctn">
        <img src={im1} alt="aa" className="pic" />
        <img src={im4} alt="aa" className="pic" />
        <img src={im6} alt="aa" className="pic" />
        <img src={im5} alt="aa" className="pic" />
        <img src={im7} alt="aa" className="pic" />
      </div>
      <div className="pic-ctn">
        <img src={im8} alt="aa" className="pic" />
        <img src={im9} alt="aa" className="pic" />
        <img src={im10} alt="aa" className="pic" />
        <img src={im4} alt="aa" className="pic" />
        <img src={im3} alt="aa" className="pic" />
      </div>
      <div className="pic-ctn">
        <img src={im2} alt="aa" className="pic" />
        <img src={im7} alt="aa" className="pic" />
        <img src={im5} alt="aa" className="pic" />
        <img src={im9} alt="aa" className="pic" />
        <img src={im10} alt="aa" className="pic" />
      </div>
    </div>
  );
}

export default Carrosell;
