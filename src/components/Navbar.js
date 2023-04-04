'use client'
import { UseTasks} from "@/context/TasksContext"
import Link from "next/link"
import { useRouter } from "next/navigation"



export default function Navbar() {
   const {tasks} =UseTasks()
    const router = useRouter()
  return (
     <header className="bg-blue-900 flex justify-between p-4 text-white  ">

        <main>
            <Link href={'/'}>
            <h1 className="text-3xl font-bold">Task App</h1>
            </Link>

          <span className="font-mono text-pink-400">{tasks.length} : taks</span>

        </main>

          

        <div>
            <button className="bg-green-400 font-bold rounded-sm p-2" onClick={()=>router.push('/new')}>add task</button>
        </div>
     </header>
  )
}
