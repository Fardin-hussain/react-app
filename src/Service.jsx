import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';
import Sdata from './Sdata';
const logo = './imagesfront.png'; 

const Service = () => {
   
    return (
        <>
          <div className='my-5'>
            <h2 className='text-center'>Our Services</h2>
          </div>
          <div className='container-fluid mb-5'>
                <div className='row'>
                  <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            
                            {Sdata.map((val) => {
                                return (
                                    <Card imgsrc={val.imgsrc} 
                                        title={val.title}
                                        text={val.textvalue}   
                                        btnvalue={val.cardlink} 
                                        /> )
                            })} 
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}
export default Service;

