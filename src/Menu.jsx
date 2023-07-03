import React from 'react'
import {NavLink} from 'react-router-dom';
const Menu = () => {
   
    return (
        <>
            <div className='menu_div'>
                <NavLink to='/' activeClassName='active-class'>About us</NavLink>
                <NavLink to='/contact' activeClassName='active-class'>Contact us</NavLink>  
                <NavLink to='/search' activeClassName='active-class'>Search</NavLink> 
                <NavLink to='/service' activeClassName='active-class'>Services</NavLink>
                <NavLink to='/user' activeClassName='active-class'>User</NavLink>    
            </div>
        </>
    );
}
export default Menu;

