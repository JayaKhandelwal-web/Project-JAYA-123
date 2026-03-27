






//data tranfer from parent to child 
/*
import React from 'react'
import Child from './Child'
function App  ()  {
  const data="Jaya Khandelwal";
  return (
    <>
    <Child data={data}/> 
    </>


  )
}

export default App



//data tranfert from child to parent 
import React from 'react'
import Child from './Child'
function App  ()  {
  function getData (data){
  console.log(data);

  }
  return (
    <>
    <Child getData={getData}/> 
    </>
  )
}
export default App*/


//registration form using react
import React from 'react'
import Form from './Form'

const App = () => {
  return (

    <Form/>


  )
}

export default App