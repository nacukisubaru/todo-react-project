import { FETCH_TODO } from "../reducers/todoReducer"
import TodoDataService from "../../services/todoService";

export function fetchTodo(db) {
    return async dispatch => {
        const todo = new TodoDataService(db, 'HCJYVliT3jyQpHJGr3Km')
        const result = await todo.getList()
        dispatch({type: FETCH_TODO, payload: result})
        return
    }

}