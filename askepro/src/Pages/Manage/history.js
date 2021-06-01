import React from 'react';
import { Container, Icon, Pagination, Table, Label, Button } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import './manage.scss';
import { useHistory } from 'react-router';

const History = ({ title, key }) => {
  const history = useHistory();  const [application, setApplication] = React.useState(null);

  React.useEffect(() => { getApplication() },[]);
  let id = localStorage.getItem('id');
  const getApplication = async () => {
    if (!localStorage.getItem("token") && !localStorage.getItem("id")) { history.push("/login"); }
    else {
      let application = await (
        await fetch(
          `${process.env.REACT_APP_BASE_URL}/service/application/${id}`,
          {
            method: "GET",
            headers: {
              "x-access-token": localStorage.getItem("token"),
            }
            
          })).json();

      setApplication(application || []);
    }
  }
  const handleClick= async(status, id,slug)=>{
    localStorage.setItem("applicationId", id);
    localStorage.setItem("serviceSlug",slug);
    if(status==="Details Pending")
    history.push('/fill');
    else if(status==="Upload Pending")
    history.push('/upload');
    else if(status==="Appointment Pending")
    history.push('/book');
    else
    alert("Please apply for a new application")
  };
  const pageClick = async (p) => {
    const application = await (await fetch(`${process.env.REACT_APP_BASE_URL}/service/application/${id}?page=${p}`, { method: "GET",
    headers: {
      "x-access-token": localStorage.getItem("token"),
    }})).json();
   
    setApplication(application || []);
  };
  if (!application) {
    return (<div></div>);
  }
  
  function dateFormat(d){
    const date = new Date(d);
    return `${date.toLocaleString()}`
  };
  
  return (
    <main className='manage-main'>
      <div className='history-main'>
        <BreadCrumbs section={[
          { key: 'home', content: 'Home', link: true },
          { key: 'history', content: 'History', active: true }
        ]} />
        <div className='manage-container'>
          <h2>{title}</h2>
          <Container fluid>
            <Table striped stackable='tablet'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Service Id</Table.HeaderCell>
                  <Table.HeaderCell>Service name</Table.HeaderCell>
                  <Table.HeaderCell>Transaction Id</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Mode</Table.HeaderCell>
                  <Table.HeaderCell textAlign='right'>Amount(AED)</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
                  <Table.HeaderCell ></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                </Table.Row>
                {application.data && application.data.map((ele) => <Table.Row>
                  <Table.Cell>{new Date(ele.createdAt).toLocaleString()}</Table.Cell>
                  <Table.Cell>{ele.serviceCategory.scode}</Table.Cell>
                  <Table.Cell>{ele.serviceCategory.name}</Table.Cell>
                  <Table.Cell>XMBC3457XNT0</Table.Cell>
                  <Table.Cell><StatusChip value={ele.status} /></Table.Cell>
                  <Table.Cell>Debit Card</Table.Cell>
                  <Table.Cell textAlign='right'>350.00</Table.Cell>
                  <Table.Cell className='view'style={{cursor:'pointer'}} textAlign='right' onClick={() => history.push(`/view/${ele._id}`)}>View Details</Table.Cell>
                  <Table.Cell className='view'style={{cursor:'pointer'}} textAlign='right' onClick={() =>  handleClick(ele.status,ele._id,ele.serviceCategory.slug)}>Resume</Table.Cell>
                  
                </Table.Row>)}
              </Table.Body>
            </Table>
          </Container>
          <div className='pagination-container'>
          <label className='page-name'>Showing {application.currentPage} of  {application.totalPages}</label>
            <Pagination
    size='small'
    defaultActivePage={application.currentPage}
    firstItem={null}
    lastItem={null}
    prevItem={{ content: <label className='next' onClick={() => pageClick(--application.currentPage)}>PREV</label>}}
    nextItem={{ content: <label className='prev' onClick={() => pageClick(++application.currentPage)}>NEXT</label>}}
    totalPages={application.totalPages}
    onClick={e => pageClick(parseInt(e.target.outerText))}
  />
          </div>

        </div>
      </div>
    </main>
  )
}

export default History;