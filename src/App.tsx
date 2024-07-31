import React,{useState} from 'react';
import Inputfield from './components/Inputfield';
import './App.css';
import {Todo} from "./model"
import SingleTodo from './components/SingleTodo';

const App:React.FC=()=>{

  const [todo,settodo]=useState<string>("");
  const [todos,settodos]=useState<Todo[]>([])
  const handleadd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      settodos([...todos,{id:Date.now(),todo,isDone:false}])
      settodo("");
    }
  }
  return (
    <>
    <div className="app">
      <span className='heading'>TASKIFY</span>
      <Inputfield todo={todo} settodo={settodo} handleadd={handleadd}/>
      {
        todos.map((item,index)=>(
          <SingleTodo item={item} todos={todos} settodos={settodos}/>
        ))
      }
    </div>
    </>
  );
}

export default App;
