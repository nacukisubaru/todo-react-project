import { FETCH_TODO, CREATE_TODO, DELETE_TODO, SET_TODO, UPDATE_TODO } from "../reducers/todoReducer"
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

export function setTodo(db, todoId) {
    return async dispatch => {
        const todoService = new TodoDataService(db, todoId)
        const docSnap = await todoService.getTodo()
        if(docSnap.exists()) {
            const data = docSnap.data();
            dispatch({type: SET_TODO, payload: {...data, id:todoId}})
        }
    }
}

export function updateTodo(todo) {
    return {type: UPDATE_TODO, payload: todo}
}