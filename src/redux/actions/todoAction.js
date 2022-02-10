import { FETCH_TODO, CREATE_TODO } from "../reducers/todoReducer"
import TodoDataService from "../../services/todoService";

export function createTodo(todo) {
    return {type: CREATE_TODO, payload: todo}
}

export function fetchTodo(db) {
    return async dispatch => {
        const todo = new TodoDataService(db)
        const result = await todo.getList()
        dispatch({type: FETCH_TODO, payload: result})
        return
    }
}