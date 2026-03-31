import React, { useEffect, useState } from 'react'


import axios from 'axios'
const Axios = () => {
   
    const[userData,setdata] = useState([]);
    useEffect(()=>{
   
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res);
            setdata(res.data)
           
            
        })
    },[])
  return (
    <div>Axios
        {userData.map((data)=>{
            return(
                <div> {data.name}</div>
            )
        })}
    </div>
  )
}

export default Axios