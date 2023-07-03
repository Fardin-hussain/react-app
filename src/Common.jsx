import React  from 'react';
import { NavLink } from 'react-router-dom';
const logo = './imagesfront.png'; 
const Common = (props) => {
    return (
        <>
          <section id='header' className='d-flex align-item-center'>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                  <div className='col-10 mx-auto'>
                        <div className='row py-5'>
                        <div className='col-md-6  mt-0 mt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1>    
                                {props.name}
                                <span className='text-primary'> Thapa Technical</span>
                            </h1>
                            <p className='mt-3'>
                                We are the team of talented  developer making websites
                            </p>
                            <div className='mt-3'>
                                <NavLink to={props.visit} className="btn btn-outline-primary">{props.btnname}</NavLink>
                            </div>
                        </div>
                        <div className='col-md-6 order-1 mt-0 mt-lg-5 order-lg-2 d-flex justify-content-center flex-column'>
                            <img src={props.imgsrc} className='img-fluid animated vert-move' alt='no'/>
                        </div>
                        </div>
                  </div>
                </div>
            </div>
          </section>
        </>
    );
}
export default Common;

