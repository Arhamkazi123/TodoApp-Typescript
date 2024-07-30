import React,{useState} from 'react';
import Inputfield from './components/Inputfield';
import './App.css';
import {Todo} from "./model"

const App:React.FC=()=>{

  const [todo,settodo]=useState<string>("");
  const [todos,settodos]=useState<Todo[]>([])
  const handleadd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      settodos([...todos,{id:Date.now(),todo,isDone:false}])
    }
  }
  console.log(todos);

  return (
    <>
    <div className="app">
      <span className='heading'>TASKIFY</span>
      <Inputfield todo={todo} settodo={settodo} handleadd={handleadd}/>
    </div>
    </>
  );
}

export default App;
