// import { Button } from "@mui/material";
import React from "react";
import './index.css';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add'

const ToDoList = (props) => {
     return (
        <>
            <div className="todo_style">
                <i class="fa-regular fa-circle-xmark" onClick={ () => {
                    props.onSelect(props.id);
                }}></i>
                <li> {props.text} </li>
            </div>
            <br/>
        </>
     )
     
}

export default ToDoList