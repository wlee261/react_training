import React from 'react';
import './App.css'
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import { useSelector } from 'react-redux';

export default function App() {
  const theme = useSelector(state => state.theme);
  console.log('Current theme in store: ', theme);
  return (
      <div className={`app ${theme}`}>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </div>
  )
}
