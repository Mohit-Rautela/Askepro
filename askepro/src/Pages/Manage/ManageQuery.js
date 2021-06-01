import React from 'react';
import { Container, Icon, Dropdown, Pagination, Table, Label, Sidebar, Button } from 'semantic-ui-react';
import BreadCrumbs from '../../Component/Breadcrumb/breadcrumb';
import StatusChip from '../../Component/StatusChip/StatusChip';
import SideBar from '../../Component/Nav/Sidebar'
import './manage.scss';
import { useHistory } from 'react-router';

const ManageQuery = ({ title }) => {
  const history = useHistory();
  if (!localStorage.getItem("token") && !localStorage.getItem("id"))
    history.push("/login");
  const [query, setquery] = React.useState(null);
  const [status, setStatus] = React.useState("Open");
  React.useEffect(() => {
    getquery();
  }, []);

  const getquery = async (status) => {
    if (!status) {
      status = "Open";
    }
    const query = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/query?status=${status}`, {
      method: "GET", headers: {
        'x-access-token': localStorage.getItem('token'),
      }
    })).json();
    setquery(query);
  }

  const pageClick = async (p) => {
    const query = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/query?page=${p}`, {
      method: "GET", headers: {
        'x-access-token': localStorage.getItem('token'),
      }
    })).json();

    setquery(query);
  };

  const statusChange = async (id) => {

    const query = await (await fetch(`${process.env.REACT_APP_BASE_URL}/admin/query/${id}`, {
      method: "PUT", headers: {
        'x-access-token': localStorage.getItem('token'),
      }
    })).json();
    if (query.status === 1) {
      alert(query.msg);
      window.location.reload(false);
    }
  }

  if (!query) {
    return (<div />)
  }
  return (
    <main className='manage-main'>
      <SideBar value='query' active='active' />
      <div className='table-container'>
        <BreadCrumbs section={[
          { key: 'dash', content: 'Dashboard', link: true },
          { key: 'history', content: 'Manage Query', active: true }
        ]} />
        <div className='manage-container'>
          <h2>{title}</h2>
          <Container fluid>
            <Table striped stackable='tablet'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Query</Table.HeaderCell>
                  <Table.HeaderCell>
                    <Dropdown text='Services' scrolling='true'>
                      <Dropdown.Menu >
                        <Dropdown.Item text='Open' onClick={() => { getquery('Open'); setStatus("Open") }} />
                        <Dropdown.Item text='Resolved' onClick={() => { getquery('Resolved'); setStatus("Resolved") }} />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Table.HeaderCell>
                  {status === "Open" ? <Table.HeaderCell>Actions</Table.HeaderCell> : <Table.Cell></Table.Cell>}
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {query.data && query.data.map((ele) => <Table.Row>
                  <Table.Cell>{new Date(ele.createdAt).toLocaleString()}</Table.Cell>
                  <Table.Cell>{ele.name}</Table.Cell>
                  <Table.Cell>{ele.email}</Table.Cell>
                  <Table.Cell>{ele.query}</Table.Cell>
                  <Table.Cell>{ele.status}</Table.Cell>
                  {status === "Open" ? <Table.Cell><Button inverted color='green' onClick={() => statusChange(ele._id)}>Mark As Resolved</Button></Table.Cell> : <Table.Cell></Table.Cell>}
                </Table.Row>)}
              </Table.Body>
            </Table>


          </Container>
          <div className='pagination-container'>
            <label className='page-name'>Showing  {query.currentPage} of  {query.totalPages}</label>
            <Pagination
              size='small'
              defaultActivePage={query.currentPage}
              firstItem={null}
              lastItem={null}
              prevItem={{ content: <label className='next'>PREV</label> }}
              nextItem={{ content: <label className='prev'>NEXT</label> }}
              totalPages={query.totalPages}
              onClick={e => pageClick(parseInt(e.target.outerText))}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ManageQuery;