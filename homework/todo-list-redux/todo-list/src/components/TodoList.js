import React from 'react';
import Todo from './Todo';

import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector( state => state.todos)

    return(
        <div>
            <h1>Todo List</h1>
            {todos.map((todo) => {
                return <Todo todoText={todo.todoText} isChecked={todo.checked} id={todo.id} />
            })}
        </div>
    )
}

export default TodoList;