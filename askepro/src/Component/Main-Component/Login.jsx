import React from "react";
import { Button, Checkbox, Form, Message } from "semantic-ui-react";
import ReCAPTCHA from "react-google-recaptcha"
import { useHistory } from "react-router-dom";

const Login1 = () => {
  const history = useHistory();
  
  const [gvalue, setGvalue] = React.useState(false);

  const url = `${process.env.REACT_APP_BASE_URL}/login`
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [msg, setMsg] = React.useState(null);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    
    if (gvalue === true) {
      const jsonPostData = {
        'email': email,
        'password': password
      } 

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonPostData)
      });

      const data = await res.json();
      if (data.status == 1 && data.token) {
        localStorage.setItem('token', data.token);
       
        let idData = await (
          await fetch(
            `${process.env.REACT_APP_BASE_URL}/users`,
            {
              method: "GET",
              headers: {
                'x-access-token': localStorage.getItem('token'),
              }
            })).json();
        idData = idData.data;
        localStorage.setItem('id', idData._id);
        localStorage.setItem('name', idData.name);
        if (idData.isAdmin===false)
        history.push("/");
        else
        history.push("/admin");
      } else {
        setMsg("Incorrect Email/Password ");
      }

      window.location.reload(false);  
    }

  };
  
  const gCaptchaChange = async (value) => {
    const url = `${process.env.REACT_APP_BASE_URL}/admin/g_server`;
    const pData = {
      humanKey: value
    };
    const gReq = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pData)
    });
    
    const jsonD = await gReq.json();
    
    if (jsonD.success === true) {
      setGvalue(true);
    }
  }
  
  return (
    <>
      <div
        className="loginx"
        style={{
          background: "url(/Assets/images/login.png)",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >

        {msg && <Message negative>
          <Message.Header>{msg}</Message.Header>
        </Message>
        }
        <Form className="loginx_form" onSubmit={handleSubmitForm}>
          <h3>Login into your account</h3>
          <Form.Field>
            <label>Email</label>
            <input type="text" onChange={(event) => setEmail(event.target.value)} name="Email" placeholder="Enter Email" required={true} />
          </Form.Field>
          <Form.Field>
            <label> Password</label>
            <input type="password" onChange={(event) => setPassword(event.target.value)} name="password" placeholder="Enter password" required={true} />
          </Form.Field>
          
          <Form.Field className="check">
            <ReCAPTCHA sitekey={process.env.REACT_APP_GOOGLE_SITE_KEY} onChange={gCaptchaChange} />
          </Form.Field>
          
          {/*
          <Form.Field className="check">
            <Checkbox label="I’m not a Robot" required={true} readOnly={false} />
          </Form.Field>
          */}
          <span class="fgt1">
            <a href="javascript:void(0);" onClick={() => history.push('/fgpasswd')}>Forgot password?</a>
          </span>

          <button className="form-btn" type="submit">Submit</button>
          <span class="fgt2">
            <a href="javascript:void(0);" onClick={() => history.push('/register')}>New to Epro? Sign Up here</a>
          </span>
        </Form>
      </div>
    </>
  );
};

export default Login1;