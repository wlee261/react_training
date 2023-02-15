import React, {useRef, useState} from 'react'
import { removeAction, editAction } from '../../redux/slices/todoSlice';
import { useDispatch } from "react-redux";
import './Todo.css';

export default function Todo({content, id}) {
  const [editable, setEditable] = useState(false);
  const [todoContent, setTodoContent] = useState(content);
  const dispatch = useDispatch();
  // const inputRef = useRef(content);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    dispatch(editAction({
      id: id,
      content: todoContent
    }));
    setEditable(false);
  }

  const handleDelete = () => {
    dispatch(removeAction(id));
  };

  const handleOnChange = (e) => {
    setTodoContent(e.target.value);
  }

  return (
    <div className="todo">
      {
        editable ? <input className="todo-task editing"  value={todoContent} onChange={handleOnChange} /> : 
        <input className="todo-task reading" value={todoContent} readOnly />
      }
      
      <div className="todo-actions">
        {
          editable ? <button className="todo-edit" onClick={handleSave}>Save</button> : <button className="todo-edit" onClick={handleEdit}>Edit</button>
        }
        
        <button className="todo-delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}
