import React from "react";

const displayMatchinng = (props) => {
    if(props.valuex === props.valuey && props.valuey === props.valuez) {
        return(
            <>
               <div>
                    <h1>
                        {props.valuex} {props.valuey} {props.valuez}
                    </h1>
                    <h1>This is matching</h1>
               </div> 
            </>
        )
    }
}

export default displayMatchinng;