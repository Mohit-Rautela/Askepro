import React from "react";
import { useHistory } from "react-router";
import {
  Container,
  Header,
  Divider,
  Grid,
  Radio,
  Form,
} from "semantic-ui-react";
import BreadCrumbs from "../../Component/Breadcrumb/breadcrumb";
import Heading from "../../Component/Heading/heading";
import Stepper from "../../Component/Stepper/stepper";
import "../StepPages/stepPage.scss";

const Payment = () => {
  const history = useHistory();
  if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");

  const [services, setService] = React.useState(null);
  const slug = localStorage.getItem("serviceSlug");
  const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory/${slug}`;

  React.useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    const service = await (await fetch(service_url, { method: "GET" })).json();
    const serviceData = {
      deleted: service.data.deleted,
      _id: service.data._id,
      name: service.data.name,
      scode: service.data.scode,
      description: service.data.description,
      slug: service.data.slug,
      serviceHowToApply: service.data.serviceDetail.serviceHowToApply,
      image: service.data.serviceDetail.image[0],
      reqDocs: service.data.serviceDetail.reqDocs,
      overview: service.data.serviceDetail.overview,
      processT: service.data.serviceDetail.processT,
      stayPeriod: service.data.serviceDetail.stayPeriod,
      validity: service.data.serviceDetail.validity,
      entry: service.data.serviceDetail.entry,
      price: service.data.serviceDetail.price,
    };
    setService(serviceData);
  };

  if (!services) {
    return <div />;
  }
  return (
    <main>
      <div className="payment-section">
        <BreadCrumbs
          section={[
            { key: "home", content: "Home", link: true },
            { key: "apply", content: "Apply Now", active: true },
          ]}
        />
        <Heading />
        <Container className="stepper-container">
          <Stepper />
          <Divider />
          <div className="form">
            <label className="payment-header">Summary</label>
            <div className="payment-container">
              <h3>{services.name}</h3>
              <Grid columns="5" fluid stackable="tablet">
                <Grid.Row>
                  <Grid.Column>
                    <label className="heading">Processing Time</label>
                    <label className="value">
                      Upto {services.processT} days
                    </label>
                  </Grid.Column>
                  <Grid.Column>
                    <label className="heading">Stay Period</label>
                    <label className="value">{services.stayPeriod} days</label>
                  </Grid.Column>
                  <Grid.Column>
                    <label className="heading">Validity</label>
                    <label className="value">{services.validity} Days</label>
                  </Grid.Column>
                  <Grid.Column>
                    <label className="heading">Entry</label>
                    <label className="value">{services.entry}</label>
                  </Grid.Column>
                  <Grid.Column>
                    <label className="heading fees">Fees</label>
                    <label className="value total">{services.price} AED</label>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <label className="payment-header">Choose payment method</label>
            <Grid columns="3" stackable="mobile">
              <Grid.Row>
                <Grid.Column>
                  <Radio
                    label="Pay via Debit Card"
                    name="paymentGroup"
                    id="dc"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Radio
                    label="Pay via Credit Card"
                    name="paymentGroup"
                    id="cc"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Radio
                    label="Pay via Net Banking"
                    name="paymentGroup"
                    id="upi"
                  />
                </Grid.Column>
                <Grid.Column>
                  <label className="payment-header2">
                    Choose payment method
                  </label>
                  <Form.Field control="select">
                    <option value="Normal">Normal</option>
                    <option value="urgent">Urgent</option>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <label className="notice">
              Final price mentioned in the summary will be deducted from the
              account provided
            </label>
          </div>
        </Container>
      </div>
    </main>
  );
};
export default Payment;
