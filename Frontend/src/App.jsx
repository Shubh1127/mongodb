import {   useState } from 'react';
import axios from 'axios'
import './App.css'
const App=()=>{ 
  let [mssg,setMssg]=useState('');
  let [data,setData]=useState({
    name:"",
    age:"",
    year:"",
  })

  
  function handleChange(e){
    let {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
  } 
  async function handleSubmit(e){
    e.preventDefault()
    console.log("Form Data: ",data);
    try{
      const res=await axios.post('http://localhost:3000/create',data)
      setMssg(res.data.message);
    }catch(e){
      console.log("can not connect to the the server",e)
      setMssg("An error occurred while submitting the form.");
    }
  }
 
  return(
    <>
          <p>{mssg}</p>
      <form className='flex flex-col  w-64 p-3 border rounded' onSubmit={handleSubmit}>
          <label htmlFor='Name'/>
          <input className='rounded bg-white text-black p-2 m-2' placeholder='Enter your Name' type='text' value={data.name} name='name' onChange={handleChange} />
          <label htmlFor='Age'/>
          <input className='rounded bg-white text-black p-2 m-2' placeholder='Enter your Age' type='number' value={data.age} name='age' onChange={handleChange}/>
          <label htmlFor='year'/>
          <input className='rounded bg-white text-black p-2 m-2' placeholder='Enter your College year' type='number' value={data.year} name='year' onChange={handleChange}/>
          <button className='bg-blue-500 w-1/2 mx-auto h-[4.5vh]' type='submit' >Submit</button>
      </form>
    </>
  )
}
export default App;