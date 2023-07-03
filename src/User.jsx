import React from 'react'
import { useParams,useLocation, useNavigate } from 'react-router-dom';
const User = () => {
   const location = useLocation();
   const navigate = useNavigate();
   console.log(' navigate ', navigate);
   const {fname,lname} = useParams();


//    const sendSubmit = () => {
//         navigate('/')
//     };
    return (
        <>
          <h1>Hello i am {fname} {lname} page</h1>
          <p>Mu current location is {location.pathname}</p>
          {location.pathname === `/user/fardin/khan` ? <button onClick={() => {navigate('/')}}>Click me</button> : ''}
          {/* {location.pathname.split('/')[2] === `fardin` ? <button onClick={ () => { alert(' i am alert ')}}>Click me</button> : ''} */}
 
        </>
    );
}
export default User;

