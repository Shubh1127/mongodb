import { useState } from 'react';
import './App.css'
const App=()=>{
  const hello=(e)=>{
    let num=count;
    num++;
    setCount(num);
  }
  const [count,setCount]=useState(0);
  return(
    <div>
      <div>
      Hello {count}
      </div>
      <button className='border rounded-md cursor-pointer  p-2' onClick={hello}> Click me</button>
    </div>
  )
}
export default App;