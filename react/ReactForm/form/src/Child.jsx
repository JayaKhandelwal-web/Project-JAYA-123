//data tranfer from parent to child 
/*
import React from 'react'


const Child = (props) => {
  return (
    <div>
        <h1>{props.data}</h1>
    </div>
  )
}

export default Child


//data child from child to parent 
import React, { useState } from 'react'

function Child  (props){
    const [name,setName]=useState();
    function handlesubmit(e){
        e.preventDefault();
        props.getData(name)
    }
  return (
<div>
    <form onSubmit={handlesubmit}>
        <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value)
        }}></input> 
        <button>Submit</button>
    </form>
</div>
  )
}

export default Child*/