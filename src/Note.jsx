import React from "react";

const Note = (props) => {
    return(
        <>
            <div className="note">
                <h5>{props.title}</h5>
                <br/>
                <p>{props.content}</p>
                <i class="fa-regular fa-trash-can" onClick={ () => {props.onSelect(props.id)}}></i>
            </div> 
        </>
    )
}
export default Note;