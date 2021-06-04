import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Footer from '../../Component/Main-Component/Footer';
import Header from '../../Component/Main-Component/Header';
import { Link, useHistory, useParams } from 'react-router-dom';
import Crumb from '../../Component/Main-Component/Crumb';
import '../../Sass/Sass-Main/_About.scss';
const Company = () => {
  const history = useHistory();
  const [service, setService] = React.useState({});

  const { slug } = useParams();
  const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory/${slug}`;

  React.useEffect(() => { getServiceSlugDetail(); }, []);

  const getServiceSlugDetail = async () => {
    const services = await (await fetch(service_url, { method: "GET" })).json();
    const serviceData = {
      deleted: services.data.deleted,
      _id: services.data._id,
      name: services.data.name,
      scode: services.data.scode,
      description: services.data.description,
      slug: services.data.slug,
      serviceHowToApply: services.data.serviceDetail.serviceHowToApply,
      reqDocs: services.data.serviceDetail.reqDocs,
      overview: services.data.serviceDetail.overview,
      processT: services.data.serviceDetail.processT,
      stayPeriod: services.data.serviceDetail.stayPeriod,
      validity: services.data.serviceDetail.validity,
      entry: services.data.serviceDetail.entry,
      price: services.data.serviceDetail.price
    };
    setService(serviceData);
  };


  if (!service)
    return (<div></div>)
  return (
    <>
      <div className="company_wrapper">
        <Crumb />
        <div
          class="company"
          style={{
            background: `url(${process.env.PUBLIC_URL + "/Assets/images/contact-bg.png"})`,
            backgroundSize: "cover"
          }}
        >
          <Container>
            <h1>{service.name} </h1>
            <p>
              {service.description}
              {/* <br />
            veniam. Doloribus officiis minus Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sunt, ratione. eius!
            */}
            </p>
          </Container>
        </div>
        <Container>


          <div className="overview">
            <Grid stackable column={2}>
              <Grid.Column width={11}>
                <div>
                  <h3>Overview</h3>
                  <p>
                    {service.overview}
                  </p>
                  <h3>How to Apply</h3>

                  {service.serviceHowToApply && service.serviceHowToApply.map((d) =>
                    <div className="testimonial">

                      <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />

                      <p>
                        {d}
                      </p>

                    </div>

                  )}

                  {/*
              <div className="testimonial">
                <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />;
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard.{" "}
                </p>
              </div>
              <div className="testimonial">
                <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />;
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard.{" "}
                </p>
              </div>
              <div className="testimonial">
                <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard.{" "}
                </p>
              </div>
              <div className="testimonial">
                <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard.{" "}
                </p>
              </div>
              
              */}

                  <h3>Documents Required</h3>

                  {service.reqDocs && service.reqDocs.map((d) =>
                    <div className="testimonial">
                      <img src={process.env.PUBLIC_URL + "/Assets/images/pinpoint.png"} />
                      <p>{d}</p>
                    </div>
                  )}

                  {/*
              <div className="testimonial">
              <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
              <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
              <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="testimonial">
              <img src={process.env.PUBLIC_URL + '/Assets/images/pinpoint.png'} />
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              */}
                </div>
              </Grid.Column>

              <Grid.Column width={5}>
                <div className="company_plans">
                  <div className="tourist" style={{ margin: '0' }}>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column>
                          <div className="tourist-border">
                            <div className="hours">
                              <h3>{service.name}</h3>
                            </div>
                            <div className="hours-content">
                              <div className="rectangle11">
                                <div className="days-dull">Processing Time:</div>
                                <div className="days">Upto {service.processT} Days</div>
                              </div>
                              <div className="rectangle11">
                                <div className="days-dull">Stay Period:</div>
                                <div className="days">{service.stayPeriod} Days</div>
                              </div>
                              <div className="rectangle11">
                                <div className="days-dull">Validity</div>
                                <div className="days">{service.validity} Days</div>
                              </div>
                              <div className="rectangle11">
                                <div className="days-dull">Entry:</div>
                                <div className="days">{service.entry}</div>
                              </div>
                            </div>
                            <div className="hours-total">
                              <div className="fees">
                                <div className="total-left">Fees</div>
                                <div className="total-right">{service.price} AED</div>
                              </div>
                            </div>
                            <Link to="/apply"> <button className="form-btn" type="submit">APPLY NOW</button></Link>
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>

        </Container>
        <Footer />
      </div>
    </>
  );
};
export default Company;
