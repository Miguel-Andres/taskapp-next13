'use client'
import TaskCard from "@/components/TaskCard"
import { UseTasks } from "@/context/TasksContext"

export default function HomePage() {

  const {tasks}= UseTasks()
  console.log(tasks)
  return (
    
    <div className="flex justify-center" >

    <div className="w-7/12">
   
    {tasks.map(task =>(
      <TaskCard key={task.id} task={task}/>
    ))}
    </div>

    </div>
  )
}
