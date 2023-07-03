import React  from 'react'
import Common from './Common';
const logo = './LatestImg.jpg'; 

const Home = () => {
    return (
        <>
            <Common name='Grow your bussiness with' visit='/service' btnname='Get Started' imgsrc={logo}/>
        </>
    );
}
export default Home;

