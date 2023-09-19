
import { useReducer, useState} from "react"
// import  DefaultState  from "./HandleTaskBtn.jsx";
import  reducer  from "./reducer.jsx";
import  TasksContext  from "../App.jsx";
import { DefaultState } from "../App.jsx";


const dataFormat = (str) => {
    const dateTime = new Date(str).toLocaleDateString() +  '  ' + str.slice(-5)
    return dateTime
}

 const HandleSubmit = (e) => {
   e.preventDefault();
    const [tName, setTName] = useState('')
    const [tDisc, setTDisc] = useState('')
    const [dueDate, setTDueDate] = useState('')
    const [taskState, setTaskState ] = useState('')
    const [state, dispatch] = useReducer(reducer, DefaultState);
    dataFormat(dueDate)
    console.log(e.target);
    setTaskState('to-do')
    console.log(taskState);
    let newTask = {id:new Date().getTime().toString(), tName,tDisc,'dueDate': dataFormat(dueDate), }
    dispatch({type: 'ADD_TASK', payload: newTask})
    setTDisc('')
    setTDueDate('')
    setTName('')
    setTaskState('')
    // dispatch({type: 'ADD_TASK'})

    // switch (e.) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
  }

  export default HandleSubmit