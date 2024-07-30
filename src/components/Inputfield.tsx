import React from 'react'
import "./styles.css"

interface props{
    todo:string,
    settodo:React.Dispatch<React.SetStateAction<string>>
    handleadd:(e:React.FormEvent)=>void;//returning void as of now
}


const Inputfield:React.FC<props>= ({todo,settodo,handleadd}) => {
    
  return (
    <div>
      <form  className="input" onSubmit={handleadd}>
        <input type="text" 
        placeholder='Enter Task' 
        className="input__box" 
        value={todo} 
        onChange={(e)=>settodo(e.target.value)}/>
        <button className="input_submit">Add Task</button>
      </form>
    </div>
  )
}

export default Inputfield;
