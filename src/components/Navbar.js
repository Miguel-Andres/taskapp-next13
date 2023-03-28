'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"



export default function Navbar() {

    const router = useRouter()
  return (
     <header>

            <Link href={'/'}>
            <h2>Task App</h2>
            </Link>

        <div>
            <button onClick={()=>router.push('/new')}>add task</button>
        </div>
     </header>
  )
}
