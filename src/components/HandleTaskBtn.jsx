import { useContext, useReducer, useRef } from "react";
import  TasksContext  from "../App.jsx";
import reducer from "./reducer.jsx";
import { DefaultState } from "../App.jsx";

 const HandleTaskBtn = (e) => {
    // const {DefaultState} = useContext(TasksContext)
    const refBtnDisp = useRef(null)
    console.log(e.target.id);
    const [state, dispatch] = useReducer(reducer, DefaultState);
    // console.log(e.target.key);
    console.log(e.target.classList[0]);
    console.log(state.tasks);
    let nTasks
    let nTask
    switch (e.target.classList[0]) {
      case 'td-del':
        nTasks = state.tasks.filter((s) => {
          if (s.id !== e.target.id) {
            return s
          }
        })
        dispatch({type: "DELETE_TASK", payload : nTasks})
        console.log(state.tasks);
        console.log(nTasks);
        break;
      case 'td-done':
        nTasks = state.tasks.filter((s) => {
          if (s.id === e.target.id) {
            s.taskState = 'done' 
          }
          return s
        })
          console.log(nTasks);
          console.log(nTasks);
          dispatch({type: 'SWITCH_TASKSTATE', payload: nTasks})
          break
        case 'd-to-do':
          nTask = state.tasks.filter((s) => {
            if (s.id === e.target.id ) {
              s.taskState = 'to-do' 
              return s
            }})
            nTasks = state.tasks.filter((s) => {
              if (s.id !== e.target.id) {
                return s
              }
            })
            console.log(nTask);
            console.log(nTasks);
            nTasks = [...nTask, ...nTasks]
            dispatch({type: 'SWITCH_TASKSTATE', payload: nTasks})
          break;
        case 'btn-ctrl' :
          console.log(refBtnDisp.current.target)
          console.log(refBtnDisp.current); 
          refBtnDisp.current.style.display = 'none'
          break;
      default:
        break;
    }
}



export default HandleTaskBtn