'use client'
import TaskCard from "@/components/TaskCard"
import { UseTasks } from "@/context/TasksContext"

export default function HomePage() {

  const {tasks}= UseTasks()
  console.log(tasks)
  return (
    <>
    <h1>Home Page</h1>

    {tasks.map(task =>(
      <TaskCard key={task.id} task={task}/>
    ))}
    </>
  )
}
