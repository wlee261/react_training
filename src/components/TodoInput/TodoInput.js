import React, {useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addAction } from '../../redux/slices/todoSlice';
import { light, dark } from '../../redux/slices/themeSlice';
import uuid from 'react-uuid';
import './TodoInput.css';

export default function TodoInput() {
  const inputRef = useRef('');
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const handleClick = () => {
    dispatch(addAction({
      content: inputRef.current.value,
      id: uuid()
    }))
    inputRef.current.value = '';
  }

  const handleThemeChange = () => {
    if(theme === 'light') {
      dispatch(dark());
    } else {
      dispatch(light());
    }
    
  }

  return (
    <div className="todo-input">
      <input type="text" className="input-box" ref={inputRef}/>
      <button className="input-button" onClick={handleClick}>Add Todo</button>
      <button className="input-button" onClick={handleThemeChange}>Switch Theme</button>
    </div>
  )
}
