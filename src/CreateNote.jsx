import React, { useState } from "react";

const CreateNote = (props) => {
    const year = new Date().getFullYear();
    const[expand, setExpand] = useState(false);
    const[titleOrNoteValue , setInputValue] = useState({
        title : '',
        note : ''
    }) 

    const inputEvent = (event) => {
        setInputValue( (preValue) => {
            const{name,value} = event.target;
            console.log(' preValue  ', preValue);
            return{
                ...preValue,
                [name] : value
            }
        });
        console.log(' titleOrNoteValue  ', titleOrNoteValue);
    }

    const addTitle = () => {
        console.log(' titleOrNoteValue  in  ', titleOrNoteValue);
        props.passNote(titleOrNoteValue);
        setInputValue({title : '',note : ''});
    }

    const showTitleText = () => {
        setExpand(true);
    }

    const hideTitleText = () => {
        setExpand(false);
    }
    
    return(
        <>
           <div className="main_note" onDoubleClick={hideTitleText}>
             <form>
             {expand ? 
                <input type='text' name='title' placeholder="Title" value={titleOrNoteValue.title} onChange={inputEvent}/>      
             : null}
             <br/>
              <textarea rows='' name='note' column='' value={titleOrNoteValue.note}  onChange={inputEvent} placeholder="Write a note..."  onClick={showTitleText} ></textarea>
             </form>   
             {expand ? <i class="fa-solid fa-circle-plus fa-beat" onClick={addTitle}></i> : null}
           </div>
        </>
    )
}

export default CreateNote;