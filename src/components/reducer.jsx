// import { defaultState   } from "./HandleTaskBtn.jsx";
// import { useContext } from "react";

 const reducer = (state, action) => {
    let updatedTask = ''
    switch (action.type) {
      case 'OPEN_FORM_MODAL':
        return {
          ...state,
          isFormModalOpen: true,
        }
      case 'CLOSE_FORM_MODAL':
        
        return{
          ...state,
          isFormModalOpen: false,
        }
      case 'ADD_TASK' :
        updatedTask = [action.payload, ...state.tasks] 
        localStorage.setItem('taskStore', JSON.stringify(updatedTask))
        return {
          ...state,
          tasks: updatedTask
        } 
      case 'DELETE_TASK' :
      
        updatedTask = [...action.payload] 
        localStorage.setItem('taskStore', JSON.stringify(updatedTask))
        return{
          ...state,
          tasks: updatedTask
        }
        case "SWITCH_TASKSTATE":
          updatedTask = [...action.payload] 
          localStorage.setItem('taskStore', JSON.stringify(updatedTask))
          return{
            ...state,
            tasks: updatedTask
        }
        case 'SWITCH_BTN_STATE':
          updatedTask = [ ...action.payload]
          return{
            ...state,
            tasks: updatedTask
          }
          case 'IMPORT_TASKS':
            updatedTask = [...action.payload]
            return{
              ...state,
              tasks: updatedTask
            }

    
      default:
        break;
    }
  }

  export default reducer