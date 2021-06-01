import React from "react";
import {
  Button,
  Icon,
  Grid,
  Header,
  Image,
  Modal,
  Form,
  Table,
  Input,
  TextArea
} from "semantic-ui-react";


function exampleService(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const Service_modal = (service) => {
 
  const [name, setName] = React.useState(service.name);
  const [description, setDescription] = React.useState(service.description);
  const [overview, setOverview] = React.useState(service.overview);
  const [processT, setProcessT] = React.useState(service.process);
  const [stayPeriod, setStayPeriod] = React.useState(service.stay);
  const [validity, setValidity] = React.useState(service.validity);
  const [entry, setEntry] = React.useState(service.entry);
  const [price, setPrice] = React.useState(service.price);
  const [serviceHowToApply, setHta] = React.useState(service.hta);
  const [reqDocs, setDocs] = React.useState(service.docs);
  const [file, setFile] = React.useState(null);

  const uploadWithFormData = async (event,id) => {
    dispatch({ type: "close" });
    const url = `${process.env.REACT_APP_BASE_URL}/admin/services/${id}`
    event.preventDefault();
    const formData = new FormData();
    formData.append("upload", file);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("overview", overview);
    formData.append("processT", processT);
    formData.append("stayPeriod", stayPeriod);
    formData.append("validity", validity);
    formData.append("entry", entry);
    formData.append("price", price);
    formData.append("reqDocs", reqDocs);
    formData.append("serviceHowToApply", serviceHowToApply);


    const result = await (await fetch(url, {
      method: 'PUT',
      body: formData
    })).json();

    if (result.status === 1)

    window.location.reload(false);
  }
  const [state, dispatch] = React.useReducer(exampleService, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  return (
    <>

      <img
        src={
          process.env.PUBLIC_URL + "/Assets/images/edit.png"
        } className="btn-upload" onClick={() => dispatch({ type: "open", size: "huge" })} />
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >

        <Modal.Header>
          <div className="accept_heading">Add New Service</div>
        </Modal.Header>
        <Modal.Content>
          <div className="services_form">
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  control={Input}
                  label='Enter service name'
                  placeholder='First name'
                  onChange={(event) => setName(event.target.value)}
                  defaultValue={service.name}
                />
                <Form.Field
                  control={Input}
                  label='Total Fees (AED)'
                  placeholder='Enter total fees'
                  onChange={(event) => setPrice(event.target.value)}
                  defaultValue={service.price}
                />
                <Form.Field>
                  <label>Image(JPEG/PNG)</label>
                  <Input type='file' name='file' id="file-btn" onChange={(event) => setFile(event.target.files[0])} style={{ display: "none" }} />
                  <p className='file'>
                    <label for='file-btn'>Click to select file  </label>
                  </p>
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field
                  control={Input}
                  label='Processing Time (Days)'
                  placeholder='Enter time'
                  onChange={(event) => setProcessT(event.target.value)}
                  defaultValue={service.process}
                />
                <Form.Field
                  control={Input}
                  label='Stay Period (Days)'
                  placeholder='Enter duration'
                  onChange={(event) => setStayPeriod(event.target.value)}
                  defaultValue={service.stay}
                />
                <Form.Field
                  control={Input}
                  label='Validity (Days)'
                  placeholder='Enter validity'
                  onChange={(event) => setValidity(event.target.value)}
                  defaultValue={service.validity}
                />
                <Form.Field
                  control={Input}
                  label='Entry (Single/Multi)'
                  placeholder='Enter headcount'
                  onChange={(event) => setEntry(event.target.value)}
                  defaultValue={service.entry}
                />

              </Form.Group>
              <Form.Field
                control={TextArea}
                label='Overview'
                placeholder='Write your text here'
                onChange={(event) => setOverview(event.target.value)}
                defaultValue={service.overview}
              />
              <Form.Field
                control={TextArea}
                label='Description'
                placeholder='Write your text here'
                onChange={(event) => setDescription(event.target.value)}
                defaultValue={service.description}
              />
              <Form.Field
                control={TextArea}
                label='How to Apply (step1,step2....)'
                placeholder='Write your text here'
                onChange={(event) => setHta(event.target.value)}
                defaultValue={service.hta.join()}
              />
              <Form.Field
                control={TextArea}
                label='Documents Required (Document1,Document2,.....)'
                placeholder='Write your text here'
                onChange={(event) => setDocs(event.target.value)}
defaultValue={service.docs.join()}
              />
            </Form>
          </div>
        </Modal.Content>
        <Modal.Description>
          <div className="accept_bottom">
            <button
              color="black"
              className="same-btn"
              onClick={() => dispatch({ type: "close" })}
            >
              CANCEL
            </button>
            <button
              color="black"
              className="same-btn"
              onClick={(event) => uploadWithFormData(event,service.id)}
            >
              SAVE
            </button>
            <br />
            <br />
          </div>
        </Modal.Description>
      </Modal>

    </>
  );
};
export default Service_modal;
