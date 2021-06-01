import React from "react";
import { Grid, Container, Icon, Button } from "semantic-ui-react";


const Apply = () => {
  return (
    <>
      <section className="step">
        <div className="apply">
          <h1 className="headingOne">How to apply</h1>
          <div className="dashed_line"></div>
          <p>
            At Askepro, we are committed to provide quick and efficient
            expert-services in overcoming challenges of migration visas, <br />
            overseas business establishment, and resettlement in UAE.
          </p>
        </div>
        <Container>
          <Grid stackable columns={3}>
            <Grid.Row>
              <Grid.Column>
                <div className="outer_circle">
                <div className="circle">
                  <img
                    src={process.env.PUBLIC_URL + "/Assets/images/step1.png"}
                  />
                </div>
                </div>
                <div className="step_heading">
                  <h6>Step 1</h6>
                  <p>
                    Get in-touch with our world-class consultants that will help
                    you in navigating through the best solutions of setting up a
                    business in Dubai
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
              <div className="outer_circle">
                <div className="circle">
                <img
                    src={process.env.PUBLIC_URL + "/Assets/images/step2.png"}
                  />
                </div>
                </div>
                <div className="step_heading">
                  <h6>Step 2</h6>
                  <p>
                    After fixating on the solutions, we take up the challenges
                    and help in setting up your organization that can include
                    finding an office space and arranging supplies too.
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
              <div className="outer_circle">
                <div className="circle">
                <img
                    src={process.env.PUBLIC_URL + "/Assets/images/step3.png"}
                  />
                </div>
                </div>
                <div className="step_heading">
                  <h6>Step 3</h6>
                  <p>
                    Once done, we keep on following up to ensure that the
                    business is covered from 360-degree perspective and help you
                    in managing all your legal and subjective requirements.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </section>
      <Container fluid>
      <section className="customer">
        
          <h1 className="headingOne">Customer Reviews</h1>

          <p>
            Our Clients and their successful businesses are a true mark of our
            values and skills that we use to ensure that your venture thrives.
            Our success depends on your success.
            Here’s what your successful clients have to say about Askepro
          </p>
          <Grid stackable columns={3}>
            <Grid.Row>
              <Grid.Column>
                <div className="customer-card">
                  <div className="one">
                    <div className="left">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/Assets/images/user_review.png"
                        }
                      />
                    </div>
                    <div className="right">
                      Fatima Sheikh <br />
                      <img
                        src={
                          process.env.PUBLIC_URL + "/Assets/images/ratings.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="two">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and
                  </div>
                </div>
              </Grid.Column>

              <Grid.Column>
                <div className="customer-card">
                  <div className="one">
                    <div className="left">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/Assets/images/user_review.png"
                        }
                      />
                    </div>
                    <div className="right">
                      Muhammed Al- Rasool <br />
                      <img
                        src={
                          process.env.PUBLIC_URL + "/Assets/images/ratings.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="two">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and
                  </div>
                </div>
              </Grid.Column>

              <Grid.Column>
                <div className="customer-card">
                  <div className="one">
                    <div className="left">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/Assets/images/user_review.png"
                        }
                      />
                    </div>
                    <div className="right">
                      Muhammed Al-Imran
                      <br />
                      <img
                        src={
                          process.env.PUBLIC_URL + "/Assets/images/ratings.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="two">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <div className="slide-btn">
            <Icon name="chevron left"></Icon>
            <Icon name="chevron right"></Icon>
          </div>
        
      </section>
      </Container>
    </>
  );
};

export default Apply;
