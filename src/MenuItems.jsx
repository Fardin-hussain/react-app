import React from 'react'

const MenuItems = ({filterItems, catItems}) => {
  return (
    <div className='container'>
            <div className='menu-tabs d-flex justify-content-around'>
                {
                    catItems.map((cateElem) => {
                        return (
                            <button className='btn btn-warning' onClick={() => {filterItems(cateElem)}}>{cateElem}</button>
                        )
                    })
                }
               {/* <button className='btn btn-warning' onClick={() => {filterItems('breakfast')}}>BreakFast</button>
                <button className='btn btn-warning' onClick={() => {filterItems('lunch')}}>Lunch</button>
                <button className='btn btn-warning' onClick={() => {filterItems('evening')}}>Evening</button>
                 <button className='btn btn-warning' onClick={() => setItems(Sdata)}>All</button> */}
            </div>
        </div>
  )
}

export default MenuItems
