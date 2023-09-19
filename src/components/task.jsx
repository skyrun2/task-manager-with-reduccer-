import { useEffect } from "react";

const Task = ({id, tDisc, dueDate, btnModal,taskState, tasks, menu, dispatch, }) =>{

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
    dispatch({ type: 'SWITCH_BTN_STATE', payload: newTasks})
  }

  const switchTaskState = (taskId) => {
    let newTasks = tasks.map(task => {
      if (task.id === taskId){
        if (task.taskState === 'done') {
          task.taskState = 'to-do'
          task.btnModal = false
        }
        else {
          task.taskState  = 'done'
          task.btnModal = false
        }
      }
      return task
    })
     dispatch({type: 'SWITCH_TASKSTATE', payload: newTasks})
  }

  const deleteTask = (taskId) => {
    let newTasks = tasks.filter(t =>{
      if( t.id !== taskId) return t
    })

    dispatch({type: 'DELETE_TASK', payload: newTasks})
  }
    useEffect(()=>{
    },[btnModal, tasks])

    return(
        <li 
          id='to-do' 
          key={id}
          className=' relative w-full h-24 px-4 flex flex-col gap-4 bg-[#0000FF15] rounded-md'

          >
           <button
            className=' absolute h-12 w-10 grid grid-cols-1 left-3/4 top-1 -translate-x-1/2 '
            ><img 
              id=''
              className=' btn-ctrl  w-full'
              src={menu} alt=""
              onClick={() =>{switchmode(id)}}
               />
              </button> 
            { btnModal ? <div
            className='absolute px-2 w-1/2 md:w-1/3 grid grid-cols-1 left-3/4 top-3/4 -translate-x-1/2  -translate-y-1/2 bg-white  border-solid border border-black rounded-md font-medium text-xs'
            >                       
              <button
              className= 'td-done'
               id= {id}
               onClick={()=>{switchTaskState(id)}}
                >{taskState === 'to-do'?'Mark as done' : 'mark as to do'}</button><hr />
              <button
               className='td-del'
                id={id}
                onClick={()=> {deleteTask(id)}}
               >Delete task</button>
            </div> : null }
            <p>{tDisc}</p>
            <p> due in {dueDate} </p>
          </li>
    )
}


export default Task