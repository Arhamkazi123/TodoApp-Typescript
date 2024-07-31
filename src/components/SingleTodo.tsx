import React, { useState, useEffect, useRef } from 'react';
import { Todo } from "../model";
import { MdEdit, MdDelete, MdFileDownloadDone } from "react-icons/md";

interface Props {
  item: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ item, todos, settodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  const handleEdit = (id: number) => {
    settodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form
      className='todos__single'
      onSubmit={(e) => {
        e.preventDefault();
        if (edit) {
          handleEdit(item.id);
        }
      }}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : item.isDone ? (
        <s className="todos__single--text">{item.todo}</s>
      ) : (
        <span className="todos__single--text">{item.todo}</span>
      )}
      <div>
        {edit ? (
          <>
            <button type="submit" className="icon"><MdFileDownloadDone /></button>
            <button type="button" onClick={() => setEdit(false)} className="icon"><MdDelete /></button>
          </>
        ) : (
          <>
            <span className="icon" onClick={() => setEdit(true)}><MdEdit /></span>
            <span className="icon" onClick={() => handleDelete(item.id)}><MdDelete /></span>
            <span className="icon" onClick={() => handleDone(item.id)}><MdFileDownloadDone /></span>
          </>
        )}
      </div>
    </form>
  );
};

export default SingleTodo;
