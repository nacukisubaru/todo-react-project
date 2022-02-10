import {combineReducers} from "redux";
import { dbReducer } from "./dbReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    managerDB: dbReducer,
    todolist: todoReducer
})