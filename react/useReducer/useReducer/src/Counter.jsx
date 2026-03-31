import React, { useReducer } from 'react'


const initialstate=0;
const reducer=(state,action)=>{
    switch(action){
        case "Increment": 
        return state+1
        case "decrement":
            return state -1
            default :
            return state
    }

}
const Counter = () => {
   const[count,dispatch]= useReducer(reducer,initialstate)
  return (
    <div>
        <div> count = {count}</div>
    <button onClick={()=>dispatch("Increment")}>increment</button>
    <button onClick={()=>dispatch("decrement")}>decrement</button>
    </div>
  )
}

export default Counter