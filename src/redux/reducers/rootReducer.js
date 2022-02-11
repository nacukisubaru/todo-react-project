import {combineReducers} from "redux";
import { dbReducer } from "./dbReducer";
import { todoReducer } from "./todoReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
    managerDB: dbReducer,
    todolist: todoReducer,
    app: appReducer
})