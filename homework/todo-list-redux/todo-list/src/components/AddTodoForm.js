import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/slices/todoSlice';
import { v4 as uuid } from 'uuid'

const AddTodoForm = () => {
    const dispatch = useDispatch();
    //const todos = useSelector(state => state.todos);

    const [addTodoValue, setAddTodoValue] = useState("");

    const handleAddTodoClick = () => {
        if(addTodoValue === "") {
            alert("Please enter a todo before adding");
            return
        }
        dispatch(addTodo({
            todoText: addTodoValue,
            checked: false,
            id: uuid(),
        }))
        setAddTodoValue("");
        //console.log(todos)
    }

    const handleAddTodoInputChange = (e) => {
        setAddTodoValue(e.target.value);
    }

    return(
        <div>
            <input value={addTodoValue} onChange={handleAddTodoInputChange} />
            <button onClick={handleAddTodoClick}>Add</button>
        </div>
    )
}

export default AddTodoForm;