import React from 'react'
import { useSelector } from 'react-redux';
import './TodoHeader.css';

export default function TodoHeader() {
  const theme = useSelector(state => state.theme);
  return (
    <div className={`todo-header ${theme}`}>
      <h1 className="header-text">Todo List</h1>
    </div>
  )
}
