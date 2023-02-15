const initState=[];

export function todoReducer(state=initState, action) {
    switch(action.type) {
        case("addTodo"):
            return [action.payload, ...state]
        case("deleteTodo"):
            return state.filter(todo => todo.id !== action.payload);
        case("toggleIsChecked"):
            return state.map((todo) => {
                if(todo.id === action.payload)
                    return {...todo, checked: !todo.checked};
                else
                    return todo
            })
        default:
            return state;
    }
}

export function addTodo(todo) {
    return {type: "addTodo", payload: todo};
}

export function deleteTodo(id) {
    return {type: "deleteTodo", payload: id};
}

export function toggleIsChecked(id) {
    return {type: "toggleIsChecked", payload: id};
}