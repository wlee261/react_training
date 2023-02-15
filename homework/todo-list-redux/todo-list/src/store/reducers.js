import { combineReducers } from 'redux';
import { themeReducer } from './slices/themeSlice';
import { todoReducer } from './slices/todoSlice';

const rootReducer = combineReducers({
    theme: themeReducer,
    todos: todoReducer,
})

export default rootReducer;