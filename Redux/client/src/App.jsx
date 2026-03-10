import { useSelector,useDispatch } from 'react-redux'
import {changeColor} from './colorSlice'
import { useState } from 'react';


const App = () => {
const clr=useSelector(state=>state.mycolor.color);
const dispatch =useDispatch();
const [txtclr,setTxtclr]= useState('');
  return (
    
    <>
    <h1>welcome</h1>
    Enter color : <input type='text' value={txtclr} onChange={(e)=>{setTxtclr(e.target.value)}}/>
    <button onClick={()=>{dispatch(changeColor({bgcolor:txtclr}))}}>change color </button>
    <div style={{width:"200px",height:"350px",backgroundColor:clr}}></div>
    
    </>
  )
}

export default App
