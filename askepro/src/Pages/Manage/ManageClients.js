import React from 'react';
import { Container, Icon, Pagination, Table, Label, Sidebar } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar';
import './manage.scss';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Manageclient = ({title}) =>{
  const history = useHistory();
  if (!localStorage.getItem("token") && !localStorage.getItem("id"))
  history.push("/login");
  const [client, setClient] = React.useState(null);
    React.useEffect(() => {
        getclient();
    }, []);

    const getclient = async () => {
        const client = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/client`, { method: "GET"})).json();
       
        setClient(client);
    }
    if(!client)
    {return (<div></div>)}
    
    const pageClick = async (p) => {
      const client = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/client?page=${p}`, { method: "GET"})).json();
     
      setClient(client);
    };
    
        return (
          <main className='manage-main'>
            <SideBar value='client' active='active'/>
            <div className='table-container'>
            <BreadCrumbs section={[
                   {key:'dash', content:'Dashboard', link:true },
                   {key:'client', content:'Manage client', active:true }
            ]}/>
            <div className='manage-container'>
            <h2>{title}</h2>
            <Container fluid>
            <Table striped stackable='tablet'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Client Id</Table.HeaderCell>
        <Table.HeaderCell>Client Name</Table.HeaderCell>
        <Table.HeaderCell>Email Id</Table.HeaderCell>
        <Table.HeaderCell>Phone No.</Table.HeaderCell>
        <Table.HeaderCell>Created on</Table.HeaderCell>
        <Table.HeaderCell  >Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {client.data&&client.data.map((ele) =><Table.Row>
        <Table.Cell>{ele._id}</Table.Cell>
        <Table.Cell>{ele.name}</Table.Cell>
        <Table.Cell>{ele.email}</Table.Cell>
        <Table.Cell>{ele.phone}</Table.Cell>
        <Table.Cell>{new Date(ele.createdAt).toLocaleString()}</Table.Cell>
        <Table.Cell className='view'  ><Link to={`/client/${ele._id}`}> View Details </Link></Table.Cell>
      </Table.Row>)}
    
    </Table.Body>
 </Table>
</Container>
<div className='pagination-container'>
<label className='page-name'>Showing { client.currentPage || 1 } of { client.totalPages } </label>
<Pagination
    size='small'
    defaultActivePage={client.currentPage}
    firstItem={null}
    lastItem={null}
    prevItem={{ content: <label className='next' onClick={() => pageClick(--client.currentPage)}>PREV</label>}}
    nextItem={{ content: <label className='prev' onClick={() => pageClick(++client.currentPage)}>NEXT</label>}}
    totalPages={client.totalPages}
    onClick={e => pageClick(parseInt(e.target.outerText))}
  />
 </div>

 </div>
 </div>
 </main>
        )
}

export default Manageclient;