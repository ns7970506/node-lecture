import { useState } from 'react';
import { X } from 'lucide-react';
import './App.css'

function App() {
 
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(title);
    setTitle('')
    console.log(details);
    setDetails('')
    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(copyTask);
    
    
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task]
    console.log(copyTask[idx]);
    copyTask.splice(idx,1)
    setTask(copyTask)
    
  }
 const [title, setTitle] = useState('')
 const [details, setDetails] = useState('')
 const [task, setTask] = useState([])
  return (
   <div className='h-screen lg:flex bg-black text-white p-10'>
   
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} className='flex lg:w-1/2 items-start flex-col  gap-4 p-4 '>
       <h1 className='text-3xl font-bold'>Add Notes</h1>
      
      <input 
      type="text" 
      placeholder='Enter Notes Heading' className='px-5  py-2 border-2 rounded w-full outline-none font-medium' value={title} 
      onChange={(e)=>{
       setTitle(e.target.value)
        
      }}/>
      
      <textarea type="text" className='px-5 h-20 py-2 border-2 rounded w-full outline-none font-medium'
      placeholder='Write Details' value={details} onChange={(e)=>{
        setDetails(e.target.value)
      }}
    />
    <button className='bg-white active:scale-95 text-black px-5 py-2 rounded w-full outline-none'>Add Notes</button>
   
    
    </form>
    <div className=' lg:w-1/2  p-10  lg:border-l-2'>
    <h1 className='text-3xl font-bold'>Recent Notes</h1>
    <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full'>
       {task.map(function(elem,idx){
        return <div key={idx} className='relative h-52 w-40 rounded-3xl bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3E8QEl5OYT1pwKSkCtHmL75Zc6djPbCC9J-M644NwVW4LgCzHOAD_nihZbgVSr4s7irc&usqp=CAU)]'>
          <h2 className='absolute top-5 right-5 bg-red-500 p-1 rounded-2xl'><X size={16} strokeWidth={2.75} /></h2>
          <h3 className='leading-tight text-2xl font-bold text-black py-9 px-6'>{elem.title}</h3>
          <p className='-mt-8 px-2 bottom-3 leading tight font-medium text-gray-700'>{elem.details}</p>
          <button onClick={()=>{
            deleteNote(idx)
          }} className='w-1/2 rounded-2xl bg-red-600 text-white py-1 mt-15 cursor-pointer active:scale-95 ml-9'>Delete</button>
        </div>
       
       })}
       
    </div>
     
    </div>
   </div>
  )
}

export default App
