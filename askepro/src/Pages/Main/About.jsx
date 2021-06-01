import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Footer from "../../Component/Main-Component/Footer";
import Crumb from "../../Component/Main-Component/Crumb";
import Notification from "../../Component/Main-Component/Notification";
import "../../Sass/Sass-Main/_About.scss";

const About = () => {
  return (
    <>
      <div className="about_crumb">
        <Crumb
          section={[
            { key: "home", content: "Home", link: true },
            { key: "apply", content: "About", active: true },
          ]}
        />
      </div>
      <div className="about">
        <img
          className="about_bg"
          src={process.env.PUBLIC_URL + "/Assets/images/texture.png"}
        />

        <div className="about-content">
          <img
            className="about_logo"
            src={process.env.PUBLIC_URL + "/Assets/images/Epro Logo_Web@3x.png"}
          />
          <h1 className="headingOne">About</h1>

          <p>
            <Container text>
              <p>
                With an objective of successfully set-up businesses in UAE,
                Askepro was established in 2014, in Dubai. With a streamlined
                approach, we ensure that all our experienced consultants help
                you navigate through all the processes that are needed to
                relocate, establish or start a venture from scratch.
                Cost-effectiveness and transparent communication are constantly
                emphasised on because our business’s success lies in yours.
                <br />
                <br />
                With an expert advisory and experience in dealing with clients
                from various industries, our experience is reflected on our
                approach towards your requirements and the quick turn-around
                time also ensures that you do not miss an opportunity in
                succeeding.
                <br />
                <br />
                Get in-touch for all business requirements and relocation
                queries and we’ll contact you with the best way forward.
                <br />
                <br />
                Experience success with UAE and take your business to new
                heights with Askepro.
                <br />
                <br />
                Contact us, today!
              </p>
            </Container>
          </p>
        </div>
      </div>

      <div className="team">
        <Container>
          <div className="about_container">
            <h1 className="headingOne">Our Team</h1>

            <Grid doubling columns={2}>
              <Grid.Column>
                <div className="space1">
                  <div className="about-card">
                    <div className="column">
                      <div className="team-name">
                        <h5>Agent Name</h5>
                        <p>Chief Executive Office, EPro</p>
                      </div>
                      <div className="team-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type
                        </p>
                      </div>
                      <div className="team-image">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/Assets/images/team.svg"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="space2">
                  <div className="about-card">
                    <div className="column">
                      <div className="team-name">
                        <h5>Agent Name</h5>
                        <p>Chief Executive Office, EPro</p>
                      </div>
                      <div className="team-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type
                        </p>
                      </div>
                      <div className="team-image">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/Assets/images/team2.svg"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid>
          </div>
        </Container>
      </div>

      <Footer />
      <Notification />
    </>
  );
};

export default About;
