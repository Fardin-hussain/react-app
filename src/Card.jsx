import React from 'react'
import { NavLink } from 'react-router-dom';
const Card = (props) => {
   
    return (
        <>
        
        <div className='col-md-4 col-10 mx-auto'>
        fardin hussain
          <div className="card" >
                                <img src={props.imgsrc} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.titel}</h5>
                                        <p className="card-text">{props.text}</p>
                                        <NavLink to="/" className="btn btn-primary">{props.btnvalue}</NavLink>
                                    </div>
                                </div>   
                                </div> 
        </>
    );
}
export default Card;

