import { FETCH_TODO, CREATE_TODO, DELETE_TODO, SET_TODO_ID } from "../reducers/todoReducer"
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

export function deleteTodo(todoId) {
    return {type: DELETE_TODO, todoDelete: todoId}
}

export function setTodoId(todoId) {
    return {type: SET_TODO_ID, payload: todoId}
}