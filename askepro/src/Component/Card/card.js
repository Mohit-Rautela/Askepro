import React from 'react';
import { Card, Divider, Header } from 'semantic-ui-react';
import '../../Sass/app.scss';
import { useHistory } from "react-router";

const DataCard = () => {
    const [services, setService] = React.useState(null);
    const slug= localStorage.getItem("serviceSlug");
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
          price: service.data.serviceDetail.price
        };
        setService(serviceData);

    };

    if(!services){
        return (<div/>)
    }
    return (
        <div className='company-card'>
            <div className='card-heading'>
                <h5>{services.name}</h5>
            </div>
            <div className='card-content'>
                <table>
                    <tr>
                        <td>Processing Time:</td>
                        <td><label>{services.processT}</label></td>
                    </tr>
                    <tr>
                        <td>Stay Period:</td>
                        <td><label>{services.stayPeriod}</label></td>
                    </tr>
                    <tr>
                        <td>Validity:</td>
                        <td><label>{services.validity}</label></td>
                    </tr>
                    <tr>
                        <td>Entry:</td>
                        <td><label>{services.entry}</label></td>
                    </tr>
                </table>
                <Divider />
                <div className='total'>
                    <label className='fees'>Fees</label> <label>{services.price}</label>
                </div>
            </div>
        </div>
    )
}
export default DataCard;
