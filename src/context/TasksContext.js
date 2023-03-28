"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext,b } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const UseTasks = () => {
  const context = useContext(TaskContext);

  if (!context) throw Error("useTasks must used within a provider");

  return context;
};

export const TaskProvider = ({ children }) => {
 

  const [tasks,setTasks] = useLocalStorage('task',[])

  const deleteTask =(id,e)=>{
   
    setTasks([...tasks.filter(task=> task.id !== id)])
  }

  const updateTask = (id,newData) =>{
       setTasks([
        ...tasks.map(task=> task.id === id? {...task,...newData}:task)
       ])
  }

  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        title,
        description,
        id: uuid(),
      },
    ]);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask ,deleteTask,updateTask}}>
      {children}
    </TaskContext.Provider>
  );
};
