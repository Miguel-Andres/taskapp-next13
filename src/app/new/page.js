'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { UseTasks } from "@/context/TasksContext"
import { useForm } from "react-hook-form"
import  toast  from "react-hot-toast"


export default function TaskForm({params}) {


  const {createTask,tasks,updateTask} = UseTasks()
  const router = useRouter()

  const {register,handleSubmit,formState:errors,setValue} = useForm()

  const onSubmit = handleSubmit( (data) =>{
    if(params.id){
      updateTask(params.id,data)
      toast.success('actualizado')
    }else{
    
      createTask(data.title, data.description)
      toast.success('creado')
    }
    router.push('/')   
   
  })
 

 useEffect(() => {
    if(params.id){
      const taskFound = tasks.find(task=> task.id === params.id)
    
      if(taskFound)
    setValue('title',taskFound.title)
    setValue('description',taskFound.description)
    }
  
  
  }, [])
  

  return (
   <form onSubmit={onSubmit}>
    <input placeholder={'escribe tu tare'} {...register('title',{required:true})}/>
    {errors.title && (<span>field required</span>)}
    <textarea placeholder={'ESCRIBE LA DESCRITION'} {...register('description',{required:true})}/>
    <button>Save</button>
   </form>
  )
}
