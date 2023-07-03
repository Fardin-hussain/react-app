import React,{useState} from 'react';
import Sdata from './ReciepyData';
import CardMenu from './CardMenu';
import MenuItems from './MenuItems';
const GalleryReact = () => {

   const allCatValues = [...new Set(Sdata.map((elem) => { return elem.category})), 'All'];
 
   const[items, setItems] = useState(Sdata); 
   const[catItems, setCatItems] =  useState(allCatValues);//useState([...new Set(Sdata.map((elem) => { return elem.category})), 'All']); 

   const filterItems = (categItem) => {
    if(categItem === 'All') {
        setItems(Sdata);
        return;
    }
    setItems(Sdata.filter( (elem) => { return elem.category === categItem}));
   }
  return (
    <>
        <h1 className='mt-5 text-center'>Order Your favourite Dish</h1>   
        <hr/>
        <MenuItems filterItems={filterItems} catItems={catItems}/>
         <CardMenu items={items} />   
    </>
  ) 
}

export default GalleryReact
