import React from 'react'
import Common from './Common';
const logo = './highimages.jpg'; 

const About = () => {
   
    return (
        <>
          <Common name='Welcome to About page' visit='/service' btnname='Contact Now' imgsrc={logo}/>
        </>
    );
}
export default About;

