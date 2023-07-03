import React,{useState} from 'react'
// import { useParams,useLocation, useNavigate } from 'react-router-dom';
const Search = () => {
    const[img,setImg] = useState('');
    const inputEvent = (e) => {
        setImg(e.target.value);
    }
    return (
        <>
          <div className='searchbar'>
            <input  type='text' value={img} onChange={inputEvent}/>
          </div>
        </>
    );
}
export default Search;

