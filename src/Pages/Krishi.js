import React from "react";
import { Container } from "reactstrap";
import krishi_bg from "../Assets/Images/Krishi-20 web.jpg";
import KrishiDrone_info from "./krishi2.0/KrishiDrone_info";
import Product_info from "./krishi2.0/Product_info";
import FAQS from "./krishi2.0/FAQS";
const Krishi = () => {
  return (
    <div>
      <img src={krishi_bg} alt="krishi" className="Krishi_bg_image" />
      <div className="KrishiDrone_details">
        <KrishiDrone_info/>
      </div>
      <div>
        <Product_info/>
      </div>
      <div>
        <FAQS/>
      </div>
    </div>
  );
};

export default Krishi;
