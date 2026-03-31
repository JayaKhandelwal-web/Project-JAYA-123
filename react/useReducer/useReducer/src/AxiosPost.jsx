import axios from 'axios';
import React, { useState } from 'react'

const AxiosPost = () => {
    const data={fname : "", lname: ""};
    const[inputData ,setInputdata] =useState(data)


    
    
        const handleData = (e) => {
    setInputdata({...inputData, [e.target.name]: e.target.value});
}
    
    const handleSubmit=(e) =>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((res)=>{
            console.log(res)
        })

        }
     return (
   <>

<label>
    First name:
</label>
<input type="text" name='fname' value={inputData.fname} onChange={handleData}
 placeholder='enter first name'></input>
<label>
    Last name:
</label>
<input type="text" name='lname' value={inputData.lname} onChange={handleData}
placeholder='enter last name'></input>

<button onClick={handleSubmit}>
    submit
</button>
   </>

  )
}

export default AxiosPost