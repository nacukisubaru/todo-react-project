export const FETCH_TODO = "TODO/FETCH_TODO"
export const CREATE_TODO = "TODO/CREATE_TODO"
export const DELETE_TODO = "TODO/DELETE_TODO"

const initialState = {
    todos: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return { ...state, todos: state.todos.concat(action.payload)}
        case FETCH_TODO:
            return { ...state, todos: action.payload}
        case DELETE_TODO: 
            return {...state, todos: state.todos.filter(todo=> todo.id != action.todoDelete)}
		default:
			return state 
    }
};
