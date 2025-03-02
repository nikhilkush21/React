import React, { useState } from 'react'


const FilterItem = () => {
    const[items]= useState(["Apple","Banana","Grapes","Mango","Cherry"])
    const[filter,setFilter]= useState("");
    const FilterItem=items.filter(item=> item.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div className="container">
        <h1>Item List</h1>
        <input type="text" 
        placeholder='Search Item'
        value={filter}
        onChange={(e)=> setFilter(e.target.value)}
        />
        <ul>
            {FilterItem.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default FilterItem
