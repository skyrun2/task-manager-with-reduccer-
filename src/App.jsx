import  {  useReducer, useEffect } from 'react';
import reducer from './components/reducer.jsx';
import './index.css'
import   FormModal from './components/FormModal.jsx';
import Main from './components/body.jsx';
import Header from './components/Header.jsx';


// export const TasksContext = React.createContext();
export const DefaultState = {
  tasks: [],
  isFormModalOpen: false,
  isInfoModalOpen: false,
  infoMdalContent: 'the info modal'
}

function App() {
  const taskStore = JSON.parse(localStorage.getItem('taskStore'))
  const [state, dispatch] = useReducer(reducer, DefaultState);
  useEffect(() => {
    if (taskStore !== null) {
      dispatch({type: 'IMPORT_TASKS', payload: taskStore})
    }
  },[] )
  useEffect(() =>{

  }, [state.isFormModalOpen])
  useEffect(() => {
    
  },[state])
  return (
    <div className=" relative w-full  bg-grey-900  box-border">
      {state.isFormModalOpen ? <FormModal isFormModalOpen={state.isFormModalOpen} dispatch={dispatch} /> : null}
      {/* <FormModal></FormModal> */}
      <Header isFormModalOpen={state.isFormModalOpen} dispatch={dispatch} />
      <Main  tasks={state.tasks}  dispatch={dispatch} />

        
      </div>
  )
}

export default App

