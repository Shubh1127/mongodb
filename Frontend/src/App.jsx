import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'
const App=()=>{ 
  let [message,setMessage]=useState('');
  let [data,setData]=useState(null)
  useEffect(()=>{ 
    const sendData=async ()=>{
      try{
        const res=axios.post('localhost:3000/creates',data)
        setMessage(res.data);
      }catch(e){
        console.log("con not connect to the the server")
      }
    }
    sendData();
  },[data])
  function onSubmit(e){
    e.preventDefault();

  }
  return(
    <>
          <p>{message}</p>
      <form className='flex flex-col  w-64 p-3 border rounded' >
          <label htmlFor='Name'/>
          <input className='rounded bg-white text-black p-2 m-2' placeholder='Enter your Name' type='text'/>
          <label htmlFor='Age'/>
          <input className='rounded bg-white text-black p-2 m-2' placeholder='Enter your Age' type='number'/>
          <label htmlFor='year'/>
          <input className='rounded bg-white text-black p-2 m-2' placeholder='Enter your College year' type='number'/>
          <button className='bg-blue-500 w-1/2 mx-auto h-[4.5vh]' onSubmit={onSubmit}>Submit</button>
      </form>
    </>
  )
}
export default App;