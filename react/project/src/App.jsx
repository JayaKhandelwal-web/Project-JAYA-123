/*import { useState ,useEffect ,React } from 'react'; //import the hook 
const App = () => {
  const [count,setCount] =useState(0)//return 2 parmeter other is function used to update state
  const [data,setData] =useState("Ram")
  useEffect(()=>{
    console.log("helooooo")
  },[data])
  function updateCount(){
    setCount(count+1)//call th function
  }
  function updateData(){
    setData("Seeta")
  }
  return (
  
    <>
    <h1>Button clicked {count} times</h1>
    <button onClick={updateCount}>Click me</button>
    <button onClick={updateData}>Update ddata</button>
    </>
  )
}

export default App




import React, { useState } from 'react'
import { useRef } from 'react'
const App = () => {
  const refElement=useRef("");
  const [name,setName]=useState("Jaya");
  console.log(refElement)
  
   function reset(){
    setName=("")
    refElement.current.focus()

   }
   function handleInput(){
    refElement.current.style.color="blue"
    refElement.current.value="Mohit"
   }
  return (
   
    <>
    <h1>hello</h1>
    <input  ref={refElement} type="text" value={name} onChange={(e)=>{
      setName(e.target.value)
    }}></input> 
    <button onClick={reset}>Reset</button>
    <button onClick={handleInput}> Handle</button>
    </>
  )
}

export default App */


import React from 'react'
import ChildA from './ChildA'

const App = () => {
  const name="Jaya"
  return (
    
    <>
    <ChildA name={name}/> 
    
    </>
  )
}

export default App
