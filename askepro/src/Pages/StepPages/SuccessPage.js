import React from 'react';
import { Grid, Divider, Form, Message , Container, Select, Input, CardDescription, Icon, Header, Button, Label, GridRow} from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import Heading from '../../Component/Heading/heading';
import Stepper from '../../Component/Stepper/stepper';
import '../StepPages/stepPage.scss';
import '../../Sass/app.scss';
import { useHistory } from 'react-router';

const Success = () =>{
    const history=useHistory();
    if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");

            return(
            <main>
             <div className='success-main'>
                 <BreadCrumbs section={[
                        {key:'home', content:'Home', link:true },
                        {key:'apply', content:'Apply Now', active:true }
                 ]}/>
                 <Heading/>
             <div className='step-data'>
                <Container className="stepper-container" stackable='mobile'>
                <Stepper/>
                <Divider/>
                <div className="success-form">  
                <div className='success-box'>
                <div> 
                <Icon name='check'/>
                </div>   
                <p className='text'>
                   Your payment was successful and we have also recieved the slot for your appointment.
                   You can keep track of your application from your 
                   "History". 
                </p>
                </div>
                <Divider/>
                <Grid columns='2' stackable='mobile' >
                <Grid.Row>
                <Grid.Column>
                <h3>Company Formation Services</h3>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>
                <Grid columns='3' fluid stackable='tablet'>
                    <Grid.Row>
                        <Grid.Column>
                        <label className='heading'>Date</label>
                        <label className='value'>15 Jan 2021</label>
                        </Grid.Column>
                        <Grid.Column>
                        <label className='heading'>Service Id</label>
                        <label className='value'>BJXCR34</label>
                        </Grid.Column>
                        <Grid.Column>
                        <label className='heading'>Transaction Id</label>
                        <label className='value'>XMBC3457XNT0</label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <label className='heading'>Mode of Payment</label>
                        <label className='value'>Debit Card</label>
                        </Grid.Column>
                        <Grid.Column>
                        <label className='paid-label'>Amount Paid</label>
                        <label className='total-label'>350 AED</label>
                        </Grid.Column>
                        <Grid.Column>
                        <label  className='heading'>Status</label>
                        <Label className='status' as='a'>In-Progress</Label>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Grid.Column>
                <Grid.Column>
                <div className='event-card'>
                 <div className='calender'>
                    <label className='date'>23</label>
                    <label className='month'>JAN 21</label>
                 </div>
                 <div className='event-info'>
                 <Label as='a' className='upcoming'>Upcoming</Label>
                 <p>Appointment with AMER executive in Dubai Media City</p>
                 <label className='time'>11:00 - 12:00</label>
                 </div>
                </div>
                </Grid.Column>
                </Grid.Row>
                </Grid>
                </div>
                <div className='bottom-btn'>
                 <Button className='btn download'>Download Reciept</Button>
                 <Button className='btn home'>Go To Home</Button>
                </div>
                </Container>     
            </div>
            </div>       
            </main>
        )
}

export default Success;