'use client'
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation"
import { UseTasks } from "@/context/TasksContext"


export default function TaskForm({params}) {

  const [task,setTask] = useState({
    title :'',
    description :''
  })
  const {createTask,tasks,updateTask} = UseTasks()
  const router = useRouter()
  

  const handleSubmit =(e)=>{
    e.preventDefault()

    if(params.id){
      updateTask(params.id,task)
    }else{

      createTask(task.title, task.description)
    }
    router.push('/')
   
  }
 
  const handleChange =(e)=>{
   setTask( {...task ,[e.target.name] : e.target.value} )

   
  }
 useEffect(() => {
    if(params.id){
      const taskFound = tasks.find(task=> task.id === params.id)
    
      if(taskFound)
      setTask({title :taskFound.title, description: taskFound.description})
    }
  
  
  }, [])
  

  return (
   <form onSubmit={handleSubmit}>
    <input name='title' onChange={handleChange} value={task.title} placeholder={'escribe tu tare'}/>
    <textarea name='description' onChange={handleChange} value={task.description}  placeholder={'ESCRIBE LA DESCRITION'}/>
    <button>Save</button>
   </form>
  )
}
