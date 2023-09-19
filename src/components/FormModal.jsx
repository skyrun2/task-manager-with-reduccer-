import { useEffect, useState } from "react";




const FormModal = ({isFormModalOpen, dispatch}  ) => {
  const [tDisc, setTDisc] = useState('')
  const [dueDate, setTDueDate] = useState('')

  const dataFormat = (str) => {
    const dateTime = new Date(str).toLocaleDateString() +  '  ' + str.slice(-5)
    return dateTime
  }


 const HandleSubmit = (e) => {
   e.preventDefault();
   
  if(tDisc.length >= 3  &&  dueDate.length >= 3){
    let newTask;
    newTask = {id:new Date().getTime().toString(),tDisc,'dueDate': dataFormat(dueDate), 'taskState': 'to-do', 'btnModal': false}
    dispatch({type: 'ADD_TASK', payload: newTask})
  }
}


  useEffect(() =>{
    console.log(isFormModalOpen);
  }, [isFormModalOpen])


  const handleForm = (e) => {
      if (e.target.id === 'form-handler'){
        dispatch ({type: 'CLOSE_FORM_MODAL'})
      }
  }

  const Form = () => {
    
    return (
      <div 
    className='absolute z-10 w-full h-screen  text-red-50 grid place-items-center grid-cols-1 bg-[#00000099]'
    id='form-handler'
    onClick={ handleForm }
    >
    <form 
    className='ntf h-1/3 w-2/5 z-20 px-2 py-4 bg-white flex flex-col gap-4  rounded-md text-left' 
    action=""
      >
        <div
        className='flex flex-col gap-4'
        >
          <h2
          className='text-neutral-950 text-lg font-bold' 
          >Add task</h2>

          <label htmlFor="tittle">
            <p
            className='text-neutral-950 text-sm font-medium'
            >tittle</p>
            <input
            className='w-full px-3 py-2 placeholder:text-neutral-950 text-neutral-950 border border-black border-solid rounded-md'
            type="text"
            id='tittle'
            autoFocus
            value={tDisc}
            placeholder='fill in your task'
            onChange={ (e) => {
              setTDisc(e.target.value)
            }}
            />
          </label>
            <label htmlFor="date">
              <p
              className='text-neutral-950 text-sm font-medium'
              >set a completion date</p>
              <input
              className='w-full text-neutral-950  border border-black border-solid rounded-md'
              type="datetime-local"
              placeholder="Schedule when you'll be done"
              id="date"
              value={dueDate}
              onChange={(e) =>{
                setTDueDate(e.target.value)
              }}
              />
            </label>
        </div>
        <button
        id="submit"
        className={tDisc.length >= 3  &&  dueDate.length >= 3 ? 'enabled:w-20 bg-sky-500 rounded-lg' : 'disabled:w-20 bg-sky-500 rounded-lg opacity-75 cursor-not-allowed'}
        onClick={(e) => HandleSubmit(e)}
        >submits</button>
      </form>
    </div>
    )
  } 

    return(
      <Form></Form>
    )
}

export default  FormModal