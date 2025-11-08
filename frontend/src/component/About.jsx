import axios from 'axios';
import React , {useState} from 'react';


const About = () => {
  let name = e.target.name;
  let value = e.target.value;
  setInput(values=>({...values,[name]:value}))
  }
   

 const  handleSubmit=async()=>{
  let api=("http://localhost:9999/students/save");
  let response=await axios.post(api ,input);
  console.log(response);
 }
  return (
 
    <>
    <h1>About</h1>

    Enter name : <input type="text" name="stuno" onChange={handleInput} />
    Enter name : <input type="text" name="name" onChange={handleInput} />
    Enter name : <input type="text" name="designation" onChange={handleInput} />
    Enter name : <input type="text" name="salary" onChange={handleInput} />
  <button onClick={handleSubmit}>Save</button>
    </>
  )


export default About