import { getData, postData, toggleCompleted, deleteData } from '../../api';

const initState=[];

export function todoReducer(state=initState, action) {
    switch(action.type) {
        case("getTodos"):
            return [...action.payload]
        case("addTodo"):
            return [action.payload, ...state]
        case("deleteTodo"):
            return state.filter(todo => todo.id !== action.payload);
        case("toggleIsCompleted"):
            return state.map((todo) => {
                if(todo.id === action.payload)
                    return {...todo, completed: !todo.completed};
                else
                    return todo
            })
        default:
            return state;
    }
}

export function getTodos() {
    return async function getTodosThunk(dispatch, getState) {
        const data = await getData()
        //console.log(data);
        dispatch({type: "getTodos", payload: data})
    }
}

export function addTodo(todo) {
    return async function addTodoThunk(dispatch, getState) {
        const data = await postData(todo);
        dispatch({type: "addTodo", payload: data})
    }
}

export function deleteTodo(id) {
    return async function deleteTodoThunk(dispatch, getState) {
        const data = await deleteData(id);
        dispatch({type: "deleteTodo", payload: id});
    }
}

// export function toggleIsCompleted(id) {
//     console.log()
//     return {type: "toggleIsCompleted", payload: id};
// }

export function toggleIsCompleted(id) {
    return async function toggleIsCompletedThunk(dispatch, getState) {
        const todoToToggle = getState().todos.filter(todo => todo.id === id)[0];
        const data = await toggleCompleted(id, {...todoToToggle, completed: !todoToToggle.completed})
        dispatch({type: "toggleIsCompleted", payload: id})
    }
}