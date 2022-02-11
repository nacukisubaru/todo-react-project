export const FETCH_TODO = "TODO/FETCH_TODO"
export const CREATE_TODO = "TODO/CREATE_TODO"
export const DELETE_TODO = "TODO/DELETE_TODO"
export const SET_TODO_ID = "TODO/SET_TODO_ID"

const initialState = {
    todos: [],
    todoId: ''
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return { ...state, todos: state.todos.concat(action.payload)}
        case FETCH_TODO:
            return { ...state, todos: action.payload}
        case DELETE_TODO: 
            return {...state, todos: state.todos.filter(todo=> todo.id != action.todoDelete)}
        case SET_TODO_ID:
            return {...state, todoId: action.payload}
		default:
			return state 
    }
};
