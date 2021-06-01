import React from 'react';
import {Sidebar, Header, Icon, Menu, Segment, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../../Sass/nav.scss';
const SideBar = ({value, active}) => {
return (
    <div className='sidebar'
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'  
    >
      <Menu.Item as='a'  className={value==='dashboard' ? active : ""}>
      <Link to='/admin'><img src={process.env.PUBLIC_URL + '/Assets/images/grid.svg'}/></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='application' ? active : ""}>
      <Link to='/admin/application'><img src={process.env.PUBLIC_URL + '/Assets/images/file-text.svg'}/></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='client' ? active : ""}>
      <Link to='/admin/clients'><img src={process.env.PUBLIC_URL + '/Assets/images/users.svg'} /></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='appointment' ? active : ""}>
      <Link to='/admin/appointment'> <img src={process.env.PUBLIC_URL + '/Assets/images/calendar.svg'} /></Link>
      </Menu.Item>
      <Menu.Item as='a' className={value==='payment' ? active : ""}>
      <Link to='/admin/payments'><img src={process.env.PUBLIC_URL + '/Assets/images/credit-card.svg'} /></Link>
      </Menu.Item>
      <Menu.Item as='a'  className={value==='service' ? active : ""}>
      <Link to='/admin/service'><img src={process.env.PUBLIC_URL + '/Assets/images/settings.svg'}/></Link>
      </Menu.Item>
      <Menu.Item as='a'  className={value==='faq' ? active : ""}>
      <Link to='/admin/faq'><img src={process.env.PUBLIC_URL + '/Assets/images/faq.png'}/></Link>
      </Menu.Item>
      <Menu.Item as='a'  className={value==='query' ? active : ""}>
      <Link to='/admin/query'><img src={process.env.PUBLIC_URL + '/Assets/images/mail.svg'}/></Link>
      </Menu.Item>
      {/* <Menu.Item as='a'  className={value==='help' ? active : ""}>
      <Link to='/admin/query'><img src={process.env.PUBLIC_URL + '/Assets/images/help-circle.svg'}/></Link>
      </Menu.Item> */}
      
    </div>
    );
}

export default SideBar;