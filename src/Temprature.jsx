import React,{useEffect, useState} from 'react'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Temprature = () => {
  
    const[city, setCity] = useState();
    const[search, setSearch] = useState();

    useEffect( ()=> {
        const fetchApi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f972b76e9ac344d591ff2b1c18c0b873`;
            const res = await fetch(url);
            const resJson = await res.json();
            console.log(' res is ', resJson);
            setCity(resJson);
        }
        fetchApi();
    }, [search])
    
    return (
        <>
          <div className='main_div'>
                <div className='center_div'>
                    <input type='search' className='inputField' onChange={ (event) => {setSearch(event.target.value)}}/>
                    {!city ? <center><h2>No Data found</h2></center>: 
                    (<>
                    <div className='info'>
                        <div className='locationdiv'>
                            <i className="fa-solid fa-street-view"></i>
                            <h1 className='location'>{search}</h1>
                        </div>
                     </div>
                        <center><h1>{city?.main?.temp}</h1> 
                        <div><h6>Min {city?.main?.temp_min} | Max {city?.main?.temp_max}</h6></div> </center>  
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div> </>)
                    }
                </div>
           </div> 
        </>
    );
}
export default Temprature;


