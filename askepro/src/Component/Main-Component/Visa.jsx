import React from "react";
import { Grid, Container } from "semantic-ui-react";
import { useHistory,Link } from "react-router-dom";

const Visa = () => {
  const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory`;
  const history = useHistory();
  const [services, setServices] = React.useState(null);

  React.useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    const services = await (await fetch(service_url, { method: "GET" })).json();
 
    const serviceData = services.data.map((e) => ({
      _id: e._id,
      name: e.name,
      tv_type: e.tv_type,
      scode: e.scode,
      slug: e.slug,
      serviceDetail: e.serviceDetail,
      image:e.serviceDetail.image
    }));

    setServices(serviceData);
  };

  return (
    <>
      <div className='visa_container'>
        <Grid stackable columns={4}>
          {services &&
            services.map((service) => (
              <Grid.Column>
                <div
                  className="service-card"
                  onClick={() => history.push(`/service/${service.slug}`)}
                >
                  {/* <img src={process.env.PUBLIC_URL + "/Assets/images/building.png"}/> */}
                  <img src={"data:image/png;base64," + service.image}/>
                  <p>{service.name}</p>
                </div>
              </Grid.Column>
            ))}

          <Grid.Column width={8}><Link to="/contact">
            <div className="service-card2">
              <img src={process.env.PUBLIC_URL+"/Assets/images/stamp.png"} />
              <p>
                Didn't find what you were looking for? Contact us we will help
                you out.
              </p>
            </div></Link>
          </Grid.Column>
        </Grid>

        <div className="tourist">
          <h1 className="headingOne">Tourist Visa Services</h1>

          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer 
          </p>

          <Grid stackable columns={4} only="computer">
            <Grid.Row>
            
            { services && services.map((d) => {
              if (d.tv_type) {
                return (
                  <Grid.Column width={4}>
                    <div className="tourist-border" onClick={() => history.push(`/service/${d.slug}`)}>
                      <div className="hours">
                        <h3>{d.serviceDetail.hours ? d.serviceDetail.hours : 96 } Hours</h3>
                        <p className="transit">Transit Visa + Insurance (Covid)</p>
                      </div>
                      <div className="hours-content">
                        <div className="rectangle11">
                          <div className="days-dull">Processing Time :</div>
                          <div className="days">Upto {d.serviceDetail.processT} Days</div>
                        </div>
                        <div className="rectangle11">
                          <div className="days-dull">Stay Period :</div>
                          <div className="days">{d.serviceDetail.stayPeriod} Days</div>
                        </div>
                        <div className="rectangle11">
                          <div className="days-dull">Validity :</div>
                          <div className="days">{d.serviceDetail.validity} Days</div>
                        </div>
                        <div className="rectangle11">
                          <div className="days-dull">Entry :</div>
                          <div className="days">{d.serviceDetail.entry}</div>
                        </div>
                      </div>
                      <div className="hours-total">
                        <div className="fees">
                          <div className="total-left">Fees</div>
                          <div className="total-right">{d.serviceDetail.price} AED</div>
                        </div>
                      </div>
                    </div>
                  </Grid.Column>
                )
              }
            }
            )}
            
              
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Visa;
