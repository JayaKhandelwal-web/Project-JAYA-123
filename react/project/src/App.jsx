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



//use ref is used to manipuate ddom
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

export default App 


//to improve the propes drillign use use context api 
//create,provider,consumer

import React, { createContext } from 'react'
import ChildA from './ChildA'

// Create Context
const NameContext = createContext();
const GenderContext = createContext();

function App() {
  const name = "Jaya";
  const gender = "female";

  return (
    <NameContext.Provider value={name}>
      <GenderContext.Provider value={gender}>
        <ChildA />
      </GenderContext.Provider>
    </NameContext.Provider>
  );
}

export default App;

// Named export (IMPORTANT)
export { NameContext, GenderContext };


//usememo problem 
import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [add,setAdd]=useState(0);
  const [sub,setSub]=useState(100);
function multiply(){
  console.log("this is console")
  return add*10;
}
  return (
    <>
      <div className='App'>
        <h1>learning useMemo</h1>
        {multiply()} <br />
        <button onClick={()=>setAdd(add+1)}>Addition</button>
         <span>{add}</span>  <br />
        <button onClick={()=>setSub(sub-1)}>Substract</button>
        <span>{sub}</span>
      </div>
    </>
  )
}
export default App  


//useMemo to overcome problem unneccsary function  call , performance decrease

import React, { useMemo, useState } from 'react'
import './App.css'
const App = () => {
  const [add,setAdd]=useState(0);
  const [sub,setSub]=useState(100);

  const multiply =useMemo(function multiply(){
    console.log("*************");
    return add*10;
  },[add])
  return (
    <>
      <div className='App'>
        <h1>learning useMemo</h1>
        {multiply} <br />
        <button onClick={()=>setAdd(add+1)}>Addition</button>
         <span>{add}</span>  <br />
        <button onClick={()=>setSub(sub-1)}>Substract</button>
        <span>{sub}</span>
      </div>
    </>
  )
}
export default App  */









