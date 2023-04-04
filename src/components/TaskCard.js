'use client'
import { useRouter } from "next/navigation"
import { UseTasks } from "@/context/TasksContext"
import { toast } from "react-hot-toast"

export default function TaskCard({task}) {

  const router = useRouter()
  const {deleteTask} = UseTasks()

  return (
    <div onClick={()=>{router.push(`/edit/${task.id}`)}} className='cursor-pointer bg-yellow-600 hover:bg-yellow-500 border-pink-500 rounded-md m-3 p-4 border-double border-8 shadow-sm  '>
      <div className="">

        <h3 className="text-xl font-serif m">{task.title}</h3>
        <p className="text">{task.description}</p>
        <button 
        className="bg-red-500 rounded-sm p-2 m-2 font-bold text-xs hover:bg-red-400"
        onClick={ (e)=>{         
          e.stopPropagation()
          const confirm = window.confirm('are you sure?')
          if(confirm) {
            deleteTask(task.id)
            toast.success('DELETE')} ;        
          }} 
          >
            Delete
            </button>
            </div>
            <span className="text-gray-600 text-xs p-2 ">{task.id}</span>
    </div>
  )
}
