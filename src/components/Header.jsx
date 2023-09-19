import {  useEffect } from "react"


const Header = ({isFormModalOpen, dispatch}) => {
    useEffect(() =>{
      }, [isFormModalOpen])
    return (
        <header className='flex justify-between py-6 px-10'>
          <h2 className='  font-bold text-2xl text-slate-950 '> Your Task Manager </h2>
          <button 
          className='w-20 bg-sky-500 rounded-lg'
        //   onClick={ dispatch({type: 'OPEN_FORM_MODAL'})}
          onClick={ () => { dispatch({type: 'OPEN_FORM_MODAL'}) } } 
        >
            <p
            className='text-xs font-bold text-rose-50'
            >Add task</p>
          </button>
        </header>
    )
}

export default Header