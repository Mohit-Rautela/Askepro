import React from "react";
import { Grid, Container } from "semantic-ui-react";
import Notification from "../../Component/Main-Component/Notification";
import Footer from "../../Component/Main-Component/Footer";

import Crumb from "../../Component/Main-Component/Crumb";
const Contact = () => {
  return (
    <>
      <Crumb
        section={[
          { key: "home", content: "Home", link: true },
          { key: "apply", content: "Contact", active: true },
        ]}
      />
      <div
        class="contact"
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/Assets/images/contact-bg.png"
          })`,
          backgroundSize: "cover",
        }}
      >
        <h1>Contact</h1>

        <p>
          Experience success with UAE and take your business to new heights with
          Askepro.
          <br />
          Contact us, today!
        </p>
      </div>
      <Container>
        <div class="address">
          <Grid doubling columns={2}>
            <Grid.Column width={6}>
              <div class="contact-details-1">
                <img src={process.env.PUBLIC_URL + "/Assets/images/pin.png"} />
                <p>
                  Kalari Documents Clearing Services
                  <br />
                  Dragon Mart 1,Shop No DHOFF16 Dubai, United Arab Emirates
                </p>
              </div>
              <div class="contact-details">
                <img
                  src={process.env.PUBLIC_URL + "/Assets/images/phone.png"}
                />
                <p>+97180073232</p>
              </div>
              <div class="contact-details">
                <img src={process.env.PUBLIC_URL + "/Assets/images/mail.png"} />
                <p>care@askepro.ae</p>
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8211987464706!2d55.410161214484!3d25.175514538758975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61ce99959ff3%3A0x9f391776b31195c4!2sKALARI%20DCS!5e0!3m2!1sen!2sin!4v1619901723581!5m2!1sen!2sin"></iframe>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </Container>
      <Footer />
      <Notification />
    </>
  );
};

export default Contact;
