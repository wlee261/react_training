import '../styles/Todo.css';
import React from 'react';
import { toggleIsCompleted, deleteTodo } from '../store/slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';


const Todo = ({ todoText, isCompleted, id }) => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const handleCheckBox = () => {
        //console.log(id);
        dispatch(toggleIsCompleted(id));
    }

    const handleDeleteButton = () => {
        dispatch(deleteTodo(id));
    }

    return(
        <div className={theme === "light" ? "todo--item-light" : "todo--item-dark"}>
            {isCompleted ? <strike><h5 className="todo--item-children todo--item-text">{todoText}</h5></strike> : <h5 className="todo--item-children todo--item-text">{todoText}</h5>}
            <input className="todo--item-children todo--item-checkbox" type="checkbox" value={isCompleted} onChange={handleCheckBox} checked={isCompleted}/>
            <button className="todo--item-children todo--item-deletebtn" onClick={handleDeleteButton}>Delete</button>
        </div>
    )
}

export default Todo;