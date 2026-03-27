import React from 'react'
import  './Form.css'

const Form = () => {
  return (
   <>  <h1>Registration</h1>
   <div className='container'>
  
    <form id='form'>
        <input type="text" id='fname' placeholder='Enter Name'/> <br />
 <input type="text"  id='lname' placeholder='Enter Name'/>  <br />
  <input type="text"  id='email' placeholder='Enter Name'/> <br />
    </form>
   </div>
   
   </>
  )
}

export default Form