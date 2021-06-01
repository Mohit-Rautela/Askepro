import React from 'react';
import { Container, Icon, Pagination, Table, Label, Sidebar } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar'
import './manage.scss';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const ManageApplication = ({title}) =>{
  const history = useHistory();
    if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");
  
  const [application, setApplication] = React.useState(null);
    React.useEffect(() => {
        getapplication();
    }, []);

    const getapplication = async () => {
        const application = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/application`, { method: "GET"})).json();
       
        setApplication(application);
    }
    
    const pageClick = async (p) => {
      const application = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/application?page=${p}`, { method: "GET"})).json();
     
      setApplication(application);
    };
    
    if(!application)
    {return (<div></div>)}
        return (
          
          <main className='manage-main'>
            <SideBar  value='application' active='active'/>
            <div className='table-container'>
            <BreadCrumbs section={[
                   {key:'dash', content:'Dashboard', link:true },
                   {key:'history', content:'Manage Application', active:true }
            ]}/>
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
        <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {application.data&&application.data.map((ele) => <Table.Row>
        <Table.Cell>{new Date(ele.createdAt).toLocaleString()}</Table.Cell>
        <Table.Cell>{ele.serviceCategory.name}</Table.Cell>
        <Table.Cell>{ele.serviceCategory.scode}</Table.Cell>
        <Table.Cell>XMBC3457XNT0</Table.Cell>
        <Table.Cell><StatusChip value={ele.status}/></Table.Cell>
        <Table.Cell>Debit Card</Table.Cell>
        <Table.Cell textAlign='right'>350.00</Table.Cell>
       <Link to={`/application/${ele._id}`}> <Table.Cell className='view' textAlign='right'>View Details</Table.Cell></Link>
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

export default ManageApplication;