import React from 'react';
import { useSelector } from "react-redux";
import Todo from '../Todo/Todo';
import './TodoList.css';

export default function TodoList() {
  const todos = useSelector(state => state.todo);
  console.log('Current todos in store: ', todos);
  return (
    <div className="todo-list">
      {
        todos.map(todo => {
          return <Todo key={todo.id} content={todo.content} id={todo.id}/>
        })
      }
    </div>
  )
}
