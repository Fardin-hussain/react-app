import React,{useState} from 'react';
const logo = './notesImg.png'; 

const Todo = () => {

    const[inputData, setInput] = useState();
    const[toggleSubmit, setToogle] = useState(true);
    const[isEditId, setEditId] = useState(true);
    const[items, setItems] = useState([]);
    
    const addItoms = () =>{
        if(inputData)  {
            setItems([...items , {id : new Date().getTime().toString() , name : inputData}]);
            setInput('');    
        }
    }

    const editItems = (id) => {
        setInput((items.find((elem) => {return elem.id === id})).name);
        setToogle(false);
        setEditId(id);
    }

    const editItemsList = () => {
        setItems(items.map((elem) => {
            if(elem.id === isEditId) 
                return {...elem , name :inputData}
                return elem
        }));
        setToogle(true);
        setEditId(true);
        setInput('');
    }

    const deleteItem = (index) => {
        setItems( items.filter( (elem,indexv) => { return indexv !== index}));
    }   

    const removAll = () => {
        setItems([]);
    }

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>

            <figure >
                <img className='fig' src="https://vaibhavsharma1998.github.io/todo-list/static/media/Logo.3bee1e3a6c4ebdf1f139.png" alt='2022 Todo List Logo' />
                <figcaption>Add Your List Here ✌</figcaption>
            </figure>

            <div className='add-items'>
                <input className='input-cls' type='text' placeholder='✍ Add Items here...' value={inputData} onChange={ (e)=> setInput(e.target.value)} />
                {toggleSubmit ? <i className="fa fa-plus add-btn" title='Add Items'  onClick={addItoms}></i> :
                <i className='far fa-edit add-btn' title='Update Items' onClick={editItemsList} ></i> }
               
            </div>

            <div className='showItems'>
                {items.map((elem,index) => {
                   return (
                        <div className='eachItem' key={elem.id}>
                            <h3>{elem.name}</h3>
                            <div className='todo-btn'>
                                    <i className='far fa-edit add-btn' title='Edit Items' onClick={()=>editItems(elem.id)} ></i>
                                    <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={()=>deleteItem(index)}></i>  
                                </div>
                        </div>
                   )     
                })}
            </div>
            <div className='showItems'>
                <button className="btn effect04" data-sm-link-text="Remove All" onClick={removAll}>
                    <span>CHECK LIST</span>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
