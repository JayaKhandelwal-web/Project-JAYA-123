
import {useSelector,useDispatch} from 'react-redux';
import {changeColor} from '../colorSlice';

const Home = () => {
    const cnt= useSelector(state=>state.counter.count);
        const dispatch = useDispatch();
    
    return (
   <>
    <h1>welcome</h1>
    <button onClick={()=>{dispatch(increment())}}>increment</button>
    <h1>{cnt}</h1>
    <button onClick={()=>{dispatch(decrement())}}>decrement</button>
    
    
    </>
  )
}

export default Home;