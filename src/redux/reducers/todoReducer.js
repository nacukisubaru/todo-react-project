export const FETCH_TODO = "TODO/FETCH_TODO";

const initialState = {
    todos: {},
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO:
            return { ...state, todos: action.payload}
		default:
			return state 
    }
};
