import TodoTasks from "./TodoTassks";
import DoneTasks from "./DoneTasks";
import { useEffect,useState } from "react";

const Main = ({ tasks, dispatch}) => {
    const [winWIdth,setWinWidth] = useState(window.innerWidth)

    if(winWIdth>780) console.log(winWIdth);
    return (
        <main 
        className='grid lg:grid-cols-2  py-16 grid-cols-1 '
        >
          <div
           className='to-do relative w-full px-16 flex flex-col gap-6 align-middle justify-center lg:justify-start'  
           
           >
            <p
            className='w-11/12 bg-blue-700 py-2 px-8 rounded-2xl flex gap-16 text-xl text font-medium text-rose-50  '
            >to do   </p>
            <ul
            className='flex flex-col gap-6  w-11/12 lg:w-full py-4 '
            >
              <TodoTasks tasks={tasks} dispatch={dispatch} />
            </ul>
          </div>
          <div className='to-do relative w-full px-16 flex flex-col gap-6 align-middle justify-center lg:justify-start' 
          >
          <p 
          className='w-11/12 bg-green-700 py-2 px-8 rounded-2xl flex gap-16 text-xl text font-medium text-rose-50'
          >done   </p>
          <ul  className='flex flex-col gap-6  w-11/12 lg:w-full py-4 '>
              <DoneTasks tasks={tasks} dispatch={dispatch} ></DoneTasks>
            </ul>
          </div>
        </main>
    )
}

export default Main