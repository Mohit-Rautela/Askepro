import React from 'react';
import { Container, Header, Grid, Divider, Form, Button, Input, List, Select } from 'semantic-ui-react';
import Stepper from '../../Component/Stepper/stepper';
import DataCard from '../../Component/Card/card';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import ButtonBar from '../../Component/ButtonBar/buttonbar';
import '../StepPages/stepPage.scss';
import { useHistory } from 'react-router';

const UploadDocuments = () => {
    const history = useHistory();

    const [fileName, setfilename] = React.useState("");
    const [file, setFile] = React.useState(null);
    const [docsArray, updateMyArray] = React.useState([]);
    const [services, setService] = React.useState(null);
    const slug = localStorage.getItem("serviceSlug");
    const service_url = `${process.env.REACT_APP_BASE_URL}/serviceCategory/${slug}`;


    React.useEffect(() => {
        getServices();
    }, []);

    const getServices = async () => {
        const service = await (await fetch(service_url, { method: "GET" })).json();
        const serviceData = {
            reqDocs: service.data.serviceDetail.reqDocs,
        };
        setService(serviceData);

    };
    if (!services) {
        return (<div />)
    }
    const requestId = localStorage.getItem("applicationId");
    const url = `${process.env.REACT_APP_BASE_URL}/service/upload/${requestId}`;
    const uploadWithFormData = async (event) => {
        event.preventDefault();

        console.log(file, fileName);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", fileName);
        console.log(...formData);
        const result = await (await fetch(url, {
            method: 'PUT',
            headers:{  'x-access-token':localStorage.getItem("token")},
            body: formData
        })).json();
       
      if(result.status===1)
        updateMyArray(oldArray => [...oldArray, fileName]);
    }
    const handleSubmitForm = (event) => {
            if(docsArray.length===services.reqDocs.length)
            history.push("/book");
    }
    return (
        <main>
            <div className='apply-section'>
                <BreadCrumbs section={[
                    { key: 'home', content: 'Home', link: true },
                    { key: 'apply', content: 'Apply Now', active: true }
                ]} />
                <Heading />
                <Grid className='data' columns='2' stackable='tablet'>
                    <Grid.Column width={11}>
                        <Container className="stepper-container">
                            <Stepper />
                            <Divider />
                            <div className='upload-form'>
                                <Grid column='3' stackable='tablet' centered>
                                    <Grid.Row className='upload-container'>
                                        <Grid.Column width={6}>
                                            <Form.Field>
                                                <label for="docs">Choose a documnet</label>
                                                <Select placeholder='Chose a document' onChange={(e, { value }) => setfilename(value)} options={services.reqDocs.map((ele, index) => ({ key: index, value: ele, text: ele }))} />
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column width={7}>
                                            <Form.Field>
                                                <label>Scan and upload documents</label>
                                                <Input type='file' name='file' onChange={(event) => setFile(event.target.files[0])} id="file-btn" style={{ display: "none" }} />
                                                <div className='file'>
                                                    <label for='file-btn'>Upload file from your computer</label>
                                                </div>
                                            </Form.Field>
                                        </Grid.Column>
                                        <Grid.Column width={3}>
                                            <Button className='btn-upload' onClick={uploadWithFormData}>UPLOAD</Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                <div className='document-list'>
                                    <label>Documents Required</label>
                                    <List>
                                        {services.reqDocs.map((ele) => <List.Item>
                                            <List.Icon name='square' />
                                            <List.Content>{ele}</List.Content>
                                        </List.Item>)}
                                    </List>
                                </div>
                                <div className='document-list'>
                                    <label>Documents Submitted</label>
                                    <List>
                                        {docsArray.map((ele) => <List.Item>
                                            <List.Icon name='square' />
                                            <List.Content>{ele}</List.Content>
                                        </List.Item>)}
                                    </List>
                                </div>
                            </div>
                            <div className="upload_save" style={{textAlign:'center'}}>
                                <button className="same-btn"  onClick={handleSubmitForm}  value="submit">Save</button>
                                </div>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <DataCard />
                    </Grid.Column>
                </Grid>
            </div>
            <ButtonBar />
        </main>
    );
}
export default UploadDocuments;