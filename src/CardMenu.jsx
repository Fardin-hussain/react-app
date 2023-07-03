import React from 'react'

const CardMenu = ({items}) => { 
  return (
    <div className='container my-5'>
                <div className='row'>
                    { items.map((elem) => { // u can pass like that props.items
                        return (
                        <div className='col-md-4' >
                            <div className='row m-1 my-5 item1'>
                                <div className='col-12 col-md-4 col-lg-4 col-xl-4 mydiv'>
                                    <img src={elem.imgsrc} />
                                </div> 
                                <div className='col-12 col-md-8 col-lg-8 col-xl-8'>
                                    <h3>{elem.name}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                    <div className='d-flex justify-content-between'>
                                    <h4>Price :{elem.Price}</h4>
                                    <a href='#'>
                                        <button className='btn btn-primary btnclass'>Order Now</button>
                                    </a>
                                </div>
                                <p>Price may very on selected way</p>
                            </div>   
                        </div>
                    </div>
                    )})}  
                </div>
            </div>
  )
}

export default CardMenu
