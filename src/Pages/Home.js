import React from "react";
import img1 from "../Assets/Images/promo2.jpg";
import img2 from "../Assets/Images/promo3.jpg";
import img3 from "../Assets/Images/banner4.jpg";
import bg_drone from "../Assets/Images/1.png";
import ImageCarousel from "./Home/ImageCarousel";
import "../Assets/CSS/Header.css";
import RadialbarCharts from "./Home/RadialbarCharts";
import "bootstrap/dist/css/bootstrap.min.css";
import DroneInfo from "./Home/DroneInfo";
import DroneScreen from "./Home/DroneScreen";
import DronePortfolio from "./Home/DronePortfolio";
import KeyFeatures from "./Home/KeyFeatures";

const Home = () => {
  let products = [
    {
      id: "1",
      name: "img1",
      title: "Your eyes",
      title2: "in the sky",
      image: img3,
      description:
        "with increased visibility, we increase your project productivity by 30%",
    },
    {
      id: "2",
      name: "img2",
      title: "Your eyes",
      title2: "day round",
      description:
        "with accurate monitoring visibility, we improve your operational efficiency by 40%",
      image: img1,
    },
    {
      id: "3",
      name: "img3",
      title: "Your eyes",
      title2: "everywhere",
      description:
        "with our automated fault identification, we reduce your maintenance timelines by 70%",
      image: img2,
    },
  ];

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3 corsel-img-container">
          <img
            src={product.image}
            alt={product.name}
            className="w-6 shadow-2 dark-img"
          />
          <div className="image-info">
            <h1 className="mb-1">
              {product.title} <span>{product.title2}</span>
            </h1>
            <h6 className="mt-0 mb-3">${product.description}</h6>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="section">
          <div className="home-section1">
            <h1 className="fw-bold">Transforming Agriculture with<div className="text-center"> Drogo Drones</div></h1>
            <p className="fs-3">Precision Agriculture Powered by Drone Innovation</p>
          </div>
          <div className="home-main-image">
            <img src={bg_drone} />
          </div>
        </div>

        <div className="section">
          <div className="home-section2">
            <div className="heading">
              <h1 className="fw-bold">Explore Our Cutting-Edge Agricultural Drones</h1>
              <h3 className="text-primary fs-1">where innovation meets efficiency in agriculture</h3>
             
            </div>
            <div className="heading2">
            <p className="fs-4">We specialize in providing state-of-the-art drones tailored for spraying purposes, revolutionizing the way modern farming</p>
            </div>
          </div>
        </div>
        <div>
          <ImageCarousel />
          <div className="d-flex justify-content-center align-items-center mt-5">
            <button className="btn btn-custom rounded-pill px-5 fs-2">
              Get Started
            </button>
          </div>
        </div>
        <br />
        {/* <div className="container-fluid bg-gray-opacity mt-5 p-5">
          <div className="section">
            <div className="home-section2">
              <div className="heading">
                <div>We Use Various Technologies & Products To</div>{" "}
                <div>Get The Best Results</div>
              </div>
              <div className="heading2">
                <div>Once you rent our aircraft by itself, you'll</div>
                <div>save on an extra battery.</div>
              </div>
            </div>
          </div>
          <RadialbarCharts dataColors='["--vz-primary"]' />
        </div> */}
        <div>
          <KeyFeatures/>
        </div>
        <div>
          <DroneInfo />
        </div>
       
        <div>
          <DroneScreen />
        </div>
        <div>
          <DronePortfolio/>
        </div>
        {/* <div className="w-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.04455360748!2d78.3948765!3d17.435233000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9144f01c0ffd%3A0x1f4e06dec2e0992d!2sAB&#39;s%20-%20Absolute%20Barbecues%20%7C%20Jubilee%20Hills%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1721740448501!5m2!1sen!2sin"
            width="1684"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
