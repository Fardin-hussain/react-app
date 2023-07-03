import React, { useState } from "react";

const Accordian = ({question,answer,id}) => {
    const [show, setShow] = useState(false);
     return(
        <>  
            <div className="main-heading">
                <p onClick={() => setShow(!show)}> {show ?  '➖' : '➕'}</p>
                <h5>{question}</h5>
            </div>
            {show && <p>{answer}</p>}
        </>
     )  
}

export {Accordian};