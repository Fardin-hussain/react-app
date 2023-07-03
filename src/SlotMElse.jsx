import React from "react";

const displayNotMaching = (props) => {
    return(
        <>
         <div>
            <h1>
                {props.valuex} {props.valuey} {props.valuez}
            </h1>
                <h1>This is not matching</h1>        
        </div>      
        </>
    )
}

export default displayNotMaching;