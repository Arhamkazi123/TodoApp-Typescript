import React, { useRef } from 'react'
import "./styles.css"

interface props{
    todo:string,
    settodo:React.Dispatch<React.SetStateAction<string>>
    handleadd:(e:React.FormEvent)=>void;//returning void as of now
}


const Inputfield:React.FC<props>= ({todo,settodo,handleadd}) => {

  
  const inputRef = useRef<HTMLInputElement>(null);
    
  return (
    <div>
      <form  className="input"
      
          onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission behavior
          handleadd(e);
          inputRef.current?.blur(); // Blur the input field after form submission
        }}>
        <input type="text" 
        placeholder='Enter Task' 
        className="input__box" 
        value={todo} 
        ref={inputRef}
        onChange={(e)=>settodo(e.target.value)}/>
        <button className="input_submit">Add Task</button>
      </form>
    </div>
  )
}

export default Inputfield;
