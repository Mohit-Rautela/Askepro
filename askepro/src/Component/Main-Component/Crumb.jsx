import React from "react";
import '../../Sass/Sass-Main/_About.scss';
import { Breadcrumb, Container } from "semantic-ui-react";


const sections = [
  { key: 'Home', content: 'Home', link: true },
  { key: 'Store', content: 'Store', link: true },
  { key: 'Shirt', content: 'Sign in', active: true },
]


const Crumb = ({section}) =>{
  return (
    <div className='crumb'>
  <Breadcrumb icon='right angle' sections ={section} />
  </div>
  )
}
export default Crumb;
