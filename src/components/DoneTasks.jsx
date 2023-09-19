


import { useEffect } from "react"
import menu from  '../assets/menu.svg';
import Task from "./task";

 const DoneTasks =({tasks, dispatch})=>{
  useEffect(() =>{
  }, [tasks])

  return (  tasks.map((task) => {
      if (task.taskState === 'done') {
        return(
          <Task key={task.id} id={task.id} tDisc={task.tDisc} dueDate={task.dueDate} btnModal={task.btnModal} taskState={task.taskState} tasks={tasks} menu={menu} dispatch={dispatch} />
        )
      }
     })
  )
  }
  
export default DoneTasks