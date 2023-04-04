'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { UseTasks } from "@/context/TasksContext"
import { useForm } from "react-hook-form"
import  toast  from "react-hot-toast"


export default function TaskForm({params}) {


  const {createTask,tasks,updateTask} = UseTasks()
  const router = useRouter()

  const {register,handleSubmit,formState:{errors},setValue} = useForm()

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

    <div className="flex h-full  justify-center items-center">

   <form onSubmit={onSubmit} className='flex flex-col p-10 bg-gray-700'>
      <h2 className="text-3xl font-bold">New Task</h2>
    <input className="py-3 px-4 mb-2 block focus:outline-none w-full bg-yellow-400" placeholder={'write task'} {...register('title',{required:true})} />
    {errors.title && <span className="block text-red-400">field required</span>}
   
    <textarea  className="py-3 px-4 mb-2 block focus:outline-none w-full bg-yellow-400" placeholder={'write description'} {...register('description',{required:true})}/>
    {errors.description && <span className="block text-red-400">field required</span>}
    <button className="bg-green-500 hover:bg-green-400 rounded-sm -30 py-2 px-2" >Save</button>
   </form>
    </div>
  )
}
