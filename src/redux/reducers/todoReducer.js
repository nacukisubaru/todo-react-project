export const FETCH_TODO = "TODO/FETCH_TODO"
export const CREATE_TODO = "TODO/CREATE_TODO"
export const DELETE_TODO = "TODO/DELETE_TODO"
export const SET_TODO = "TODO/SET_TODO"
export const UPDATE_TODO = "TODO/UPDATE_TODO"

const initialState = {
    todos: [],
    todo: {}
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return { ...state, todos: state.todos.concat(action.payload)}
        case FETCH_TODO:
            return { ...state, todos: action.payload}
        case DELETE_TODO: 
            return {...state, todos: state.todos.filter(todo=> todo.id !== action.todoDelete)}
        case SET_TODO:
            return {...state, todo: action.payload}
        case UPDATE_TODO:
            return {...state, todos: action.payload}
		default:
			return state 
    }
};
