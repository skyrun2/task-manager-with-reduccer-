import { useEffect } from "react"
import menu from  '../assets/menu.svg';
import Task from "./task";


 const TodoTasks =({tasks, dispatch})=>{

  const switchmode = (taskId) => {
    let newTasks = tasks.map(task => {
      if (task.id === taskId) {
        if (task.btnModal) {
          task.btnModal = false
        }  
        else{
          task.btnModal = true
        }
      }
      return task  
    })
    console.log(newTasks);
    dispatch({ type: 'SWITCH_BTN_STATE', payload: newTasks})
  }

  useEffect(() =>{
  }, [tasks])

  return (  tasks.map((task) => {
      if (task.taskState === 'to-do') {
        return(
          <Task key={task.id} id={task.id} tDisc={task.tDisc} dueDate={task.dueDate} btnModal={task.btnModal} taskState={task.taskState} tasks={tasks} menu={menu} dispatch={dispatch} />
        )
      }
     })
  )
}
  
export default TodoTasks