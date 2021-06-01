import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Header from "../../Component/Main-Component/Header";
import Visa from "../../Component/Main-Component/Visa";
import Apply from "../../Component/Main-Component/Apply";
import Footer from "../../Component/Main-Component/Footer";
import Notification from "../../Component/Main-Component/Notification";
import "../../Sass/Sass-Main/_home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="cover">
        <main>
         
          {/* <!-- //second division// --> */}

          <div className="home">
            <div className="home-content">
              <div className="main_content">
                <h1>Leading Immigration Consultants in Dubai</h1>
                <p>Our business is to make your business easier in the UAE.</p>
                <Link to="apply">
                  <button type="button" className="same-btn">
                    APPLY NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="home-bg">
              <img
                src={process.env.PUBLIC_URL + "/Assets/images/login-bg.png"}
              />
            </div>
          </div>

          
            <div className="service_heading">
              <h1 className="headingOne">Our Services</h1>
            </div>
            <div className="wrapper_home">
            <Visa />
  
          <Apply />
          <Footer />
          <Notification />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
