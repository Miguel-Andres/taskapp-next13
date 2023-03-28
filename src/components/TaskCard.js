'use client'
import { useRouter } from "next/navigation"
import { UseTasks } from "@/context/TasksContext"

export default function TaskCard({task}) {

  const router = useRouter()
  const {deleteTask} = UseTasks()

  return (
    <div onClick={()=>{router.push(`/edit/${task.id}`)}} style={{background:'gainsboro'}}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={ (e)=>{         
            e.stopPropagation()
            const confirm = window.confirm('are you sure?')
            if(confirm) deleteTask(task.id) ;        
          }} 
          >
            Delete
            </button>
    </div>
  )
}
