import { combineReducers } from "redux";
import { todoReducer } from "./slices/todoSlice";
import { themeReducer } from "./slices/themeSlice";

const rootReducer = combineReducers({
    todo: todoReducer,
    theme: themeReducer,
})

export default rootReducer;